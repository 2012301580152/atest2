var app = angular.module("app", []);

app.controller("MainCtrl", ['$scope', '$http', '$q', function ($scope, $http, $q) {

    Array.prototype.in_array = function(e) {
        for(i=0;i<this.length;i++) {
            if(this[i] == e)
                return true;
        }
        return false;
    };

    var success = function (data, target) {
        var str = angular.toJson(data, true);   // 用angular的格式化json的方法，更为清晰
        target = str;
        console.log(target);
    };
    var error =  function error(response){
        console.log("请求失败");
    };

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

    $scope.equipChange = function(projectName, target, type, equip, equiptype, No, num, z){

        z = z==undefined?"":z;
        console.log(projectName);
        if(projectName==null){
            return null;
        }
        //unitO, unitE, ZunitO, ZunitE,
        //'no1equip3UnitO', 'no1equip3UnitE', 'no1UnitO', 'no1UnitE'
        var unitO = "no"+No+z+'equip'+type+'UnitO';
        var unitE = "no"+No+z+'equip'+type+'UnitE';
        var ZunitO = "no"+No+z+'UnitO';
        var ZunitE = "no"+No+z+'UnitE';


        if(target==undefined) {
            $scope["no"+No+z] = projectName[0];
            target = 'TEMP';
        }

        $scope[target] = G.groupBy(projectName, function (item) {
            return [item["equip"+(type+1)]];
        });

        $scope['no'+No+z+'equip'+type+'Taishi'] = $scope[target][0][0]['equip'+type+'Taishi'];
        // if(targetArr!=undefined){
        //     for (var i =0; i < targetArr.length; i++){
        //         $scope['no'+No+targetArr[i]] = $scope[target][0][0][targetArr[i]];
        //     }
        // }

        // console.log('equip'+type+'Taishi');
        // console.log($scope[target][0][0]);
        // console.log($scope[target][0]);
        //console.log($scope['no'+No+'equip'+type+'Taishi']);

        //console.log($scope.projectNames);
        if(equip != undefined){
            equiptype = equiptype==undefined?"":equiptype;
            unitPromise = getPromiseByUrl('/other/unitenergy','GET',{'equip':equip, 'type':equiptype});
            unitPromise.then(function success(data) {
                var temp = data;
                $scope[unitO] = 0;
                $scope[unitE] = 0;
                if(temp.unitO!=undefined && temp.unitO!=null){
                    $scope[unitO] = temp.unitO;
                }
                if(temp.unitE!=undefined && temp.unitE!=null){
                    $scope[unitE] = temp.unitE;
                }




                if(target=='TEMP'){
                    target = 'TEMP';
                    $scope[ZunitO] = 0;
                    $scope[ZunitE] = 0;
                    var projectA = $scope.projectType[1].amount;
                    for(var i = 1; i <= num; i++){
                        var unitEStr = "no"+No+z+'equip'+i+'UnitE';
                        var unitOStr = "no"+No+z+'equip'+i+'UnitO';
                        var taishi = 'no'+No+z+'equip'+i+'Taishi';
                        if($scope[unitEStr]!=undefined){
                            $scope[ZunitE] += projectA*100*$scope[unitEStr]*$scope[taishi];
                        }

                        if($scope[unitOStr]!=undefined){
                            $scope[ZunitO] += projectA/100.00*$scope[unitOStr]*$scope[taishi];
                        }

                        //no1equip3UnitO
                    }
                }


            })
        }
    };



    $scope.projectChange = function(projectPart){
        console.log(projectPart);
        $scope.projectType = {};
        for(var i =0; i < projectPart.length; i++){
            $scope.projectType[projectPart[i].type] = {
                'projectType':projectPart[i].projectType,
                'amount':projectPart[i].amount};
        }
    };

    //工程量
    var url = '';
    url = '/other/projectamount';
    var projectAmountPromise = getPromiseByUrl(url);
    var test = projectAmountPromise.then(function success(data) {
        //$scope.project = angular.toJson(data, true);   // 用angular的格式化json的方法，更为清晰
        $scope.project = data;
        //console.log($scope.project);

        $scope.projectNames = G.groupBy($scope.project, function (item) {
            return [item.projectName];
        });
        //console.log($scope.projectNames);
    },error);

    //明挖 1
    // mingwa_dinge_tufang	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	id	in1yun	tu_type	yunju
    url = '/mingwa/dingetufangall';
    var dingetufangPromise = getPromiseByUrl(url);
    dingetufangPromise.then(function success(value) {
        $scope.no1tutypes = G.groupBy(value, function (item) {
            return [item.tu_type];
        });
        //console.log($scope.no1tutypes);
    },error);

    // unit_energy	equip	id	type	unite	unito






    // mingwa_dinge_shifang	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	id	kong_shen	rock_type	shizha_rate
    // 石方 2 rockType, kongShen equip1 shizha_rate

    url = '/mingwa/dingeshifangall';
    var dingeshifangPromise = getPromiseByUrl(url);//
    dingeshifangPromise.then(function success(value) {
        $scope.no2rocktypes = G.groupBy(value, function (item) {
            return [item.rockType];
        });
        //console.log($scope.no2rocktypes);
    },error);


    // mingwa_dinge_zhuangyun	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	id	in1yun	yunju
    // // 石方 2  equip1
    url = '/mingwa/dingezhuangyun';
    var dingezhuangyunPromise = getPromiseByUrl(url);
    dingezhuangyunPromise.then(function success(value) {
        $scope.no2zequip1s = G.groupBy(value, function (item) {
            return [item.equip1];
        });
        //console.log($scope.no1tutypes);
    },error);

    // var shifangq=$q.all([
    //     dingeshifangPromise,
    //     dingezhuangyunPromise
    // ]);
    // shifangq.then(function(result){
    //     console.log(result[0]); // dingeshifangPromise
    //     console.log(result[1]); // dingezhuangyunPromise
    // })
    // .catch(function(error){
    //     console.error(error);
    // });



    // dongwa_dinge	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	id	rack_type	shizha_rate	wa_area
    //洞挖 3 rack_type, wa_area
    url = '/dongwa/dingeall';
    var dingeDongwaPromise = getPromiseByUrl(url);
    dingeDongwaPromise.then(function success(value) {
        $scope.no3rocktypes = G.groupBy(value, function (item) {
            return [item.rackType];
        });
        console.log($scope.no3rocktypes);
    },error);

    // dongwa_zhuangyun	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	id	in1km_yunju	yunju
    //洞挖 3 equip1
    url = '/dongwa/zhuangyunall';
    var zhuangyunDongwaPromise = getPromiseByUrl(url);
    zhuangyunDongwaPromise.then(function success(value) {
        $scope.no3zequip1s = G.groupBy(value, function (item) {
            return [item.equip1];
        });
        //console.log($scope.no1tutypes);
    },error);


    // guanjiang_dinge_gujie	equip1	equip1taishi	equip2	equip2taishi	equip3	equip3taishi	id	toushuilv	type
    //固结灌浆 11 toushuilv
    url = '/guanjiang/dingegujieall';
    var dingegujiePromise = getPromiseByUrl(url);
    dingegujiePromise.then(function success(value) {
        $scope.no11toushuilvs = G.groupBy(value, function (item) {
            return [item.toushuilv];
        });
        //console.log($scope.no1tutypes);
    },error);
    // zhuankong_dinge_gujie	equip1	equip1taishi	fangfa	id	rock_type
    url = '/guanjiang/zdingegujieall';
    //固结灌浆 11 rock_type
    var zdingegujiePromise = getPromiseByUrl(url);
    zdingegujiePromise.then(function success(value) {
        $scope.no11zrocktypes = G.groupBy(value, function (item) {
            return [item.rockType];
        });
        //console.log($scope.no1tutypes);
    },error);

    // guanjiang_dinge_weimu	equip1	equip1taishi	equip2	equip2taishi	equip3	equip3taishi	equip4	equip4taishi	guanjiang_method	id	toushuilv
    // 帷幕灌浆 10 toushuilv
    url = '/guanjiang/dingeweimuall';
    var dingeweimuPromise = getPromiseByUrl(url);
    dingeweimuPromise.then(function success(value) {
        $scope.no10toushuilvs = G.groupBy(value, function (item) {
            return [item.toushuilv];
        });
        //console.log($scope.no1tutypes);
    },error);

    // zhuankong_dinge_weimu	equip1	equip1taishi	fangfa	id	rock_type
    // 帷幕灌浆 10 rock_type
    url = '/guanjiang/zdingeweimuall';
    var zdingeweimuPromise = getPromiseByUrl(url);
    zdingeweimuPromise.then(function success(value) {
        $scope.no10rocktypes = G.groupBy(value, function (item) {
            return [item.rockType];
        });
        //console.log($scope.no1tutypes);
    },error);

    // guanjiang_dinge_huitian	equip1	equip1taishi	equip2	equip2taishi	equip3	equip3taishi	equip4	equip4taishi	equip5	equip5taishi	id	type
    // 回填灌浆 9 type
    url = '/guanjiang/dingehuitianall';
    var dingehuitianPromise = getPromiseByUrl(url);
    dingehuitianPromise.then(function success(value) {
        $scope.no9types = G.groupBy(value, function (item) {
            return [item.type];
        });
        //console.log($scope.no1tutypes);
    },error);

    // hunnintu_dinge_changtai	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	equip4	equip4taishi	equip4type	fangfa	houdu	id
    // 混泥土施工 5 houdu, fangfa
    url = '/hunnintu/dingechangtaiall';
    var dingechangtaiPromise = getPromiseByUrl(url);
    dingechangtaiPromise.then(function success(value) {
        $scope.no5houdus = G.groupBy(value, function (item) {
            return [item.houdu];
        });
        //console.log($scope.no1tutypes);
    },error);

    // hunnintu_yunshu_chuizhi	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	high	high44	id
    // 混泥土施工 5 high
    url = '/hunnintu/yunshuchuizhiall';
    var yunshuchuizhiPromise = getPromiseByUrl(url);
    yunshuchuizhiPromise.then(function success(value) {
        $scope.no5czhighs = G.groupBy(value, function (item) {
            return [item.high];
        });
        //console.log($scope.no1tutypes);
    },error);

    // hunnintu_yunshu_shuipin	equip1	equip1taishi	equip1type	id	in05yunju	neiwai	yunju
    // 混泥土施工 5 equip1
    url = '/hunnintu/yunshushuipinall';
    var yunshushuipinPromise = getPromiseByUrl(url);
    yunshushuipinPromise.then(function success(value) {
        $scope.no5spyunjus = G.groupBy(value, function (item) {
            return [item.yunju];
        });
        console.log($scope.no5spyunjus);
        //$scope.test = $scope.no5spyunjus;
    },error);


    // hunnintu_dingercc	area	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	equip4	equip4taishi	equip4type	equip5	equip5taishi	equip5type	equip6	equip6taishi	equip6type	equip7	equip7taishi	equip7type	equip8	equip8taishi	equip8type	equip9	equip9taishi	equip9type	id
    // 混泥土施工 6 area
    url = '/hunnintu/dingerccall';
    var dingerccPromise = getPromiseByUrl(url);
    dingerccPromise.then(function success(value) {
        $scope.no6areas = G.groupBy(value, function (item) {
            return [item.area];
        });
        //console.log($scope.no1tutypes);
    },error);


    // chenqi_dinge_mingqu	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	houdu	id
    // 明渠衬砌m3 8 houdu
    url = '/cheqi/mingquall';
    var mingquPromise = getPromiseByUrl(url);
    mingquPromise.then(function success(value) {
        $scope.no8houdus = G.groupBy(value, function (item) {
            return [item.houdu];
        });
        //console.log($scope.no1tutypes);
    },error);



    // chenqi_dinge_suidong	duanmian	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	houdu	id
    // 隧洞衬砌m3 7 houdu
    url = '/cheqi/suidongall';
    var suidongPromise = getPromiseByUrl(url);
    suidongPromise.then(function success(value) {
        $scope.no7houdus = G.groupBy(value, function (item) {
            return [item.houdu];
        });
        //console.log($scope.no1tutypes);
    },error);

    //


    // $http.get(url).then(function success(response){
    //     $scope.projectamount = response.data;
    //
    //     console.log($scope.projectamount);
    // },error);
    //
    //
    //
    //
    //
    // url = '/other/projectamount';
    // $http.get(url).then(function success(response){
    //     $scope.projectamount = response.data;
    //
    //     console.log($scope.projectamount);
    // },error);









}]);