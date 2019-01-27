var app = angular.module("app", []);

app.controller("MainCtrl", ['$scope', '$http', '$q','$filter', function ($scope, $http, $q, $filter) {

    $scope.finalResult = layui.data("angularResult")['finalResult'];

    var getPromiseByUrl = function(url, method, json){
        method = (method != undefined)?method:"GET";
        json = (json != undefined)?json:{};
        var defered = $q.defer();

        $http({url:url, method:method,params: json}).then(
            function success (data) {
                defered.resolve(data.data);
            },
            function error(err) {
                defered.reject(err);
            }
        );
        return defered.promise;
    };

    $scope.projectNameChange = function(projectName, target, type, equip, equiptype, unitO, unitE){
        if(projectName==null){
            return null;
        }

        $scope[target] = G.groupBy(projectName, function (item) {
            return [item[type]];
        });
        //console.log($scope.projectNames);
        if(equip != undefined){
            unitPromise = getPromiseByUrl('/other/unitenergy','GET',{'equip':equip, 'type':equiptype});
            unitPromise.then(function success(data) {
                var temp = data.data;
                $scope[unitO] = temp[unitO];
                $scope[unitE] = temp[unitE];
            })
        }
    };


    $scope.projectChange = function(projectPart){
        // console.log(projectPart);
        $scope.projectType = [];
        for(var i =0; i < projectPart.length; i++) {
            $scope.projectType.push({
                'type': projectPart[i].type,
                'projectType': projectPart[i].projectType,
                'amount': projectPart[i].amount
            });
        };

        var myprojectname = projectPart[0].projectName;
        var myprojectPart = projectPart[0].projectPart;

        if($scope.finalResult[myprojectname]!= undefined){
            if($scope.finalResult[myprojectname][myprojectPart]!=undefined){

            } else {
                $scope.finalResult[myprojectname][myprojectPart] = {};
            }

        } else {
            $scope.finalResult[myprojectname] = {};
            $scope.finalResult[myprojectname][myprojectPart] = {};
        }
        $scope.demoResult = $scope.finalResult[myprojectname][myprojectPart];
    };

    //工程量
    var url = '/other/projectamount';
    var projectAmountPromise = getPromiseByUrl(url);
    var test = projectAmountPromise.then(function success(data) {
        //$scope.project = angular.toJson(data, true);   // 用angular的格式化json的方法，更为清晰
        $scope.project = data;
        //console.log($scope.project);

        $scope.projectNames = G.groupBy($scope.project, function (item) {
            return [item.projectName];
        });
        //console.log($scope.projectNames);
    },G.error);

   $scope.abledType = [1,2,3,5,7,8,9,10,11,12,13,15,17,18,20];

   $scope.myproj = -1;
   $scope.test = function(){
       console.log($scope.myproj);
   };

   $scope.getlayerConfig = function(num){
       for (var i = 0; i < $scope.layerConfigs.length; i++) {
           if(num==$scope.layerConfigs[i].num){
               return $scope.layerConfigs[i];
           }
       }
       return null;
   };

   $scope.test = function(text) {
       console.log(text);
   };

   $scope.initS = function(rethis,index, parent){

       if(index>0){
           var temp = new Set();
           var table = parent['selectTable'+(index-1)];
           var nextType = rethis.layer["index"];
           var nextTable = [];
           for (var i = 0; i < table.length; i++) {
               temp.add(nextTable[i][nextType]);
           }
           rethis['s'+index] = Array.from(temp);
       }
   };



    // var getResult = function(nextTable, amount, result, num, name, subname){
    var getResultPromises = function(nextTable, result){
        var promises = [];

        for (var i = 0; i < result.length; i++) {
            var equip = nextTable[result[i][0]];
            var equiptype = nextTable[result[i][1]]!=undefined?nextTable[result[i][1]]:"";  //会有空的情况
            unitPromise = getPromiseByUrl('/other/unitenergy','GET',{'equip':equip, 'type':equiptype});

            promises.push(unitPromise);
        }
        return $q.all(promises);
    };
    
    var updateOE = function(temp){
        temp.EResult = 0;
        temp.OResult = 0;
        for (var sub in temp.subResult) {
            temp.EResult += temp.subResult[sub].EResult;
            temp.OResult += temp.subResult[sub].OResult;
        }
    };

   //创建下一个选项， 更新选择范围
   $scope.filterBySelect = function(rethis, selected, curType, parent, index, project, layerConfig){
       var amount = project.amount;
       var num = project.type;
       var layers = layerConfig.layers[parent.$index];
       var name = layerConfig.name;
       var result = layers.result;
       var subname = layers.name;



       var table = parent['selectTable'+index];
       var nextTable = [];//rethis['selectTable'+(index+1)];
       for (var i = 0; i < table.length; i++) {
           if(table[i][curType]==selected){
               nextTable.push(table[i]);
           }
       }
       parent['selectTable'+(index+1)] = nextTable;

        // index += 1;
       if(index < parent.layers.layers.length-1){
           var nextType = parent.layers.layers[index+1]['index'];
           var temp = new Set();
           var table = nextTable;
           for (var i = 0; i < table.length; i++) {
               temp.add(table[i][nextType]);
           }
           parent['s'+(index+1)] = Array.from(temp);
       } else {
           parent.$parent['finalselect'+parent.$index] = parent['selectTable'+(index+1)][0];
           // console.log(nextTable);
           var promises = getResultPromises(nextTable[0], result);
           promises.then(function success(data) {

               var temp = {};
               if ($scope.demoResult[num]!=undefined){
                   temp = $scope.demoResult[num];
               } else {
                   temp = {
                       name:name,
                       amount:amount,
                       OResult: 0,
                       EResult: 0,
                       subResult: {}
                   };
               }

               var subtemp = {name: subname, amount: amount, OResult: 0, EResult: 0};


               // console.log(data);
               for (var i = 0; i < data.length; i++) {
                   var tempTaishi = nextTable[0][result[i][2]];
                   var mytemp = data[i];

                   if (mytemp.unitO != undefined && mytemp.unitO != null) {
                       subtemp.OResult += amount*100*mytemp.unitO*tempTaishi;
                   }
                   if (mytemp.unitE != undefined && mytemp.unitE != null) {
                       subtemp.EResult += amount*100*mytemp.unitE*tempTaishi;
                   }
               }

               temp.subResult[parent.$index] = subtemp;
               updateOE(temp);

               $scope.demoResult[num] = temp;

               // console.log(amount);
               parent.$parent['OResult' + parent.$index] = subtemp.OResult;
               parent.$parent['EResult' + parent.$index] = subtemp.EResult;


           },G.error);



       }
   };


   $scope.getTableByUrl = function(url, rethis, firstType) {

       var tablePromise = getPromiseByUrl(url);
       tablePromise.then(function success(data) {
           //$scope.project = angular.toJson(data, true);   // 用angular的格式化json的方法，更为清晰
           rethis.tableValues = data;
           var temp = new Set();
           for (var i = 0; i < data.length; i++) {
               temp.add(data[i][firstType]);
           }
           rethis.s0 = Array.from(temp);
           rethis['selectTable0'] = data;
           //console.log($scope.project);

           // $scope.projectNames = G.groupBy($scope.project, function (item) {
           //     return [item.projectName];
           // });
           //console.log($scope.projectNames);
       },G.error);
   };

    //拿到对应的工程能耗（一条）
    $scope.layerConfigs = layerConfigs;

    // $http({method: 'JSONP', url: "http://something.com/lol?callback=JSON_CALLBACK&query="+ $scope.searchString}).
    // success(function(data, status) {
    //     $scope.items = data.entries;
    // }).
    // error(function(data, status) {
    //     console.log(data || "Request failed");
    // });

    // var saveDataToProjectResult = function(projectResult, projectPart, demoResult){
    //
    //     var hasSaved = false;
    //     for (var i = 0; i < projectResult.projectPart.length; i++) {
    //         if(projectResult.projectPart[i].name == projectPart){
    //             projectResult.projectPart[i].projectDemo = demoResult;
    //             hasSaved = true;
    //             break;
    //         }
    //     }
    //
    //     if(hasSaved!=true){
    //         // var projectResult = {name:projectname,projectPart:[]};
    //         var projectPart = {name: projectPart, projectDemo:demoResult};
    //         projectResult.projectPart.push(projectPart);
    //     }
    // };
    //
    // var saveDataToFinalResult = function(finalResult, projectname, projectPart, demoResult){
    //     var hasSaved = false;
    //     for (var i = 0; i < finalResult.length; i++) {
    //         if (finalResult[i].name == projectname){
    //             saveDataToProjectResult(finalResult[i], projectPart, demoResult);
    //             hasSaved = true;
    //             break;
    //         }
    //     }
    //     if(hasSaved!=true){
    //         var projectResult = {name:projectname,projectPart:[]};
    //         var projectPart = {name: projectPart, projectDemo:demoResult};
    //         projectResult.projectPart.push(projectPart);
    //         finalResult.push(projectResult);
    //
    //         // projectPart.projectDemo = demoResult;
    //         // var projectDemo = {name: "", amount:0, subDemo:[]};
    //     }
    // };

    $scope.saveFinalResult = function (projectName, projectPart) {
        //请求成功后，写入 access_token

        // $scope.finalResult = [];
        // var projectResult = {name:"",projectPart:[]};
        // var projectPart = {name: "", projectDemo:[]};
        // var projectDemo = {name: "", amount:0, subDemo:[]};
        //
        //
        // var projectname = projectPart[0].projectName;
        // var projectPart = projectPart[0].projectPart;

        var myprojectname = projectPart[0].projectName;
        var myprojectPart = projectPart[0].projectPart;

        if(JSON.stringify($scope.finalResult[key]) != "{}"){

        }

        $scope.finalResult[myprojectname][myprojectPart] = $scope.demoResult;

        for (var key in $scope.finalResult) {
            for(var key2 in $scope.finalResult[key]){
                if(JSON.stringify($scope.finalResult[key][key2]) == "{}"){
                    delete $scope.finalResult[key][key2];
                }
            }
            if(JSON.stringify($scope.finalResult[key]) == "{}"){
                delete $scope.finalResult[key];
            }
        }

        // saveDataToFinalResult($scope.finalResult, projectname, projectPart, $scope.demoResult);

        // checkNameExit($scope.finalResult, projectName);
        layui.data("angularResult", {
            key: "finalResult"
            ,value: $scope.finalResult
        });
    };

    $scope.removeFinalResult = function() {
        layui.data("angularResult", {
            key: "finalResult"
            ,value: {}
        });

        $scope.finalResult = {};

    }


}]);