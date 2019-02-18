var app = angular.module("app", []);

app.controller("MainCtrl", ['$scope', '$http', function ($scope, $http) {

    $scope.calcResult = layui.data("angularResult");

    $scope.finalResult = $scope.calcResult['finalResult'];

    var addto = function(a, b) {
        a[a.length-1] += b;
    };

    $scope.chart = {};

    $scope.chart['chart'] = {'category':[], 'Enum':[], 'Onum':[], 'coalnum':[], 'amount':[]};
    for (var key in $scope.finalResult) {

        $scope.chart['chart']['category'].push(key);
        $scope.chart['chart']['Enum'].push(0);
        $scope.chart['chart']['Onum'].push(0);
        $scope.chart['chart']['coalnum'].push(0);
        $scope.chart['chart']['amount'].push(0);

        $scope.chart[key] = {};

        var chart = {'category':[], 'Enum':[], 'Onum':[], 'coalnum':[], 'amount':[]};

        for (var key1 in $scope.finalResult[key]) {


            $scope.chart[key][key1] = {};
            var value = $scope.finalResult[key][key1];

            addto($scope.chart['chart']['Enum'],value['total']['EResult']);
            addto($scope.chart['chart']['Onum'],value['total']['OResult']);
            addto($scope.chart['chart']['coalnum'],value['total']['coal']);
            addto($scope.chart['chart']['amount'],value['total']['amount']);

            chart['category'].push(key1);
            chart['Enum'].push(value['total']['EResult']);
            chart['Onum'].push(value['total']['OResult']);
            chart['coalnum'].push(value['total']['coal']);
            chart['amount'].push(value['total']['amount']);

            var chart1 = {'category':[], 'Enum':[], 'Onum':[], 'coalnum':[], 'amount':[]};
            for (var key2 in value) {
                if (key2!='total') {
                    chart1['category'].push(value[key2]['name']);
                    chart1['Enum'].push(value[key2]['EResult']);
                    chart1['Onum'].push(value[key2]['OResult']);
                    chart1['coalnum'].push(value[key2]['coal']);
                    chart1['amount'].push(value[key2]['amount']);
                }

            }

            $scope.chart[key][key1]['chart'] = chart1;



        }

        $scope.chart[key]['chart'] = chart;
    }

    console.log($scope.chart);




    $scope.drawradiuChart = function (div, category, datas,legend) {


        var dom = document.getElementById(div);
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


        // [
        //     {
        //         name: '挖运',
        //         type: 'bar',
        //         barGap: 0,
        //         label: labelOption,
        //         data: [320, 332, 301, 334, 390]
        //     },
        //     {
        //         name: '装运',
        //         type: 'bar',
        //         label: labelOption,
        //         data: [220, 182, 191, 234, 290]
        //     },
        //     {
        //         name: '运输',
        //         type: 'bar',
        //         label: labelOption,
        //         data: [150, 232, 201, 154, 190]
        //     },
        //     {
        //         name: '钻爆',
        //         type: 'bar',
        //         label: labelOption,
        //         data: [98, 77, 101, 99, 40]
        //     }
        // ]

        var series = [];
        for (var i = 0; i < legend.length; i++) {
            var s = { name: legend[i], type: 'bar', barGap: 0, label: labelOption, data: datas[i]};
            series.push(s);
        }

        option = {
            color: ['#003366', '#006699', '#4cabce', '#e5323e'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: legend
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
                    data: category
                }
            ],
            yAxis: {
                type: 'value',
                axisTick: {
                    inside: true
                },
                scale: true,
                axisLabel: {
                    margin: 2,
                    formatter: function (value, index) {
                        if (value >= 10000 && value < 100000000) {
                            value = value / 10000 + "万";
                        } else if (value >= 100000000) {
                            value = value / 100000000 + "亿";
                        }
                        return value;
                    }
                },
            },
            series:series
        };;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }





        // var domtu = document.getElementById(div);
        // var myCharttu = echarts.init(domtu);
        // var app = {};
        // option = null;
        // app.title = '极坐标系下的堆叠柱状图';
        //
        // var series = [];
        // for (var i = 0; i < legend.length; i++) {
        //     var s = {type: 'bar', data: datas[i], coordinateSystem: 'polar', name: legend[i], stack: 'a'};
        //     series.push(s);
        // }
        // option = {
        //     angleAxis: {
        //         type: 'category',
        //         data: category,
        //         z: 10
        //     },
        //     tooltip: {},
        //     legend: {
        //         data:[legend]
        //     },
        //     radiusAxis: {
        //         type: 'value',
        //         axisTick: {
        //             inside: true
        //         },
        //         scale: true,
        //         axisLabel: {
        //             margin: 2,
        //             formatter: function (value, index) {
        //                 if (value >= 10000 && value < 10000000) {
        //                     value = value / 10000 + "万";
        //                 } else if (value >= 100000000) {
        //                     value = value / 100000000 + "亿";
        //                 }
        //                 return value;
        //             }
        //         },
        //     },
        //     polar: {
        //     },
        //     series: series,
        //     legend: {
        //         show: true,
        //         data: legend
        //     }
        // };
        // if (option && typeof option === "object") {
        //     myCharttu.setOption(option, true);
        // }
    };







    // <div id="EChart"></div>
    //         <div id="OChart"></div>
    //         <div id="coalChart"></div>
    //         <div id="amountChart"></div>

    $scope.TotalChartEnable = false;

    $scope.drawchartTotal = function() {

        $scope.TotalChartEnable = true;
        var datas = [$scope.chart['chart']['Enum'],$scope.chart['chart']['Onum'], $scope.chart['chart']['coalnum'],$scope.chart['chart']['amount']];
        var mylegend = ['耗电','耗油','折合煤','工作量'];

        $scope.drawradiuChart('AllChart', $scope.chart['chart']['category'], datas, mylegend);

        // drawChart('EChart', $scope.chart['chart']['category'], $scope.chart['chart']['Enum'], '耗电', '耗电');
        //
        // drawChart('OChart', $scope.chart['chart']['category'], $scope.chart['chart']['Onum'], '耗油', '耗油');
        // drawChart('coalChart', $scope.chart['chart']['category'], $scope.chart['chart']['coalnum'], '折合煤', '折合煤');
        // drawChart('amountChart', $scope.chart['chart']['category'], $scope.chart['chart']['amount'], '工作量', '工作量');

    };



    //

    $scope.ChartDamEnable = false;
    $scope.drawchartOfDam = function() {

        $scope.ChartDamEnable = true;
        for (var key in $scope.finalResult) {

            // <div class="col-md-3" id="{{'E'+key}}" style="height:400px;"></div>
            //         <div class="col-md-3" id="{{'O'+key}}" style="height:400px;"></div>
            //         <div class="col-md-3" id="{{'coal'+key}}" style="height:400px;"></div>
            //         <div class="col-md-3" id="{{'amount'+key}}" style="height:400px;"></div>
            var mychart = $scope.chart[key]['chart'];

            var datas = [mychart['Enum'],mychart['Onum'], mychart['coalnum'],mychart['amount']];
            var mylegend = ['耗电','耗油','折合煤','工作量'];

            $scope.drawradiuChart('All'+key, mychart['category'], datas, mylegend);

            // drawChart('E'+key, mychart['category'], mychart['Enum'], '耗电', '耗电');
            // drawChart('O'+key, mychart['category'], mychart['Onum'], '耗油', '耗油');
            // drawChart('coal'+key, mychart['category'], mychart['coalnum'], '折合煤', '折合煤');
            // drawChart('amount'+key, mychart['category'], mychart['amount'], '工作量', '工作量');

            // console.log(key);

            // drawChart(key, $scope.chart['chart']['category'], $scope.chart['chart']['amount'], '工作量', '工作量');

            for (var key1 in $scope.finalResult[key]) {

                // <div class="col-md-3" id="{{'E'+key+key1}}" style="height:400px;"></div>
                //         <div class="col-md-3" id="{{'O'+key+key1}}" style="height:400px;"></div>
                //         <div class="col-md-3" id="{{'coal'+key+key1}}" style="height:400px;"></div>
                //         <div class="col-md-3" id="{{'amount'+key+key1}}" style="height:400px;"></div>

                mychart = $scope.chart[key][key1]['chart'];

                var datas = [mychart['Enum'],mychart['Onum'], mychart['coalnum'],mychart['amount']];
                var mylegend = ['耗电','耗油','折合煤','工作量'];

                $scope.drawradiuChart('All'+key+key1, mychart['category'], datas, mylegend);

                // drawChart('E'+key+key1, mychart['category'], mychart['Enum'], '耗电', '耗电');
                // drawChart('O'+key+key1, mychart['category'], mychart['Onum'], '耗油', '耗油');
                // drawChart('coal'+key+key1, mychart['category'], mychart['coalnum'], '折合煤', '折合煤');
                // drawChart('amount'+key+key1, mychart['category'], mychart['amount'], '工作量', '工作量');
                //

            }

            // $scope.chart[key]['chart'] = chart;
        }
    };




    
    $scope.mylegend = [{name:"柴油（kg）",index:"OResult"}, {name:"电",index:"EResult"}];



}]);



