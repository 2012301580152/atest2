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

    // 基于准备好的dom，初始化echarts实例

    // var drawChart = function (div, category, nums, text, legend) {
    //     var myChart = echarts.init(document.getElementById(div));
    //
    //     // 指定图表的配置项和数据
    //     var option = {
    //         title: {
    //             text: text
    //         },
    //         tooltip: {},
    //         legend: {
    //             data:[legend]
    //         },
    //         xAxis: {
    //             data: category
    //         },
    //         yAxis: {
    //             type: 'value',
    //             name: legend,
    //             axisTick: {
    //                 inside: true
    //             },
    //             scale: true,
    //             axisLabel: {
    //                 margin: 2,
    //                 formatter: function (value, index) {
    //                     if (value >= 10000 && value < 10000000) {
    //                         value = value / 10000 + "万";
    //                     } else if (value >= 100000000) {
    //                         value = value / 100000000 + "亿";
    //                     }
    //                     return value;
    //                 }
    //             },
    //         },
    //         series: [{
    //             name: legend,
    //             type: 'bar',
    //             data: nums
    //         }],
    //         grid: {
    //             left: 35
    //         },
    //     };
    //
    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    // };



    $scope.drawradiuChart = function (div, category, datas,legend) {
        var domtu = document.getElementById(div);
        var myCharttu = echarts.init(domtu);
        var app = {};
        option = null;
        app.title = '极坐标系下的堆叠柱状图';

        var series = [];
        for (var i = 0; i < legend.length; i++) {
            var s = {type: 'bar', data: datas[i], coordinateSystem: 'polar', name: legend[i], stack: 'a'};
            series.push(s);
        }
        option = {
            angleAxis: {
                type: 'category',
                data: category,
                z: 10
            },
            tooltip: {},
            legend: {
                data:[legend]
            },
            radiusAxis: {
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
            polar: {
            },
            series: series,
            legend: {
                show: true,
                data: legend
            }
        };
        if (option && typeof option === "object") {
            myCharttu.setOption(option, true);
        }
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



