layerConfigs =
    [{
        num:1,
        name: "土方开挖",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/mingwa/dingetufangall",
            name: "土方开挖",
            layers:[
                {
                    name:"土分类",
                    index: "tuType"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"型号",
                    index: "equip2Type"
                },
                {
                    name:"自卸汽车",
                    index: "equip3"
                },
                {
                    name:"型号",
                    index: "equip3Type"
                },
                {
                    name:"运距",
                    index: "yunju"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["增加1km运距","in1Yun"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
                ["equip3","equip3Type","equip3Taishi"],
            ]
        }]
    },{
        num:2,
        name: "石方明挖",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/mingwa/dingeshifangall",
            name: "石方明挖",
            layers:[
                {
                    name:"岩石类型",
                    index: "rockType"
                },{
                    name:"孔深",
                    index: "kongShen"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["石渣率","shizhaRate"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
            ]
        },{
            url:"/mingwa/dingezhuangyun",
            name: "石方明挖装运",
            layers:[
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                },
                {
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备3型号",
                    index: "equip3Type"
                },
                {
                    name:"运距",
                    index: "yunju"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["增加1km运距","in1Yun"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
                ["equip3","equip3Type","equip3Taishi"],
            ]
        }]
    },{
        num:3,
        name: "石方洞挖",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/dongwa/dingeall",
            name: "石方洞挖",
            layers:[
                {
                    name:"岩石类型",
                    index: "rackType"
                },{
                    name:"开挖断面",
                    index: "waArea"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                },
                {
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备3型号",
                    index: "equip3Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["石渣率","shizhaRate"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
                ["equip3","equip3Type","equip3Taishi"],
            ]
        },{
            url:"/dongwa/zhuangyunall",
            name: "石方洞挖装运",
            layers:[
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                },
                {
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备3型号",
                    index: "equip3Type"
                },
                {
                    name:"运距",
                    index: "yunju"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["增加1km运距","in1kmYunju"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
                ["equip3","equip3Type","equip3Taishi"],
            ]
        }]
    },{
        num:11,
        name: "固结灌浆",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/guanjiang/dingegujieall",
            name: "固结灌浆",
            layers:[
                {
                    name:"透水率",
                    index: "toushuilv"
                }, {
                    name:"类型",
                    index: "type"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },{
                    name:"设备3",
                    index: "equip3"
                }

            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
            ],
            result:[
                ["equip1",null,"equip1Taishi"],
                ["equip2",null,"equip2Taishi"],
                ["equip3",null,"equip3Taishi"],
            ]

        },{
            url:"/guanjiang/zdingegujieall",
            name: "固结灌浆钻孔",
            layers:[
                {
                    name:"岩石类型",
                    index: "rockType"
                },{
                    name:"施工方法",
                    index: "fangfa"
                },
                {
                    name:"设备1",
                    index: "equip1"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
            ],
            result:[
                ["equip1",null,"equip1Taishi"],
            ]
        }]
    },{
        num:10,
        name: "帷幕灌浆",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/guanjiang/dingeweimuall",
            name: "帷幕灌浆",
            layers:[
                {
                    name:"透水率",
                    index: "toushuilv"
                },{
                    name:"灌浆方法",
                    index: "guanjiangMethod"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },{
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备4",
                    index: "equip4"
                }

            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["设备4台时耗油(kg)","equip4Taishi"],
            ],
            result:[
                ["equip1",null,"equip1Taishi"],
                ["equip2",null,"equip2Taishi"],
                ["equip3",null,"equip3Taishi"],
                ["equip4",null,"equip4Taishi"],
            ]
        },{
            url:"/guanjiang/zdingeweimuall",
            name: "帷幕灌浆钻孔",
            layers:[
                {
                    name:"岩石类型",
                    index: "rockType"
                },{
                    name:"施工方法",
                    index: "fangfa"
                },
                {
                    name:"设备",
                    index: "equip1"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],

            ],
            result:[
                ["equip1",null,"equip1Taishi"],
            ]
        }]
    },{
        num:9,
        name: "回填灌浆",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/guanjiang/dingehuitianall",
            name: "回填灌浆",
            layers:[
                {
                    name:"类型",
                    index: "type"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },{
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备4",
                    index: "equip4"
                },{
                    name:"设备5",
                    index: "equip5"
                }

            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["设备4台时耗油(kg)","equip4Taishi"],
                ["设备5台时耗油(kg)","equip5Taishi"],
            ],
            result:[
                ["equip1",null,"equip1Taishi"],
                ["equip2",null,"equip2Taishi"],
                ["equip3",null,"equip3Taishi"],
                ["equip4",null,"equip4Taishi"],
                ["equip5",null,"equip5Taishi"],
            ]
        }]
    },{
        num:5,
        name: "混凝土施工",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/hunnintu/dingechangtaiall",
            name: "混凝土施工",
            layers:[
                {
                    name:"厚度",
                    index: "houdu"
                }, {
                    name:"方法",
                    index: "fangfa"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                },
                {
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备3型号",
                    index: "equip3Type"
                },
                {
                    name:"设备4",
                    index: "equip4"
                },
                // {
                //     name:"设备4型号",
                //     index: "equip4Type"
                // }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["设备4台时耗油(kg)","equip4Taishi"],
            ],
            result:[
                ["equip1",null,"equip1Taishi"],
                ["equip2",null,"equip2Taishi"],
                ["equip3",null,"equip3Taishi"],
                ["equip4",null,"equip4Taishi"],
            ]
        },{
            url:"/hunnintu/yunshuchuizhiall",
            name: "混凝土施工水平运输",
            layers:[
                {
                    name:"高度",
                    index: "high"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
            ]
        },{
            url:"/hunnintu/yunshushuipinall",
            name: "混凝土施工水平运输",
            layers:[
                {
                    name:"运距",
                    index: "yunju"
                }, {
                    name:"洞内/外",
                    index: "neiwai"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["增加0.5km运距","in05yunju"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
            ]
        }]
    },
    //     {
    //     num:6,
    //     layers:[{
    //         url:"/hunnintu/dingerccall",
    //
    //         layers:[
    //             {
    //                 name:"岩石类型",
    //                 index: "rockType"
    //             },
    //             {
    //                 name:"设备1",
    //                 index: "equip1"
    //             },
    //             {
    //                 name:"设备1型号",
    //                 index: "equip1Type"
    //             },
    //             {
    //                 name:"设备2",
    //                 index: "equip2"
    //             },
    //             {
    //                 name:"设备2型号",
    //                 index: "equip2Type"
    //             }
    //         ]
    //     }]
    // },
        {
        num:8,
        name: "明渠衬砌",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/cheqi/mingquall",
            name: "明渠衬砌",
            layers:[
                {
                    name:"厚度",
                    index: "houdu"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
            ]
        }]
    },{
        num:7,
        name: "隧洞衬砌",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/cheqi/suidongall",
            name: "隧洞衬砌",
            layers:[
                {
                    name:"厚度",
                    index: "houdu"
                },{
                    name:"断面",
                    index: "duanmian"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                },{
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备3型号",
                    index: "equip3Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
                ["equip3","equip3Type","equip3Taishi"],
            ]

        }]
    },{
        // 		equip1	equip1type	equip1taishi	equip2	equip2taishi
        num:15,
        name: "厂房混凝土",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/cheqi/hunningtuall",
            name: "厂房混凝土",
            layers:[
                {
                    name:"施工部位",
                    index: "shigongbuwei"
                },{
                    name:"部位",
                    index: "buwei"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
            ]
        },{
            //	kuandu	houdu	equip1	equip1type	equip1taishi	equip2	equip2type	equip2taishi	equip3	equip3taishi
            url:"/cheqi/hunningtuCheqiall",
            name: "地下厂房衬砌",
            layers:[
                {
                    name:"宽度",
                    index: "kuandu"
                }, {
                    name:"厚度",
                    index: "houdu"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                },{
                    name:"设备3",
                    index: "equip3"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
                ["equip3",null,"equip3Taishi"],
            ]
        }]
    },{
        num:12,
        name: "喷射灌浆防渗墙",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/guanjiang/pensheall",
            name: "喷射灌浆防渗墙",
            layers:[
                {
                    name:"土地类型",
                    index: "earthType"
                },{
                    name:"灌浆方法",
                    index: "guanjiangMethod"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                },
                {
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备3型号",
                    index: "equip3Type"
                },
                {
                    name:"设备4",
                    index: "equip4"
                },
                {
                    name:"设备4型号",
                    index: "equip4Type"
                },
                {
                    name:"设备5",
                    index: "equip5"
                },
                {
                    name:"设备5型号",
                    index: "equip5Type"
                },
                {
                    name:"设备6",
                    index: "equip6"
                },
                {
                    name:"设备7",
                    index: "equip7"
                },
                {
                    name:"设备8",
                    index: "equip8"
                },
                {
                    name:"设备8型号",
                    index: "equip8Type"
                },
                {
                    name:"设备9",
                    index: "equip9"
                },
                {
                    name:"设备9型号",
                    index: "equip9Type"
                },
                {
                    name:"设备10",
                    index: "equip10"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["设备4台时耗油(kg)","equip4Taishi"],
                ["设备5台时耗油(kg)","equip5Taishi"],
                ["设备6台时耗油(kg)","equip6Taishi"],
                ["设备7台时耗油(kg)","equip7Taishi"],
                ["设备8台时耗油(kg)","equip8Taishi"],
                ["设备9台时耗油(kg)","equip9Taishi"],
                ["设备10台时耗油(kg)","equip10Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
                ["equip3","equip3Type","equip3Taishi"],
                ["equip4","equip4Type","equip4Taishi"],
                ["equip5","equip5Type","equip5Taishi"],
                ["equip6",null,"equip6Taishi"],
                ["equip7",null,"equip7Taishi"],
                ["equip8","equip8Type","equip8Taishi"],
                ["equip9","equip9Type","equip9Taishi"],
                ["equip10",null,"equip10Taishi"],
            ]
        }]
    },{
        num:13,
        name: "塑性混凝土防渗墙",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/hunnintu/fangshenqiangall",
            name: "塑性混凝土防渗墙",
            layers:[
                {
                    name:"土地类型",
                    index: "earthType"
                },{
                    name:"厚度",
                    index: "houdu"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                // {
                //     name:"设备2型号",
                //     index: "equip2Type"
                // },
                {
                    name:"设备3",
                    index: "equip3"
                },
                {
                    name:"设备3型号",
                    index: "equip3Type"
                },
                {
                    name:"设备4",
                    index: "equip4"
                },
                {
                    name:"设备4型号",
                    index: "equip4Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["设备4台时耗油(kg)","equip4Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2",null,"equip2Taishi"],
                ["equip3","equip3Type","equip3Taishi"],
                ["equip4","equip4Type","equip4Taishi"],
            ]
        }]
    },{
        num:20,
        name: "混凝土生产",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/hunnintu/Shengchanall",
            name: "混凝土生产",
            layers:[
                {
                    name:"设备名称",
                    index: "equipName"
                },
                {
                    name:"设备类型",
                    index: "equipType"
                },
                {
                    name:"面积",
                    index: "area"
                }
            ],
            table:[

                ["台时耗油(kg)","taishi"],

            ],
            result:[
                ["equipName","equipType","taishi"],
            ]
        }]
    },{
        num:18,
        name: "砂石加工",
        projectAmount: "工程量(m³)",
        layers:[{
            url:"/shashi/jiagongall",
            name: "砂石加工",
            layers:[
                {
                    name:"处理能力",
                    index: "chuliNengli"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备2",
                    index: "equip2"
                }
            ],
            table:[

                ["设备1能耗","equip1Energy"],
                ["设备2能耗","equip2Energy"],
            ],
            result:[
                ["equip1",null,"equip1Energy"],
                ["equip2",null,"equip2Energy"],

            ]
        },{
            url:"/shashi/jiaodaiall",
            name: "砂石胶带运输",
            layers:[
                {
                    name:"骨料类型",
                    index: "guliaoType"
                },
                {
                    name:"胶带宽度",
                    index: "jiaodaiWidth"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },

                {
                    name:"设备2",
                    index: "equip2"
                },{
                    name:"设备3",
                    index: "equip3"
                },

                {
                    name:"设备4",
                    index: "equip4"
                },

            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
                ["设备3台时耗油(kg)","equip3Taishi"],
                ["设备4台时耗油(kg)","equip4Taishi"],
            ],
            result:[
                ["equip1",null,"equip1Taishi"],
                ["equip2",null,"equip2Taishi"],
                ["equip3",null,"equip3Taishi"],
                ["equip4",null,"equip4Taishi"],
            ]
        }]
    },{
        num:17,
        name: "有用料开采",
        layers:[{
            url:"/shashi/kaicaiall",
            name: "碎石原料开采",
            layers:[
                {
                    name:"岩石类型",
                    index: "rockType"
                },
                {
                    name:"设备1",
                    index: "equip1"
                },
                {
                    name:"设备1型号",
                    index: "equip1Type"
                },
                {
                    name:"设备2",
                    index: "equip2"
                },
                {
                    name:"设备2型号",
                    index: "equip2Type"
                }
            ],
            table:[

                ["设备1台时耗油(kg)","equip1Taishi"],
                ["设备2台时耗油(kg)","equip2Taishi"],
            ],
            result:[
                ["equip1","equip1Type","equip1Taishi"],
                ["equip2","equip2Type","equip2Taishi"],
            ]
        }]
    }];