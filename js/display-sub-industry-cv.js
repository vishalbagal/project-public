/* <script> */
    $(".main-body-container").css("padding-bottom", "15px");

    if($(window).width() <= 767){
        $(".welBroIndMeth_padding").find(".lp_body_col_l").css("display","none");
    }
    else {
        $(".welBroIndMeth_padding").find(".lp_body_col_l").removeAttr("style");
    }

    /* var sub_insudtry_yes_avg_data = "{{implode(',',$sub_insudtry_yes_avg_data_array)}}";
    var sub_insudtry_yes_avg_data_array = sub_insudtry_yes_avg_data.split(',');
    var sub_insudtry_no_avg_data = "{{implode(',',$sub_insudtry_no_avg_data_array)}}";
    var sub_insudtry_no_avg_data_array = sub_insudtry_no_avg_data.split(',')
    var sce8DataSetsContent = []; */
    if(sub_insudtry_yes_avg_data_array != '' && sub_insudtry_yes_avg_data_array != undefined && sub_insudtry_no_avg_data_array != '' && sub_insudtry_no_avg_data_array != undefined)
    {
        var sce8DataSetsYesContent = 0;
        var sce8DataSetsYesContentCount = sub_insudtry_yes_avg_data_array.length;
        for(var i = 0; i<sub_insudtry_yes_avg_data_array.length; i++)
        {
            sce8DataSetsYesContent = sce8DataSetsYesContent+parseInt(sub_insudtry_yes_avg_data_array[i]);
        }
        //console.log("sce8DataSetsYesContent"+sce8DataSetsYesContent);
        var sce8DataSetsYesContentValue = sce8DataSetsYesContent/sce8DataSetsYesContentCount;
        sce8DataSetsContent.push(parseFloat(sce8DataSetsYesContentValue).toFixed(2));

        var sce8DataSetsNoContent = 0;
        var sce8DataSetsNoContentCount = sub_insudtry_no_avg_data_array.length;
        for(var b = 0; b<sub_insudtry_no_avg_data_array.length; b++)
        {
            sce8DataSetsNoContent = sce8DataSetsNoContent+parseInt(sub_insudtry_no_avg_data_array[b]);
        }
        //console.log("sce8DataSetsNoContent"+sce8DataSetsNoContent);
        var sce8DataSetsNoContentValue = sce8DataSetsNoContent/sce8DataSetsNoContentCount;
        sce8DataSetsContent.push(parseFloat(sce8DataSetsNoContentValue).toFixed(2));
        //console.log("sce8DataSetsContent"+sce8DataSetsContent);
    }
    if(sce8DataSetsContent !='' && sce8DataSetsContent !=undefined)
    {
        var winWIndcvdonutChart = $(window).width();
        var fontSIndcvdonutChart = 13;
        var yesNoPaddingIndcvdonutChart = 40;
        if(winWIndcvdonutChart < 768) {
            fontSIndcvdonutChart = 13;
            yesNoPaddingIndcvdonutChart = 10;
        }
        else {
            fontSIndcvdonutChart = 13;
            yesNoPaddingIndcvdonutChart = 40;
        }

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

        // Pie Chart 3
        var subIndCVPieData = [
            { label: "Yes", value: parseFloat(sce8DataSetsContent[0]) },
            { label: "No", value: parseFloat(sce8DataSetsContent[1]) }
        ];

        var subIndCVPie;

        var subIndCVPieUpdate = function () {
            if (subIndCVPie) subIndCVPie.destroy();
            var div2W = $("#subIndCVPieDiv").width();
            var div2H = $("#subIndCVPieDiv").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div2W, div2H);
            var opt =  {
                data: {
                    content: subIndCVPieData,
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
            subIndCVPie = new d3pie("subIndCVPie", opt);
        };
        subIndCVPieUpdate();
        window.addEventListener('resize', subIndCVPieUpdate);
    }
    else
    {
        $(".lpInd_section_5").find(".col-md-8").text(" ");
    }

    //Music Types Usage (On Average)
    /* var b13DataCount = "{{count($music_types_usage_on_average_dataset_data)}}";
    var b13datasetsDataString = "{{implode(',',$music_types_usage_on_average_dataset_data)}}";
    var b13datasetsData= b13datasetsDataString.split(',');
    var b13datalablesDataString = "{{implode(',',$music_types_usage_on_average_datalables_data)}}";
    var b13datalablesData= b13datalablesDataString.split(',');
    var b13borderWidthDataString = "{{implode(',',$music_types_usage_on_average_borderwidth_data)}}";
    var b13borderWidthData= b13borderWidthDataString.split(','); */

    if(b13DataCount != '' && b13DataCount != 0)
    {
        /*var winWIndcvBarChart = $(window).width();
        var yAxesRotationIndcvBarChart = 0;
        var fontSIndcvBarChart = 13;
        if(winWIndcvBarChart < 768) {
            fontSIndcvBarChart = 13;
            yAxesRotationIndcvBarChart = 45;
        }
        else {
            fontSIndcvBarChart = 13;
            yAxesRotationIndcvBarChart = 0;
        }

        var winWBarChartDisplayCV = $(window).width();
        var fontSBarChartDisplayCV = 14;
        if(winWBarChartDisplayCV < 768) {
            fontSBarChartDisplayCV = 12;
        }
        else {
            fontSBarChartDisplayCV = 14;
        }

        var areaChartData = {
            labels  : b13datalablesData,
            datasets: [
                {
                    label               : 'Average',
                    backgroundColor     : themeColor,
                    borderColor         : themeColor,
                    pointRadius          : false,
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
                text: 'Predicted world population (millions) in 2050'
            },
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            layout: {
                padding: {
                    right: 45
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
                        color: '#F1F1F1'
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
                        size: fontSIndcvBarChart,
                        family: 'RobotoMonoLight',
                    }
                },
                legend: {
                    display: false,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: fontSIndcvBarChart,
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
            }

        }

        const ctx = document.getElementById('barChart').getContext('2d');
        Chart.register(ChartDataLabels);
        const barChart = new Chart(ctx, {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: barChartData,
            options: barChartOptions,
        });*/

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

        var b13Label = '<ul class="labelList">';
        var b13datasetsDataContent = [];
        var nonZeroValCount = [];
        for (var b13i = 0; b13i < b13datasetsData.length; b13i++){
            b13datasetsDataContent.push({label: b13datasetsData[b13i].split("#_#")[0], value: +b13datasetsData[b13i].split("#_#")[1]});
            /* if(b13datasetsData[b13i].split("#_#")[1] > 0) {
                b13Label += '   <li>';
                b13Label += '       <span class="point" style="background-color:'+genreBgColorData[b13i]+'"></span>';
                b13Label += '       <label class="label">'+b13datasetsData[b13i].split("#_#")[0]+'</label>';
                b13Label += '   </li>';
                nonZeroValCount.push(genreBgColorData[b13i]);
            } */
            b13Label += '   <li>';
            if(b13datasetsData[b13i].split("#_#")[1] > 0)
                b13Label += '       <span class="point" style="background-color:'+$("#"+b13datalablesData[b13i].toLowerCase().replaceAll(" ","")).val()+'"></span>';
            else
                b13Label += '       <span class="point" style="background-color:'+$("#"+b13datalablesData[b13i].toLowerCase().replaceAll(" ","")+"Lighter").val()+'"></span>';
            b13Label += '       <label class="label">'+b13datasetsData[b13i].split("#_#")[0]+'</label>';
            b13Label += '   </li>';
            if(b13datasetsData[b13i].split("#_#")[1] > 0) {

                nonZeroValCount.push($("#"+b13datalablesData[b13i].toLowerCase().replaceAll(" ","")).val());
            }
        }
        b13Label += '</ul>';

        $(".b13LabelHolder").append(b13Label);
        console.log("b13datasetsDataContent : ", b13datasetsDataContent, " genreBgColorData : ", genreBgColorData, " nonZeroValCount : ", nonZeroValCount);
        //var finalDatasetsContent = b13datasetsDataContent;
        var datasetsContentValSum = 0;

        downB13datasetsDataContent = b13datasetsDataContent;
        downNonZeroValCount = nonZeroValCount;
        downB13Label = b13Label;

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
        $(".lpInd_section_6").find(".inner_section").find(".chart").text(" ");
    }

    setTimeout(function()
    {
        var lpIndSectionRow1_1 = $(".lpInd_section_row1_1").height()+40;
        var lpIndSectionRow1_2 = $(".lpInd_section_row1_2").height()+40;
        if(lpIndSectionRow1_1 > lpIndSectionRow1_2)
        {
            $(".lpInd_section_row1").css("height",lpIndSectionRow1_1);
        }
        else
        {
            $(".lpInd_section_row1").css("height",lpIndSectionRow1_2);
        }

        var lpIndSectionRow2_1 = $(".lpInd_section_row2_1").height()+40;
        var lpIndSectionRow2_2 = $(".lpInd_section_row2_2").height()+40;
        if(lpIndSectionRow2_1 > lpIndSectionRow2_2)
        {
            $(".lpInd_section_row2").css("height",lpIndSectionRow2_1);
        }
        else
        {
            $(".lpInd_section_row2").css("height",lpIndSectionRow2_2);
        }

        var lpSectionVideoAnalysedInner = $(".lp_section_video_analysed_inner").height();
        var lpSectionsl_radarGraphHolder1 = $(".sl_radarGraphHolder1").height();

        if(lpSectionVideoAnalysedInner > lpSectionsl_radarGraphHolder1)
        {
            $(".analysied_video_sonic_logo_section").css("height",lpSectionVideoAnalysedInner + 25 );
        }
        else
        {
            $(".analysied_video_sonic_logo_section").css("height",lpSectionsl_radarGraphHolder1 + 25);
        }
    },1000);

//start Mood RADAR Graph Script 1
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

    var toggellblArr = [];
    var toggelBtns = '';
    var moodChartInactiveToggelBtns = [];

    if(industryYoutubeMoodGraphDatasetDataString != '' && industryInstagramMoodGraphDatasetDataString != '' && industryTiktokMoodGraphDatasetDataString != '' && industryTwitterMoodGraphDatasetDataString != '' && industryMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood all with agg"); toggellblArr = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
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
        console.log("in mood 1,2,3 with agg"); toggellblArr = ['Aggregate','YouTube','Instagram','TikTok'];
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
        console.log("in mood 1,2,4 with agg"); toggellblArr = ['Aggregate','YouTube','Instagram','Twitter'];
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
        console.log("in mood all with agg"); toggellblArr = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
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
        console.log("in mood 2,3,4 with agg"); toggellblArr = ['Aggregate','Instagram','TikTok','Twitter'];
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
        console.log("in mood 1,2 with agg"); toggellblArr = ['Aggregate','YouTube','Instagram'];
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
        console.log("in mood 1,3 with agg"); toggellblArr = ['Aggregate','YouTube','TikTok'];
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
        console.log("in mood 1,4 with agg"); toggellblArr = ['Aggregate','YouTube','Twitter'];
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
        console.log("in mood 2,3 with agg"); toggellblArr = ['Aggregate','Instagram','TikTok'];
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
        console.log("in mood 2,4 with agg"); toggellblArr = ['Aggregate','Instagram','Twitter'];
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
        console.log("in mood 3,4 with agg"); toggellblArr = ['Aggregate','TikTok','Twitter'];
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
        console.log("in mood all"); toggellblArr = ['YouTube','Instagram','TikTok','Twitter'];
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
        console.log("in mood 1,2,3"); toggellblArr = ['YouTube','Instagram','TikTok'];
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
        console.log("in mood 1,2,4"); toggellblArr = ['YouTube','Instagram','Twitter'];
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
        console.log("in mood 1,3,4"); toggellblArr = ['YouTube','TikTok','Twitter'];
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
        console.log("in mood 2,3,4"); toggellblArr = ['Instagram','TikTok','Twitter'];
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
        console.log("in mood 1,2"); toggellblArr = ['YouTube','Instagram'];
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
        console.log("in mood 1,3"); toggellblArr = ['YouTube','TikTok'];
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
        console.log("in mood 1,4"); toggellblArr = ['YouTube','Twitter'];
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
        console.log("in mood 2,3"); toggellblArr = ['Instagram','TikTok'];
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
        console.log("in mood 2,4"); toggellblArr = ['Instagram','Twitter'];
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
        console.log("in mood 3,4"); toggellblArr = ['TikTok','Twitter'];
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
        console.log("in mood 1"); toggellblArr = ['YouTube'];
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
        console.log("in mood 2"); toggellblArr = ['Instagram'];
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
        console.log("in mood 3"); toggellblArr = ['TikTok'];
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
        console.log("in mood 4"); toggellblArr = ['Twitter'];
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

    old_datalablesData_1 = datalablesData;
    old_datasetsContent_1 = datasetsContent;
    old_toggellblArr_1 = toggellblArr;
    socialMediaDataExistArray = socialMediaDataExistArrayString.split(",");

    // var dldString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    // var dld = dldString.split(',');

    if(industryMoodAggrGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryMoodAggrGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryMoodAggrGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(industryYoutubeMoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryYoutubeMoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryYoutubeMoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(industryInstagramMoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryInstagramMoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryInstagramMoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(industryTiktokMoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryTiktokMoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryTiktokMoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(industryTwitterMoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryTwitterMoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryTwitterMoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(showMoodRadar == true)
    {
        // for(var i=0; i<toggellblArr.length;i++)
        // {
        //     toggelBtns += '<div class="toggleWrapper" >';
        //     toggelBtns += '<input type="checkbox" id="toggle'+toggellblArr[i]+'" >';
        //     toggelBtns += '<label for="toggle'+toggellblArr[i]+'" class="toggle'+toggellblArr[i]+'" onClick="toggleData('+i+')" ><span class="toggle'+toggellblArr[i]+'_handler"></span></label>';
        //     toggelBtns += '<span class="cust-toggleBtnName">'+toggellblArr[i]+'</span>';
        //     toggelBtns += '</div>';
        //     //moodChartInactiveToggelBtns.push(i);
        //     moodChartInactiveToggelBtns.push(toggellblArr[i]);
        // }

        //console.log("mood graph socialMediaDataExistArray == ",socialMediaDataExistArray," toggellblArr==",toggellblArr);
        for(var i=0; i<socialMediaDataExistArray.length;i++)
        {

            if(toggellblArr.includes(socialMediaDataExistArray[i])){
                var Index = toggellblArr.indexOf(socialMediaDataExistArray[i]);
                toggelBtns += '<div class="toggleWrapper" >';
                toggelBtns += '<input type="checkbox" id="toggle'+toggellblArr[Index]+'" >';
                toggelBtns += '<label for="toggle'+toggellblArr[Index]+'" class="toggle'+toggellblArr[Index]+'" onClick="toggleData('+Index+')" ><span class="toggle'+toggellblArr[Index]+'_handler"></span></label>';
                toggelBtns += '<span class="cust-toggleBtnName">'+toggellblArr[Index]+'</span>';
                toggelBtns += '</div>';
                //moodChartInactiveToggelBtns.push(i);
                moodChartInactiveToggelBtns.push(toggellblArr[Index]);
            }else{
                toggelBtns += '<div class="toggleWrapper" style="pointer-events: none;">';
                toggelBtns += '<input type="checkbox" id="toggle'+socialMediaDataExistArray[i]+'" >';
                toggelBtns += '<label for="toggle'+socialMediaDataExistArray[i]+'" class="toggle'+socialMediaDataExistArray[i]+'" onClick="toggleData('+i+')" style="background: transparent"><span class="toggle'+socialMediaDataExistArray[i]+'_handler"></span></label>';
                toggelBtns += '<span class="cust-toggleBtnName">'+socialMediaDataExistArray[i]+'</span>';
                toggelBtns += '</div>';
            }

        }
        $("#mood_chart_inactive_toggel_btns").val(moodChartInactiveToggelBtns);
        $("#radarChart1ButtonBox").html(toggelBtns);

        const ctx = document.getElementById('radarChart1').getContext('2d');
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
        function toggleData(value){

            const showValue = radarChart1.isDatasetVisible(value);
            if(showValue === true){
                radarChart1.hide(value);
                /* for( var i = 0; i < moodChartInactiveToggelBtns.length; i++){

                    if ( moodChartInactiveToggelBtns[i] === value) {

                        moodChartInactiveToggelBtns.splice(i, 1);
                    }

                } */
                var pType = '';
                if(value == 0 || value == 1 || value == 2 || value == 3 || value == 4)
                {
                    /* switch(value)
                    {
                        case 0:
                            pType = "Aggregate";
                        break;
                        case 1:
                            pType = "YouTube";
                        break;
                        case 2:
                            pType = "Instagram";
                        break;
                        case 3:
                            pType = "TikTok";
                        break;
                        case 4:
                            pType = "Twitter";
                        break;
                    } */
                    pType = toggellblArr[value];
                    // console.log("showValue === true pType IF => ", toggellblArr[value]);
                }
                else
                {
                    switch(value)
                    {
                        case 0:
                            pType = "Aggregate";
                        break;
                        case 1:
                            pType = "YouTube";
                        break;
                        case 2:
                            pType = "Instagram";
                        break;
                        case 3:
                            pType = "TikTok";
                        break;
                        case 4:
                            pType = "Twitter";
                        break;
                    }
                }
                if(pType != '')
                {
                    if(moodChartInactiveToggelBtns.includes(pType.toString()))
                    {
                        moodChartInactiveToggelBtns.splice($.inArray(pType.toString(), moodChartInactiveToggelBtns), 1);
                    }
                }

                if(moodChartInactiveToggelBtns.length == 5)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('YouTube'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                        const toIndex = 1;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('Instagram'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                        const toIndex = 2;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('TikTok'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                        const toIndex = 3;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                        const toIndex = 4;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }
                }
                else if(moodChartInactiveToggelBtns.length == 4)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 1;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 2;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 3;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 3;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 3;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }

                            if(moodChartInactiveToggelBtns.includes('TikTok'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                const toIndex = 2;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }

                            if(moodChartInactiveToggelBtns.includes('Twitter'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                const toIndex = 3;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                        }
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }

                        if(moodChartInactiveToggelBtns.includes('Instagram'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                            const toIndex = 1;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }

                        if(moodChartInactiveToggelBtns.includes('TikTok'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                            const toIndex = 2;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }

                        if(moodChartInactiveToggelBtns.includes('Twitter'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                            const toIndex = 3;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }
                    }

                }
                else if(moodChartInactiveToggelBtns.length == 3)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 1;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 2;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }

                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }

                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 0;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                    }
                }
                else if(moodChartInactiveToggelBtns.length == 2)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 1;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 0;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 1;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 0;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                    }
                }
                else
                {
                    if(moodChartInactiveToggelBtns.includes('YouTube'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('Instagram'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('TikTok'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                const toIndex = 0;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 0;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }

                        }
                    }
                }
                $("#mood_chart_inactive_toggel_btns").val(moodChartInactiveToggelBtns);
                //console.log("off if", moodChartInactiveToggelBtns);
            }
            if(showValue === false){
                radarChart1.show(value);
                var pType = '';
                if(value == 0 || value == 1 || value == 2 || value == 3 || value == 4)
                {
                    /* switch(value)
                    {
                        case 0:
                            pType = "Aggregate";
                        break;
                        case 1:
                            pType = "YouTube";
                        break;
                        case 2:
                            pType = "Instagram";
                        break;
                        case 3:
                            pType = "TikTok";
                        break;
                        case 4:
                            pType = "Twitter";
                        break;
                    } */
                    pType = toggellblArr[value];
                    // console.log("showValue === true pType IF => ", toggellblArr[value]);
                }
                else
                {
                    switch(value)
                    {
                        case 0:
                            pType = "Aggregate";
                        break;
                        case 1:
                            pType = "YouTube";
                        break;
                        case 2:
                            pType = "Instagram";
                        break;
                        case 3:
                            pType = "TikTok";
                        break;
                        case 4:
                            pType = "Twitter";
                        break;
                    }
                }
                if(pType != '')
                {
                    if(!moodChartInactiveToggelBtns.includes(pType.toString()))
                    {
                        moodChartInactiveToggelBtns.push(pType.toString());
                    }
                }
                if(moodChartInactiveToggelBtns.length == 5)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('YouTube'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                        const toIndex = 1;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('Instagram'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                        const toIndex = 2;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('TikTok'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                        const toIndex = 3;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }

                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                        const toIndex = 4;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }
                }
                else if(moodChartInactiveToggelBtns.length == 4)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 1;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 2;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 3;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 3;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 3;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }

                            if(moodChartInactiveToggelBtns.includes('TikTok'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                const toIndex = 2;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }

                            if(moodChartInactiveToggelBtns.includes('Twitter'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                const toIndex = 3;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                        }
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }

                        if(moodChartInactiveToggelBtns.includes('Instagram'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                            const toIndex = 1;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }

                        if(moodChartInactiveToggelBtns.includes('TikTok'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                            const toIndex = 2;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }

                        if(moodChartInactiveToggelBtns.includes('Twitter'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                            const toIndex = 3;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }
                    }

                }
                else if(moodChartInactiveToggelBtns.length == 3)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 1;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 2;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }

                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 2;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }

                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 0;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 2;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                    }
                }
                else if(moodChartInactiveToggelBtns.length == 2)
                {
                    if(moodChartInactiveToggelBtns.includes('Aggregate'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Aggregate'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('YouTube'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 1;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 1;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('Instagram'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                                const toIndex = 0;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);

                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                                else
                                {
                                    if(moodChartInactiveToggelBtns.includes('Twitter'))
                                    {
                                        const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                        const toIndex = 1;

                                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                        console.log(element); // ['css']

                                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                    }
                                }
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('TikTok'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                    const toIndex = 0;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }

                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 1;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }
                        }
                    }
                }
                else
                {
                    if(moodChartInactiveToggelBtns.includes('YouTube'))
                    {
                        const fromIndex = moodChartInactiveToggelBtns.indexOf('YouTube'); // 👉️ 0
                        const toIndex = 0;

                        const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                        console.log(element); // ['css']

                        moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                    }
                    else
                    {
                        if(moodChartInactiveToggelBtns.includes('Instagram'))
                        {
                            const fromIndex = moodChartInactiveToggelBtns.indexOf('Instagram'); // 👉️ 0
                            const toIndex = 0;

                            const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                            console.log(element); // ['css']

                            moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                        }
                        else
                        {
                            if(moodChartInactiveToggelBtns.includes('TikTok'))
                            {
                                const fromIndex = moodChartInactiveToggelBtns.indexOf('TikTok'); // 👉️ 0
                                const toIndex = 0;

                                const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                console.log(element); // ['css']

                                moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                            }
                            else
                            {
                                if(moodChartInactiveToggelBtns.includes('Twitter'))
                                {
                                    const fromIndex = moodChartInactiveToggelBtns.indexOf('Twitter'); // 👉️ 0
                                    const toIndex = 0;

                                    const element = moodChartInactiveToggelBtns.splice(fromIndex, 1)[0];
                                    console.log(element); // ['css']

                                    moodChartInactiveToggelBtns.splice(toIndex, 0, element);
                                }
                            }

                        }
                    }
                }
                $("#mood_chart_inactive_toggel_btns").val(moodChartInactiveToggelBtns);
                //console.log("if", moodChartInactiveToggelBtns);
            }
        }
    }

    //End Mood RADAR Graph Script 1

//Start RADAR Graph Script 2
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
    var datasetsContent = [];
    var showMoodRadar = false;

    var toggellbl1Arr = [];
    var toggel1Btns = '';

    /* if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre all with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','TikTok'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','Twitter'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','TikTok','Twitter'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4 with agg"); toggellbl1Arr = ['Aggregate','Instagram','TikTok','Twitter'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3 with agg"); toggellbl1Arr = ['Aggregate','YouTube','TikTok'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Twitter'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3 with agg"); toggellbl1Arr = ['Aggregate','Instagram','TikTok'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,4 with agg"); toggellbl1Arr = ['Aggregate','Instagram','Twitter'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 3,4 with agg"); toggellbl1Arr = ['Aggregate','TikTok','Twitter'];
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
        datasetsContent = [{ label: 'Aggregate', data: industryGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre all"); toggellbl1Arr = ['YouTube','Instagram','TikTok','Twitter'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3"); toggellbl1Arr = ['YouTube','Instagram','TikTok'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4"); toggellbl1Arr = ['YouTube','Instagram','Twitter'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4"); toggellbl1Arr = ['YouTube','TikTok','Twitter'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4"); toggellbl1Arr = ['Instagram','TikTok','Twitter'];
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
        datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2"); toggellbl1Arr = ['YouTube','Instagram'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3"); toggellbl1Arr = ['YouTube','TikTok'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,4"); toggellbl1Arr = ['YouTube','Twitter'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3"); toggellbl1Arr = ['Instagram','TikTok'];
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
        datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,4"); toggellbl1Arr = ['Instagram','Twitter'];
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
        datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1"); toggellbl1Arr = ['YouTube'];
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
        datasetsContent = [{ label: 'YouTube', data: industryYoutubeGenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2"); toggellbl1Arr = ['Instagram'];
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
        datasetsContent = [{ label: 'Instagram', data: industryInstagramGenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 3"); toggellbl1Arr = ['TikTok'];
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
        datasetsContent = [{ label: 'TikTok', data: industryTiktokGenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else if(industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 4"); toggellbl1Arr = ['Twitter'];
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
        datasetsContent = [{ label: 'Twitter', data: industryTwitterGenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        showMoodRadar = true;
    }
    else
    {
        showMoodRadar = false;
    } */

    datasetsContentAggr = [];
    datasetsContentYt = [];
    datasetsContentIg= [];
    datasetsContentTt= [];
    datasetsContentTwt= [];

    if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre all with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
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
            datasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','TikTok'];
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
            datasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','Twitter'];
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
            datasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','TikTok','Twitter'];
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
            datasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4 with agg"); toggellbl1Arr = ['Aggregate','Instagram','TikTok','Twitter'];
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
            datasetsContentAggr.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram'];
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
            datasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3 with agg"); toggellbl1Arr = ['Aggregate','YouTube','TikTok'];
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
            datasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Twitter'];
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
            datasetsContentAggr.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryYoutubeGenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3 with agg"); toggellbl1Arr = ['Aggregate','Instagram','TikTok'];
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
            datasetsContentAggr.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,4 with agg"); toggellbl1Arr = ['Aggregate','Instagram','Twitter'];
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
            datasetsContentAggr.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '' && industryGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 3,4 with agg"); toggellbl1Arr = ['Aggregate','TikTok','Twitter'];
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
            datasetsContentAggr.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre all"); toggellbl1Arr = ['YouTube','Instagram','TikTok','Twitter'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3"); toggellbl1Arr = ['YouTube','Instagram','TikTok'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4"); toggellbl1Arr = ['YouTube','Instagram','Twitter'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4"); toggellbl1Arr = ['YouTube','TikTok','Twitter'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4"); toggellbl1Arr = ['Instagram','TikTok','Twitter'];
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
            datasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryInstagramGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2"); toggellbl1Arr = ['YouTube','Instagram'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryInstagramGenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3"); toggellbl1Arr = ['YouTube','TikTok'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,4"); toggellbl1Arr = ['YouTube','Twitter'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3"); toggellbl1Arr = ['Instagram','TikTok'];
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
            datasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTiktokGenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '' && industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,4"); toggellbl1Arr = ['Instagram','Twitter'];
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
            datasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        for(var i=0; i<industryTwitterGenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryYoutubeGenreGraphDatasetDataString != '')
    {
        console.log("in genre 1"); toggellbl1Arr = ['YouTube'];
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
            datasetsContentYt.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryYoutubeGenreGraphDatalablesData[i], "value": parseFloat(industryYoutubeGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryInstagramGenreGraphDatasetDataString != '')
    {
        console.log("in genre 2"); toggellbl1Arr = ['Instagram'];
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
            datasetsContentIg.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryInstagramGenreGraphDatalablesData[i], "value": parseFloat(industryInstagramGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryTiktokGenreGraphDatasetDataString != '')
    {
        console.log("in genre 3"); toggellbl1Arr = ['TikTok'];
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
            datasetsContentTt.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryTiktokGenreGraphDatalablesData[i], "value": parseFloat(industryTiktokGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(industryTwitterGenreGraphDatasetDataString != '')
    {
        console.log("in genre 4"); toggellbl1Arr = ['Twitter'];
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
            datasetsContentTwt.push({"label": industryTwitterGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
            datasetsContent.push({"label": industryTwitterGenreGraphDatalablesData[i], "value": parseFloat(industryTwitterGenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else
    {
        showMoodRadar = false;
    }

    old_datalablesData_2 = datalablesData;
    old_datasetsContent_2 = datasetsContent;
    old_toggellblArr_2 = toggellbl1Arr;

    // var dldString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    // var dld = dldString.split(',');

    if(industryGenreAggrGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryGenreAggrGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryGenreAggrGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryYoutubeGenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryYoutubeGenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryYoutubeGenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryInstagramGenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryInstagramGenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryInstagramGenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryTiktokGenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryTiktokGenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryTiktokGenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(industryTwitterGenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,industryTwitterGenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = industryTwitterGenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(showMoodRadar == true)
    {
        //console.log("datalablesData"+datalablesData);

        /* var genreBgColorDataString = "{{implode(',',$genre_bg_color_array)}}";
        var genreBgColorData = genreBgColorDataString.split(',');
        var radarChart2; */

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

        datasetsContent.sort(function(a, b){return b.value - a.value});
        //console.log(datasetsContent, " Genre Data ", genreBgColorData, " Color");

        var finalDatasetsContent = [];
        var datasetsContentValSum = 0;
        for(var i=0; i<datasetsContent.length;i++)
        {
            if(i<10)
            {
                finalDatasetsContent.push(datasetsContent[i]);
            }
            else
            {
                datasetsContentValSum = datasetsContentValSum+datasetsContent[i].value;
            }
        }
        finalDatasetsContent.push({"label": "others", "value": parseFloat(datasetsContentValSum.toFixed(2))});
        //console.log(finalDatasetsContent, " finalDatasetsContent");


        var radarChart2PieUpdate = function () {
            if (radarChart2) radarChart2.destroy();
            var div3W = $(".radarChart2WH").width();
            var div3H = $(".radarChart2WH").height();
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
                    content: finalDatasetsContent,
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
            radarChart2 = new d3pie("radarChart2", opt);
        };
        radarChart2PieUpdate();
        window.addEventListener('resize', radarChart2PieUpdate);
        //console.log("genre graph socialMediaDataExistArray == ",socialMediaDataExistArray," toggellblArr==",toggellblArr);
        if(toggellbl1Arr.length == 1)
        {
            // toggel1Btns += '<div class="toggleWrapper">';
            // toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[0]+'" disabled>';
            // toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[0]+'" class="r2toggle'+toggellbl1Arr[0]+'" disabled><span class="r2toggle'+toggellbl1Arr[0]+'_handler"></span></label>';
            // toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[0]+'</span>';
            // toggel1Btns += '</div>';
            for(var i=0; i<socialMediaDataExistArray.length;i++){

                if(toggellbl1Arr.includes(socialMediaDataExistArray[i])){

                    toggel1Btns += '<div class="toggleWrapper">';
                    toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[0]+'" disabled>';
                    toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[0]+'" class="r2toggle'+toggellbl1Arr[0]+'" disabled><span class="r2toggle'+toggellbl1Arr[0]+'_handler"></span></label>';
                    toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[0]+'</span>';
                    toggel1Btns += '</div>';

                }else{
                    toggel1Btns += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggel1Btns += '<input type="checkbox" id="r2toggle'+socialMediaDataExistArray[i]+'" disabled>';
                    toggel1Btns += '<label for="r2toggle'+socialMediaDataExistArray[i]+'" class="r2toggle'+socialMediaDataExistArray[i]+'" disabled style="background: transparent"><span class="r2toggle'+socialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggel1Btns += '<span class="cust-toggleBtnName">'+socialMediaDataExistArray[i]+'</span>';
                    toggel1Btns += '</div>';
                }
            }
        }
        else
        {
            // for(var i=0; i<toggellbl1Arr.length;i++)
            // {
            //     toggel1Btns += '<div class="toggleWrapper">';
            //     toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[i]+'" >';
            //     toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[i]+'" class="r2toggle'+toggellbl1Arr[i]+'" onClick="toggleDataBrandCV(\''+toggellbl1Arr[i]+'\', \'withoutPopup\')" ><span class="r2toggle'+toggellbl1Arr[i]+'_handler"></span></label>';
            //     toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[i]+'</span>';
            //     toggel1Btns += '</div>';
            // }

            for(var i=0; i<socialMediaDataExistArray.length;i++)
            {
                if(toggellbl1Arr.includes(socialMediaDataExistArray[i])){
                    var Index = toggellbl1Arr.indexOf(socialMediaDataExistArray[i]);
                    toggel1Btns += '<div class="toggleWrapper">';
                    toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[Index]+'" >';
                    toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[Index]+'" class="r2toggle'+toggellbl1Arr[Index]+'" onClick="toggleDataBrandCV(\''+toggellbl1Arr[Index]+'\', \'withoutPopup\')" ><span class="r2toggle'+toggellbl1Arr[Index]+'_handler"></span></label>';
                    toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[Index]+'</span>';
                    toggel1Btns += '</div>';
                }else{
                    toggel1Btns += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggel1Btns += '<input type="checkbox" id="r2toggle'+socialMediaDataExistArray[i]+'" >';
                    toggel1Btns += '<label for="r2toggle'+socialMediaDataExistArray[i]+'" class="r2toggle'+socialMediaDataExistArray[i]+'" onClick="toggleDataBrandCV(\''+socialMediaDataExistArray[i]+'\', \'withoutPopup\')" style="background: transparent"><span class="r2toggle'+socialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggel1Btns += '<span class="cust-toggleBtnName">'+socialMediaDataExistArray[i]+'</span>';
                    toggel1Btns += '</div>';
                }

            }
        }

        $("#radarChart2ButtonBox").html(toggel1Btns);
        // $("#radarChart2ButtonBox").find("input[type='checkbox']").each(function(index) {
        //     if(index > 0) {
        //         $(this).prop( "checked", true );
        //     }
        //     else
        //     {
        //         $("#genre_chart_active_toggel_btn").val($(this).attr("id").replace("r2toggle",""));
        //     }
        // });

        if(toggellbl1Arr.length == 1){

            $("#radarChart2ButtonBox").find("input[type='checkbox']").each(function(index,element) {
                var checkboxId = $(element).attr("id").replace("r2toggle","");
                if(toggellbl1Arr.includes(checkboxId)){
                    $(this).prop( "checked", false );
                }else{
                    $(this).prop( "checked", true );
                }

            });
            $("#genre_chart_active_toggel_btn").val(toggellbl1Arr[0]);
        }else{
            $("#radarChart2ButtonBox").find("input[type='checkbox']").each(function(index) {

                if(index > 0) {
                    $(this).prop( "checked", true );
                }
                else
                {
                    $("#genre_chart_active_toggel_btn").val($(this).attr("id").replace("r2toggle",""));
                }
            });
        }

        /* for(var i=0; i<toggellbl1Arr.length;i++)
        {
            toggel1Btns += '<div class="toggleWrapper" >';
            toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[i]+'" >';
            toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[i]+'" class="r2toggle'+toggellbl1Arr[i]+'" onClick="toggleData2('+i+')" ><span class="r2toggle'+toggellbl1Arr[i]+'_handler"></span></label>';
            toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[i]+'</span>';
            toggel1Btns += '</div>';
        }

        $("#radarChart2ButtonBox").html(toggel1Btns);

        const ctx = document.getElementById('radarChart2').getContext('2d');
        const radarChart2 = new Chart(ctx, {
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
                                let label = radarChart2.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart2.update();
        function toggleData2(value){

            const showValue = radarChart2.isDatasetVisible(value);
            if(showValue === true){
                radarChart2.hide(value);
            }
            if(showValue === false){
                radarChart2.show(value);
            }
        } */
        /* const radarChart2 = new Chart(ctx, {
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
                                let label = radarChart2.data.datasets.labels;
                                return label;
                            }
                        }
                    }
                }
            }
        });
        radarChart2.update();
        function toggleData2(value){

            const showValue = radarChart2.isDatasetVisible(value);
            if(showValue === true){
                radarChart2.hide(value);
            }
            if(showValue === false){
                radarChart2.show(value);
            }
        } */
    }
    //End RADAR Graph Script 2
//getGraphData();
/* </script> */

// sonic logo main mood graph data

    function getRadarChartGraphData(call_from){

        document.getElementById('sonicLogoMainMood_radarChart1_holder').innerHTML = "";
        document.getElementById('sonicLogoMainMood_radarChart1_holder').innerHTML ='<canvas id="sonicLogoMainMood_radarChart1"></canvas>';

        datasetdata = industrySonicLogoMainMoodGraphDatasetData;
        datalablesData = industrySonicLogoMainMoodGraphDatalablesData;

        console.log("graph_data",call_from,datasetdata,datalablesData);

        datasetsContent = [{data:datasetdata, borderColor: mgSlBColorVal, backgroundColor: mgSlBgColorVal, pointBackgroundColor: mgSlPbgColorVal, pointBorderColor: mgSlPbColorVal, pointBorderWidth: 0, pointRadius: 0}]
        const ctx = document.getElementById('sonicLogoMainMood_radarChart1').getContext('2d');
        downSubIndSlradarGraphDataSetcontent = datasetsContent;
        downSubIndSlradarGraphDataLabelcontent = datalablesData;

        const radarChart = new Chart(ctx, {
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
                                    let label = radarChart.data.datasets.labels;
                                    return label;
                                }
                            }
                        }
                    }
                }
            });

            radarChart.update();


    }
    if(industrySonicLogoMainMoodGraphDatalablesData.length > 0 && industrySonicLogoMainMoodGraphDatalablesDataString != ''){
        getRadarChartGraphData('sonic_logo');
    }
