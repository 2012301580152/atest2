var app = angular.module("app", []);

app.controller("MainCtrl", ['$scope', '$http', '$q', function ($scope, $http, $q) {



    var success = function (data, target) {
        var str = angular.toJson(data, true);   // 用angular的格式化json的方法，更为清晰
        //angular.seriesGroupByCategoryAxis

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

    $scope.test = function (item) {
        console.log(item);
    };





    //工程量
    var url = '';
    url = '/other/projectamount';
    $scope.projectClassic = {"list":{"工程":"projectName", "工程部位":"projectPart"}, "value":{"工程量":"amount", "工程类型":"projectType", "编号":"type"}};
    var projectAmountPromise = getPromiseByUrl(url);
    projectAmountPromise.then(function success(data) {
        //$scope.project = angular.toJson(data, true);   // 用angular的格式化json的方法，更为清晰


        //$scope.project = G.groupBy2(data, $scope.projectClassic);
        $scope.projects = {
            "高关水库":{
                "大坝":
                    [
                        {"amount":1000, "projectType":"土方开挖", "type":"1"}
                    ]
            },
            "乐康水库":{
                "大坝":
                    [
                        {"amount":1000, "projectType":"土方开挖", "type":"1"},
                        {"amount":2000, "projectType":"石方开挖", "type":"2"},
                        {"amount":3000, "projectType":"洞挖", "type":"3"},
                    ]
            }

        }

        //console.log($scope.project);

        // $scope.projectNames = G.groupBy2($scope.project, ["projectName"]);
        //
        // $scope.projectNames = G.groupBy($scope.project, function (item) {
        //     return [item.projectName];
        // });
        //console.log($scope.projectNames);
    },error);

    //明挖 1
    // mingwa_dinge_tufang	equip1	equip1taishi	equip1type	equip2	equip2taishi	equip2type	equip3	equip3taishi	equip3type	id	in1yun	tu_type	yunju
    url = '/mingwa/dingetufangall';
    $scope.divType = {};
    $scope.getNext = function(data, target, No){
        $scope.divType[No] = {}
        $scope.divType[No][target] = data;
    };

    var dingetufangPromise = getPromiseByUrl(url);
    dingetufangPromise.then(function success(value) {
        $scope.projectDetails = {}
        $scope.projectDetails[1] = {};
        //$scope.projectDetails[1].classicSord = ["tuType",'equip1','equip1type','equip2','equip2type','equip3','equip3type'];
        $scope.projectDetails[1].classic = {
            "list":[["tuType","土分类"],['equip1',"设备1"],['equip1type',"类型"],['equip2',"设备2"],['equip2type',"类型"],['equip3',"设备3"],['equip3type',"类型"]],
            "value":["equip1taishi","equip2taishi","equip3taishi","yunju","in1yun"]
        };
        $scope.projectDetails[1].data = {
            "1-2":{
                "tuitu":{
                    "5m3":{
                        "wajue":{
                            "6m3":{
                                "zixie":{
                                    "7m3":{"equip1taishi":23,"equip2taishi":45,"equip3taishi":24,"yunju":76,"in1yun":12}
                                }
                            }
                        }
                    }
                }
            }
        }
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
        $scope.no3racktypes = G.groupBy(value, function (item) {
            return [item.rackType];
        });
        console.log($scope.no3racktypes);
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
        $scope.no102rocktypes = G.groupBy(value, function (item) {
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
        $scope.no5spequip1s = G.groupBy(value, function (item) {
            return [item.equip1];
        });
        //console.log($scope.no1tutypes);
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







    // var domtu = document.getElementById("echartcontainertu");
    // var domshi = document.getElementById("echartcontainershi");
    // var domdong = document.getElementById("echartcontainerdong");
    // var myCharttu = echarts.init(domtu);
    // var myChartshi = echarts.init(domshi);
    // var myChartdong = echarts.init(domdong);
    // var app = {};
    // option = null;
    // app.title = '极坐标系下的堆叠柱状图';
    //
    // option = {
    //     angleAxis: {
    //         type: 'category',
    //         data: ['土方', '石方', '洞挖', '填筑', '浇灌'],
    //         z: 10
    //     },
    //     radiusAxis: {
    //     },
    //     polar: {
    //     },
    //     series: [{
    //         type: 'bar',
    //         data: [1, 2, 3, 4, 3],
    //         coordinateSystem: 'polar',
    //         name: '挖运',
    //         stack: 'a'
    //     }, {
    //         type: 'bar',
    //         data: [2, 4, 6, 1, 3],
    //         coordinateSystem: 'polar',
    //         name: '装运',
    //         stack: 'a'
    //     }, {
    //         type: 'bar',
    //         data: [1, 2, 3, 4, 1],
    //         coordinateSystem: 'polar',
    //         name: '运输',
    //         stack: 'a'
    //     }],
    //     legend: {
    //         show: true,
    //         data: ['挖运', '装运', '运输']
    //     }
    // };
    // ;
    // if (option && typeof option === "object") {
    //     myCharttu.setOption(option, true);
    //     myChartshi.setOption(option, true);
    //     myChartdong.setOption(option, true);
    // }
    //
    //
    //
    // var dom = document.getElementById("containerbar");
    // var myChart = echarts.init(dom);
    // var app = {};
    // option = null;
    // var posList = [
    //     'left', 'right', 'top', 'bottom',
    //     'inside',
    //     'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    //     'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    // ];
    //
    // app.configParameters = {
    //     rotate: {
    //         min: -90,
    //         max: 90
    //     },
    //     align: {
    //         options: {
    //             left: 'left',
    //             center: 'center',
    //             right: 'right'
    //         }
    //     },
    //     verticalAlign: {
    //         options: {
    //             top: 'top',
    //             middle: 'middle',
    //             bottom: 'bottom'
    //         }
    //     },
    //     position: {
    //         options: echarts.util.reduce(posList, function (map, pos) {
    //             map[pos] = pos;
    //             return map;
    //         }, {})
    //     },
    //     distance: {
    //         min: 0,
    //         max: 100
    //     }
    // };
    //
    // app.config = {
    //     rotate: 90,
    //     align: 'left',
    //     verticalAlign: 'middle',
    //     position: 'insideBottom',
    //     distance: 15,
    //     onChange: function () {
    //         var labelOption = {
    //             normal: {
    //                 rotate: app.config.rotate,
    //                 align: app.config.align,
    //                 verticalAlign: app.config.verticalAlign,
    //                 position: app.config.position,
    //                 distance: app.config.distance
    //             }
    //         };
    //         myChart.setOption({
    //             series: [{
    //                 label: labelOption
    //             }, {
    //                 label: labelOption
    //             }, {
    //                 label: labelOption
    //             }, {
    //                 label: labelOption
    //             }]
    //         });
    //     }
    // };
    //
    //
    // var labelOption = {
    //     normal: {
    //         show: true,
    //         position: app.config.position,
    //         distance: app.config.distance,
    //         align: app.config.align,
    //         verticalAlign: app.config.verticalAlign,
    //         rotate: app.config.rotate,
    //         formatter: '{c}  {name|{a}}',
    //         fontSize: 16,
    //         rich: {
    //             name: {
    //                 textBorderColor: '#fff'
    //             }
    //         }
    //     }
    // };
    //
    // option = {
    //     color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'shadow'
    //         }
    //     },
    //     legend: {
    //         data: ['挖运', '装运', '运输', '钻爆']
    //     },
    //     toolbox: {
    //         show: true,
    //         orient: 'vertical',
    //         left: 'right',
    //         top: 'center',
    //         feature: {
    //             mark: {show: true},
    //             dataView: {show: true, readOnly: false},
    //             magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //             restore: {show: true},
    //             saveAsImage: {show: true}
    //         }
    //     },
    //     calculable: true,
    //     xAxis: [
    //         {
    //             type: 'category',
    //             axisTick: {show: false},
    //             data: ['2012', '2013', '2014', '2015', '2016']
    //         }
    //     ],
    //     yAxis: [
    //         {
    //             type: 'value'
    //         }
    //     ],
    //     series: [
    //         {
    //             name: '挖运',
    //             type: 'bar',
    //             barGap: 0,
    //             label: labelOption,
    //             data: [320, 332, 301, 334, 390]
    //         },
    //         {
    //             name: '装运',
    //             type: 'bar',
    //             label: labelOption,
    //             data: [220, 182, 191, 234, 290]
    //         },
    //         {
    //             name: '运输',
    //             type: 'bar',
    //             label: labelOption,
    //             data: [150, 232, 201, 154, 190]
    //         },
    //         {
    //             name: '钻爆',
    //             type: 'bar',
    //             label: labelOption,
    //             data: [98, 77, 101, 99, 40]
    //         }
    //     ]
    // };;
    // if (option && typeof option === "object") {
    //     myChart.setOption(option, true);
    // }

}]);