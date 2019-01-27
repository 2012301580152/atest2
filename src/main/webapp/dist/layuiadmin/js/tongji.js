var app = angular.module("app", []);

app.controller("MainCtrl", ['$scope', '$http', function ($scope, $http) {

    $scope.calcResult = layui.data("angularResult")['finalResult']["result"];

    var domtu = document.getElementById("echartcontainertu");

    var myCharttu = echarts.init(domtu);
    var app = {};
    option = null;
    app.title = '极坐标系下的堆叠柱状图';

    var projectType = [];
    for (var i in $scope.calcResult) {
        projectType.push($scope.calcResult[i]['name']);
    }

    var legendData = [{name:"油耗", index:"OResult"},{name:"电耗", index:"EResult"}];
    var seriesData = [];
    var barseriesData = [];
    for (var i = 0; i < legendData.length; i++) {
        var tempdata = {
            type: 'bar',
            data: null,
            coordinateSystem: 'polar',
            name: legendData[i].name,
            stack: 'a'
        };
        var bartempdata = {
            name: legendData[i].name,
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: null
        };
        var subdata = [];
        for (var j in $scope.calcResult) {
            subdata.push($scope.calcResult[j][legendData[i].index]);
        }
        tempdata.data = subdata;
        bartempdata.data = subdata;
        seriesData.push(tempdata);
        barseriesData.push(bartempdata);
    }


    option = {
        angleAxis: {
            type: 'category',
            data: projectType,
            // z: 10
        },
        radiusAxis: {
        },
        polar: {
        },
        series: seriesData,
        legend: {
            show: true,
            data: ['油耗', '电耗']
        }
    };

    if (option && typeof option === "object") {
        myCharttu.setOption(option, true);
    }



    var dom = document.getElementById("containerbar");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];

    app.configParameters = {
        rotate: {
            min: -90,
            max: 90
        },
        align: {
            options: {
                left: 'left',
                center: 'center',
                right: 'right'
            }
        },
        verticalAlign: {
            options: {
                top: 'top',
                middle: 'middle',
                bottom: 'bottom'
            }
        },
        position: {
            options: echarts.util.reduce(posList, function (map, pos) {
                map[pos] = pos;
                return map;
            }, {})
        },
        distance: {
            min: 0,
            max: 100
        }
    };

    app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
            var labelOption = {
                normal: {
                    rotate: app.config.rotate,
                    align: app.config.align,
                    verticalAlign: app.config.verticalAlign,
                    position: app.config.position,
                    distance: app.config.distance
                }
            };
            myChart.setOption({
                series: [{
                    label: labelOption
                }, {
                    label: labelOption
                }, {
                    label: labelOption
                }, {
                    label: labelOption
                }]
            });
        }
    };


    var labelOption = {
        normal: {
            show: true,
            position: app.config.position,
            distance: app.config.distance,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            rotate: app.config.rotate,
            formatter: '{c}  {name|{a}}',
            fontSize: 16,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
        }
    };

    option = {
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['油耗', '电耗']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: projectType
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: barseriesData
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}]);