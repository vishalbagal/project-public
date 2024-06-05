/* <script> */
    //SONIC LOGO USAGE (INDUSTRY AVERAGE)
    //cv
    var winWYesNo = $(window).width();
    var fontSYesNo = 13;
    var yesNoPaddingIndCompare = 30;
    if(winWYesNo < 768) {
        fontSYesNo = 10;
        yesNoPaddingIndCompare = 10;
    }
    else {
        fontSYesNo = 13;
        yesNoPaddingIndCompare = 30;
    }

    $(".main-body-container").css("padding-bottom", "35px");

    if ($(window).width() > 640) {
        var compareIndCVfooterWidth = $("#compareCVIndfooterWidth").width() + 10;
    }
    else {
        var compareIndCVfooterWidth = $(".compareIndAndSubIndTableMobileInner").width();
    }

    var compareIndCVfooterWidthTd = compareIndCVfooterWidth / 2;

    $(".lpCompareCVInd_table").find("td.lpCompareCVInd_table_td").css("width", compareIndCVfooterWidthTd);

    if ($(window).width() > 640) {
        $(".lpCompareCVInd_table").css("width", compareIndCVfooterWidth);
    }
    else {
        $(".lpCompareCVInd_table").removeAttr("style");
    }

    var sce8DataSetsContent1 = [];
    if(insudtry_yes_avg_data_array1 != '' && insudtry_yes_avg_data_array1 != undefined && insudtry_no_avg_data_array1 != '' && insudtry_no_avg_data_array1 != undefined)
    {
        var sce8DataSetsYesContent1 = 0;
        var sce8DataSetsYesContentCount1 = insudtry_yes_avg_data_array1.length;
        for(var i = 0; i<insudtry_yes_avg_data_array1.length; i++)
        {
            sce8DataSetsYesContent1 = sce8DataSetsYesContent1+parseInt(insudtry_yes_avg_data_array1[i]);
        }
        console.log("sce8DataSetsYesContent1"+sce8DataSetsYesContent1);
        var sce8DataSetsYesContentValue1 = sce8DataSetsYesContent1/sce8DataSetsYesContentCount1;
        sce8DataSetsContent1.push(parseFloat(sce8DataSetsYesContentValue1).toFixed(2));

        var sce8DataSetsNoContent1 = 0;
        var sce8DataSetsNoContentCount1 = insudtry_no_avg_data_array1.length;
        for(var b = 0; b<insudtry_no_avg_data_array1.length; b++)
        {
            sce8DataSetsNoContent1 = sce8DataSetsNoContent1+parseInt(insudtry_no_avg_data_array1[b]);
        }
        console.log("sce8DataSetsNoContent1"+sce8DataSetsNoContent1);
        var sce8DataSetsNoContentValue1 = sce8DataSetsNoContent1/sce8DataSetsNoContentCount1;
        sce8DataSetsContent1.push(parseFloat(sce8DataSetsNoContentValue1).toFixed(2));
        console.log("sce8DataSetsContent1"+sce8DataSetsContent1);
    }

    if(sce8DataSetsContent1 !='' && sce8DataSetsContent1 !=undefined)
    {
        /* var pieChartBgColorNames = "{{ implode(',',config('custom.pie_chartsec78_bg_color'))}}"; */
        if(sce8DataSetsContent1[0]==0 && sce8DataSetsContent1[1]!=0)
        {
            var pieChartBgColorArrayB71 = ['#a7a8a9', '#a7a8a9'];
            var pieChartBgColorArrayB81 = ['#a7a8a9', '#a7a8a9'];
        }
        else
        {
            var pieChartBgColorArrayB71 = pieChartBgColorNames.split(',');
            var pieChartBgColorArrayB81 = pieChartBgColorNames.split(',');
        }
        //var pieChartBgColorArray = pieChartBgColorNames.split(',');

        var indCVPieData1 = [
                { label: "Yes", value: parseFloat(sce8DataSetsContent1[0]) },
                { label: "No", value: parseFloat(sce8DataSetsContent1[1]) }
            ];
        var indCVPie1;

        var indCVPieUpdate1 = function () {
            if (indCVPie1) indCVPie1.destroy();
            var div2W1 = $("#brandCVPieDiv1").width();
            var div2H1 = $("#brandCVPieDiv1").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div2W1, div2H1);
            var opt =  {
                data: {
                    content: indCVPieData1,
                },
                size: {
                    pieInnerRadius: "40%",
                    pieOuterRadius: "72%",
                    canvasHeight: size,
                    canvasWidth: size,
                },
                labels: {
                    outer: {
                        pieDistance: 10
                    },
                    mainLabel: {
                        font: "RobotoMonoRegular",
                        color: "#ffffff",
                        fontSize: 12
                    },
                    percentage: {
                        font: "RobotoMonoRegular",
                        color: "#000000",
                        decimalPlaces: 0,
                        fontSize: 12
                    },
                    value: {
                        font: "RobotoMonoRegular",
                        color: "#ffffff",
                        fontSize: 12
                    },
                    lines: {
                        enabled: true,
                        style: "straight",
                        color: "#8f9092"
                    }
                },
                misc: {
                    gradient: {
                        enabled: false,
                        percentage: 100
                    },
                    pieCenterOffset: {
                        x: 0,
                        y: 0
                    },
                    colors: {
                        segments: pieChartBgColorArrayB71,
                        segmentStroke: "#8b8c90"
                    }
                }
            };
            indCVPie1 = new d3pie("brandCVPieDiv1", opt);
        };
        indCVPieUpdate1();
        window.addEventListener('resize', indCVPieUpdate1);
    }
    else
    {
        $(".lp_section_07_02").find(".col-md-8").text(" ");
    }
    //industry
    /* var insudtry_yes_avg_data = "{{implode(',',$insudtry_yes_avg_data_array)}}";
    var insudtry_yes_avg_data_array = insudtry_yes_avg_data.split(',');
    var insudtry_no_avg_data = "{{implode(',',$insudtry_no_avg_data_array)}}";
    var insudtry_no_avg_data_array = insudtry_no_avg_data.split(',') */
    var sce8DataSetsContent = [];
    if(insudtry_yes_avg_data_array != '' && insudtry_yes_avg_data_array != undefined && insudtry_no_avg_data_array != '' && insudtry_no_avg_data_array != undefined)
    {
        var sce8DataSetsYesContent = 0;
        var sce8DataSetsYesContentCount = insudtry_yes_avg_data_array.length;
        for(var i = 0; i<insudtry_yes_avg_data_array.length; i++)
        {
            sce8DataSetsYesContent = sce8DataSetsYesContent+parseInt(insudtry_yes_avg_data_array[i]);
        }
        console.log("sce8DataSetsYesContent"+sce8DataSetsYesContent);
        var sce8DataSetsYesContentValue = sce8DataSetsYesContent/sce8DataSetsYesContentCount;
        sce8DataSetsContent.push(parseFloat(sce8DataSetsYesContentValue).toFixed(2));

        var sce8DataSetsNoContent = 0;
        var sce8DataSetsNoContentCount = insudtry_no_avg_data_array.length;
        for(var b = 0; b<insudtry_no_avg_data_array.length; b++)
        {
            sce8DataSetsNoContent = sce8DataSetsNoContent+parseInt(insudtry_no_avg_data_array[b]);
        }
        console.log("sce8DataSetsNoContent"+sce8DataSetsNoContent);
        var sce8DataSetsNoContentValue = sce8DataSetsNoContent/sce8DataSetsNoContentCount;
        sce8DataSetsContent.push(parseFloat(sce8DataSetsNoContentValue).toFixed(2));
        console.log("sce8DataSetsContent"+sce8DataSetsContent);
    }

    if(sce8DataSetsContent !='' && sce8DataSetsContent !=undefined)
    {
        /* var pieChartBgColorNames = "{{ implode(',',config('custom.pie_chartsec78_bg_color'))}}"; */
        if(sce8DataSetsContent[0]==0 && sce8DataSetsContent[1]!=0)
        {
            var pieChartBgColorArrayB7 = ['#a7a8a9', '#a7a8a9'];
            var pieChartBgColorArrayB8 = ['#a7a8a9', '#a7a8a9'];
        }
        else
        {
            var pieChartBgColorArrayB7 = pieChartBgColorNames.split(',');
            var pieChartBgColorArrayB8 = pieChartBgColorNames.split(',');
        }
        //var pieChartBgColorArray = pieChartBgColorNames.split(',');

        var indCVPieData = [
                { label: "Yes", value: parseFloat(sce8DataSetsContent[0]) },
                { label: "No", value: parseFloat(sce8DataSetsContent[1]) }
            ];
        var indCVPie;

        var indCVPieUpdate = function () {
            if (indCVPie) indCVPie.destroy();
            var div2W = $("#brandCVPieDiv2").width();
            var div2H = $("#brandCVPieDiv2").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div2W, div2H);
            var opt =  {
                data: {
                    content: indCVPieData,
                },
                size: {
                    pieInnerRadius: "40%",
                    pieOuterRadius: "72%",
                    canvasHeight: size,
                    canvasWidth: size,
                },
                labels: {
                    outer: {
                        pieDistance: 10
                    },
                    mainLabel: {
                        font: "RobotoMonoRegular",
                        color: "#ffffff",
                        fontSize: 12
                    },
                    percentage: {
                        font: "RobotoMonoRegular",
                        color: "#000000",
                        decimalPlaces: 0,
                        fontSize: 12
                    },
                    value: {
                        font: "RobotoMonoRegular",
                        color: "#ffffff",
                        fontSize: 12
                    },
                    lines: {
                        enabled: true,
                        style: "straight",
                        color: "#8f9092"
                    }
                },
                misc: {
                    gradient: {
                        enabled: false,
                        percentage: 100
                    },
                    pieCenterOffset: {
                        x: 0,
                        y: 0
                    },
                    colors: {
                        segments: pieChartBgColorArrayB7,
                        segmentStroke: "#8b8c90"
                    }
                }
            };
            indCVPie = new d3pie("indCVPie", opt);
        };
        indCVPieUpdate();
        window.addEventListener('resize', indCVPieUpdate);
    }
    else
    {
        $(".lpInd_section_5").find(".col-md-8").text(" ");
    }

    //Music Types Usage (On Average)
    //cv
    /*var winWIndcv1barChart = $(window).width();
    var yAxesRotationIndcv1barChart = 0;
    var layoutPadding = 0;
    if(winWIndcv1barChart < 768) {
        yAxesRotationIndcv1barChart = 60;
        layoutPadding = 20;
    }
    else {
        yAxesRotationIndcv1barChart = 0;
        layoutPadding = 45;
    }

    var winWBarChartDisplayCV = $(window).width();
    var fontSBarChartDisplayCV = 14;
    if(winWBarChartDisplayCV < 768) {
        fontSBarChartDisplayCV = 12;
    }
    else {
        fontSBarChartDisplayCV = 14;
    }    */

    if(cv1b13DataCount != '' && cv1b13DataCount != 0)
    {
        /*var cv1areaChartData = {
            labels  : cv1b13datalablesData,
            datasets: [
                {
                    label               : 'Average',
                    backgroundColor     : themeColor,
                    borderColor         : themeColor,
                    pointRadius         : false,
                    pointColor          : themeColor,
                    pointStrokeColor    : 'rgba(60,141,188,1)',
                    pointHighlightFill  : '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data                : cv1b13datasetsData,
                    borderWidth         : cv1b13borderWidthData
                }
            ]
        }
        //var cv1barChartCanvas = $('#cv1barChart').get(0).getContext('2d');
        var cv1barChartData = jQuery.extend(true, {}, cv1areaChartData);
        var cv1temp0 = cv1areaChartData.datasets[0];
        //var temp1 = areaChartData.datasets[1]
        cv1barChartData.datasets[0] = cv1temp0
        //barChartData.datasets[1] = temp0

        var cv1barChartOptions = {
            responsive              : true,
            maintainAspectRatio     : false,
            datasetFill             : false,
            indexAxis               : 'y',
            title: {
                display: true,
                text: ''
            },
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            layout: {
                padding: {
                    right: layoutPadding
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        borderColor: '#A1A1A1'
                    },
                    ticks: {
                        font: {
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#F1F1F1'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        borderColor: '#A1A1A1'
                    },
                    ticks: {
                        font: {
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#F1F1F1',
                        maxRotation: yAxesRotationIndcv1barChart,
                        minRotation: yAxesRotationIndcv1barChart
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: true,
                    formatter: (val, context) => (`${val}%`),
                    anchor: 'end',
                    align: 'end',
                    labels: {
                        value: {
                            color: '#ffffff'
                        }
                    },
                    font: {
                        size: fontSBarChartDisplayCV,
                        family: 'RobotoMonoLight',
                    }
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#ffffff'
                    }

                },
                title: {
                    display: false,
                    text: 'Music Types Usage'
                }
            },

        }

        const ctx = document.getElementById('cv1barChart').getContext('2d');
        Chart.register(ChartDataLabels);
        const barChart = new Chart(ctx, {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: cv1barChartData,
            options: cv1barChartOptions,
        });        */

        var musicTypeUsageCVPieOuterRadius = "";
        var musicTypeUsageCVPieWinWidth = $(window).width();
        if (musicTypeUsageCVPieWinWidth <= 1250 && musicTypeUsageCVPieWinWidth >= 1200) {
            musicTypeUsageCVPieOuterRadius = "60%";
        }
        else if (musicTypeUsageCVPieWinWidth <= 1199 && musicTypeUsageCVPieWinWidth >= 993) {
            musicTypeUsageCVPieOuterRadius = "55%";
        }
        else if (musicTypeUsageCVPieWinWidth <= 549) {
            musicTypeUsageCVPieOuterRadius = "50%"
        }
        else {
            musicTypeUsageCVPieOuterRadius = "67%"
        }

        var cv1b13Label = '<ul class="labelList">';
        var b13datasetsDataContent = [];
        var nonZeroValCount = [];
        for (var cv1b13i = 0; cv1b13i < b13datasetsData.length; cv1b13i++){
            b13datasetsDataContent.push({label: b13datasetsData[cv1b13i].split("#_#")[0], value: +b13datasetsData[cv1b13i].split("#_#")[1]});
            /* if(b13datasetsData[cv1b13i].split("#_#")[1] > 0) {
                cv1b13Label += '   <li>';
                cv1b13Label += '       <span class="point" style="background-color:'+genreBgColorData[cv1b13i]+'"></span>';
                cv1b13Label += '       <label class="label">'+b13datasetsData[cv1b13i].split("#_#")[0]+'</label>';
                cv1b13Label += '   </li>';

                nonZeroValCount.push(genreBgColorData[cv1b13i]);
            } */

            cv1b13Label += '   <li>';
            if(b13datasetsData[cv1b13i].split("#_#")[1] > 0)
                cv1b13Label += '       <span class="point" style="background-color:'+$("#"+b13datalablesData[cv1b13i].toLowerCase().replaceAll(" ","")).val()+'"></span>';
            else
                cv1b13Label += '       <span class="point" style="background-color:'+$("#"+b13datalablesData[cv1b13i].toLowerCase().replaceAll(" ","")+"Lighter").val()+'"></span>';
            cv1b13Label += '       <label class="label">'+b13datasetsData[cv1b13i].split("#_#")[0]+'</label>';
            cv1b13Label += '   </li>';

            if(b13datasetsData[cv1b13i].split("#_#")[1] > 0) {

                nonZeroValCount.push($("#"+b13datalablesData[cv1b13i].toLowerCase().replaceAll(" ","")).val());
            }
        }
        cv1b13Label += '</ul>';

        $(".b13LabelHolder").append(cv1b13Label);
        console.log("b13datasetsDataContent : ", b13datasetsDataContent, " genreBgColorData : ", genreBgColorData, " nonZeroValCount : ", nonZeroValCount);
        //var finalDatasetsContent = b13datasetsDataContent;
        var datasetsContentValSum = 0;

        var donutChartMusicTypeUsagePieUpdate = function () {
            if (donutChartMusicTypeUsage) donutChartMusicTypeUsage.destroy();
            var div3W = $(".donutChartMusicTypeUsageWH").width();
            var div3H = $(".donutChartMusicTypeUsageWH").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div3W, div3H);
            var opt =  {
                header:{
                    titleSubtitlePadding:0
                },
                data: {
                    //sortOrder: "value-desc",
                    smallSegmentGrouping: {
                        enabled: false
                    },
                    content: b13datasetsDataContent,
                },
                size: {
                    pieInnerRadius: "40%",
                    pieOuterRadius: musicTypeUsageCVPieOuterRadius,
                    canvasHeight: div3H,
                    canvasWidth: div3W,
                },
                labels: {
                    outer: {
                        pieDistance: 15
                    },
                    mainLabel: {
                        font: "RobotoMonoMedium",
                        color: "#F1F1F1",
                        fontSize: 12
                    },
                    percentage: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        decimalPlaces: 0,
                        fontSize: 12
                    },
                    value: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        fontSize: 12
                    },
                    lines: {
                        enabled: true,
                        style: "straight",
                        color: "#A1A1A1"
                    }
                },
                tooltips:{
                    enabled:false,
                    type:"placeholder",
                    string:"{label}:{percentage}%",
                    style:{padding:5}
                },
                misc: {
                    gradient: {
                        enabled: false,
                        percentage: 100
                    },
                    pieCenterOffset: {
                        x: -8,
                        y: 0
                    },
                    colors: {
                        segments: nonZeroValCount,
                        segmentStroke: "#A1A1A1"
                    },
                    canvaspadding:{
                        top:0,
                        right:0,
                        bottom:0,
                        left:0
                    }
                }
            };
            donutChartMusicTypeUsage = new d3pie("donutChartMusicTypeUsage", opt);
        };
        donutChartMusicTypeUsagePieUpdate();
        window.addEventListener('resize', donutChartMusicTypeUsagePieUpdate);
    }
    else
    {
        $(".lpCompareCV_section_13_cv1").find(".chart").html('<span class="naTextfont mt-4">&nbsp;</span>');
    }

    /* //industry
    var b13DataCount = "{{count($music_types_usage_on_average_dataset_data)}}";
    var b13datasetsDataString = "{{implode(',',$music_types_usage_on_average_dataset_data)}}";
    var b13datasetsData= b13datasetsDataString.split(',');
    var b13datalablesDataString = "{{implode(',',$music_types_usage_on_average_datalables_data)}}";
    var b13datalablesData= b13datalablesDataString.split(',');
    var b13borderWidthDataString = "{{implode(',',$music_types_usage_on_average_borderwidth_data)}}";
    var b13borderWidthData= b13borderWidthDataString.split(','); */

    if(b13DataCount != '' && b13DataCount != 0)
    {

        /*var areaChartData = {
            labels  : b13datalablesData,
            datasets: [
                {
                    label               : 'Average',
                    backgroundColor     : themeColor,
                    borderColor         : themeColor,
                    pointRadius         : false,
                    pointColor          : themeColor,
                    pointStrokeColor    : 'rgba(60,141,188,1)',
                    pointHighlightFill  : '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data                : b13datasetsData,
                    borderWidth         : b13borderWidthData
                }
            ]
        }
        //var barChartCanvas = $('#barChart').get(0).getContext('2d');
        var barChartData = jQuery.extend(true, {}, areaChartData);
        var temp0 = areaChartData.datasets[0];
        //var temp1 = areaChartData.datasets[1]
        barChartData.datasets[0] = temp0
        //barChartData.datasets[1] = temp0

        var barChartOptions = {
            responsive              : true,
            maintainAspectRatio     : false,
            datasetFill             : false,
            indexAxis               : 'y',
            title: {
                display: true,
                text: ''
            },
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            layout: {
                padding: {
                    right: layoutPadding
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        borderColor: '#A1A1A1'
                    },
                    ticks: {
                        font: {
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#F1F1F1'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        borderColor: '#A1A1A1'
                    },
                    ticks: {
                        font: {
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#F1F1F1',
                        maxRotation: yAxesRotationIndcv1barChart,
                        minRotation: yAxesRotationIndcv1barChart
                    }
                }
            },
            plugins: {
                datalabels: {
                    display: true,
                    formatter: (val, context) => (`${val}%`),
                    anchor: 'end',
                    align: 'end',
                    labels: {
                        value: {
                            color: '#ffffff'
                        }
                    },
                    font: {
                        size: fontSBarChartDisplayCV,
                        family: 'RobotoMonoLight',
                    }
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#ffffff'
                    }

                },
                title: {
                    display: false,
                    text: 'Music Types Usage'
                }
            },

        }

        const ctx = document.getElementById('barChart').getContext('2d');
        Chart.register(ChartDataLabels);
        const barChart = new Chart(ctx, {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: barChartData,
            options: barChartOptions,
        });*/

        var indCV1musicTypeUsageCVPieOuterRadius = "";
        var indCV1musicTypeUsageCVPieWinWidth = $(window).width();
        if (indCV1musicTypeUsageCVPieWinWidth <= 1250 && indCV1musicTypeUsageCVPieWinWidth >= 1200) {
            indCV1musicTypeUsageCVPieOuterRadius = "60%";
        }
        else if (indCV1musicTypeUsageCVPieWinWidth <= 1199 && indCV1musicTypeUsageCVPieWinWidth >= 993) {
            indCV1musicTypeUsageCVPieOuterRadius = "55%";
        }
        else if (indCV1musicTypeUsageCVPieWinWidth <= 549) {
            indCV1musicTypeUsageCVPieOuterRadius = "50%"
        }
        else {
            indCV1musicTypeUsageCVPieOuterRadius = "67%"
        }

        var b13Label = '<ul class="labelList">';
        var cv1b13datasetsDataContent = [];
        var nonZeroValCount = [];
        for (var b13i = 0; b13i < cv1b13datasetsData.length; b13i++){
            cv1b13datasetsDataContent.push({label: cv1b13datasetsData[b13i].split("#_#")[0], value: +cv1b13datasetsData[b13i].split("#_#")[1]});
            /* if(cv1b13datasetsData[b13i].split("#_#")[1] > 0) {
                b13Label += '   <li>';
                b13Label += '       <span class="point" style="background-color:'+genreBgColorData[b13i]+'"></span>';
                b13Label += '       <label class="label">'+cv1b13datasetsData[b13i].split("#_#")[0]+'</label>';
                b13Label += '   </li>';

                nonZeroValCount.push(genreBgColorData[b13i]);
            } */

            b13Label += '   <li>';
            if(cv1b13datasetsData[b13i].split("#_#")[1] > 0)
                b13Label += '       <span class="point" style="background-color:'+$("#"+cv1b13datalablesData[b13i].toLowerCase().replaceAll(" ","")).val()+'"></span>';
            else
                b13Label += '       <span class="point" style="background-color:'+$("#"+cv1b13datalablesData[b13i].toLowerCase().replaceAll(" ","")+"Lighter").val()+'"></span>';
            b13Label += '       <label class="label">'+cv1b13datasetsData[b13i].split("#_#")[0]+'</label>';
            b13Label += '   </li>';

            if(cv1b13datasetsData[b13i].split("#_#")[1] > 0) {

                nonZeroValCount.push($("#"+cv1b13datalablesData[b13i].toLowerCase().replaceAll(" ","")).val());
            }
        }
        b13Label += '</ul>';

        $(".indCV1b13LabelHolder").append(b13Label);
        console.log("cv1b13datasetsDataContent : ", cv1b13datasetsDataContent, " genreBgColorData : ", genreBgColorData, " nonZeroValCount : ", nonZeroValCount);
        //var finalDatasetsContent = cv1b13datasetsDataContent;
        var datasetsContentValSum = 0;

        var indCV1donutChartMusicTypeUsagePieUpdate = function () {
            if (indCV1donutChartMusicTypeUsage) indCV1donutChartMusicTypeUsage.destroy();
            var div3W = $(".indCV1donutChartMusicTypeUsageWH").width();
            var div3H = $(".indCV1donutChartMusicTypeUsageWH").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div3W, div3H);
            var opt =  {
                header:{
                    titleSubtitlePadding:0
                },
                data: {
                    //sortOrder: "value-desc",
                    smallSegmentGrouping: {
                        enabled: false
                    },
                    content: cv1b13datasetsDataContent,
                },
                size: {
                    pieInnerRadius: "40%",
                    pieOuterRadius: indCV1musicTypeUsageCVPieOuterRadius,
                    canvasHeight: div3H,
                    canvasWidth: div3W,
                },
                labels: {
                    outer: {
                        pieDistance: 15
                    },
                    mainLabel: {
                        font: "RobotoMonoMedium",
                        color: "#F1F1F1",
                        fontSize: 12
                    },
                    percentage: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        decimalPlaces: 0,
                        fontSize: 12
                    },
                    value: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        fontSize: 12
                    },
                    lines: {
                        enabled: true,
                        style: "straight",
                        color: "#A1A1A1"
                    }
                },
                tooltips:{
                    enabled:false,
                    type:"placeholder",
                    string:"{label}:{percentage}%",
                    style:{padding:5}
                },
                misc: {
                    gradient: {
                        enabled: false,
                        percentage: 100
                    },
                    pieCenterOffset: {
                        x: -8,
                        y: 0
                    },
                    colors: {
                        segments: nonZeroValCount,
                        segmentStroke: "#A1A1A1"
                    },
                    canvaspadding:{
                        top:0,
                        right:0,
                        bottom:0,
                        left:0
                    }
                }
            };
            indCV1donutChartMusicTypeUsage = new d3pie("indCV1donutChartMusicTypeUsage", opt);
        };
        indCV1donutChartMusicTypeUsagePieUpdate();
        window.addEventListener('resize', indCV1donutChartMusicTypeUsagePieUpdate);

    }
    else
    {
        $(".lpInd_section_6").find(".inner_section").find(".chart").text(" ");
    }



    //set section hieghts
    setTimeout(function() {
        var lpCompareCVIndSectionCv = $(".lpCompareCVInd_section_cv").height()+40;
        var lpCompareCVIndSectionInd = $(".lpCompareCVInd_section_ind").height()+40;

        var lpCompareCVGenresCv = $(".lpCompareCV_Genres_cv").height()+10;
        var lpCompareCVGenresInd = $(".lpCompareCV_Genres_ind").height()+10;
        if(lpCompareCVGenresCv > lpCompareCVGenresInd)
        {
            $(".lpCompareCVIND_Genres_Height").css("height",lpCompareCVGenresCv);
        }
        else
        {
            $(".lpCompareCVIND_Genres_Height").css("height",lpCompareCVGenresInd);
        }

        var lpCompareCVSectionSonicLogoUsageCv = $(".lpCompareCV_section_SonicLogoUsage_cv").height()+40;
        var lpCompareCVSectionSonicLogoUsageInd = $(".lpCompareCV_section_SonicLogoUsage_ind").height()+40;
        if(lpCompareCVSectionSonicLogoUsageCv > lpCompareCVSectionSonicLogoUsageInd)
        {
            $(".lpCompareCVIND_SLogo3_Height").css("height",lpCompareCVSectionSonicLogoUsageCv);
        }
        else
        {
            $(".lpCompareCVIND_SLogo3_Height").css("height",lpCompareCVSectionSonicLogoUsageInd);
        }

        var lpCompareCVSectionMusicTUsageCv = $(".lpCompareCV_section_MusicTUsage_cv").height()+40;
        var lpCompareCVSectionMusicTUsageInd = $(".lpCompareCV_section_MusicTUsage_ind").height()+40;
        if(lpCompareCVSectionMusicTUsageCv > lpCompareCVSectionMusicTUsageInd)
        {
            $(".lpCompareCVIND_MusicTUsage_Height").css("height",lpCompareCVSectionMusicTUsageCv);
        }
        else
        {
            $(".lpCompareCVIND_MusicTUsage_Height").css("height",lpCompareCVSectionMusicTUsageInd);
        }

        // For Compare CV with Ind CV Mood Graph Height
        var compareRadarGraphHolder1 = $(".compareRadarGraphHolderCV1_1").height()+20;
        var compareRadarGraphHolder2 = $(".compareRadarGraphHolderCV2_1").height()+20;
        if(compareRadarGraphHolder1 > compareRadarGraphHolder2)
        {
            $(".compareRadarGraphHolderHeight1").css("height",compareRadarGraphHolder1);
        }
        else
        {
            $(".compareRadarGraphHolderHeight1").css("height",compareRadarGraphHolder2);
        }
        // For Compare CV with Ind CV Genre Graph Height
        var compareRadarGraphHolder2 = $(".compareRadarGraphHolderCV1_2").height()+20;
        var compareRadarGraphHolder3  = $(".compareRadarGraphHolderCV2_2").height()+20;
        if(compareRadarGraphHolder2 > compareRadarGraphHolder3)
        {
            $(".compareRadarGraphHolderHeight2").css("height",compareRadarGraphHolder2);
        }
        else
        {
            $(".compareRadarGraphHolderHeight2").css("height",compareRadarGraphHolder3);
        }

         // sonic logo main mood graph ================
         var lpCompareCV_SoniclogoMMG_Holder1 = $(".lpCompareCV_SoniclogoMMG_Holder1").height()+20;
         var lpCompareCV_SoniclogoMMG_Holder2  = $(".lpCompareCV_SoniclogoMMG_Holder2").height()+20;
         if(lpCompareCV_SoniclogoMMG_Holder1 > lpCompareCV_SoniclogoMMG_Holder2)
         {
             $(".lpCompareCV_SoniclogoMMG_Height").css("height",lpCompareCV_SoniclogoMMG_Holder1);
         }
         else
         {
             $(".lpCompareCV_SoniclogoMMG_Height").css("height",lpCompareCV_SoniclogoMMG_Holder2);
         }




    }, 1000);



/* //Start Mood RADAR Graph Script 1
    var cv1Block16MoodGraphDatasetDataString = "{{implode(',',$cv1_block_16_mood_graph_dataset_data)}}";
    var cv1Block16MoodGraphDatasetData = cv1Block16MoodGraphDatasetDataString.split(',');
    //console.log("cv1Block16MoodGraphDatasetData:"+cv1Block16MoodGraphDatasetData);
    var cv1Block17MoodGraphDatasetDataString = "{{implode(',',$cv1_block_17_mood_graph_dataset_data)}}";
    var cv1Block17MoodGraphDatasetData = cv1Block17MoodGraphDatasetDataString.split(',');
    //console.log("cv1Block17MoodGraphDatasetData:"+cv1Block17MoodGraphDatasetData);
    var cv1Block18MoodGraphDatasetDataString = "{{implode(',',$cv1_block_18_mood_graph_dataset_data)}}";
    var cv1Block18MoodGraphDatasetData = cv1Block18MoodGraphDatasetDataString.split(',');
    //console.log("cv1Block18MoodGraphDatasetData:"+cv1Block18MoodGraphDatasetData);
    var cv1Block19MoodGraphDatasetDataString = "{{implode(',',$cv1_block_19_mood_graph_dataset_data)}}";
    var cv1Block19MoodGraphDatasetData = cv1Block19MoodGraphDatasetDataString.split(',');
    //console.log("cv1Block19MoodGraphDatasetData:"+cv1Block19MoodGraphDatasetData);
    var cv1MoodAggrGraphDatasetDataString = "{{implode(',',$cv1_mood_aggr_graph_dataset_data)}}";
    var cv1MoodAggrGraphDatasetData = cv1MoodAggrGraphDatasetDataString.split(',');
    //console.log("cv1MoodAggrGraphDatasetData:"+cv1MoodAggrGraphDatasetData);
    //var cv1Block16MoodGraphDatalablesDataString = "{{implode(',',$cv1_block_16_mood_graph_datalables_data)}}";
    //var cv1Block16MoodGraphDatalablesData = cv1Block16MoodGraphDatalablesDataString.split(',');
    var cv1Block16MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv1Block16MoodGraphDatalablesData = cv1Block16MoodGraphDatalablesDataString.split(',');
    //console.log("cv1Block16MoodGraphDatalablesData:"+cv1Block16MoodGraphDatalablesData);
    //var cv1Block17MoodGraphDatalablesDataString = "{{implode(',',$cv1_block_17_mood_graph_datalables_data)}}";
    //var cv1Block17MoodGraphDatalablesData = cv1Block17MoodGraphDatalablesDataString.split(',');
    var cv1Block17MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv1Block17MoodGraphDatalablesData = cv1Block17MoodGraphDatalablesDataString.split(',');
    //console.log("cv1Block17MoodGraphDatalablesData:"+cv1Block17MoodGraphDatalablesData);
    //var cv1Block18MoodGraphDatalablesDataString = "{{implode(',',$cv1_block_18_mood_graph_datalables_data)}}";
    //var cv1Block18MoodGraphDatalablesData = cv1Block18MoodGraphDatalablesDataString.split(',');
    var cv1Block18MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv1Block18MoodGraphDatalablesData = cv1Block18MoodGraphDatalablesDataString.split(',');
    //console.log("cv1Block18MoodGraphDatalablesData:"+cv1Block18MoodGraphDatalablesData);
    //var cv1Block19MoodGraphDatalablesDataString = "{{implode(',',$cv1_block_19_mood_graph_datalables_data)}}";
    //var cv1Block19MoodGraphDatalablesData = cv1Block19MoodGraphDatalablesDataString.split(',');
    var cv1Block19MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv1Block19MoodGraphDatalablesData = cv1Block19MoodGraphDatalablesDataString.split(',');
    //console.log("cv1Block19MoodGraphDatalablesData:"+cv1Block19MoodGraphDatalablesData);
    //var cv1MoodAggrGraphDatalablesDataString = "{{implode(',',$cv1_mood_aggr_graph_datalables_data)}}";
    //var cv1MoodAggrGraphDatalablesData = cv1MoodAggrGraphDatalablesDataString.split(',');
    var cv1MoodAggrGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv1MoodAggrGraphDatalablesData = cv1MoodAggrGraphDatalablesDataString.split(',');
    //console.log("cv1MoodAggrGraphDatalablesData:"+cv1MoodAggrGraphDatalablesData); */

    var datasetDataStringLength = 0;
    var datalablesData = '';
    var colorval1 = "#999999";
    var colorvalData1 = [];
    var datasetsContent = '';
    var showMoodRadar = false;

    var toggellblCompareCVMoodArr1 = [];
    var toggelCompareCVMoodBtns1 = '';

    if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood all with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 1,2,3 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','YouTube','Instagram','TikTok'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 1,2,4 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 1,3,4 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','YouTube','TikTok','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 2,3,4 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv1Block17MoodGraphDatasetDataString.length;
        datalablesData = cv1Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 1,2 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','YouTube','Instagram'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 1,3 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','YouTube','TikTok'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 1,4 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','YouTube','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 2,3 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','Instagram','TikTok'];
        datasetDataStringLength = cv1Block17MoodGraphDatasetDataString.length;
        datalablesData = cv1Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 2,4 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','Instagram','Twitter'];
        datasetDataStringLength = cv1Block17MoodGraphDatasetDataString.length;
        datalablesData = cv1Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatalablesDataString != '')
    {
        console.log("in mood 3,4 with agg"); toggellblCompareCVMoodArr1 = ['Aggregate','TikTok','Twitter'];
        datasetDataStringLength = cv1Block18MoodGraphDatasetDataString.length;
        datalablesData = cv1Block18MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv1MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood all"); toggellblCompareCVMoodArr1 = ['YouTube','Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,3"); toggellblCompareCVMoodArr1 = ['YouTube','Instagram','TikTok'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,4"); toggellblCompareCVMoodArr1 = ['YouTube','Instagram','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,3,4"); toggellblCompareCVMoodArr1 = ['YouTube','TikTok','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,3,4"); toggellblCompareCVMoodArr1 = ['Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv1Block17MoodGraphDatasetDataString.length;
        datalablesData = cv1Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2"); toggellblCompareCVMoodArr1 = ['YouTube','Instagram'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,3"); toggellblCompareCVMoodArr1 = ['YouTube','TikTok'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,4"); toggellblCompareCVMoodArr1 = ['YouTube','Twitter'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,3"); toggellblCompareCVMoodArr1 = ['Instagram','TikTok'];
        datasetDataStringLength = cv1Block17MoodGraphDatasetDataString.length;
        datalablesData = cv1Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,4"); toggellblCompareCVMoodArr1 = ['Instagram','Twitter'];
        datasetDataStringLength = cv1Block17MoodGraphDatasetDataString.length;
        datalablesData = cv1Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 3,4"); toggellblCompareCVMoodArr1 = ['TikTok','Twitter'];
        datasetDataStringLength = cv1Block18MoodGraphDatasetDataString.length;
        datalablesData = cv1Block18GenreGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block16MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1"); toggellblCompareCVMoodArr1 = ['YouTube'];
        datasetDataStringLength = cv1Block16MoodGraphDatasetDataString.length;
        datalablesData = cv1Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv1Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block17MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2"); toggellblCompareCVMoodArr1 = ['Instagram'];
        datasetDataStringLength = cv1Block17MoodGraphDatasetDataString.length;
        datalablesData = cv1Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv1Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 3"); toggellblCompareCVMoodArr1 = ['TikTok'];
        datasetDataStringLength = cv1Block18MoodGraphDatasetDataString.length;
        datalablesData = cv1Block18MoodGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: cv1Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv1Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 4"); toggellblCompareCVMoodArr1 = ['Twitter'];
        datasetDataStringLength = cv1Block19MoodGraphDatasetDataString.length;
        datalablesData = cv1Block19MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Twitter', cv1Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else
    {
        showMoodRadar = false;
    }

    old_datalablesData_mood_cv1 = datalablesData;
    old_datasetsContent_mood_cv1 = datasetsContent;
    old_toggellblArr_mood_cv1 = toggellblCompareCVMoodArr1;
    cv1SocialMediaDataExistArray = industrySocialMediaDataExistArrayString.split(",");

    // var cv1dldString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    // var cv1dld = cv1dldString.split(',');

    if(cv1MoodAggrGraphDatalablesDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1MoodAggrGraphDatasetData);
        console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1MoodAggrGraphDatasetData.findIndex(data => data == cv1maxVal);
        console.log("cv1lblPostion",cv1lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[cv1lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cv1Block16MoodGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block16MoodGraphDatasetData);
        console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1Block16MoodGraphDatasetData.findIndex(data => data == cv1maxVal);
        console.log("cv1lblPostion",cv1lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[cv1lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cv1Block17MoodGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block17MoodGraphDatasetData);
        console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1Block17MoodGraphDatasetData.findIndex(data => data == cv1maxVal);
        console.log("cv1lblPostion",cv1lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[cv1lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cv1Block18MoodGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block18MoodGraphDatasetData);
        console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1Block18MoodGraphDatasetData.findIndex(data => data == cv1maxVal);
        console.log("cv1lblPostion",cv1lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[cv1lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cv1Block19MoodGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block19MoodGraphDatasetData);
        console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1Block19MoodGraphDatasetData.findIndex(data => data == cv1maxVal);
        console.log("cv1lblPostion",cv1lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[cv1lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(showMoodRadar == true)
    {
        // for(var i=0; i<toggellblCompareCVMoodArr1.length;i++)
        // {
        //     toggelCompareCVMoodBtns1 += '<div class="toggleWrapper">';
        //     toggelCompareCVMoodBtns1 += '<input type="checkbox" id="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[i]+'" >';
        //     toggelCompareCVMoodBtns1 += '<label for="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[i]+'" class="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[i]+'" onClick="rtoggleCompareCV1MoodData1('+i+')" ><span class="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[i]+'_handler"></span></label>';
        //     toggelCompareCVMoodBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVMoodArr1[i]+'</span>';
        //     toggelCompareCVMoodBtns1 += '</div>';
        // }
        //console.log("toggellblCompareCVMoodArr1 ==",toggellblCompareCVMoodArr1," cv1SocialMediaDataExistArray==",cv1SocialMediaDataExistArray);
        for(var i=0; i<cv1SocialMediaDataExistArray.length;i++)
        {
            if(toggellblCompareCVMoodArr1.includes(cv1SocialMediaDataExistArray[i])){
                var Index = toggellblCompareCVMoodArr1.indexOf(cv1SocialMediaDataExistArray[i]);
                toggelCompareCVMoodBtns1 += '<div class="toggleWrapper">';
                toggelCompareCVMoodBtns1 += '<input type="checkbox" id="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[Index]+'" >';
                toggelCompareCVMoodBtns1 += '<label for="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[Index]+'" class="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[Index]+'" onClick="rtoggleCompareCV1MoodData1('+Index+')" ><span class="rtoggleCompareCV1Mood'+toggellblCompareCVMoodArr1[Index]+'_handler"></span></label>';
                toggelCompareCVMoodBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVMoodArr1[Index]+'</span>';
                toggelCompareCVMoodBtns1 += '</div>';
            }else{
                toggelCompareCVMoodBtns1 += '<div class="toggleWrapper" style="pointer-events: none;">';
                toggelCompareCVMoodBtns1 += '<input type="checkbox" id="rtoggleCompareCV1Mood'+cv1SocialMediaDataExistArray[i]+'" >';
                toggelCompareCVMoodBtns1 += '<label for="rtoggleCompareCV1Mood'+cv1SocialMediaDataExistArray[i]+'" class="rtoggleCompareCV1Mood'+cv1SocialMediaDataExistArray[i]+'" onClick="rtoggleCompareCV1MoodData1('+i+')" style="background: transparent"><span class="rtoggleCompareCV1Mood'+cv1SocialMediaDataExistArray[i]+'_handler"></span></label>';
                toggelCompareCVMoodBtns1 += '<span class="cust-toggleBtnName">'+cv1SocialMediaDataExistArray[i]+'</span>';
                toggelCompareCVMoodBtns1 += '</div>';
            }

        }

        $("#cv1MoodRadarChartButtonBox").html(toggelCompareCVMoodBtns1);

        const ctx = document.getElementById('cv1MoodRadarChart').getContext('2d');
        const radarChart1 = new Chart(ctx, {
            type: 'radar',
            plugins: [ChartDataLabels],
            data: {
                labels: datalablesData,
                datasets: datasetsContent
            },
            options: {
                layout: {
                    padding: 15
                },
                borderWidth: 0,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 10,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    y: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 11,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    r: {
                        grid: {
                            color: "#A1A1A1",
                            circular: true,
                        },
                        angleLines: {
                            color: '#A1A1A1',
                            lineWidth: 1
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            color: '#F1F1F1',
                            font: {
                                family: 'RobotoMonoMedium',
                                size: 12
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 0.6
                    }
                },
                elements: {
                    line: {
                        borderWidth: 0,
                        backgroundColor : '#999999'
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = radarChart1.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart1.update();
        function rtoggleCompareCV1MoodData1(value){

            const showValue = radarChart1.isDatasetVisible(value);
            if(showValue === true){
                radarChart1.hide(value);
            }
            if(showValue === false){
                radarChart1.show(value);
            }
        }
    }

    /* var industryYoutubeMoodGraphDatasetDataString = "{{implode(',',$industry_youtube_mood_graph_dataset_data)}}";
    var industryYoutubeMoodGraphDatasetData = industryYoutubeMoodGraphDatasetDataString.split(',');
    //console.log("industryYoutubeMoodGraphDatasetData:"+industryYoutubeMoodGraphDatasetData);
    var industryInstagramMoodGraphDatasetDataString = "{{implode(',',$industry_instagram_mood_graph_dataset_data)}}";
    var industryInstagramMoodGraphDatasetData = industryInstagramMoodGraphDatasetDataString.split(',');
    //console.log("industryInstagramMoodGraphDatasetData:"+industryInstagramMoodGraphDatasetData);
    var industryTiktokMoodGraphDatasetDataString = "{{implode(',',$industry_tiktok_mood_graph_dataset_data)}}";
    var industryTiktokMoodGraphDatasetData = industryTiktokMoodGraphDatasetDataString.split(',');
    //console.log("industryTiktokMoodGraphDatasetData:"+industryTiktokMoodGraphDatasetData);
    var industryTwitterMoodGraphDatasetDataString = "{{implode(',',$industry_twitter_mood_graph_dataset_data)}}";
    var industryTwitterMoodGraphDatasetData = industryTwitterMoodGraphDatasetDataString.split(',');
    //console.log("industryTwitterMoodGraphDatasetData:"+industryTwitterMoodGraphDatasetData);
    var industryMoodAggrGraphDatasetDataString = "{{implode(',',$industry_mood_aggr_graph_dataset_data)}}";
    var industryMoodAggrGraphDatasetData = industryMoodAggrGraphDatasetDataString.split(',');
    //console.log("industryMoodAggrGraphDatasetData:"+industryMoodAggrGraphDatasetData);
    //var industryYoutubeMoodGraphDatalablesDataString = "{{implode(',',$industry_youtube_mood_graph_datalables_data)}}";
    //var industryYoutubeMoodGraphDatalablesData = industryYoutubeMoodGraphDatalablesDataString.split(',');
    var industryYoutubeMoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var industryYoutubeMoodGraphDatalablesData = industryYoutubeMoodGraphDatalablesDataString.split(',');
    //console.log("industryYoutubeMoodGraphDatalablesData:"+industryYoutubeMoodGraphDatalablesData);
    //var industryInstagramMoodGraphDatalablesDataString = "{{implode(',',$industry_instagram_mood_graph_datalables_data)}}";
    //var industryInstagramMoodGraphDatalablesData = industryInstagramMoodGraphDatalablesDataString.split(',');
    var industryInstagramMoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var industryInstagramMoodGraphDatalablesData = industryInstagramMoodGraphDatalablesDataString.split(',');
    //console.log("industryInstagramMoodGraphDatalablesData:"+industryInstagramMoodGraphDatalablesData);
    //var industryTiktokMoodGraphDatalablesDataString = "{{implode(',',$industry_tiktok_mood_graph_datalables_data)}}";
    //var industryTiktokMoodGraphDatalablesData = industryTiktokMoodGraphDatalablesDataString.split(',');
    var industryTiktokMoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var industryTiktokMoodGraphDatalablesData = industryTiktokMoodGraphDatalablesDataString.split(',');
    //console.log("industryTiktokMoodGraphDatalablesData:"+industryTiktokMoodGraphDatalablesData);
    //var industryTwitterMoodGraphDatalablesDataString = "{{implode(',',$industry_twitter_mood_graph_datalables_data)}}";
    //var industryTwitterMoodGraphDatalablesData = industryTwitterMoodGraphDatalablesDataString.split(',');
    var industryTwitterMoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var industryTwitterMoodGraphDatalablesData = industryTwitterMoodGraphDatalablesDataString.split(',');
    //console.log("industryTwitterMoodGraphDatalablesData:"+industryTwitterMoodGraphDatalablesData);
    //var industryMoodAggrGraphDatalablesDataString = "{{implode(',',$industry_mood_aggr_graph_datalables_data)}}";
    //var industryMoodAggrGraphDatalablesData = industryMoodAggrGraphDatalablesDataString.split(',');
    var industryMoodAggrGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var industryMoodAggrGraphDatalablesData = industryMoodAggrGraphDatalablesDataString.split(',');
    //console.log("industryMoodAggrGraphDatalablesData:"+industryMoodAggrGraphDatalablesData); */

    var datasetDataStringLength = 0;
    var datalablesData = '';
    var colorval1 = "#999999";
    var colorvalData1 = [];
    var datasetsContent = '';
    var showMoodRadar = false;

    var toggellblCompareIndMoodArr1 = [];
    var toggelCompareIndMoodBtns1 = '';

    if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood all with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,3 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','YouTube','Instagram','TikTok'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,4 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,3,4 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','YouTube','TikTok','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 2,3,4 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','Instagram','TikTok','Twitter'];
        datasetDataStringLength = industryInstagramMoodGraphDatasetDataString.length;
        datalablesData = industryInstagramMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,2 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','YouTube','Instagram'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,3 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','YouTube','TikTok'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,4 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','YouTube','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 2,3 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','Instagram','TikTok'];
        datasetDataStringLength = industryInstagramMoodGraphDatasetDataString.length;
        datalablesData = industryInstagramMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryInstagramMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 2,4 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','Instagram','Twitter'];
        datasetDataStringLength = industryInstagramMoodGraphDatasetDataString.length;
        datalablesData = industryInstagramMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 3,4 with agg"); toggellblCompareIndMoodArr1 = ['Aggregate','TikTok','Twitter'];
        datasetDataStringLength = industryTiktokMoodGraphDatasetDataString.length;
        datalablesData = industryTiktokMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: industryMoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood all"); toggellblCompareIndMoodArr1 = ['YouTube','Instagram','TikTok','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,3"); toggellblCompareIndMoodArr1 = ['YouTube','Instagram','TikTok'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,4"); toggellblCompareIndMoodArr1 = ['YouTube','Instagram','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,3,4"); toggellblCompareIndMoodArr1 = ['YouTube','TikTok','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,3,4"); toggellblCompareIndMoodArr1 = ['Instagram','TikTok','Twitter'];
        datasetDataStringLength = industryInstagramMoodGraphDatasetDataString.length;
        datalablesData = industryInstagramMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2"); toggellblCompareIndMoodArr1 = ['YouTube','Instagram'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,3"); toggellblCompareIndMoodArr1 = ['YouTube','TikTok'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,4"); toggellblCompareIndMoodArr1 = ['YouTube','Twitter'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,3"); toggellblCompareIndMoodArr1 = ['Instagram','TikTok'];
        datasetDataStringLength = industryInstagramMoodGraphDatasetDataString.length;
        datalablesData = industryInstagramMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryInstagramMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,4"); toggellblCompareIndMoodArr1 = ['Instagram','Twitter'];
        datasetDataStringLength = industryInstagramMoodGraphDatasetDataString.length;
        datalablesData = industryInstagramMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood 3,4"); toggellblCompareIndMoodArr1 = ['TikTok','Twitter'];
        datasetDataStringLength = industryTiktokMoodGraphDatasetDataString.length;
        datalablesData = industryTiktokMoodGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryYoutubeMoodGraphDatasetDataString != '')
    {
        console.log("in mood 1"); toggellblCompareIndMoodArr1 = ['YouTube'];
        datasetDataStringLength = industryYoutubeMoodGraphDatasetDataString.length;
        datalablesData = industryYoutubeMoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:industryYoutubeMoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryInstagramMoodGraphDatasetDataString != '')
    {
        console.log("in mood 2"); toggellblCompareIndMoodArr1 = ['Instagram'];
        datasetDataStringLength = industryInstagramMoodGraphDatasetDataString.length;
        datalablesData = industryInstagramMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:industryInstagramMoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryTiktokMoodGraphDatasetDataString != '')
    {
        console.log("in mood 3"); toggellblCompareIndMoodArr1 = ['TikTok'];
        datasetDataStringLength = industryTiktokMoodGraphDatasetDataString.length;
        datalablesData = industryTiktokMoodGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: industryTiktokMoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(industryTwitterMoodGraphDatasetDataString != '')
    {
        console.log("in mood 4"); toggellblCompareIndMoodArr1 = ['Twitter'];
        datasetDataStringLength = industryTwitterMoodGraphDatasetDataString.length;
        datalablesData = industryTwitterMoodGraphDatalablesData;
        datasetsContent = [{ label: 'Twitter', industryTwitterMoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else
    {
        showMoodRadar = false;
    }

    old_datalablesData_mood_cv2 = datalablesData;
    old_datasetsContent_mood_cv2 = datasetsContent;
    old_toggellblArr_mood_cv2 = toggellblCompareIndMoodArr1;
    cv2SocialMediaDataExistArray = industrySocialMediaDataExistArrayString1.split(",");
    // var cv2dldString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    // var cv2dld = cv2dldString.split(',');

    if(industryMoodAggrGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryMoodAggrGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryMoodAggrGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(industryYoutubeMoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryYoutubeMoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryYoutubeMoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(industryInstagramMoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryInstagramMoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryInstagramMoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(industryTiktokMoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryTiktokMoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryTiktokMoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(industryTwitterMoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryTwitterMoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryTwitterMoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(showMoodRadar == true)
    {
        // for(var i=0; i<toggellblCompareIndMoodArr1.length;i++)
        // {
        //     toggelCompareIndMoodBtns1 += '<div class="toggleWrapper" >';
        //     toggelCompareIndMoodBtns1 += '<input type="checkbox" id="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[i]+'" >';
        //     toggelCompareIndMoodBtns1 += '<label for="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[i]+'" class="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[i]+'" onClick="rtoggleCompareCV2MoodData2('+i+')" ><span class="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[i]+'_handler"></span></label>';
        //     toggelCompareIndMoodBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareIndMoodArr1[i]+'</span>';
        //     toggelCompareIndMoodBtns1 += '</div>';
        // }
        //console.log("toggellblCompareIndMoodArr1 ==",toggellblCompareIndMoodArr1," cv2SocialMediaDataExistArray==",cv2SocialMediaDataExistArray);
        for(var i=0; i<cv2SocialMediaDataExistArray.length;i++)
        {
            if(toggellblCompareIndMoodArr1.includes(cv2SocialMediaDataExistArray[i])){
                var Index = toggellblCompareIndMoodArr1.indexOf(cv2SocialMediaDataExistArray[i]);
                toggelCompareIndMoodBtns1 += '<div class="toggleWrapper" >';
                toggelCompareIndMoodBtns1 += '<input type="checkbox" id="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[Index]+'" >';
                toggelCompareIndMoodBtns1 += '<label for="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[Index]+'" class="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[Index]+'" onClick="rtoggleCompareCV2MoodData2('+Index+')" ><span class="rtoggleCompareCV2Mood'+toggellblCompareIndMoodArr1[Index]+'_handler"></span></label>';
                toggelCompareIndMoodBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareIndMoodArr1[Index]+'</span>';
                toggelCompareIndMoodBtns1 += '</div>';
            }else{
                toggelCompareIndMoodBtns1 += '<div class="toggleWrapper" style="pointer-events: none;">';
                toggelCompareIndMoodBtns1 += '<input type="checkbox" id="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'" >';
                toggelCompareIndMoodBtns1 += '<label for="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'" class="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'" onClick="rtoggleCompareCV2MoodData2('+i+')" style="background: transparent"><span class="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'_handler"></span></label>';
                toggelCompareIndMoodBtns1 += '<span class="cust-toggleBtnName">'+cv2SocialMediaDataExistArray[i]+'</span>';
                toggelCompareIndMoodBtns1 += '</div>';
            }

        }

        $("#cv2MoodRadarChartButtonBox").html(toggelCompareIndMoodBtns1);

        const ctx = document.getElementById('cv2MoodRadarChart').getContext('2d');
        const radarChart2 = new Chart(ctx, {
            type: 'radar',
            plugins: [ChartDataLabels],
            data: {
                labels: datalablesData,
                datasets: datasetsContent
            },
            options: {
                layout: {
                    padding: 15
                },
                borderWidth: 0,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 10,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    y: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 10,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    r: {
                        grid: {
                            color: "#A1A1A1",
                            circular: true,
                        },
                        angleLines: {
                            color: '#A1A1A1',
                            lineWidth: 1
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            color: '#F1F1F1',
                            font: {
                                family: 'RobotoMonoMedium',
                                size: 12
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 0.6
                    }
                },
                elements: {
                    line: {
                        borderWidth: 0,
                        backgroundColor : '#999999'
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = radarChart2.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart2.update();
        function rtoggleCompareCV2MoodData2(value){

            const showValue = radarChart2.isDatasetVisible(value);
            if(showValue === true){
                radarChart2.hide(value);
            }
            if(showValue === false){
                radarChart2.show(value);
            }
        }
    }

    //End Mood RADAR Graph Script 1

/* //Start RADAR Graph Script 2
    var cv1Block16GenreGraphDatasetDataString = "{{implode(',',$cv1_block_16_genre_graph_dataset_data)}}";
    var cv1Block16GenreGraphDatasetData = cv1Block16GenreGraphDatasetDataString.split(',');
    //console.log("cv1Block16GenreGraphDatasetData:"+cv1Block16GenreGraphDatasetData);
    var cv1Block17GenreGraphDatasetDataString = "{{implode(',',$cv1_block_17_genre_graph_dataset_data)}}";
    var cv1Block17GenreGraphDatasetData = cv1Block17GenreGraphDatasetDataString.split(',');
    //console.log("cv1Block17GenreGraphDatasetData:"+cv1Block17GenreGraphDatasetData);
    var cv1Block18GenreGraphDatasetDataString = "{{implode(',',$cv1_block_18_genre_graph_dataset_data)}}";
    var cv1Block18GenreGraphDatasetData = cv1Block18GenreGraphDatasetDataString.split(',');
    //console.log("cv1Block18GenreGraphDatasetData:"+cv1Block18GenreGraphDatasetData);
    var cv1Block19GenreGraphDatasetDataString = "{{implode(',',$cv1_block_19_genre_graph_dataset_data)}}";
    var cv1Block19GenreGraphDatasetData = cv1Block19GenreGraphDatasetDataString.split(',');
    //console.log("cv1Block19GenreGraphDatasetData:"+cv1Block19GenreGraphDatasetData);
    var cv1GenreAggrGraphDatasetDataString = "{{implode(',',$cv1_genre_aggr_graph_dataset_data)}}";
    var cv1GenreAggrGraphDatasetData = cv1GenreAggrGraphDatasetDataString.split(',');
    //console.log("cv1GenreAggrGraphDatasetData:"+cv1GenreAggrGraphDatasetData);
    //var cv1Block16GenreGraphDatalablesDataString = "{{implode(',',$cv1_block_16_genre_graph_datalables_data)}}";
    //var cv1Block16GenreGraphDatalablesData = cv1Block16GenreGraphDatalablesDataString.split(',');
    var cv1Block16GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv1Block16GenreGraphDatalablesData = cv1Block16GenreGraphDatalablesDataString.split(',');
    //console.log("cv1Block16GenreGraphDatalablesData:"+cv1Block16GenreGraphDatalablesData);
    //var cv1Block17GenreGraphDatalablesDataString = "{{implode(',',$cv1_block_17_genre_graph_datalables_data)}}";
    //var cv1Block17GenreGraphDatalablesData = cv1Block17GenreGraphDatalablesDataString.split(',');
    var cv1Block17GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv1Block17GenreGraphDatalablesData = cv1Block17GenreGraphDatalablesDataString.split(',');
    //console.log("cv1Block17GenreGraphDatalablesData:"+cv1Block17GenreGraphDatalablesData);
    //var cv1Block18GenreGraphDatalablesDataString = "{{implode(',',$cv1_block_18_genre_graph_datalables_data)}}";
    //var cv1Block18GenreGraphDatalablesData = cv1Block18GenreGraphDatalablesDataString.split(',');
    var cv1Block18GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv1Block18GenreGraphDatalablesData = cv1Block18GenreGraphDatalablesDataString.split(',');
    //console.log("cv1Block18GenreGraphDatalablesData:"+cv1Block18GenreGraphDatalablesData);
    //var cv1Block19GenreGraphDatalablesDataString = "{{implode(',',$cv1_block_19_genre_graph_datalables_data)}}";
    //var cv1Block19GenreGraphDatalablesData = cv1Block19GenreGraphDatalablesDataString.split(',');
    var cv1Block19GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv1Block19GenreGraphDatalablesData = cv1Block19GenreGraphDatalablesDataString.split(',');
    //console.log("cv1Block19GenreGraphDatalablesData:"+cv1Block19GenreGraphDatalablesData);
    //var cv1GenreAggrGraphDatalablesDataString = "{{implode(',',$cv1_genre_aggr_graph_datalables_data)}}";
    //var cv1GenreAggrGraphDatalablesData = cv1GenreAggrGraphDatalablesDataString.split(',');
    var cv1GenreAggrGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv1GenreAggrGraphDatalablesData = cv1GenreAggrGraphDatalablesDataString.split(',');
    //console.log("cv1GenreAggrGraphDatalablesData:"+cv1GenreAggrGraphDatalablesData); */

    var datasetDataStringLength = 0;
    var datasetDataLength = 0;
    var datalablesData = [];
    var colorval2 = "#999999";
    var colorvalData2 = [];
    var cv1DatasetsContent = [];
    var showMoodRadar = false;

    var toggellblCompareCVGenreArr1 = [];
    var toggelCompareCVGenreBtns1 = '';

    cv1DatasetsContentAggr = [];
    cv1DatasetsContentYt = [];
    cv1DatasetsContentIg= [];
    cv1DatasetsContentTt= [];
    cv1DatasetsContentTwt= [];

    if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre all with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','YouTube','Instagram','TikTok'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','YouTube','TikTok','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','Instagram','TikTok','Twitter'];
        datasetDataLength = cv1Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block17GenreGraphDatalablesData[i])) {
                s = cv1Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','YouTube','Instagram'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','YouTube','TikTok'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,4 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','YouTube','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','Instagram','TikTok'];
        datasetDataLength = cv1Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block17GenreGraphDatalablesData[i])) {
                s = cv1Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block17GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,4 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','Instagram','Twitter'];
        datasetDataLength = cv1Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block17GenreGraphDatalablesData[i])) {
                s = cv1Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '' && cv1GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 3,4 with agg"); toggellblCompareCVGenreArr1 = ['Aggregate','TikTok','Twitter'];
        datasetDataLength = cv1Block18GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block18GenreGraphDatalablesData[i])) {
                s = cv1Block18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv1GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++) {
            cv1DatasetsContentAggr.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre all"); toggellblCompareCVGenreArr1 = ['YouTube','Instagram','TikTok','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3"); toggellblCompareCVGenreArr1 = ['YouTube','Instagram','TikTok'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4"); toggellblCompareCVGenreArr1 = ['YouTube','Instagram','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4"); toggellblCompareCVGenreArr1 = ['YouTube','TikTok','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4"); toggellblCompareCVGenreArr1 = ['Instagram','TikTok','Twitter'];
        datasetDataLength = cv1Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block17GenreGraphDatalablesData[i])) {
                s = cv1Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block17GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2"); toggellblCompareCVGenreArr1 = ['YouTube','Instagram'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3"); toggellblCompareCVGenreArr1 = ['YouTube','TikTok'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,4"); toggellblCompareCVGenreArr1 = ['YouTube','Twitter'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block17GenreGraphDatasetDataString != '' && cv1Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3"); toggellblCompareCVGenreArr1 = ['Instagram','TikTok'];
        datasetDataLength = cv1Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block17GenreGraphDatalablesData[i])) {
                s = cv1Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block17GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,4"); toggellblCompareCVGenreArr1 = ['Instagram','Twitter'];
        datasetDataLength = cv1Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block17GenreGraphDatalablesData[i])) {
                s = cv1Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block18GenreGraphDatasetDataString != '' && cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 3,4"); toggellblCompareCVGenreArr1 = ['TikTok','Twitter'];
        datasetDataLength = cv1Block18GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block18GenreGraphDatalablesData[i])) {
                s = cv1Block18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block16GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1"); toggellblCompareCVGenreArr1 = ['YouTube'];
        datasetDataLength = cv1Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block16GenreGraphDatalablesData[i])) {
                s = cv1Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv1Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block17GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2"); toggellblCompareCVGenreArr1 = ['Instagram'];
        datasetDataLength = cv1Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block17GenreGraphDatalablesData[i])) {
                s = cv1Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv1Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 3"); toggellblCompareCVGenreArr1 = ['TikTok'];
        datasetDataLength = cv1Block18GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block18GenreGraphDatalablesData[i])) {
                s = cv1Block18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'TikTok', data: cv1Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTt.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv1Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 4"); toggellblCompareCVGenreArr1 = ['Twitter'];
        datasetDataLength = cv1Block19GenreGraphDatasetData.length;
        for (var i = 0; i<cv1Block19GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block19GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv1Block19GenreGraphDatalablesData[i])) {
                s = cv1Block19GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv1Block19GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv1Block19GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Twitter', data: cv1Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++) {
            cv1DatasetsContentTwt.push({"label": cv1Block19GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block19GenreGraphDatalablesData[i], "value": parseFloat(cv1Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else
    {
        showMoodRadar = false;
    }

    old_datalablesData_genre_cv1 = datalablesData;
    old_datasetsContent_genre_cv1 = cv1DatasetsContent;
    old_toggellblArr_genre_cv1 = toggellblCompareCVGenreArr1;

    // var cv1dldString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    // var cv1dld = cv1dldString.split(',');

    if(cv1GenreAggrGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1GenreAggrGraphDatasetData);
        //console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1GenreAggrGraphDatasetData.findIndex(data => data == cv1maxVal);
        //console.log("cv1lblPostion",cv1lblPostion);
        old_highestGenrellbArr_1.push(datalablesData[cv1lblPostion]);
        //console.log("old_highestGenrellbArr_1",old_highestGenrellbArr_1);
    }

    if(cv1Block16GenreGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block16GenreGraphDatasetData);
        //console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1Block16GenreGraphDatasetData.findIndex(data => data == cv1maxVal);
        //console.log("cv1lblPostion",cv1lblPostion);
        old_highestGenrellbArr_1.push(datalablesData[cv1lblPostion]);
        //console.log("old_highestGenrellbArr_1",old_highestGenrellbArr_1);
    }

    if(cv1Block17GenreGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block17GenreGraphDatasetData);
        //console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1Block17GenreGraphDatasetData.findIndex(data => data == cv1maxVal);
        //console.log("cv1lblPostion",cv1lblPostion);
        old_highestGenrellbArr_1.push(datalablesData[cv1lblPostion]);
        //console.log("old_highestGenrellbArr_1",old_highestGenrellbArr_1);
    }

    if(cv1Block18GenreGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block18GenreGraphDatasetData);
        //console.log("cv1maxVal",cv1maxVal);
        var cv1lblPostion = cv1Block18GenreGraphDatasetData.findIndex(data => data == cv1maxVal);
        //console.log("cv1lblPostion",cv1lblPostion);
        old_highestGenrellbArr_1.push(datalablesData[cv1lblPostion]);
        //console.log("old_highestGenrellbArr_1",old_highestGenrellbArr_1);
    }

    if(cv1Block19GenreGraphDatasetDataString != '')
    {
        var cv1maxVal = Math.max.apply(Math,cv1Block19GenreGraphDatasetData);
        //console.log("cv1maxVal",cv1maxVal);
        var lblPostion = cv1Block19GenreGraphDatasetData.findIndex(data => data == cv1maxVal);
        //console.log("cv1lblPostion",cv1lblPostion);
        old_highestGenrellbArr_1.push(datalablesData[cv1lblPostion]);
        //console.log("old_highestGenrellbArr_1",old_highestGenrellbArr_1);
    }

    if(showMoodRadar == true)
    {
        /* var genreBgColorDataString = "{{implode(',',$genre_bg_color_array)}}";
        var genreBgColorData = genreBgColorDataString.split(',');
        var cv1GenreRadarChart; */

        var brandGenreCVPieOuterRadius = "";
        var brandGenreCVPieWinWidth = $(window).width();
        if (brandGenreCVPieWinWidth <= 1250 && brandGenreCVPieWinWidth >= 1200) {
            brandGenreCVPieOuterRadius = "60%";
        }
        else if (brandGenreCVPieWinWidth <= 1199 && brandGenreCVPieWinWidth >= 993) {
            brandGenreCVPieOuterRadius = "50%";
        }
        else if (brandGenreCVPieWinWidth <= 549) {
            brandGenreCVPieOuterRadius = "50%"
        }
        else {
            brandGenreCVPieOuterRadius = "67%"
        }

        cv1DatasetsContent.sort(function(a, b){return b.value - a.value});
        //console.log(cv1DatasetsContent, " CV1 Genre Data ", genreBgColorData, " Color");

        var finalCV1DatasetsContent = [];
        var cv1DatasetsContentValSum = 0;
        for(var i=0; i<cv1DatasetsContent.length;i++)
        {
            if(i<10)
            {
                finalCV1DatasetsContent.push(cv1DatasetsContent[i]);
            }
            else
            {
                cv1DatasetsContentValSum = cv1DatasetsContentValSum+cv1DatasetsContent[i].value;
            }
        }
        finalCV1DatasetsContent.push({"label": "others", "value": parseFloat(cv1DatasetsContentValSum.toFixed(2))});
        //console.log(finalCV1DatasetsContent, " finalCV1DatasetsContent");


        var cv1GenreRadarChartPieUpdate = function () {
            if (cv1GenreRadarChart) cv1GenreRadarChart.destroy();
            var div3W = $(".cv1GenreRadarChartWH").width();
            var div3H = $(".cv1GenreRadarChartWH").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div3W, div3H);
            var opt =  {
                header:{
                    titleSubtitlePadding:0
                },
                data: {
                    //sortOrder: "value-desc",
		            smallSegmentGrouping: {
			            enabled: false
		            },
                    content: finalCV1DatasetsContent,
                },
                size: {
                    pieInnerRadius: "40%",
                    pieOuterRadius: brandGenreCVPieOuterRadius,
                    canvasHeight: div3H,
                    canvasWidth: div3W,
                },
                labels: {
                    outer: {
                        pieDistance: 15
                    },
                    mainLabel: {
                        font: "RobotoMonoMedium",
                        color: "#F1F1F1",
                        fontSize: 12
                    },
                    percentage: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        decimalPlaces: 0,
                        fontSize: 12
                    },
                    value: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        fontSize: 12
                    },
                    lines: {
                        enabled: true,
			            style: "straight",
			            color: "#A1A1A1"
                    }
                },
                tooltips:{
                    enabled:false,
                    type:"placeholder",
                    string:"{label}:{percentage}%",
                    style:{padding:5}
                },
                misc: {
                    gradient: {
                        enabled: false,
                        percentage: 100
                    },
                    pieCenterOffset: {
                        x: -8,
                        y: 0
                    },
                    colors: {
                        segments: genreBgColorData,
                        segmentStroke: "#f1f1f1"
                    },
                    canvaspadding:{
                        top:0,
                        right:0,
                        bottom:0,
                        left:0
                    }
                }
            };
            cv1GenreRadarChart = new d3pie("cv1GenreRadarChart", opt);
        };
        cv1GenreRadarChartPieUpdate();
        window.addEventListener('resize', cv1GenreRadarChartPieUpdate);
        if(toggellblCompareCVGenreArr1.length == 1)
        {
            // toggelCompareCVGenreBtns1 += '<div class="toggleWrapper">';
            // toggelCompareCVGenreBtns1 += '<input type="checkbox" id="toggle'+toggellblCompareCVGenreArr1[0]+'" disabled>';
            // toggelCompareCVGenreBtns1 += '<label for="toggle'+toggellblCompareCVGenreArr1[0]+'" class="toggle'+toggellblCompareCVGenreArr1[0]+'" disabled><span class="toggle'+toggellblCompareCVGenreArr1[0]+'_handler"></span></label>';
            // toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr1[0]+'</span>';
            // toggelCompareCVGenreBtns1 += '</div>';
            for(var i=0; i<cv1SocialMediaDataExistArray.length;i++){
                if(toggellblCompareCVGenreArr1.includes(cv1SocialMediaDataExistArray[i])){
                    toggelCompareCVGenreBtns1 += '<div class="toggleWrapper">';
                    toggelCompareCVGenreBtns1 += '<input type="checkbox" id="toggle'+toggellblCompareCVGenreArr1[0]+'" disabled>';
                    toggelCompareCVGenreBtns1 += '<label for="toggle'+toggellblCompareCVGenreArr1[0]+'" class="toggle'+toggellblCompareCVGenreArr1[0]+'" disabled><span class="toggle'+toggellblCompareCVGenreArr1[0]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr1[0]+'</span>';
                    toggelCompareCVGenreBtns1 += '</div>';
                }else{
                    toggelCompareCVGenreBtns1 += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggelCompareCVGenreBtns1 += '<input type="checkbox" id="toggle'+cv1SocialMediaDataExistArray[i]+'" disabled>';
                    toggelCompareCVGenreBtns1 += '<label for="toggle'+cv1SocialMediaDataExistArray[i]+'" class="toggle'+cv1SocialMediaDataExistArray[i]+'" disabled style="background: transparent"><span class="toggle'+cv1SocialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+cv1SocialMediaDataExistArray[i]+'</span>';
                    toggelCompareCVGenreBtns1 += '</div>';
                }
            }

        }
        else
        {
            // for(var i=0; i<toggellblCompareCVGenreArr1.length;i++)
            // {
            //     toggelCompareCVGenreBtns1 += '<div class="toggleWrapper">';
            //     toggelCompareCVGenreBtns1 += '<input type="checkbox" id="toggle'+toggellblCompareCVGenreArr1[i]+'" >';
            //     toggelCompareCVGenreBtns1 += '<label for="toggle'+toggellblCompareCVGenreArr1[i]+'" class="toggle'+toggellblCompareCVGenreArr1[i]+'" onClick="toggleDataCompareCV(\''+toggellblCompareCVGenreArr1[i]+'\', \'withoutPopup\', \'cv1GenreRadarChart\')" ><span class="toggle'+toggellblCompareCVGenreArr1[i]+'_handler"></span></label>';
            //     toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr1[i]+'</span>';
            //     toggelCompareCVGenreBtns1 += '</div>';
            // }

            for(var i=0; i<cv1SocialMediaDataExistArray.length;i++)
            {
                if(toggellblCompareCVGenreArr1.includes(cv1SocialMediaDataExistArray[i])){
                    var Index = toggellblCompareCVGenreArr1.indexOf(cv1SocialMediaDataExistArray[i]);
                    toggelCompareCVGenreBtns1 += '<div class="toggleWrapper">';
                    toggelCompareCVGenreBtns1 += '<input type="checkbox" id="toggle'+toggellblCompareCVGenreArr1[i]+'" >';
                    toggelCompareCVGenreBtns1 += '<label for="toggle'+toggellblCompareCVGenreArr1[i]+'" class="toggle'+toggellblCompareCVGenreArr1[i]+'" onClick="toggleDataCompareCV(\''+toggellblCompareCVGenreArr1[i]+'\', \'withoutPopup\', \'cv1GenreRadarChart\')" ><span class="toggle'+toggellblCompareCVGenreArr1[i]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr1[i]+'</span>';
                    toggelCompareCVGenreBtns1 += '</div>';
                }else{
                    toggelCompareCVGenreBtns1 += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggelCompareCVGenreBtns1 += '<input type="checkbox" id="toggle'+cv1SocialMediaDataExistArray[i]+'" >';
                    toggelCompareCVGenreBtns1 += '<label for="toggle'+cv1SocialMediaDataExistArray[i]+'" class="toggle'+cv1SocialMediaDataExistArray[i]+'" onClick="toggleDataCompareCV(\''+cv1SocialMediaDataExistArray[i]+'\', \'withoutPopup\', \'cv1GenreRadarChart\')" style="background: transparent"><span class="toggle'+cv1SocialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+cv1SocialMediaDataExistArray[i]+'</span>';
                    toggelCompareCVGenreBtns1 += '</div>';
                }

            }
        }

        $("#cv1GenreRadarChartButtonBox").html(toggelCompareCVGenreBtns1);
        // $("#cv1GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index) {
        //     if(index > 0) {
        //         $(this).prop( "checked", true );
        //     }
        // });
        if(toggellblCompareCVGenreArr1.length == 1){
            $("#cv1GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index,element) {
                var checkboxId = $(element).attr("id").replace("toggle","");
                if(toggellblCompareCVGenreArr1.includes(checkboxId)){
                    $(this).prop( "checked", false );
                }else{
                    $(this).prop( "checked", true );
                }
            });
        }else{
            $("#cv1GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index) {
                if(index > 0) {
                    $(this).prop( "checked", true );
                }
            });
        }



        /* //console.log("datalablesData"+datalablesData);

        for(var i=0; i<toggellblCompareCVGenreArr1.length;i++)
        {
            toggelCompareCVGenreBtns1 += '<div class="toggleWrapper" >';
            toggelCompareCVGenreBtns1 += '<input type="checkbox" id="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'" >';
            toggelCompareCVGenreBtns1 += '<label for="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'" class="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'" onClick="rtoggleCompareCV1GenreData1('+i+')" ><span class="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'_handler"></span></label>';
            toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr1[i]+'</span>';
            toggelCompareCVGenreBtns1 += '</div>';
        }

        $("#cvGenreRadarChart2ButtonBox").html(toggelCompareCVGenreBtns1);

        const ctx = document.getElementById('cvGenreRadarChart2').getContext('2d');
        const radarChart3 = new Chart(ctx, {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: datalablesData,
                datasets: datasetsContent
            },
            options: {
                borderWidth: 0,
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: 11,
                                family: 'RobotoMonoLight'
                            },
                            color: '#000000',
                            maxRotation: 50,
                            minRotation: 50,
                            padding: 0,
                            autoSkip: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                        },
                        ticks: {
                            font: {
                                size: 11,
                                family: 'RobotoMonoLight'
                            },
                            color: '#000000',
                            maxRotation: 0,
                            minRotation: 0,
                            padding: 15,
                            autoSkip: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 1
                    }
                },
                elements: {
                    line: {
                        borderWidth: 0,
                        backgroundColor : '#999999'
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = radarChart3.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart3.update();
        function rtoggleCompareCV1GenreData1(value){

            const showValue = radarChart3.isDatasetVisible(value);
            if(showValue === true){
                radarChart3.hide(value);
            }
            if(showValue === false){
                radarChart3.show(value);
            }
        } */
        /* const radarChart3 = new Chart(ctx, {
            type: 'radar',
            plugins: [ChartDataLabels],
            data: {
                labels: datalablesData,
                datasets: datasetsContent
            },
            options: {
                layout: {
                    padding: 15
                },
                borderWidth: 0,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 10,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    y: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 10,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    r: {
                        grid: {
                            color: "#D3D3D3",
                            circular: true,
                        },
                        angleLines: {
                            color: '#D3D3D3',
                            lineWidth: 1
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            color: '#555555',
                            font: {
                                family: 'RobotoMonoMedium',
                                size: 12
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 1
                    }
                },
                elements: {
                    line: {
                        borderWidth: 0,
                        backgroundColor : '#999999'
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = radarChart3.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart3.update();
        function rtoggleCompareCV1GenreData1(value){

            const showValue = radarChart3.isDatasetVisible(value);
            if(showValue === true){
                radarChart3.hide(value);
            }
            if(showValue === false){
                radarChart3.show(value);
            }
        } */
    }

    /* var industryYoutubeGenreGraphDatasetDataString = "{{implode(',',$industry_youtube_genre_graph_dataset_data)}}";
    var industryYoutubeGenreGraphDatasetData = industryYoutubeGenreGraphDatasetDataString.split(',');
    //console.log("industryYoutubeGenreGraphDatasetData:"+industryYoutubeGenreGraphDatasetData);
    var industryInstagramGenreGraphDatasetDataString = "{{implode(',',$industry_instagram_genre_graph_dataset_data)}}";
    var industryInstagramGenreGraphDatasetData = industryInstagramGenreGraphDatasetDataString.split(',');
    //console.log("industryInstagramGenreGraphDatasetData:"+industryInstagramGenreGraphDatasetData);
    var industryTiktokGenreGraphDatasetDataString = "{{implode(',',$industry_tiktok_genre_graph_dataset_data)}}";
    var industryTiktokGenreGraphDatasetData = industryTiktokGenreGraphDatasetDataString.split(',');
    //console.log("industryTiktokGenreGraphDatasetData:"+industryTiktokGenreGraphDatasetData);
    var industryTwitterGenreGraphDatasetDataString = "{{implode(',',$industry_twitter_genre_graph_dataset_data)}}";
    var industryTwitterGenreGraphDatasetData = industryTwitterGenreGraphDatasetDataString.split(',');
    //console.log("industryTwitterGenreGraphDatasetData:"+industryTwitterGenreGraphDatasetData);
    var industryGenreAggrGraphDatasetDataString = "{{implode(',',$industry_genre_aggr_graph_dataset_data)}}";
    var industryGenreAggrGraphDatasetData = industryGenreAggrGraphDatasetDataString.split(',');
    //console.log("industryGenreAggrGraphDatasetData:"+industryGenreAggrGraphDatasetData);
    //var industryYoutubeGenreGraphDatalablesDataString = "{{implode(',',$industry_youtube_genre_graph_datalables_data)}}";
    //var industryYoutubeGenreGraphDatalablesData = industryYoutubeGenreGraphDatalablesDataString.split(',');
    var industryYoutubeGenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var industryYoutubeGenreGraphDatalablesData = industryYoutubeGenreGraphDatalablesDataString.split(',');
    //console.log("industryYoutubeGenreGraphDatalablesData:"+industryYoutubeGenreGraphDatalablesData);
    //var industryInstagramGenreGraphDatalablesDataString = "{{implode(',',$industry_instagram_genre_graph_datalables_data)}}";
    //var industryInstagramGenreGraphDatalablesData = industryInstagramGenreGraphDatalablesDataString.split(',');
    var industryInstagramGenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var industryInstagramGenreGraphDatalablesData = industryInstagramGenreGraphDatalablesDataString.split(',');
    //console.log("industryInstagramGenreGraphDatalablesData:"+industryInstagramGenreGraphDatalablesData);
    //var industryTiktokGenreGraphDatalablesDataString = "{{implode(',',$industry_tiktok_genre_graph_datalables_data)}}";
    //var industryTiktokGenreGraphDatalablesData = industryTiktokGenreGraphDatalablesDataString.split(',');
    var industryTiktokGenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var industryTiktokGenreGraphDatalablesData = industryTiktokGenreGraphDatalablesDataString.split(',');
    //console.log("industryTiktokGenreGraphDatalablesData:"+industryTiktokGenreGraphDatalablesData);
    //var industryTwitterGenreGraphDatalablesDataString = "{{implode(',',$industry_twitter_genre_graph_datalables_data)}}";
    //var industryTwitterGenreGraphDatalablesData = industryTwitterGenreGraphDatalablesDataString.split(',');
    var industryTwitterGenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var industryTwitterGenreGraphDatalablesData = industryTwitterGenreGraphDatalablesDataString.split(',');
    //console.log("industryTwitterGenreGraphDatalablesData:"+industryTwitterGenreGraphDatalablesData);
    //var industryGenreAggrGraphDatalablesDataString = "{{implode(',',$industry_genre_aggr_graph_datalables_data)}}";
    //var industryGenreAggrGraphDatalablesData = industryGenreAggrGraphDatalablesDataString.split(',');
    var industryGenreAggrGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var industryGenreAggrGraphDatalablesData = industryGenreAggrGraphDatalablesDataString.split(',');
    //console.log("industryGenreAggrGraphDatalablesData:"+industryGenreAggrGraphDatalablesData); */

    var datasetDataStringLength = 0;
    var datasetDataLength = 0;
    var datalablesData = [];
    var colorval2 = "#999999";
    var colorvalData2 = [];
    var cv2DatasetsContent = [];
    var showMoodRadar = false;

    var toggellblCompareIndGenreArr2 = [];
    var toggelCompareIndGenreBtns2 = '';

    cv2DatasetsContentAggr = [];
    cv2DatasetsContentYt = [];
    cv2DatasetsContentIg= [];
    cv2DatasetsContentTt= [];
    cv2DatasetsContentTwt= [];

    if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre all with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','YouTube','Instagram','TikTok'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','YouTube','TikTok','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','Instagram','TikTok','Twitter'];
        datasetDataLength = industryInstagramGenreGraphDatasetData.length;
        for (var i = 0; i<industryInstagramGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryInstagramGenreGraphDatalablesData[i])) {
                s = industryInstagramGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','YouTube','Instagram'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryYoutubeGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','YouTube','TikTok'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryYoutubeGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,4 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','YouTube','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryYoutubeGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','Instagram','TikTok'];
        datasetDataLength = industryInstagramGenreGraphDatasetData.length;
        for (var i = 0; i<industryInstagramGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryInstagramGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryInstagramGenreGraphDatalablesData[i])) {
                s = industryInstagramGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,4 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','Instagram','Twitter'];
        datasetDataLength = industryInstagramGenreGraphDatasetData.length;
        for (var i = 0; i<industryInstagramGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryInstagramGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryInstagramGenreGraphDatalablesData[i])) {
                s = industryInstagramGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 3,4 with agg"); toggellblCompareIndGenreArr2 = ['Aggregate','TikTok','Twitter'];
        datasetDataLength = industryTiktokGenreGraphDatasetData.length;
        for (var i = 0; i<industryTiktokGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryTiktokGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryTiktokGenreGraphDatalablesData[i])) {
                s = industryTiktokGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryTiktokGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryTiktokGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryGenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre all"); toggellblCompareIndGenreArr2 = ['YouTube','Instagram','TikTok','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3"); toggellblCompareIndGenreArr2 = ['YouTube','Instagram','TikTok'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4"); toggellblCompareIndGenreArr2 = ['YouTube','Instagram','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4"); toggellblCompareIndGenreArr2 = ['YouTube','TikTok','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(cv1Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4"); toggellblCompareIndGenreArr2 = ['Instagram','TikTok','Twitter'];
        datasetDataLength = industryInstagramGenreGraphDatasetData.length;
        for (var i = 0; i<industryInstagramGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryInstagramGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryInstagramGenreGraphDatalablesData[i])) {
                s = industryInstagramGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2"); toggellblCompareIndGenreArr2 = ['YouTube','Instagram'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryYoutubeGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3"); toggellblCompareIndGenreArr2 = ['YouTube','TikTok'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryYoutubeGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,4"); toggellblCompareIndGenreArr2 = ['YouTube','Twitter'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryYoutubeGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3"); toggellblCompareIndGenreArr2 = ['Instagram','TikTok'];
        datasetDataLength = industryInstagramGenreGraphDatasetData.length;
        for (var i = 0; i<industryInstagramGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryInstagramGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryInstagramGenreGraphDatalablesData[i])) {
                s = industryInstagramGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,4"); toggellblCompareIndGenreArr2 = ['Instagram','Twitter'];
        datasetDataLength = industryInstagramGenreGraphDatasetData.length;
        for (var i = 0; i<industryInstagramGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryInstagramGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryInstagramGenreGraphDatalablesData[i])) {
                s = industryInstagramGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 3,4"); toggellblCompareIndGenreArr2 = ['TikTok','Twitter'];
        datasetDataLength = industryTiktokGenreGraphDatasetData.length;
        for (var i = 0; i<industryTiktokGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryTiktokGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryTiktokGenreGraphDatalablesData[i])) {
                s = industryTiktokGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryTiktokGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryTiktokGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1"); toggellblCompareIndGenreArr2 = ['YouTube'];
        datasetDataLength = industryYoutubeGenreGraphDatasetData.length;
        for (var i = 0; i<industryYoutubeGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryYoutubeGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryYoutubeGenreGraphDatalablesData[i])) {
                s = industryYoutubeGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryYoutubeGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2"); toggellblCompareIndGenreArr2 = ['Instagram'];
        datasetDataLength = industryInstagramGenreGraphDatasetData.length;
        for (var i = 0; i<industryInstagramGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryInstagramGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryInstagramGenreGraphDatalablesData[i])) {
                s = industryInstagramGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryInstagramGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 3"); toggellblCompareIndGenreArr2 = ['TikTok'];
        datasetDataLength = industryTiktokGenreGraphDatasetData.length;
        for (var i = 0; i<industryTiktokGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryTiktokGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryTiktokGenreGraphDatalablesData[i])) {
                s = industryTiktokGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryTiktokGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryTiktokGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 4"); toggellblCompareIndGenreArr2 = ['Twitter'];
        datasetDataLength = industryTwitterGenreGraphDatasetData.length;
        for (var i = 0; i<industrywitterGenreGraphDatalablesData.length; i++)
        {
            //console.log(industryTwitterGenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(industryTwitterGenreGraphDatalablesData[i])) {
                s = industryTwitterGenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(industryTwitterGenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(industryTwitterGenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": industryTwitterGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": industryTwitterGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else
    {
        showMoodRadar = false;
    }

    old_datalablesData_genre_cv2 = datalablesData;
    old_datasetsContent_genre_cv2 = cv2DatasetsContent;
    old_toggellblArr_genre_cv2 = toggellblCompareIndGenreArr2;

    // var cv2dldString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    // var cv2dld = cv2dldString.split(',');

    if(industryGenreAggrGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryGenreAggrGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryGenreAggrGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryYoutubeGenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryYoutubeGenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryYoutubeGenreGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryInstagramGenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryInstagramGenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryInstagramGenreGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryTiktokGenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryTiktokGenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = industryTiktokGenreGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryTwitterGenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,industryTwitterGenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var lblPostion = industryTwitterGenreGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(showMoodRadar == true)
    {
        /* var genreBgColorDataString = "{{implode(',',$genre_bg_color_array)}}";
        var genreBgColorData = genreBgColorDataString.split(',');
        var cv2GenreRadarChart; */

        var brandGenreCVPieOuterRadius = "";
        var brandGenreCVPieWinWidth = $(window).width();
        if (brandGenreCVPieWinWidth <= 1250 && brandGenreCVPieWinWidth >= 1200) {
            brandGenreCVPieOuterRadius = "60%";
        }
        else if (brandGenreCVPieWinWidth <= 1199 && brandGenreCVPieWinWidth >= 993) {
            brandGenreCVPieOuterRadius = "50%";
        }
        else if (brandGenreCVPieWinWidth <= 549) {
            brandGenreCVPieOuterRadius = "50%"
        }
        else {
            brandGenreCVPieOuterRadius = "67%"
        }

        cv2DatasetsContent.sort(function(a, b){return b.value - a.value});
        //console.log(cv2DatasetsContent, " CV2 Genre Data ", genreBgColorData, " Color");

        var finalCV2DatasetsContent = [];
        var cv2DatasetsContentValSum = 0;
        for(var i=0; i<cv2DatasetsContent.length;i++)
        {
            if(i<10)
            {
                finalCV2DatasetsContent.push(cv2DatasetsContent[i]);
            }
            else
            {
                cv2DatasetsContentValSum = cv2DatasetsContentValSum+cv2DatasetsContent[i].value;
            }
        }
        finalCV2DatasetsContent.push({"label": "others", "value": parseFloat(cv2DatasetsContentValSum.toFixed(2))});
        //console.log(finalCV2DatasetsContent, " finalCV2DatasetsContent");


        var cv2GenreRadarChartPieUpdate = function () {
            if (cv2GenreRadarChart) cv2GenreRadarChart.destroy();
            var div3W = $(".cv2GenreRadarChartWH").width();
            var div3H = $(".cv2GenreRadarChartWH").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div3W, div3H);
            var opt =  {
                header:{
                    titleSubtitlePadding:0
                },
                data: {
                    //sortOrder: "value-desc",
		            smallSegmentGrouping: {
			            enabled: false
		            },
                    content: finalCV2DatasetsContent,
                },
                size: {
                    pieInnerRadius: "40%",
                    pieOuterRadius: brandGenreCVPieOuterRadius,
                    canvasHeight: div3H,
                    canvasWidth: div3W,
                },
                labels: {
                    outer: {
                        pieDistance: 15
                    },
                    mainLabel: {
                        font: "RobotoMonoMedium",
                        color: "#F1F1F1",
                        fontSize: 12
                    },
                    percentage: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        decimalPlaces: 0,
                        fontSize: 12
                    },
                    value: {
                        font: "RobotoMonoMedium",
                        color: "#070706",
                        fontSize: 12
                    },
                    lines: {
                        enabled: true,
			            style: "straight",
			            color: "#A1A1A1"
                    }
                },
                tooltips:{
                    enabled:false,
                    type:"placeholder",
                    string:"{label}:{percentage}%",
                    style:{padding:5}
                },
                misc: {
                    gradient: {
                        enabled: false,
                        percentage: 100
                    },
                    pieCenterOffset: {
                        x: -8,
                        y: 0
                    },
                    colors: {
                        segments: genreBgColorData,
                        segmentStroke: "#f1f1f1"
                    },
                    canvaspadding:{
                        top:0,
                        right:0,
                        bottom:0,
                        left:0
                    }
                }
            };
            cv2GenreRadarChart = new d3pie("cv2GenreRadarChart", opt);
        };
        cv2GenreRadarChartPieUpdate();
        window.addEventListener('resize', cv2GenreRadarChartPieUpdate);

        if(toggellblCompareIndGenreArr2.length == 1)
        {
            // toggelCompareIndGenreBtns2 += '<div class="toggleWrapper">';
            // toggelCompareIndGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareIndGenreArr2[0]+'" disabled>';
            // toggelCompareIndGenreBtns2 += '<label for="r2toggle'+toggellblCompareIndGenreArr2[0]+'" class="r2toggle'+toggellblCompareIndGenreArr2[0]+'" disabled><span class="r2toggle'+toggellblCompareIndGenreArr2[0]+'_handler"></span></label>';
            // toggelCompareIndGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareIndGenreArr2[0]+'</span>';
            // toggelCompareIndGenreBtns2 += '</div>';
            for(var i=0; i<cv2SocialMediaDataExistArray.length;i++){

                if(toggellblCompareIndGenreArr2.includes(cv2SocialMediaDataExistArray[i])){

                    toggelCompareIndGenreBtns2 += '<div class="toggleWrapper">';
                    toggelCompareIndGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareIndGenreArr2[0]+'" disabled>';
                    toggelCompareIndGenreBtns2 += '<label for="r2toggle'+toggellblCompareIndGenreArr2[0]+'" class="r2toggle'+toggellblCompareIndGenreArr2[0]+'" disabled><span class="r2toggle'+toggellblCompareIndGenreArr2[0]+'_handler"></span></label>';
                    toggelCompareIndGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareIndGenreArr2[0]+'</span>';
                    toggelCompareIndGenreBtns2 += '</div>';

                }else{
                    toggelCompareIndGenreBtns2 += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggelCompareIndGenreBtns2 += '<input type="checkbox" id="r2toggle'+cv2SocialMediaDataExistArray[i]+'" disabled>';
                    toggelCompareIndGenreBtns2 += '<label for="r2toggle'+cv2SocialMediaDataExistArray[i]+'" class="r2toggle'+cv2SocialMediaDataExistArray[i]+'" disabled style="background: transparent"><span class="r2toggle'+cv2SocialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggelCompareIndGenreBtns2 += '<span class="cust-toggleBtnName">'+cv2SocialMediaDataExistArray[i]+'</span>';
                    toggelCompareIndGenreBtns2 += '</div>';
                }
            }
        }
        else
        {
            // for(var i=0; i<toggellblCompareIndGenreArr2.length;i++)
            // {
            //     toggelCompareIndGenreBtns2 += '<div class="toggleWrapper">';
            //     toggelCompareIndGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareIndGenreArr2[i]+'" >';
            //     toggelCompareIndGenreBtns2 += '<label for="r2toggle'+toggellblCompareIndGenreArr2[i]+'" class="r2toggle'+toggellblCompareIndGenreArr2[i]+'" onClick="toggleDataCompareCV(\''+toggellblCompareIndGenreArr2[i]+'\', \'withoutPopup\', \'cv2GenreRadarChart\')" ><span class="r2toggle'+toggellblCompareIndGenreArr2[i]+'_handler"></span></label>';
            //     toggelCompareIndGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareIndGenreArr2[i]+'</span>';
            //     toggelCompareIndGenreBtns2 += '</div>';
            // }

            for(var i=0; i<cv2SocialMediaDataExistArray.length;i++)
            {
                if(toggellblCompareIndGenreArr2.includes(cv2SocialMediaDataExistArray[i])){
                    var Index = toggellblCompareIndGenreArr2.indexOf(cv2SocialMediaDataExistArray[i]);
                    toggelCompareIndGenreBtns2 += '<div class="toggleWrapper">';
                    toggelCompareIndGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareIndGenreArr2[Index]+'" >';
                    toggelCompareIndGenreBtns2 += '<label for="r2toggle'+toggellblCompareIndGenreArr2[Index]+'" class="r2toggle'+toggellblCompareIndGenreArr2[Index]+'" onClick="toggleDataCompareCV(\''+toggellblCompareIndGenreArr2[Index]+'\', \'withoutPopup\', \'cv2GenreRadarChart\')" ><span class="r2toggle'+toggellblCompareIndGenreArr2[Index]+'_handler"></span></label>';
                    toggelCompareIndGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareIndGenreArr2[Index]+'</span>';
                    toggelCompareIndGenreBtns2 += '</div>';
                }else{
                    toggelCompareIndGenreBtns2 += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggelCompareIndGenreBtns2 += '<input type="checkbox" id="r2toggle'+cv2SocialMediaDataExistArray[i]+'" >';
                    toggelCompareIndGenreBtns2 += '<label for="r2toggle'+cv2SocialMediaDataExistArray[i]+'" class="r2toggle'+cv2SocialMediaDataExistArray[i]+'" onClick="toggleDataCompareCV(\''+cv2SocialMediaDataExistArray[i]+'\', \'withoutPopup\', \'cv2GenreRadarChart\')" style="background: transparent"><span class="r2toggle'+cv2SocialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggelCompareIndGenreBtns2 += '<span class="cust-toggleBtnName">'+cv2SocialMediaDataExistArray[i]+'</span>';
                    toggelCompareIndGenreBtns2 += '</div>';
                }

            }
        }
        $("#cv2GenreRadarChartButtonBox").html(toggelCompareIndGenreBtns2);
        // $("#cv2GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index) {
        //     if(index > 0) {
        //         $(this).prop( "checked", true );
        //     }
        // });
        if(toggellblCompareIndGenreArr2.length == 1){
            $("#cv2GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index,element) {
                var checkboxId = $(element).attr("id").replace("r2toggle","");
                if(toggellblCompareIndGenreArr2.includes(checkboxId)){
                    $(this).prop( "checked", false );
                }else{
                    $(this).prop( "checked", true );
                }
            });
        }else{
            $("#cv2GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index) {
                if(index > 0) {
                    $(this).prop( "checked", true );
                }
            });
        }

        /* //console.log("datalablesData"+datalablesData);

        for(var i=0; i<toggellblCompareIndGenreArr2.length;i++)
        {
            toggelCompareIndGenreBtns2 += '<div class="toggleWrapper" >';
            toggelCompareIndGenreBtns2 += '<input type="checkbox" id="rtoggleCompareCV2Genre'+toggellblCompareIndGenreArr2[i]+'" >';
            toggelCompareIndGenreBtns2 += '<label for="rtoggleCompareCV2Genre'+toggellblCompareIndGenreArr2[i]+'" class="rtoggleCompareCV2Genre'+toggellblCompareIndGenreArr2[i]+'" onClick="rtoggleCompareCV2GenreData2('+i+')" ><span class="rtoggleCompareCV2Genre'+toggellblCompareIndGenreArr2[i]+'_handler"></span></label>';
            toggelCompareIndGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareIndGenreArr2[i]+'</span>';
            toggelCompareIndGenreBtns2 += '</div>';
        }

        $("#cv2GenreRadarChartButtonBox").html(toggelCompareIndGenreBtns2);

        const ctx = document.getElementById('industryGenreRadarChart2').getContext('2d');
        const radarChart4 = new Chart(ctx, {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels: datalablesData,
                datasets: datasetsContent
            },
            options: {
                borderWidth: 0,
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'x',
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                        ticks: {
                            font: {
                                size: 11,
                                family: 'RobotoMonoLight'
                            },
                            color: '#000000',
                            maxRotation: 50,
                            minRotation: 50,
                            padding: 0,
                            autoSkip: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                        },
                        ticks: {
                            font: {
                                size: 11,
                                family: 'RobotoMonoLight'
                            },
                            color: '#000000',
                            maxRotation: 0,
                            minRotation: 0,
                            padding: 15,
                            autoSkip: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 1
                    }
                },
                elements: {
                    line: {
                        borderWidth: 0,
                        backgroundColor : '#999999'
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = radarChart4.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart4.update();
        function rtoggleCompareCV2GenreData2(value){

            const showValue = radarChart4.isDatasetVisible(value);
            if(showValue === true){
                radarChart4.hide(value);
            }
            if(showValue === false){
                radarChart4.show(value);
            }
        } */
        /* const radarChart4 = new Chart(ctx, {
            type: 'radar',
            plugins: [ChartDataLabels],
            data: {
                labels: datalablesData,
                datasets: datasetsContent
            },
            options: {
                layout: {
                    padding: 15
                },
                borderWidth: 0,
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    x: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 10,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    y: {
                        //beginAtZero: true,
                        display: false,
                        fill: false,
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        gridLines: {
                            circular: true,
                            //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                            color: colorval1
                        },
                        angleLines: {
                            color: '#333333',
                            lineWidth: 2
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            fontSize: 10,
                            fontStyle: 'RobotoMonoLight',
                            fontColor: 'black'
                        }
                    },
                    r: {
                        grid: {
                            color: "#D3D3D3",
                            circular: true,
                        },
                        angleLines: {
                            color: '#D3D3D3',
                            lineWidth: 1
                        },
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        pointLabels: {
                            color: '#555555',
                            font: {
                                family: 'RobotoMonoMedium',
                                size: 12
                            }
                        },
                        suggestedMin: 0,
                        suggestedMax: 1
                    }
                },
                elements: {
                    line: {
                        borderWidth: 0,
                        backgroundColor : '#999999'
                    }
                },
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = radarChart4.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart4.update();
        function rtoggleCompareCV2GenreData2(value){

            const showValue = radarChart4.isDatasetVisible(value);
            if(showValue === true){
                radarChart4.hide(value);
            }
            if(showValue === false){
                radarChart4.show(value);
            }
        } */
    }
    //End RADAR Graph Script 2

/* </script> */

    //=============Radar GrapData start=========================

    function getRadarChartGraphData(call_from){

        console.log("call_from == ",call_from);
        if(call_from == "cv1_Sonic_logo"){
            console.log("radar chart call from cv1_Sonic_logo");
            var slMainMoodGraph_Holder_id = "cv1_sonicLogoMainMood_radarChart_holder";
            var slMainMoodGraph_Holder_id_append = "<canvas id='cv1_sonicLogoMainMood_radarChart'></canvas>";
            var datasetdata = cv1SonicLogoMainMoodGraphDatasetData;
            var datalablesData = cv1SonicLogoMainMoodGraphDatalablesData;
            var sonicLogoMainMoodGraph_id = "cv1_sonicLogoMainMood_radarChart";
        }else{
            console.log("radar chart call from cv2_Sonic_logo");
            var slMainMoodGraph_Holder_id = "cv2_sonicLogoMainMood_radarChart_holder";
            var slMainMoodGraph_Holder_id_append = "<canvas id='cv2_sonicLogoMainMood_radarChart'></canvas>";
            var datasetdata = industrySonicLogoMainMoodGraphDatasetData;
            var datalablesData = industrySonicLogoMainMoodGraphDatalablesData;
            var sonicLogoMainMoodGraph_id = "cv2_sonicLogoMainMood_radarChart";
        }


        document.getElementById(slMainMoodGraph_Holder_id).innerHTML = "";
        document.getElementById(slMainMoodGraph_Holder_id).innerHTML = slMainMoodGraph_Holder_id_append;



        datasetsContent = [{data:datasetdata, borderColor: mgSlBColorVal, backgroundColor: mgSlBgColorVal, pointBackgroundColor: mgSlPbgColorVal, pointBorderColor: mgSlPbColorVal, pointBorderWidth: 0, pointRadius: 0}]
        const ctx = document.getElementById(sonicLogoMainMoodGraph_id).getContext('2d');
        downSlradarGraphDataSetcontent = datasetsContent;
        downSlradarGraphDataLabelcontent = datalablesData;

        const sonicLogoMainMood_config = new Chart(ctx, {
                type: 'radar',
                plugins: [ChartDataLabels],
                data:{
                    labels:datalablesData,
                    datasets:datasetsContent
                },
                options: {
                    layout: {
                        padding: 15
                    },
                    borderWidth: 0,
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        x: {
                            //beginAtZero: true,
                            display: false,
                            fill: false,
                            backgroundColor: 'rgba(0, 0, 0, 1)',
                            gridLines: {
                                circular: true,
                                //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                                color: colorval1
                            },
                            angleLines: {
                                color: '#333333',
                                lineWidth: 2
                            },
                            ticks: {
                                display: false,
                                beginAtZero: true
                            },
                            pointLabels: {
                                fontSize: 10,
                                fontStyle: 'RobotoMonoLight',
                                fontColor: 'black'
                            }
                        },
                        y: {
                            //beginAtZero: true,
                            display: false,
                            fill: false,
                            backgroundColor: 'rgba(0, 0, 0, 1)',
                            gridLines: {
                                circular: true,
                                //color: ['#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA', '#AAAAAA']
                                color: colorval1
                            },
                            angleLines: {
                                color: '#333333',
                                lineWidth: 2
                            },
                            ticks: {
                                display: false,
                                beginAtZero: true
                            },
                            pointLabels: {
                                fontSize: 11,
                                fontStyle: 'RobotoMonoLight',
                                fontColor: 'black'
                            }
                        },
                        r: {
                            grid: {
                                color: "#A1A1A1",
                                circular: true,
                            },
                            angleLines: {
                                color: '#A1A1A1',
                                lineWidth: 1
                            },
                            ticks: {
                                display: false,
                                beginAtZero: true
                            },
                            pointLabels: {
                                color: '#F1F1F1',
                                font: {
                                    family: 'RobotoMonoMedium',
                                    size: 12
                                }
                            },
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    },
                    elements: {
                        line: {
                            borderWidth: 2,
                            backgroundColor : '#999999'
                        }
                    },
                    plugins: {
                        datalabels: {
                            display: false,
                        },
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = sonicLogoMainMood_config.data.datasets.labels;
                                    return label;
                                }
                            }
                        }
                    }
                }
            });

            sonicLogoMainMood_config.update();
    }

    if(cv1SonicLogoMainMoodGraphDatalablesData.length > 0 && cv1SonicLogoMainMoodGraphDatalablesDataString !=''){
        getRadarChartGraphData("cv1_Sonic_logo");
    }

    if(industrySonicLogoMainMoodGraphDatalablesData.length > 0 && industrySonicLogoMainMoodGraphDatalablesDataString != ''){
        getRadarChartGraphData("cv2_Sonic_logo");
    }


    //=============Radar GrapData end=========================
