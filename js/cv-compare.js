/* <script> */
    $(".main-body-container").css("padding-bottom", "35px");

    if ($(window).width() > 767) {
        var compareCVfooterWidth = $("#compareCVfooterWidth").width() + 8;
    }
    else if ($(window).width() <= 767 && $(window).width() > 640) {
        var compareCVfooterWidth = $("#compareCVfooterWidth").width() - 10;
    }
    else {
        var compareCVfooterWidth = $(".compareTableMobileInner").width();
    }

    var compareCVfooterWidthTd = compareCVfooterWidth / 2;

    $(".lpCompareCV_table").find("td.lpCompareCV_table_td").css("width", compareCVfooterWidthTd);

    if($(window).width()<=767) {
        var compareCVVideo = compareCVfooterWidthTd - 35;
        var compareCVSMS = compareCVfooterWidthTd - 35;
    }
    else {
        var compareCVVideo = compareCVfooterWidthTd - 60;
        var compareCVSMS = compareCVfooterWidthTd - 60;
    }

    if ($(window).width() > 640) {
        if($(window).width() > 640 && $(window).width() <= 767){
            $(".lpCompareCV_table").css("width", compareCVfooterWidth + 22);
        }
        else {
            $(".lpCompareCV_table").css("width", compareCVfooterWidth);
        }
        $(".lpCompareCV_table").find(".lp_CompareCVVideo1, .lp_CompareCVVideo2").css("width", compareCVVideo);
        $(".lpCompareCV_table").find(".lp_CompareCVSMS1, .lp_CompareCVSMS2").css("width", compareCVSMS);
    }
    else {
        $(".lpCompareCV_table").removeAttr("style");
        if($(window).width() <= 640 && $(window).width() >= 320) {
            $(".lpCompareCV_table").find(".lp_CompareCVVideo1, .lp_CompareCVVideo2").css("width", "270px");
            $(".lpCompareCV_table").find(".lp_CompareCVSMS1, .lp_CompareCVSMS2").css("width", "270px");
        }
        /* else {
            $(".lpCompareCV_table").find(".lp_CompareCVVideo1, .lp_CompareCVVideo2").css("width", "225px");
            $(".lpCompareCV_table").find(".lp_CompareCVSMS1, .lp_CompareCVSMS2").css("width", "225px");
        } */
    }

    var compareCVBarChartW = compareCVfooterWidthTd - 24;
    $(".lpCompareCV_table").find(".barChartCompareCV").css("width", compareCVBarChartW);

    /* setTimeout(function(){
        var lpCompareCVSection9cv1 = $(".lpCompareCV_section_9_cv1").height()+40;
        var lpCompareCVSection9cv2 = $(".lpCompareCV_section_9_cv2").height()+40;
        getCompareCV1MostPopVideoHeight(lpCompareCVSection9cv1);
        getCompareCV2MostPopVideoHeight(lpCompareCVSection9cv2);
        function getCompareCV1MostPopVideoHeight(__currentH1){
            var compareCV1MostPopVideoHeight = $(".compareCV1MostPopVideo").height();
            var ptopDiff = __currentH1 - compareCV1MostPopVideoHeight;
            var ptop = ptopDiff/2;
            $(".compareCV1MostPopVideoPDiv").css("margin-top",ptop-55);
        }
        function getCompareCV2MostPopVideoHeight(__currentH2){
            var compareCV2MostPopVideoHeight = $(".compareCV2MostPopVideo").height();
            var ptopDiff = __currentH2 - compareCV2MostPopVideoHeight;
            var ptop = ptopDiff/2;
            $(".compareCV2MostPopVideoPDiv").css("margin-top",ptop-55);
        }
    }, 3000); */

    /* setTimeout(function()
    {
        var winWYesNoCompareCV = $(window).width();
        var fontSYesNoCompareCV = 13;
        var yesNoPaddingCompareCV = 30;
        if(winWYesNoCompareCV < 768) {
            fontSYesNoCompareCV = 10;
            yesNoPaddingCompareCV = 10;
        }
        else {
            fontSYesNoCompareCV = 13;
            yesNoPaddingCompareCV = 30;
        } */

        /* //- PIE CHART for Section 7 / SONIC LOGO USAGE
        var cv1b7DataCount = "{{count($cv1_b7_dataset_data)}}";
        var cv1datasetsDataString = "{{implode(',',$cv1_b7_dataset_data)}}";
        var cv1datasetsData= cv1datasetsDataString.split(',');
        var cv1pieChartBgColorNames = "{{ implode(',',config('custom.pie_chartsec78_bg_color'))}}"; */
        /* if(cv1datasetsData[0]==0 && cv1datasetsData[1]!=0)
        {
            var cv1pieChartBgColorArrayB7 = ['#a7a8a9', '#a7a8a9'];
        }
        else
        {
            var cv1pieChartBgColorArrayB7 = cv1pieChartBgColorNames.split(',');
        }
        //var cv1pieChartBgColorArray = cv1pieChartBgColorNames.split(',');

        if(cv1b7DataCount!=0 && cv1b7DataCount!='' && cv1datasetsData!=',')
        {
            var compareCVPieData1 = [
                { label: "Yes", value: parseInt(cv1datasetsData[0])},
                { label: "No", value: parseInt(cv1datasetsData[1]) }
            ];
            var compareCVPie1;

            var compareCVPieUpdate1 = function () {
                if (compareCVPie1) compareCVPie1.destroy();
                var div1W = $("#compareCVPieDiv1").width();
                var div1H = $("#compareCVPieDiv1").height();
                //var size = Math.min(innerHeight, innerWidth) / 2;
                var size = Math.min(div1W, div1H);
                var opt =  {
                    data: {
                        content: compareCVPieData1
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
                            segments: cv1pieChartBgColorArrayB7,
                            segmentStroke: "#8b8c90"
                        }
                    }
                };
                compareCVPie1 = new d3pie("cv1pieChart", opt);
            };

            compareCVPieUpdate1();
            window.addEventListener('resize', compareCVPieUpdate1); */

            /* var industry_id = "{{$cv1_data->industry_id}}"; */
            /* if(industry_id != '' && industry_id != null)
            {
                //var cv1suiaUrl = "{{url('get-industry-avg')}}"+'/'+industry_id;

                var cv1sce8DataSetsContent = [];
                $.ajax({
                    type: "GET",
                    url: cv1suiaUrl,
                    data: "",
                    success: function(data) {
                        //console.log("insudtry_yes_avg_data_array"+data['insudtry_yes_avg_data_array']+"--:--insudtry_no_avg_data_array"+data['insudtry_no_avg_data_array']);

                        if(data['insudtry_yes_avg_data_array'] != '' && data['insudtry_yes_avg_data_array'] != undefined && data['insudtry_no_avg_data_array'] != '' && data['insudtry_no_avg_data_array'] != undefined)
                        {
                            var cv1sce8DataSetsYesContent = 0;
                            var cv1sce8DataSetsYesContentCount = data['insudtry_yes_avg_data_array'].length;
                            for(var i = 0; i<data['insudtry_yes_avg_data_array'].length; i++)
                            {
                                cv1sce8DataSetsYesContent = cv1sce8DataSetsYesContent+parseInt(data['insudtry_yes_avg_data_array'][i]);
                            }
                            //console.log("cv1sce8DataSetsYesContent"+cv1sce8DataSetsYesContent);
                            var cv1sce8DataSetsYesContentValue = cv1sce8DataSetsYesContent/cv1sce8DataSetsYesContentCount;
                            cv1sce8DataSetsContent.push(parseFloat(cv1sce8DataSetsYesContentValue).toFixed(2));

                            var cv1sce8DataSetsNoContent = 0;
                            var cv1sce8DataSetsNoContentCount = data['insudtry_no_avg_data_array'].length;
                            for(var b = 0; b<data['insudtry_no_avg_data_array'].length; b++)
                            {
                                cv1sce8DataSetsNoContent = cv1sce8DataSetsNoContent+parseInt(data['insudtry_no_avg_data_array'][b]);
                            }
                            //console.log("cv1sce8DataSetsNoContent"+cv1sce8DataSetsNoContent);
                            var cv1sce8DataSetsNoContentValue = cv1sce8DataSetsNoContent/cv1sce8DataSetsNoContentCount;
                            cv1sce8DataSetsContent.push(parseFloat(cv1sce8DataSetsNoContentValue).toFixed(2));
                            //console.log("cv1sce8DataSetsContent"+cv1sce8DataSetsContent);
                        }
                    },
                    complete: function(){
                        if(cv1sce8DataSetsContent !='' && cv1sce8DataSetsContent !=undefined)
                        {
                            //var cv1pieChartBgColorNames = "{{ implode(',',config('custom.pie_chartsec78_bg_color'))}}";
                            if(cv1sce8DataSetsContent[0]==0 && cv1sce8DataSetsContent[1]!=0)
                            {
                                var cv1pieChartBgColorArrayB8 = ['#a7a8a9', '#a7a8a9'];
                            }
                            else
                            {
                                var cv1pieChartBgColorArrayB8 = cv1pieChartBgColorNames.split(',');
                            }
                            //var cv1pieChartBgColorArray = cv1pieChartBgColorNames.split(',');

                            var compareCVPieData2 = [
                                { label: "Yes", value: parseInt(cv1sce8DataSetsContent[0])},
                                { label: "No", value: parseInt(cv1sce8DataSetsContent[1]) }
                            ];
                            var compareCVPie2;

                            var compareCVPieUpdate2 = function () {
                                if (compareCVPie2) compareCVPie2.destroy();
                                var div1W = $("#compareCVPieDiv2").width();
                                var div1H = $("#compareCVPieDiv2").height();
                                //var size = Math.min(innerHeight, innerWidth) / 2;
                                var size = Math.min(div1W, div1H);
                                var opt =  {
                                    data: {
                                        content: compareCVPieData2
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
                                            segments: cv1pieChartBgColorArrayB8,
                                            segmentStroke: "#8b8c90"
                                        }
                                    }
                                };
                                compareCVPie2 = new d3pie("cv1donutChart0", opt);
                            };

                            compareCVPieUpdate2();
                            window.addEventListener('resize', compareCVPieUpdate2);
                        }
                        else
                        {
                            $(".lp_section_07_02").find(".col-md-8").text(" ");
                        }
                    }
                });
            }
        }
        else
        {
            $(".lpCompareCV_section_7_cv1").find(".mt-2").find("col-md-12").text(" ");
            $(".lpCompareCV_section_8_cv1").find(".mt-2").find(".lpCompareCV_section_07_02").find("col-md-12").text(" ");
        } */

        /* var cv2b7DataCount = "{{count($cv2_b7_dataset_data)}}";
        var cv2datasetsDataString = "{{implode(',',$cv2_b7_dataset_data)}}";
        var cv2datasetsData= cv2datasetsDataString.split(',');
        var cv2pieChartBgColorNames = "{{ implode(',',config('custom.pie_chartsec78_bg_color'))}}"; */
        /* if(cv2datasetsData[0]==0 && cv2datasetsData[1]!=0)
        {
            var cv2pieChartBgColorArrayB7 = ['#a7a8a9', '#a7a8a9'];
        }
        else
        {
            var cv2pieChartBgColorArrayB7 = cv2pieChartBgColorNames.split(',');
        }
        //var cv2pieChartBgColorArray = cv2pieChartBgColorNames.split(',');

        if(cv2b7DataCount!=0 && cv2b7DataCount!='' && cv2datasetsData!=',')
        {
            var compareCVPieData3 = [
                { label: "Yes", value: parseInt(cv2datasetsData[0])},
                { label: "No", value: parseInt(cv2datasetsData[1]) }
            ];
            var compareCVPie3;

            var compareCVPieUpdate3 = function () {
                if (compareCVPie3) compareCVPie3.destroy();
                var div1W = $("#compareCVPieDiv3").width();
                var div1H = $("#compareCVPieDiv3").height();
                //var size = Math.min(innerHeight, innerWidth) / 2;
                var size = Math.min(div1W, div1H);
                var opt =  {
                    data: {
                        content: compareCVPieData3
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
                            segments: cv2pieChartBgColorArrayB7,
                            segmentStroke: "#8b8c90"
                        }
                    }
                };
                compareCVPie3 = new d3pie("cv2pieChart", opt);
            };

            compareCVPieUpdate3();
            window.addEventListener('resize', compareCVPieUpdate3);

            //var industry_id = "{{$cv2_data->industry_id}}";
            if(industry_id != '' && industry_id != null)
            {
                //var cv2suiaUrl = "{{url('get-industry-avg')}}"+'/'+industry_id;

                var cv2sce8DataSetsContent = [];
                $.ajax({
                    type: "GET",
                    url: cv2suiaUrl,
                    data: "",
                    success: function(data) {
                        //console.log("insudtry_yes_avg_data_array"+data['insudtry_yes_avg_data_array']+"--:--insudtry_no_avg_data_array"+data['insudtry_no_avg_data_array']);

                        if(data['insudtry_yes_avg_data_array'] != '' && data['insudtry_yes_avg_data_array'] != undefined && data['insudtry_no_avg_data_array'] != '' && data['insudtry_no_avg_data_array'] != undefined)
                        {
                            var cv2sce8DataSetsYesContent = 0;
                            var cv2sce8DataSetsYesContentCount = data['insudtry_yes_avg_data_array'].length;
                            for(var i = 0; i<data['insudtry_yes_avg_data_array'].length; i++)
                            {
                                cv2sce8DataSetsYesContent = cv2sce8DataSetsYesContent+parseInt(data['insudtry_yes_avg_data_array'][i]);
                            }
                            //console.log("cv2sce8DataSetsYesContent"+cv2sce8DataSetsYesContent);
                            var cv2sce8DataSetsYesContentValue = cv2sce8DataSetsYesContent/cv2sce8DataSetsYesContentCount;
                            cv2sce8DataSetsContent.push(parseFloat(cv2sce8DataSetsYesContentValue).toFixed(2));

                            var cv2sce8DataSetsNoContent = 0;
                            var cv2sce8DataSetsNoContentCount = data['insudtry_no_avg_data_array'].length;
                            for(var b = 0; b<data['insudtry_no_avg_data_array'].length; b++)
                            {
                                cv2sce8DataSetsNoContent = cv2sce8DataSetsNoContent+parseInt(data['insudtry_no_avg_data_array'][b]);
                            }
                            //console.log("cv2sce8DataSetsNoContent"+cv2sce8DataSetsNoContent);
                            var cv2sce8DataSetsNoContentValue = cv2sce8DataSetsNoContent/cv2sce8DataSetsNoContentCount;
                            cv2sce8DataSetsContent.push(parseFloat(cv2sce8DataSetsNoContentValue).toFixed(2));
                            //console.log("cv2sce8DataSetsContent"+cv2sce8DataSetsContent);
                        }
                    },
                    complete: function(){
                        if(cv2sce8DataSetsContent !='' && cv2sce8DataSetsContent !=undefined)
                        {
                            //var cv2pieChartBgColorNames = "{{ implode(',',config('custom.pie_chartsec78_bg_color'))}}";
                            if(cv2sce8DataSetsContent[0]==0 && cv2sce8DataSetsContent[1]!=0)
                            {
                                var cv2pieChartBgColorArrayB8 = ['#a7a8a9', '#a7a8a9'];
                            }
                            else
                            {
                                var cv2pieChartBgColorArrayB8 = cv2pieChartBgColorNames.split(',');
                            }
                            //var cv2pieChartBgColorArray = cv2pieChartBgColorNames.split(',');

                            var compareCVPieData4 = [
                                { label: "Yes", value: parseInt(cv2sce8DataSetsContent[0])},
                                { label: "No", value: parseInt(cv2sce8DataSetsContent[1]) }
                            ];
                            var compareCVPie4;

                            var compareCVPieUpdate4 = function () {
                                if (compareCVPie4) compareCVPie4.destroy();
                                var div1W = $("#compareCVPieDiv4").width();
                                var div1H = $("#compareCVPieDiv4").height();
                                //var size = Math.min(innerHeight, innerWidth) / 2;
                                var size = Math.min(div1W, div1H);
                                var opt =  {
                                    data: {
                                        content: compareCVPieData4
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
                                            segments: cv2pieChartBgColorArrayB8,
                                            segmentStroke: "#8b8c90"
                                        }
                                    }
                                };
                                compareCVPie4 = new d3pie("cv2donutChart0", opt);
                            };

                            compareCVPieUpdate4();
                            window.addEventListener('resize', compareCVPieUpdate4);
                        }
                        else
                        {
                            $(".lp_section_07_02").find(".col-md-8").text(" ");
                        }
                    }
                });
            }
        }
        else{
            $(".lpCompareCV_section_7_cv2").find(".mt-2").find("col-md-12").text(" ");
            $(".lpCompareCV_section_8_cv2").find(".mt-2").find(".lpCompareCV_section_07_02").find("col-md-12").text(" ");
        }
    },2000);*/

    /* setTimeout(function()
    {
        var winWcv1donutChart1 = $(window).width();
        var fontScv1donutChart1 = 13;
        var paddingcv1donutChart1 = 15;
        if(winWcv1donutChart1 < 768) {
            fontScv1donutChart1 = 9;
            paddingcv1donutChart1 = 10;
        }
        else {
            fontScv1donutChart1 = 13;
            paddingcv1donutChart1 = 15;
        }

        var labelFontSize = 12;
        var pieDistance = 15;
        if(winWcv1donutChart1 <= 1200) {
            labelFontSize = 10
            pieDistance = 5;
        }
        else {
            labelFontSize = 12
            pieDistance = 15;
        }
        // //A DAY IN MY LIFE
        // var cv1b10DataCount = "{{count($cv1_b10_dataset_data)}}";
        // var cv1b10datasetsDataString = "{{implode(',',$cv1_b10_dataset_data)}}";
        // var cv1b10datasetsData= cv1b10datasetsDataString.split(',');
        // //console.log("cv1b10datasetsData:"+cv1b10datasetsData);
        // var cv1b10datalablesDataString = "{{implode(',',$cv1_b10_datalables_data)}}";
        // var cv1b10datalablesData= cv1b10datalablesDataString.split(',');
        // //console.log("cv1b10datalablesData:"+cv1b10datalablesData);
        // var cv1b10datasetsbgColorDataString = "{{implode(',',$cv1_b10_datasetsbgColor_data)}}";
        // var cv1b10datasetsbgColorData= cv1b10datasetsbgColorDataString.split(',');
        // //console.log("cv1b10datasetsbgColorData:"+cv1b10datasetsbgColorData);
        // var cv1b10datasetsborderDataString = "{{implode(',',$cv1_b10_datasetsborder_data)}}";
        // var cv1b10datasetsborderData= cv1b10datasetsborderDataString.split(',');
        // //console.log("cv1b10datasetsborderData:"+cv1b10datasetsborderData);

        if(cv1b10DataCount != '' && cv1b10DataCount != 0)
        {
            var cv1b10datasetsDataArr = [];

            for(var i=0; i<cv1b10DataCount; i++)
            {
                cv1b10datasetsDataArr.push({"label": cv1b10datalablesData[i], "value": parseInt(cv1b10datasetsData[i])});
            }

            var compareSec10_1CVPieData =  cv1b10datasetsDataArr;
            var compareSec10_1CVPie;

            var compareCVPie1OuterRadius = "";
            var compareCVPie1WinWidth = $(window).width();
            if (compareCVPie1WinWidth <= 1250 && compareCVPie1WinWidth >= 1200) {
                compareCVPie1OuterRadius = "60%";
            }
            else if (compareCVPie1WinWidth <= 1199 && compareCVPie1WinWidth >= 993) {
                compareCVPie1OuterRadius = "45%";
            }
            else if (compareCVPie1WinWidth <= 992 && compareCVPie1WinWidth >= 768) {
                compareCVPie1OuterRadius = "35%";
            }
            else if (compareCVPie1WinWidth <= 767 && compareCVPie1WinWidth >= 640) {
                compareCVPie1OuterRadius = "45%";
            }
            else if (compareCVPie1WinWidth <= 639 && compareCVPie1WinWidth >= 550) {
                compareCVPie1OuterRadius = "35%";
            }
            else if (compareCVPie1WinWidth <= 549) {
                compareCVPie1OuterRadius = "30%"
            }
            else {
                compareCVPie1OuterRadius = "80%"
            }

            var compareSec10_1CVPieUpdate = function () {
                if (compareSec10_1CVPie) compareSec10_1CVPie.destroy();
                var div3W = $("#compareCVPieSec10_1").width();
                var div3H = $("#compareCVPieSec10_1").height();
                //var size = Math.min(innerHeight, innerWidth) / 2;
                var size = Math.min(div3W, div3H);
                var opt =  {
                    data: {
                        //sortOrder: "label-asc",
                        smallSegmentGrouping: {
                            enabled: true
                        },
                        content: compareSec10_1CVPieData,
                    },
                    size: {
                        pieInnerRadius: "40%",
                        pieOuterRadius: compareCVPie1OuterRadius,
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
                            color: "#000000",
                            decimalPlaces: 0,
                            fontSize: 12
                        },
                        value: {
                            font: "RobotoMonoMedium",
                            color: "#000000",
                            fontSize: 12
                        },
                        lines: {
                            enabled: true,
                            style: "straight",
                            color: "#8f9092"
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
                            x: 10,
                            y: 0
                        },
                        colors: {
                            segments: cv1b10datasetsbgColorData,
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
                compareSec10_1CVPie = new d3pie("cv1donutChart1", opt);
            };
            compareSec10_1CVPieUpdate();
            window.addEventListener('resize', compareSec10_1CVPieUpdate);

        }
        else
        {
            $(".lpCompareCV_section_10_cv1").find(".inner_section").find(".mt-4").html('<span class="naTextfont">&nbsp;</span>');
        }

        var winWcv2donutChart1 = $(window).width();
        var fontScv2donutChart1 = 13;
        var paddingcv2donutChart1 = 15;
        if(winWcv2donutChart1 < 768) {
            fontScv2donutChart1 = 9;
            paddingcv2donutChart1 = 10;
        }
        else {
            fontScv2donutChart1 = 13;
            paddingcv2donutChart1 = 15;
        }

        var labelFontSize = 12;
        var pieDistance = 15;
        if(winWcv1donutChart1 <= 1200) {
            labelFontSize = 10
            pieDistance = 5;
        }
        else {
            labelFontSize = 12
            pieDistance = 15;
        }

        // var cv2b10DataCount = "{{count($cv2_b10_dataset_data)}}";
        // var cv2b10datasetsDataString = "{{implode(',',$cv2_b10_dataset_data)}}";
        // var cv2b10datasetsData= cv2b10datasetsDataString.split(',');
        // //console.log("cv2b10datasetsData:"+cv2b10datasetsData);
        // var cv2b10datalablesDataString = "{{implode(',',$cv2_b10_datalables_data)}}";
        // var cv2b10datalablesData= cv2b10datalablesDataString.split(',');
        // //console.log("cv2b10datalablesData:"+cv2b10datalablesData);
        // var cv2b10datasetsbgColorDataString = "{{implode(',',$cv2_b10_datasetsbgColor_data)}}";
        // var cv2b10datasetsbgColorData= cv2b10datasetsbgColorDataString.split(',');
        // //console.log("cv2b10datasetsbgColorData:"+cv2b10datasetsbgColorData);
        // var cv2b10datasetsborderDataString = "{{implode(',',$cv2_b10_datasetsborder_data)}}";
        // var cv2b10datasetsborderData= cv2b10datasetsborderDataString.split(',');
        // //console.log("cv2b10datasetsborderData:"+cv2b10datasetsborderData);

        if(cv2b10DataCount != '' && cv2b10DataCount != 0)
        {
            var cv2b10datasetsDataArr = [];

            for(var i=0; i<cv2b10DataCount; i++)
            {
                cv2b10datasetsDataArr.push({"label": cv2b10datalablesData[i], "value": parseInt(cv2b10datasetsData[i])});
            }

            var compareSec10_2CVPieData =  cv2b10datasetsDataArr;
            var compareSec10_2CVPie;

            var compareCVPie2OuterRadius = "";
            var compareCVPie2WinWidth = $(window).width();
            if (compareCVPie2WinWidth <= 1250 && compareCVPie2WinWidth >= 1200) {
                compareCVPie2OuterRadius = "60%";
            }
            else if (compareCVPie2WinWidth <= 1199 && compareCVPie2WinWidth >= 993) {
                compareCVPie2OuterRadius = "45%";
            }
            else if (compareCVPie2WinWidth <= 992 && compareCVPie2WinWidth >= 768) {
                compareCVPie2OuterRadius = "35%";
            }
            else if (compareCVPie2WinWidth <= 767 && compareCVPie2WinWidth >= 640) {
                compareCVPie2OuterRadius = "45%";
            }
            else if (compareCVPie2WinWidth <= 639 && compareCVPie2WinWidth >= 550) {
                compareCVPie2OuterRadius = "35%";
            }
            else if (compareCVPie2WinWidth <= 549) {
                compareCVPie2OuterRadius = "30%"
            }
            else {
                compareCVPie2OuterRadius = "80%"
            }

            var compareSec10_2CVPieUpdate = function () {
                if (compareSec10_2CVPie) compareSec10_2CVPie.destroy();
                var div3W = $("#compareCVPieSec10_2").width();
                var div3H = $("#compareCVPieSec10_2").height();
                //var size = Math.min(innerHeight, innerWidth) / 2;
                var size = Math.min(div3W, div3H);
                var opt =  {
                    data: {
                        smallSegmentGrouping: {
                            enabled: true
                        },
                        content: compareSec10_2CVPieData,
                    },
                    size: {
                        pieInnerRadius: "40%",
                        pieOuterRadius: compareCVPie2OuterRadius,
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
                            color: "#000000",
                            decimalPlaces: 0,
                            fontSize: 12
                        },
                        value: {
                            font: "RobotoMonoMedium",
                            color: "#000000",
                            fontSize: 12
                        },
                        lines: {
                            enabled: true,
                            style: "straight",
                            color: "#8f9092"
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
                            segments: cv2b10datasetsbgColorData,
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
                compareSec10_2CVPie = new d3pie("cv2donutChart1", opt);
            };
            compareSec10_2CVPieUpdate();
            window.addEventListener('resize', compareSec10_2CVPieUpdate);

        }
        else
        {
            $(".lpCompareCV_section_10_cv2").find(".inner_section").find(".mt-4").html('<span class="naTextfont">&nbsp;</span>');
        }

    },3000); */

    //Music Types Usage (On Average)
    setTimeout(function()
    {
        /*var winWcv1barChart = $(window).width();
        var yAxesRotationcv1barChart = 0;
        var fontScv1barChart = 13;
        var layoutPaddingcv1barChart = 0;
        if(winWcv1barChart < 768) {
            fontScv1barChart = 10;
            yAxesRotationcv1barChart = 30;
            layoutPaddingcv1barChart = 20;
        }
        else {
            fontScv1barChart = 13;
            yAxesRotationcv1barChart = 0;
            layoutPaddingcv1barChart = 45;
        }

        var winWBarChartDisplayCV = $(window).width();
        var fontSBarChartDisplayCV = 14;
        if(winWBarChartDisplayCV < 768) {
            fontSBarChartDisplayCV = 12;
        }
        else {
            fontSBarChartDisplayCV = 14;
        }*/
        /* //Music Types Usage (On Average)
        var cv1b13DataCount = "{{count($cv1_b13_dataset_data)}}";
        var cv1b13datasetsDataString = "{{implode(',',$cv1_b13_dataset_data)}}";
        var cv1b13datasetsData= cv1b13datasetsDataString.split(',');
        var cv1b13datalablesDataString = "{{implode(',',$cv1_b13_datalables_data)}}";
        var cv1b13datalablesData= cv1b13datalablesDataString.split(',');
        var cv1b13borderWidthDataString = "{{implode(',',$cv1_b13_borderwidth_data)}}";
        var cv1b13borderWidthData= cv1b13borderWidthDataString.split(','); */

        /*var lpCompareCVSection13CV1 = $(".lpCompareCV_section_13_cv1").height()+40;
        var lpCompareCVSection13CV2 = $(".lpCompareCV_section_13_cv2").height()+40;

        if(lpCompareCVSection13CV1 > lpCompareCVSection13CV2)
        {
            $(".lpCompareCV_MusicTUsage_Height").css("height",lpCompareCVSection13CV1);
        }
        else
        {
            $(".lpCompareCV_MusicTUsage_Height").css("height",lpCompareCVSection13CV2);
        }
*/

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
                        right: layoutPaddingcv1barChart
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
                            maxRotation: yAxesRotationcv1barChart,
                            minRotation: yAxesRotationcv1barChart
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
                            size: fontScv1barChart,
                            family: 'RobotoMonoLight',
                        }
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                        labels: {
                            font: {
                                size: fontScv1barChart,
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

            const ctx = document.getElementById('cv1barChart').getContext('2d');
            Chart.register(ChartDataLabels);
            const barChart = new Chart(ctx, {
                type: 'bar',
                plugins: [ChartDataLabels],
                data: cv1barChartData,
                options: cv1barChartOptions,
            });*/

            var cv1musicTypeUsageCVPieOuterRadius = "";
            var cv1musicTypeUsageCVPieWinWidth = $(window).width();
            if (cv1musicTypeUsageCVPieWinWidth <= 1250 && cv1musicTypeUsageCVPieWinWidth >= 1200) {
                cv1musicTypeUsageCVPieOuterRadius = "60%";
            }
            else if (cv1musicTypeUsageCVPieWinWidth <= 1199 && cv1musicTypeUsageCVPieWinWidth >= 993) {
                cv1musicTypeUsageCVPieOuterRadius = "55%";
            }
            else if (cv1musicTypeUsageCVPieWinWidth <= 549) {
                cv1musicTypeUsageCVPieOuterRadius = "50%"
            }
            else {
                cv1musicTypeUsageCVPieOuterRadius = "67%"
            }

            var cv1b13Label = '<ul class="labelList">';
            var cv1b13datasetsDataContent = [];
            var cv1nonZeroValCount = [];
            for (var cv1b13i = 0; cv1b13i < cv1b13datasetsData.length; cv1b13i++){
                cv1b13datasetsDataContent.push({label: cv1b13datasetsData[cv1b13i].split("#_#")[0], value: +cv1b13datasetsData[cv1b13i].split("#_#")[1]});
                /* if(cv1b13datasetsData[cv1b13i].split("#_#")[1] > 0) {

                    cv1b13Label += '   <li>';
                    cv1b13Label += '       <span class="point" style="background-color:'+genreBgColorData[cv1b13i]+'"></span>';
                    cv1b13Label += '       <label class="label">'+cv1b13datasetsData[cv1b13i].split("#_#")[0]+'</label>';
                    cv1b13Label += '   </li>';

                    cv1nonZeroValCount.push(genreBgColorData[cv1b13i]);
                } */

                cv1b13Label += '   <li>';
                if(cv1b13datasetsData[cv1b13i].split("#_#")[1] > 0)
                    cv1b13Label += '       <span class="point" style="background-color:'+$("#"+cv1b13datalablesData[cv1b13i].toLowerCase().replaceAll(" ","")).val()+'"></span>';
                else
                    cv1b13Label += '       <span class="point" style="background-color:'+$("#"+cv1b13datalablesData[cv1b13i].toLowerCase().replaceAll(" ","")+"Lighter").val()+'"></span>';
                cv1b13Label += '       <label class="label">'+cv1b13datasetsData[cv1b13i].split("#_#")[0]+'</label>';
                cv1b13Label += '   </li>';

                if(cv1b13datasetsData[cv1b13i].split("#_#")[1] > 0) {

                    cv1nonZeroValCount.push($("#"+cv1b13datalablesData[cv1b13i].toLowerCase().replaceAll(" ","")).val());
                }
            }
            cv1b13Label += '</ul>';

            $(".cv1b13LabelHolder").append(cv1b13Label);
            var cv1donutChartMusicTypeUsagePieUpdate = function () {
                if (cv1donutChartMusicTypeUsage) cv1donutChartMusicTypeUsage.destroy();
                var div3W = $(".cv1donutChartMusicTypeUsageWH").width();
                var div3H = $(".cv1donutChartMusicTypeUsageWH").height();
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
                        pieOuterRadius: cv1musicTypeUsageCVPieOuterRadius,
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
                            segments: cv1nonZeroValCount,
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
                cv1donutChartMusicTypeUsage = new d3pie("cv1donutChartMusicTypeUsage", opt);
            };
            cv1donutChartMusicTypeUsagePieUpdate();
            window.addEventListener('resize', cv1donutChartMusicTypeUsagePieUpdate);
        }
        else
        {
            $(".lpCompareCV_section_13_cv1").find(".chart").html('<span class="naTextfont mt-4">&nbsp;</span>');
        }

        // Code of Music Type Usage CV1


        // Code of Music Type Usage CV2



        /*var winWcv2barChart = $(window).width();
        var fontScv2barChart = 13;
        var yAxesRotationcv2barChart = 0;
        var layoutPaddingcv2barChart = 0;
        if(winWcv2barChart < 768) {
            fontScv2barChart = 10;
            yAxesRotationcv2barChart = 30;
            layoutPaddingcv2barChart = 20;
        }
        else {
            fontScv2barChart = 13;
            yAxesRotationcv2barChart = 0;
            layoutPaddingcv2barChart = 45;
        }*/
        /* //Music Types Usage (On Average)
        var cv2b13DataCount = "{{count($cv2_b13_dataset_data)}}";
        var cv2b13datasetsDataString = "{{implode(',',$cv2_b13_dataset_data)}}";
        var cv2b13datasetsData= cv2b13datasetsDataString.split(',');
        var cv2b13datalablesDataString = "{{implode(',',$cv2_b13_datalables_data)}}";
        var cv2b13datalablesData= cv2b13datalablesDataString.split(',');
        var cv2b13borderWidthDataString = "{{implode(',',$cv2_b13_borderwidth_data)}}";
        var cv2b13borderWidthData= cv2b13borderWidthDataString.split(','); */

        if(cv2b13DataCount != '' && cv2b13DataCount != 0)
        {
            /*var cv2areaChartData = {
                labels  : cv2b13datalablesData,
                datasets: [
                    {
                        label               : 'Average',
                        axis                : 'y',
                        backgroundColor     : themeColor,
                        borderColor         : themeColor,
                        pointRadius          : false,
                        pointColor          : themeColor,
                        pointStrokeColor    : 'rgba(60,141,188,1)',
                        pointHighlightFill  : '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        data                : cv2b13datasetsData,
                        borderWidth         : cv2b13borderWidthData
                    }
                ]
            }
            //var cv2barChartCanvas = $('#cv2barChart').get(0).getContext('2d');
            var cv2barChartData = jQuery.extend(true, {}, cv2areaChartData);
            var cv2temp0 = cv2areaChartData.datasets[0]
            //var temp1 = areaChartData.datasets[1]
            cv2barChartData.datasets[0] = cv2temp0
            //barChartData.datasets[1] = temp0

            var cv2barChartOptions = {
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
                        right: layoutPaddingcv2barChart
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
                            maxRotation: yAxesRotationcv2barChart,
                            minRotation: yAxesRotationcv2barChart
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
                            size: fontScv2barChart,
                            family: 'RobotoMonoLight',
                        }
                    },
                    legend: {
                        display: false,
                        position: 'bottom',
                        labels: {
                            font: {
                                size: fontScv2barChart,
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

            const ctx = document.getElementById('cv2barChart').getContext('2d');
            Chart.register(ChartDataLabels);
            const barChart = new Chart(ctx, {
                type: 'bar',
                plugins: [ChartDataLabels],
                data: cv2barChartData,
                options: cv2barChartOptions,
            });*/

            var cv2musicTypeUsageCVPieOuterRadius = "";
            var cv2musicTypeUsageCVPieWinWidth = $(window).width();
            if (cv2musicTypeUsageCVPieWinWidth <= 1250 && cv2musicTypeUsageCVPieWinWidth >= 1200) {
                cv2musicTypeUsageCVPieOuterRadius = "60%";
            }
            else if (cv2musicTypeUsageCVPieWinWidth <= 1199 && cv2musicTypeUsageCVPieWinWidth >= 993) {
                cv2musicTypeUsageCVPieOuterRadius = "55%";
            }
            else if (cv2musicTypeUsageCVPieWinWidth <= 549) {
                cv2musicTypeUsageCVPieOuterRadius = "50%"
            }
            else {
                cv2musicTypeUsageCVPieOuterRadius = "67%"
            }

            var cv2b13Label = '<ul class="labelList">';
            var cv2b13datasetsDataContent = [];
            var cv2nonZeroValCount = [];
            for (var cv2b13i = 0; cv2b13i < cv2b13datasetsData.length; cv2b13i++){
                cv2b13datasetsDataContent.push({label: cv2b13datasetsData[cv2b13i].split("#_#")[0], value: +cv2b13datasetsData[cv2b13i].split("#_#")[1]});
                /* if(cv2b13datasetsData[cv2b13i].split("#_#")[1] > 0) {
                    cv2b13Label += '   <li>';
                    cv2b13Label += '       <span class="point" style="background-color:'+genreBgColorData[cv2b13i]+'"></span>';
                    cv2b13Label += '       <label class="label">'+cv2b13datasetsData[cv2b13i].split("#_#")[0]+'</label>';
                    cv2b13Label += '   </li>';

                    cv2nonZeroValCount.push(genreBgColorData[cv2b13i]);
                } */

                cv2b13Label += '   <li>';
                if(cv2b13datasetsData[cv2b13i].split("#_#")[1] > 0)
                    cv2b13Label += '       <span class="point" style="background-color:'+$("#"+cv2b13datalablesData[cv2b13i].toLowerCase().replaceAll(" ","")).val()+'"></span>';
                else
                    cv2b13Label += '       <span class="point" style="background-color:'+$("#"+cv2b13datalablesData[cv2b13i].toLowerCase().replaceAll(" ","")+"Lighter").val()+'"></span>';
                cv2b13Label += '       <label class="label">'+cv2b13datasetsData[cv2b13i].split("#_#")[0]+'</label>';
                cv2b13Label += '   </li>';

                if(cv2b13datasetsData[cv2b13i].split("#_#")[1] > 0) {
                    cv2nonZeroValCount.push($("#"+cv2b13datalablesData[cv2b13i].toLowerCase().replaceAll(" ","")).val());
                }
            }
            cv2b13Label += '</ul>';

            $(".cv2b13LabelHolder").append(cv2b13Label);
            var cv2donutChartMusicTypeUsagePieUpdate = function () {
                if (cv2donutChartMusicTypeUsage) cv2donutChartMusicTypeUsage.destroy();
                var div3W = $(".cv2donutChartMusicTypeUsageWH").width();
                var div3H = $(".cv2donutChartMusicTypeUsageWH").height();
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
                        content: cv2b13datasetsDataContent,
                    },
                    size: {
                        pieInnerRadius: "40%",
                        pieOuterRadius: cv2musicTypeUsageCVPieOuterRadius,
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
                            segments: cv2nonZeroValCount,
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
                cv2donutChartMusicTypeUsage = new d3pie("cv2donutChartMusicTypeUsage", opt);
            };
            cv2donutChartMusicTypeUsagePieUpdate();
            window.addEventListener('resize', cv2donutChartMusicTypeUsagePieUpdate);
        }
        else
        {
            $(".lpCompareCV_section_13_cv2").find(".chart").html('<span class="naTextfont mt-4">&nbsp;</span>');
        }

        var lpCompareCVSection13CV1 = $(".lpCompareCV_section_13_cv1").height()+40;
        var lpCompareCVSection13CV2 = $(".lpCompareCV_section_13_cv2").height()+40;

        if(lpCompareCVSection13CV1 > lpCompareCVSection13CV2)
        {
            $(".lpCompareCV_MusicTUsage_Height").css("height",lpCompareCVSection13CV1);
        }
        else
        {
            $(".lpCompareCV_MusicTUsage_Height").css("height",lpCompareCVSection13CV2);
        }
    },4000);

    /* var cv1b15NumberData = "{{$cv1b15NumberData}}"; */
    if(cv1b15NumberData != '' && cv1b15NumberData != null)
    {
        /* var cv1mepvUrl = "{{url('get-music-expenditure-per-video-avg')}}"+'/'+"{{$cv1_data->industry_id}}"; */
        var cv1b15Avg = '', cv1b15indAvg = '', cv1b15indPublishedCVSum = '', cv1b15indPublishedCVCount = '';
        $.ajax({
            type: "GET",
            url: cv1mepvUrl,
            data: "",
            success: function(data) {
                //console.log("cv1b15_sum_data_array"+data);
                if(data != '' && data != undefined)
                {
                    /* var cv1b15AllCvData = 0;
                    for(var i = 0; i<data.length; i++)
                    {
                        cv1b15AllCvData = cv1b15AllCvData+parseInt(data[i]);
                    }
                    cv1b15Avg = cv1b15NumberData * 100 / cv1b15AllCvData; */
                    //console.log("cv1b15_sum_data"+data);
                    if(data != '' && data != undefined)
                    {
                        // console.log("cv1b15NumberData"+cv1b15NumberData);
                        cv1b15indPublishedCVSum = data.split("_")[0];
                        // console.log("cv1b15indPublishedCVSum"+cv1b15indPublishedCVSum);
                        cv1b15indPublishedCVCount = data.split("_")[1];
                        // console.log("cv1b15indPublishedCVCount"+cv1b15indPublishedCVCount);
                        cv1b15indAvg = cv1b15indPublishedCVSum / cv1b15indPublishedCVCount;
                        // console.log("cv1b15indAvg"+parseFloat(cv1b15indAvg).toFixed());
                        cv1b15Avg = (cv1b15NumberData - parseFloat(cv1b15indAvg).toFixed()) / parseFloat(cv1b15indAvg).toFixed()*100;

                    }
                }
            },
            complete: function(){
                //console.log("cv1b15Avg"+cv1b15Avg);
                // cv1b15indAvg = cv1b15indPublishedCVSum / cv1b15indPublishedCVCount;
                // console.log("cv1b15indAvg"+parseFloat(cv1b15indAvg).toFixed());
                if(cv1b15Avg != '' && cv1b15Avg != undefined)
                {
                    //$("#mepvAvg").text(parseFloat(b15Avg).toFixed(2)+"%");
                    if(Math.sign(cv1b15Avg) > 0)
                    {
                        $(".cv1_section_15_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv1mepvAvg">'+parseFloat(Math.abs(cv1b15Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(Math.sign(cv1b15Avg) < 0)
                    {
                        $(".cv1_section_15_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv1mepvAvg">'+parseFloat(Math.abs(cv1b15Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv1_section_15_count").html('<span class="count" id="cv1mepvAvg">'+parseFloat(Math.abs(cv1b15Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    /* if(cv1b15NumberData > parseFloat(cv1b15indAvg).toFixed())
                    {
                        $(".cv1_section_15_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv1mepvAvg">'+parseFloat(cv1b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(cv1b15NumberData < parseFloat(cv1b15indAvg).toFixed())
                    {
                        $(".cv1_section_15_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv1mepvAvg">'+parseFloat(cv1b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv1_section_15_count").html('<span class="count" id="cv1mepvAvg">'+parseFloat(cv1b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    } */
                }
                else
                {
                    //$("#mepvAvg").text(" ");
                    $(".cv1_section_15_count").html('<span class="naTextfont" id="cv1mepvAvg">&nbsp;</span>');
                }
                //$("#mepvAvg").text(parseFloat(b15Avg).toFixed(2)+"%");
            }
        });
    }

    /* var cv2b15NumberData = "{{$cv2b15NumberData}}"; */
    if(cv2b15NumberData != '' && cv2b15NumberData != null)
    {
        /* var cv2mepvUrl = "{{url('get-music-expenditure-per-video-avg')}}"+'/'+"{{$cv2_data->industry_id}}"; */
        var cv2b15Avg = '', cv2b15indAvg = '', cv2b15indPublishedCVSum = '', cv2b15indPublishedCVCount = '';
        $.ajax({
            type: "GET",
            url: cv2mepvUrl,
            data: "",
            success: function(data) {
                //console.log("cv2b15_sum_data_array"+data);
                if(data != '' && data != undefined)
                {
                   /*  var cv2b15AllCvData = 0;
                    for(var i = 0; i<data.length; i++)
                    {
                        cv2b15AllCvData = cv2b15AllCvData+parseInt(data[i]);
                    }
                    cv2b15Avg = cv2b15NumberData * 100 / cv2b15AllCvData; */
                    //console.log("cv2b15_sum_data"+data);
                    if(data != '' && data != undefined)
                    {
                        // console.log("cv2b15NumberData"+cv2b15NumberData);
                        cv2b15indPublishedCVSum = data.split("_")[0];
                        // console.log("cv2b15indPublishedCVSum"+cv2b15indPublishedCVSum);
                        cv2b15indPublishedCVCount = data.split("_")[1];
                        // console.log("cv2b15indPublishedCVCount"+cv2b15indPublishedCVCount);
                        cv2b15indAvg = cv2b15indPublishedCVSum / cv2b15indPublishedCVCount;
                        // console.log("cv2b15indAvg"+parseFloat(cv2b15indAvg).toFixed());
                        cv2b15Avg = (cv2b15NumberData - parseFloat(cv2b15indAvg).toFixed()) / parseFloat(cv2b15indAvg).toFixed()*100;

                    }
                }
            },
            complete: function(){
                //console.log("cv2b15Avg"+cv2b15Avg);
                /* cv2b15indAvg = cv1b15indPublishedCVSum / cv1b15indPublishedCVCount;
                console.log("cv2b15indAvg"+parseFloat(cv2b15indAvg).toFixed()); */
                if(cv2b15Avg != '' && cv2b15Avg != undefined)
                {
                    //$("#cv2mepvAvg").text(parseFloat(cv2b15Avg).toFixed(2)+"%");
                    if(Math.sign(cv2b15Avg) > 0)
                    {
                        $(".cv2_section_15_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv2mepvAvg">'+parseFloat(Math.abs(cv2b15Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(Math.sign(cv2b15Avg) < 0)
                    {
                        $(".cv2_section_15_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv2mepvAvg">'+parseFloat(Math.abs(cv2b15Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv2_section_15_count").html('<span class="count" id="cv2mepvAvg">'+parseFloat(Math.abs(cv2b15Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    /* if(cv2b15NumberData > parseFloat(cv2b15indAvg).toFixed())
                    {
                        $(".cv2_section_15_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv2mepvAvg">'+parseFloat(cv2b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(cv2b15NumberData < parseFloat(cv2b15indAvg).toFixed())
                    {
                        $(".cv2_section_15_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv2mepvAvg">'+parseFloat(cv2b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv2_section_15_count").html('<span class="count" id="cv2mepvAvg">'+parseFloat(cv2b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }  */
                }
                else
                {
                    //$("#cv2mepvAvg").text(" ");
                    $(".cv2_section_15_count").html('<span class="naTextfont" id="cv2mepvAvg">&nbsp;</span>');
                }
                //$("#cv2mepvAvg").text(parseFloat(cv2b15Avg).toFixed(2)+"%");
            }
        });
    }

    /* var cv1b14NumberData = "{{$cv1b14NumberData}}"; */
    if(cv1b14NumberData != '' && cv1b14NumberData != null)
    {
        /* var cv1mepyUrl = "{{url('get-music-expenditure-per-year-avg')}}"+'/'+"{{$cv1_data->industry_id}}"; */
        var cv1b14Avg = '', cv1b14indAvg = '', cv1b14indPublishedCVSum = '', cv1b14indPublishedCVCount = '';
        $.ajax({
            type: "GET",
            url: cv1mepyUrl,
            data: "",
            success: function(data) {
                //console.log("cv1b14_sum_data_array"+data);
                if(data != '' && data != undefined)
                {
                    /* var cv1b14AllCvData = 0;
                    for(var i = 0; i<data.length; i++)
                    {
                        cv1b14AllCvData = cv1b14AllCvData+parseInt(data[i]);
                    }
                    cv1b14Avg = cv1b14NumberData * 100 / cv1b14AllCvData; */
                    //console.log("cv1b14_sum_data"+data);
                    if(data != '' && data != undefined)
                    {
                        // console.log("cv1b14NumberData"+cv1b14NumberData);
                        cv1b14indPublishedCVSum = data.split("_")[0];
                        // console.log("cv1b14indPublishedCVSum"+cv1b14indPublishedCVSum);
                        cv1b14indPublishedCVCount = data.split("_")[1];
                        // console.log("cv1b14indPublishedCVCount"+cv1b14indPublishedCVCount);
                        cv1b14indAvg = cv1b14indPublishedCVSum / cv1b14indPublishedCVCount;
                        // console.log("cv1b14indAvg"+parseFloat(cv1b14indAvg).toFixed());
                        cv1b14Avg = (cv1b14NumberData - parseFloat(cv1b14indAvg).toFixed()) / parseFloat(cv1b14indAvg).toFixed()*100;

                    }
                }
            },
            complete: function(){
                //console.log("cv1b14Avg"+cv1b14Avg);
                /* cv1b14indAvg = cv1b14indPublishedCVSum / cv1b14indPublishedCVCount;
                console.log("cv1b14indAvg"+parseFloat(cv1b14indAvg).toFixed()); */
                if(cv1b14Avg != '' && cv1b14Avg != undefined)
                {
                    //$("#cv1mepyAvg").text(parseFloat(cv1b14Avg).toFixed(2)+"%");
                    if(Math.sign(cv1b14Avg) > 0)
                    {
                        $(".cv1_section_14_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv1mepyAvg">'+parseFloat(Math.abs(cv1b14Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(Math.sign(cv1b14Avg) < 0)
                    {
                        $(".cv1_section_14_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv1mepyAvg">'+parseFloat(Math.abs(cv1b14Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv1_section_14_count").html('<span class="count" id="cv1mepyAvg">'+parseFloat(Math.abs(cv1b14Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    /* if(cv1b14NumberData > parseFloat(cv1b14indAvg).toFixed())
                    {
                        $(".cv1_section_14_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv1mepyAvg">'+parseFloat(cv1b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(cv1b14NumberData < parseFloat(cv1b14indAvg).toFixed())
                    {
                        $(".cv1_section_14_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv1mepyAvg">'+parseFloat(cv1b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv1_section_14_count").html('<span class="count" id="cv1mepyAvg">'+parseFloat(cv1b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    } */
                }
                else
                {
                    //$("#cv1mepyAvg").text(" ");
                    $(".cv1_section_14_count").html('<span class="naTextfont" id="cv1mepyAvg">&nbsp;</span>');
                }
                //$("#cv1mepyAvg").text(parseFloat(cv1b14Avg).toFixed(2)+"%");
            }
        });
    }

    /* var cv2b14NumberData = "{{$cv2b14NumberData}}"; */
    if(cv2b14NumberData != '' && cv2b14NumberData != null)
    {
        /* var cv2mepyUrl = "{{url('get-music-expenditure-per-year-avg')}}"+'/'+"{{$cv2_data->industry_id}}"; */
        var cv2b14Avg = '', cv2b14indAvg = '', cv2b14indPublishedCVSum = '', cv2b14indPublishedCVCount = '';
        $.ajax({
            type: "GET",
            url: cv2mepyUrl,
            data: "",
            success: function(data) {
                //console.log("cv2b14_sum_data_array"+data);
                if(data != '' && data != undefined)
                {
                    /* var cv2b14AllCvData = 0;
                    for(var i = 0; i<data.length; i++)
                    {
                        cv2b14AllCvData = cv2b14AllCvData+parseInt(data[i]);
                    }
                    cv2b14Avg = cv2b14NumberData * 100 / cv2b14AllCvData; */
                    //console.log("cv2b14_sum_data"+data);
                    if(data != '' && data != undefined)
                    {
                        // console.log("cv2b14NumberData"+cv2b14NumberData);
                        cv2b14indPublishedCVSum = data.split("_")[0];
                        // console.log("cv2b14indPublishedCVSum"+cv2b14indPublishedCVSum);
                        cv2b14indPublishedCVCount = data.split("_")[1];
                        // console.log("cv2b14indPublishedCVCount"+cv2b14indPublishedCVCount);
                        cv2b14indAvg = cv2b14indPublishedCVSum / cv2b14indPublishedCVCount;
                        // console.log("cv2b14indAvg"+parseFloat(cv2b14indAvg).toFixed());
                        cv2b14Avg = (cv2b14NumberData - parseFloat(cv2b14indAvg).toFixed()) / parseFloat(cv2b14indAvg).toFixed()*100;

                    }
                }
            },
            complete: function(){
                //console.log("cv2b14Avg"+cv2b14Avg);
                // cv2b14indAvg = cv2b14indPublishedCVSum / cv2b14indPublishedCVCount;
                // console.log("cv2b14indAvg"+parseFloat(cv2b14indAvg).toFixed());
                if(cv2b14Avg != '' && cv2b14Avg != undefined)
                {
                    //$("#cv2mepyAvg").text(parseFloat(cv2b14Avg).toFixed(2)+"%");
                    if(Math.sign(cv2b14Avg) > 0)
                    {
                        $(".cv2_section_14_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv2mepyAvg">'+parseFloat(Math.abs(cv2b14Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(Math.sign(cv2b14Avg) < 0)
                    {
                        $(".cv2_section_14_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv2mepyAvg">'+parseFloat(Math.abs(cv2b14Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv2_section_14_count").html('<span class="count" id="cv2mepyAvg">'+parseFloat(Math.abs(cv2b14Avg)).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    /* if(cv2b14NumberData > parseFloat(cv2b14indAvg).toFixed())
                    {
                        $(".cv2_section_14_count").html('<img src="public/images/lp-growing-arrow.png" alt=""> <span class="count" id="cv2mepyAvg">'+parseFloat(cv2b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else if(cv2b14NumberData < parseFloat(cv2b14indAvg).toFixed())
                    {
                        $(".cv2_section_14_count").html('<img src="public/images/lp-growing-arrowdown.png" alt=""> <span class="count" id="cv2mepyAvg">'+parseFloat(cv2b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    }
                    else
                    {
                        $(".cv2_section_14_count").html('<span class="count" id="cv2mepyAvg">'+parseFloat(cv2b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                    } */
                }
                else
                {
                    //$("#cv2mepyAvg").text(" ");
                    $(".cv2_section_14_count").html('<span class="naTextfont" id="cv2mepyAvg">&nbsp;</span>');
                }
                //$("#cv2mepyAvg").text(parseFloat(cv2b14Avg).toFixed(2)+"%");
            }
        });
    }

    setTimeout(function()
    {
        var comapreCV1Height = $(".lpCompareCV_cv1").height()+40;
        var comapreCV2Height = $(".lpCompareCV_cv2").height()+40;
        if(comapreCV1Height > comapreCV2Height)
        {
            $(".lpCompareCV_aboutMe_Height").css("height",comapreCV1Height);
        }
        else
        {
            $(".lpCompareCV_aboutMe_Height").css("height",comapreCV2Height);
        }
        var lpCompareCVSection03CV1 = $(".lpCompareCV_section_03_cv1").height()+20;
        var lpCompareCVSection03CV2 = $(".lpCompareCV_section_03_cv2").height()+20;
        if(lpCompareCVSection03CV1 > lpCompareCVSection03CV2)
        {
            $(".lpCompareCV_Genres_Height").css("height",lpCompareCVSection03CV1);
        }
        else
        {
            $(".lpCompareCV_Genres_Height").css("height",lpCompareCVSection03CV2);
        }
        var lpCompareCVSonicLogoCV1 = $(".lpCompareCV_SonicLogo_cv1").height()+30;
        var lpCompareCVSonicLogoCV2 = $(".lpCompareCV_SonicLogo_cv2").height()+30;
        if(lpCompareCVSonicLogoCV1 > lpCompareCVSonicLogoCV2)
        {
            $(".lpCompareCV_SonicLogo_Height").css("height",lpCompareCVSonicLogoCV1);
        }
        else
        {
            $(".lpCompareCV_SonicLogo_Height").css("height",lpCompareCVSonicLogoCV2);
        }
        var lpCompareCVSection9CV1 = $(".lpCompareCV_section_9_cv1").height()+80;
        var lpCompareCVSection9CV2 = $(".lpCompareCV_section_9_cv2").height()+80;
        if(lpCompareCVSection9CV1 > lpCompareCVSection9CV2)
        {
            $(".lpCompareCV_MostPVideo_Height").css("height",lpCompareCVSection9CV1);
        }
        else
        {
            $(".lpCompareCV_MostPVideo_Height").css("height",lpCompareCVSection9CV2);
        }

        if($(window).width() > 1600) {
            var lpCompareCVSection10CV1 = $(".lpCompareCV_section_10_cv1").height()+40;
            var lpCompareCVSection10CV2 = $(".lpCompareCV_section_10_cv2").height()+40;
        }
        else {
            var lpCompareCVSection10CV1 = $(".lpCompareCV_section_10_cv1").height()+40;
            var lpCompareCVSection10CV2 = $(".lpCompareCV_section_10_cv2").height()+40;
        }

        if(lpCompareCVSection10CV1 > lpCompareCVSection10CV2)
        {
            $(".lpCompareCV_ADayInMyLife_Height").css("height",lpCompareCVSection10CV1);
        }
        else
        {
            $(".lpCompareCV_ADayInMyLife_Height").css("height",lpCompareCVSection10CV2);
        }



        /*var lpCompareCVSection12CV1 = 0;
        var lpCompareCVSection12CV2 = 0;
        if($(window).width() <= 640){
            lpCompareCVSection12CV1 = $(".lpCompareCV_section_12_cv1").find(".lpCompareCV_section_12_list").height()+110;
            lpCompareCVSection12CV2 = $(".lpCompareCV_section_12_cv2").find(".lpCompareCV_section_12_list").height()+110;
        }
        else {
            lpCompareCVSection12CV1 = $(".lpCompareCV_section_12_cv1").find(".lpCompareCV_section_12_list").height()+70;
            lpCompareCVSection12CV2 = $(".lpCompareCV_section_12_cv2").find(".lpCompareCV_section_12_list").height()+70;
        }

        if(lpCompareCVSection12CV1 > lpCompareCVSection12CV2)
        {
            //console.log(lpCompareCVSection12CV1 + " : " + lpCompareCVSection12CV2 + " First");
            $(".lpCompareCV_SocialMStats_Height_10Rec").css("height",lpCompareCVSection12CV1);
            $(".lpCompareCV_SocialMStats_Height_12Rec").css("height",lpCompareCVSection12CV1);
            $(".lpCompareCV_SocialMStats_Height_14Rec").css("height",lpCompareCVSection12CV1);
            $(".lpCompareCV_SocialMStats_Height_15Rec").css("height",lpCompareCVSection12CV1);
        }
        else
        {
            //console.log(lpCompareCVSection12CV1 + " : " + lpCompareCVSection12CV2 + " Second");
            $(".lpCompareCV_SocialMStats_Height_10Rec").css("height",lpCompareCVSection12CV2);
            $(".lpCompareCV_SocialMStats_Height_12Rec").css("height",lpCompareCVSection12CV2);
            $(".lpCompareCV_SocialMStats_Height_14Rec").css("height",lpCompareCVSection12CV2);
            $(".lpCompareCV_SocialMStats_Height_15Rec").css("height",lpCompareCVSection12CV2);
        }*/

        var radarGraphHolderCV1_1 = $(".radarGraphHolderCV1_1").height()+10;
        var radarGraphHolderCV2_1  = $(".radarGraphHolderCV2_1").height()+10;
        if(radarGraphHolderCV1_1 > radarGraphHolderCV2_1)
        {
            $(".radarGraphHolderHeight1").css("height",radarGraphHolderCV1_1);
        }
        else
        {
            $(".radarGraphHolderHeight1").css("height",radarGraphHolderCV2_1);
        }

        var radarGraphHolderCV1_2 = $(".radarGraphHolderCV1_2").height()+10;
        var radarGraphHolderCV2_2  = $(".radarGraphHolderCV2_2").height()+10;
        if(radarGraphHolderCV1_2 > radarGraphHolderCV2_2)
        {
            $(".radarGraphHolderHeight2").css("height",radarGraphHolderCV1_2);
        }
        else
        {
            $(".radarGraphHolderHeight2").css("height",radarGraphHolderCV2_2);
        }

        var lpCompareCV_aboutKeyFindingsCV1 = $(".lpCompareCV_aboutKeyFindingsCV1").height()+10;
        var lpCompareCV_aboutKeyFindingsCV2  = $(".lpCompareCV_aboutKeyFindingsCV2").height()+10;
        if(lpCompareCV_aboutKeyFindingsCV1 > lpCompareCV_aboutKeyFindingsCV2)
        {
            $(".lpCompareCV_aboutKeyFindings_Height").css("height",lpCompareCV_aboutKeyFindingsCV1);
        }
        else
        {
            $(".lpCompareCV_aboutKeyFindings_Height").css("height",lpCompareCV_aboutKeyFindingsCV2);
        }

        var lpCompareCV_brandCVSonicLogo_btnHolder1 = $(".compare1").height()+20;
        var lpCompareCV_brandCVSonicLogo_btnHolder2  = $(".compare2").height()+20;
        if(lpCompareCV_brandCVSonicLogo_btnHolder1 > lpCompareCV_brandCVSonicLogo_btnHolder2)
        {
            $(".brandCVSonicLogo_btnHolder").css("height",lpCompareCV_brandCVSonicLogo_btnHolder1);
        }
        else
        {
            $(".brandCVSonicLogo_btnHolder").css("height",lpCompareCV_brandCVSonicLogo_btnHolder2);
        }
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




    },2000);

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

    if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block17MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block16MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block18MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block17MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    else if(cv1Block18MoodGraphDatasetDataString != '' && cv1Block19MoodGraphDatasetDataString != '' && cv1MoodAggrGraphDatasetDataString != '')
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
    cv1SocialMediaDataExistArray = cv1SocialMediaDataExistArrayString.split(",");

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

    /* var cv2Block16MoodGraphDatasetDataString = "{{implode(',',$cv2_block_16_mood_graph_dataset_data)}}";
    var cv2Block16MoodGraphDatasetData = cv2Block16MoodGraphDatasetDataString.split(',');
    //console.log("cv2Block16MoodGraphDatasetData:"+cv2Block16MoodGraphDatasetData);
    var cv2Block17MoodGraphDatasetDataString = "{{implode(',',$cv2_block_17_mood_graph_dataset_data)}}";
    var cv2Block17MoodGraphDatasetData = cv2Block17MoodGraphDatasetDataString.split(',');
    //console.log("cv2Block17MoodGraphDatasetData:"+cv2Block17MoodGraphDatasetData);
    var cv2Block18MoodGraphDatasetDataString = "{{implode(',',$cv2_block_18_mood_graph_dataset_data)}}";
    var cv2Block18MoodGraphDatasetData = cv2Block18MoodGraphDatasetDataString.split(',');
    //console.log("cv2Block18MoodGraphDatasetData:"+cv2Block18MoodGraphDatasetData);
    var cv2Block19MoodGraphDatasetDataString = "{{implode(',',$cv2_block_19_mood_graph_dataset_data)}}";
    var cv2Block19MoodGraphDatasetData = cv2Block19MoodGraphDatasetDataString.split(',');
    //console.log("cv2Block19MoodGraphDatasetData:"+cv2Block19MoodGraphDatasetData);
    var cv2MoodAggrGraphDatasetDataString = "{{implode(',',$cv2_mood_aggr_graph_dataset_data)}}";
    var cv2MoodAggrGraphDatasetData = cv2MoodAggrGraphDatasetDataString.split(',');
    //console.log("cv2MoodAggrGraphDatasetData:"+cv2MoodAggrGraphDatasetData);
    //var cv2Block16MoodGraphDatalablesDataString = "{{implode(',',$cv2_block_16_mood_graph_datalables_data)}}";
    //var cv2Block16MoodGraphDatalablesData = cv2Block16MoodGraphDatalablesDataString.split(',');
    var cv2Block16MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv2Block16MoodGraphDatalablesData = cv2Block16MoodGraphDatalablesDataString.split(',');
    //console.log("cv2Block16MoodGraphDatalablesData:"+cv2Block16MoodGraphDatalablesData);
    //var cv2Block17MoodGraphDatalablesDataString = "{{implode(',',$cv2_block_17_mood_graph_datalables_data)}}";
    //var cv2Block17MoodGraphDatalablesData = cv2Block17MoodGraphDatalablesDataString.split(',');
    var cv2Block17MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv2Block17MoodGraphDatalablesData = cv2Block17MoodGraphDatalablesDataString.split(',');
    //console.log("cv2Block17MoodGraphDatalablesData:"+cv2Block17MoodGraphDatalablesData);
    //var cv2Block18MoodGraphDatalablesDataString = "{{implode(',',$cv2_block_18_mood_graph_datalables_data)}}";
    //var cv2Block18MoodGraphDatalablesData = cv2Block18MoodGraphDatalablesDataString.split(',');
    var cv2Block18MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv2Block18MoodGraphDatalablesData = cv2Block18MoodGraphDatalablesDataString.split(',');
    //console.log("cv2Block18MoodGraphDatalablesData:"+cv2Block18MoodGraphDatalablesData);
    //var cv2Block19MoodGraphDatalablesDataString = "{{implode(',',$cv2_block_18_mood_graph_datalables_data)}}";
    //var cv2Block19MoodGraphDatalablesData = cv2Block18MoodGraphDatalablesDataString.split(',');
    var cv2Block19MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv2Block19MoodGraphDatalablesData = cv2Block19MoodGraphDatalablesDataString.split(',');
    //console.log("cv2Block19MoodGraphDatalablesData:"+cv2Block19MoodGraphDatalablesData);
    //var cv2MoodAggrGraphDatalablesDataString = "{{implode(',',$cv2_mood_aggr_graph_datalables_data)}}";
    //var cv2MoodAggrGraphDatalablesData = cv2MoodAggrGraphDatalablesDataString.split(',');
    var cv2MoodAggrGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cv2MoodAggrGraphDatalablesData = cv2MoodAggrGraphDatalablesDataString.split(',');
    //console.log("cv2MoodAggrGraphDatalablesData:"+cv2MoodAggrGraphDatalablesData); */

    var datasetDataStringLength = 0;
    var datalablesData = '';
    var colorval1 = "#999999";
    var colorvalData1 = [];
    var datasetsContent = '';
    var showMoodRadar = false;

    var toggellblCompareCVMoodArr2 = [];
    var toggelCompareCVMoodBtns2 = '';

    if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood all with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,3 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','YouTube','Instagram','TikTok'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,4 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,3,4 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','YouTube','TikTok','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 2,3,4 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv2Block17MoodGraphDatasetDataString.length;
        datalablesData = cv2Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,2 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','YouTube','Instagram'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,3 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','YouTube','TikTok'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,4 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','YouTube','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 2,3 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','Instagram','TikTok'];
        datasetDataStringLength = cv2Block17MoodGraphDatasetDataString.length;
        datalablesData = cv2Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block17MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 2,4 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','Instagram','Twitter'];
        datasetDataStringLength = cv2Block17MoodGraphDatasetDataString.length;
        datalablesData = cv2Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '' && cv2MoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 3,4 with agg"); toggellblCompareCVMoodArr2 = ['Aggregate','TikTok','Twitter'];
        datasetDataStringLength = cv2Block18MoodGraphDatasetDataString.length;
        datalablesData = cv2Block18MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cv2MoodAggrGraphDatasetData, borderColor: mgAggrBColorVal, backgroundColor: mgAggrBgColorVal, pointBackgroundColor: mgAggrPbgColorVal, pointBorderColor: mgAggrPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood all"); toggellblCompareCVMoodArr2 = ['YouTube','Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', data: cv2Block18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,3"); toggellblCompareCVMoodArr2 = ['YouTube','Instagram','TikTok'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2,4"); toggellblCompareCVMoodArr2 = ['YouTube','Instagram','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', data: cv2Block18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,3,4"); toggellblCompareCVMoodArr2 = ['YouTube','TikTok','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', data: cv2Block18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,3,4"); toggellblCompareCVMoodArr2 = ['Instagram','TikTok','Twitter'];
        datasetDataStringLength = cv2Block17MoodGraphDatasetDataString.length;
        datalablesData = cv2Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', data: cv2Block18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block17MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,2"); toggellblCompareCVMoodArr2 = ['YouTube','Instagram'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,3"); toggellblCompareCVMoodArr2 = ['YouTube','TikTok'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1,4"); toggellblCompareCVMoodArr2 = ['YouTube','Twitter'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block17MoodGraphDatasetDataString != '' && cv2Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,3"); toggellblCompareCVMoodArr2 = ['Instagram','TikTok'];
        datasetDataStringLength = cv2Block17MoodGraphDatasetDataString.length;
        datalablesData = cv2Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block17MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2,4"); toggellblCompareCVMoodArr2 = ['Instagram','Twitter'];
        datasetDataStringLength = cv2Block17MoodGraphDatasetDataString.length;
        datalablesData = cv2Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block18MoodGraphDatasetDataString != '' && cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 3,4"); toggellblCompareCVMoodArr2 = ['TikTok','Twitter'];
        datasetDataStringLength = cv2Block18MoodGraphDatasetDataString.length;
        datalablesData = cv2Block18GenreGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0},{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block16MoodGraphDatasetDataString != '')
    {
        console.log("in mood 1"); toggellblCompareCVMoodArr2 = ['YouTube'];
        datasetDataStringLength = cv2Block16MoodGraphDatasetDataString.length;
        datalablesData = cv2Block16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data:cv2Block16MoodGraphDatasetData, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block17MoodGraphDatasetDataString != '')
    {
        console.log("in mood 2"); toggellblCompareCVMoodArr2 = ['Instagram'];
        datasetDataStringLength = cv2Block17MoodGraphDatasetDataString.length;
        datalablesData = cv2Block17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data:cv2Block17MoodGraphDatasetData, borderColor: mgIgBColorVal, backgroundColor: mgIgBgColorVal, pointBackgroundColor: mgIgPbgColorVal, pointBorderColor: mgIgPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 3"); toggellblCompareCVMoodArr2 = ['TikTok'];
        datasetDataStringLength = cv2Block18MoodGraphDatasetDataString.length;
        datalablesData = cv2Block18MoodGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: cv2Block18MoodGraphDatasetData, borderColor: mgTtBColorVal, backgroundColor: mgTtBgColorVal, pointBackgroundColor: mgTtPbgColorVal, pointBorderColor: mgTtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cv2Block19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 4"); toggellblCompareCVMoodArr2 = ['Twitter'];
        datasetDataStringLength = cv2Block19MoodGraphDatasetDataString.length;
        datalablesData = cv2Block19MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Twitter', cv2Block19MoodGraphDatasetData, borderColor: mgTwtBColorVal, backgroundColor: mgTwtBgColorVal, pointBackgroundColor: mgTwtPbgColorVal, pointBorderColor: mgTwtPbColorVal, pointBorderWidth: 0, pointRadius: 0}];

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
    old_toggellblArr_mood_cv2 = toggellblCompareCVMoodArr2;
    cv2SocialMediaDataExistArray = cv2SocialMediaDataExistArrayString.split(",");

    // var cv2dldString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    // var cv2dld = cv2dldString.split(',');

    if(cv2MoodAggrGraphDatalablesDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2MoodAggrGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2MoodAggrGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(cv2Block16MoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block16MoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2Block16MoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(cv2Block17MoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block17MoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2Block17MoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(cv2Block18MoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block18MoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2Block18MoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(cv2Block19MoodGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block19MoodGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2Block19MoodGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestMoodllbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestMoodllbArr_2",old_highestMoodllbArr_2);
    }

    if(showMoodRadar == true)
    {
        // for(var i=0; i<toggellblCompareCVMoodArr2.length;i++)
        // {
        //     toggelCompareCVMoodBtns2 += '<div class="toggleWrapper" >';
        //     toggelCompareCVMoodBtns2 += '<input type="checkbox" id="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[i]+'" >';
        //     toggelCompareCVMoodBtns2 += '<label for="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[i]+'" class="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[i]+'" onClick="rtoggleCompareCV2MoodData2('+i+')" ><span class="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[i]+'_handler"></span></label>';
        //     toggelCompareCVMoodBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareCVMoodArr2[i]+'</span>';
        //     toggelCompareCVMoodBtns2 += '</div>';
        // }


        for(var i=0; i<cv2SocialMediaDataExistArray.length;i++)
        {
            if(toggellblCompareCVMoodArr2.includes(cv2SocialMediaDataExistArray[i])){

                var Index = toggellblCompareCVMoodArr2.indexOf(cv2SocialMediaDataExistArray[i]);

                toggelCompareCVMoodBtns2 += '<div class="toggleWrapper" >';
                toggelCompareCVMoodBtns2 += '<input type="checkbox" id="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[Index]+'" >';
                toggelCompareCVMoodBtns2 += '<label for="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[Index]+'" class="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[Index]+'" onClick="rtoggleCompareCV2MoodData2('+Index+')" ><span class="rtoggleCompareCV2Mood'+toggellblCompareCVMoodArr2[Index]+'_handler"></span></label>';
                toggelCompareCVMoodBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareCVMoodArr2[Index]+'</span>';
                toggelCompareCVMoodBtns2 += '</div>';

            }else{
                toggelCompareCVMoodBtns2 += '<div class="toggleWrapper" style="pointer-events: none;">';
                toggelCompareCVMoodBtns2 += '<input type="checkbox" id="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'" >';
                toggelCompareCVMoodBtns2 += '<label for="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'" class="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'" onClick="rtoggleCompareCV2MoodData2('+i+')" style="background: transparent"><span class="rtoggleCompareCV2Mood'+cv2SocialMediaDataExistArray[i]+'_handler"></span></label>';
                toggelCompareCVMoodBtns2 += '<span class="cust-toggleBtnName">'+cv2SocialMediaDataExistArray[i]+'</span>';
                toggelCompareCVMoodBtns2 += '</div>';
            }

        }

        $("#cv2MoodRadarChartButtonBox").html(toggelCompareCVMoodBtns2);

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

    /* genreBgColorDataString = "{{implode(',',$genre_bg_color_array)}}";
    genreBgColorData = genreBgColorDataString.split(','); */

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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1GenreAggrGraphDatasetData.length; i++)
        {
            cv1DatasetsContentAggr.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentYt.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block16GenreGraphDatalablesData[i], "value": parseFloat(cv1Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentIg.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block17GenreGraphDatalablesData[i], "value": parseFloat(cv1Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
            cv1DatasetsContentTt.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
            cv1DatasetsContent.push({"label": cv1Block18GenreGraphDatalablesData[i], "value": parseFloat(cv1Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
        for(var i=0; i<cv1Block16GenreGraphDatasetData.length; i++)
        {
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

        for(var i=0; i<cv1Block17GenreGraphDatasetData.length; i++)
        {
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

        for(var i=0; i<cv1Block18GenreGraphDatasetData.length; i++)
        {
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

        for(var i=0; i<cv1Block19GenreGraphDatasetData.length; i++)
        {
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
                    toggelCompareCVGenreBtns1 += '<input type="checkbox" id="toggle'+toggellblCompareCVGenreArr1[Index]+'" >';
                    toggelCompareCVGenreBtns1 += '<label for="toggle'+toggellblCompareCVGenreArr1[Index]+'" class="toggle'+toggellblCompareCVGenreArr1[Index]+'" onClick="toggleDataCompareCV(\''+toggellblCompareCVGenreArr1[Index]+'\', \'withoutPopup\', \'cv1GenreRadarChart\')" ><span class="toggle'+toggellblCompareCVGenreArr1[Index]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr1[Index]+'</span>';
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
                //console.log("element ==",element);
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

        //console.log("datalablesData"+datalablesData);

        /* for(var i=0; i<toggellblCompareCVGenreArr1.length;i++)
        {
            toggelCompareCVGenreBtns1 += '<div class="toggleWrapper" >';
            toggelCompareCVGenreBtns1 += '<input type="checkbox" id="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'" >';
            toggelCompareCVGenreBtns1 += '<label for="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'" class="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'" onClick="rtoggleCompareCV1GenreData1('+i+')" ><span class="rtoggleCompareCV1Genre'+toggellblCompareCVGenreArr1[i]+'_handler"></span></label>';
            toggelCompareCVGenreBtns1 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr1[i]+'</span>';
            toggelCompareCVGenreBtns1 += '</div>';
        }

        $("#cv1GenreRadarChartButtonBox").html(toggelCompareCVGenreBtns1);

        const ctx = document.getElementById('cv1GenreRadarChart').getContext('2d');
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

    /* var cv2Block16GenreGraphDatasetDataString = "{{implode(',',$cv2_block_16_genre_graph_dataset_data)}}";
    var cv2Block16GenreGraphDatasetData = cv2Block16GenreGraphDatasetDataString.split(',');
    //console.log("cv2Block16GenreGraphDatasetData:"+cv2Block16GenreGraphDatasetData);
    var cv2Block17GenreGraphDatasetDataString = "{{implode(',',$cv2_block_17_genre_graph_dataset_data)}}";
    var cv2Block17GenreGraphDatasetData = cv2Block17GenreGraphDatasetDataString.split(',');
    //console.log("cv2Block17GenreGraphDatasetData:"+cv2Block17GenreGraphDatasetData);
    var cv2Block18GenreGraphDatasetDataString = "{{implode(',',$cv2_block_18_genre_graph_dataset_data)}}";
    var cv2Block18GenreGraphDatasetData = cv2Block18GenreGraphDatasetDataString.split(',');
    //console.log("cv2Block18GenreGraphDatasetData:"+cv2Block18GenreGraphDatasetData);
    var cv2Block19GenreGraphDatasetDataString = "{{implode(',',$cv2_block_19_genre_graph_dataset_data)}}";
    var cv2Block19GenreGraphDatasetData = cv2Block19GenreGraphDatasetDataString.split(',');
    //console.log("cv2Block19GenreGraphDatasetData:"+cv2Block19GenreGraphDatasetData);
    var cv2GenreAggrGraphDatasetDataString = "{{implode(',',$cv2_genre_aggr_graph_dataset_data)}}";
    var cv2GenreAggrGraphDatasetData = cv2GenreAggrGraphDatasetDataString.split(',');
    //console.log("cv2GenreAggrGraphDatasetData:"+cv2GenreAggrGraphDatasetData);
    //var cv2Block16GenreGraphDatalablesDataString = "{{implode(',',$cv2_block_16_genre_graph_datalables_data)}}";
    //var cv2Block16GenreGraphDatalablesData = cv2Block16GenreGraphDatalablesDataString.split(',');
    var cv2Block16GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv2Block16GenreGraphDatalablesData = cv2Block16GenreGraphDatalablesDataString.split(',');
    //console.log("cv2Block16GenreGraphDatalablesData:"+cv2Block16GenreGraphDatalablesData);
    //var cv2Block17GenreGraphDatalablesDataString = "{{implode(',',$cv2_block_17_genre_graph_datalables_data)}}";
    //var cv2Block17GenreGraphDatalablesData = cv2Block17GenreGraphDatalablesDataString.split(',');
    var cv2Block17GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv2Block17GenreGraphDatalablesData = cv2Block17GenreGraphDatalablesDataString.split(',');
    //console.log("cv2Block17GenreGraphDatalablesData:"+cv2Block17GenreGraphDatalablesData);
    //var cv2Block18GenreGraphDatalablesDataString = "{{implode(',',$cv2_block_18_genre_graph_datalables_data)}}";
    //var cv2Block18GenreGraphDatalablesData = cv2Block18GenreGraphDatalablesDataString.split(',');
    var cv2Block18GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv2Block18GenreGraphDatalablesData = cv2Block18GenreGraphDatalablesDataString.split(',');
    //console.log("cv2Block18GenreGraphDatalablesData:"+cv2Block18GenreGraphDatalablesData);
    //var cv2Block19GenreGraphDatalablesDataString = "{{implode(',',$cv2_block_19_genre_graph_datalables_data)}}";
    //var cv2Block19GenreGraphDatalablesData = cv2Block19GenreGraphDatalablesDataString.split(',');
    var cv2Block19GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv2Block19GenreGraphDatalablesData = cv2Block19GenreGraphDatalablesDataString.split(',');
    //console.log("cv2Block19GenreGraphDatalablesData:"+cv2Block19GenreGraphDatalablesData);
    //var cv2GenreAggrGraphDatalablesDataString = "{{implode(',',$cv2_genre_aggr_graph_datalables_data)}}";
    //var cv2GenreAggrGraphDatalablesData = cv2GenreAggrGraphDatalablesDataString.split(',');
    var cv2GenreAggrGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cv2GenreAggrGraphDatalablesData = cv2GenreAggrGraphDatalablesDataString.split(',');
    //console.log("cv2GenreAggrGraphDatalablesData:"+cv2GenreAggrGraphDatalablesData); */

    var datasetDataStringLength = 0;
    var datasetDataLength = 0;
    var datalablesData = [];
    var colorval2 = "#999999";
    var colorvalData2 = [];
    var cv2DatasetsContent = [];
    var showMoodRadar = false;

    var toggellblCompareCVGenreArr2 = [];
    var toggelCompareCVGenreBtns2 = '';

    cv2DatasetsContentAggr = [];
    cv2DatasetsContentYt = [];
    cv2DatasetsContentIg= [];
    cv2DatasetsContentTt= [];
    cv2DatasetsContentTwt= [];

    if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre all with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','YouTube','Instagram','TikTok','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','YouTube','Instagram','TikTok'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','YouTube','TikTok','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','Instagram','TikTok','Twitter'];
        datasetDataLength = cv2Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block17GenreGraphDatalablesData[i])) {
                s = cv2Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','YouTube','Instagram'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','YouTube','TikTok'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,4 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','YouTube','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','Instagram','TikTok'];
        datasetDataLength = cv2Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block17GenreGraphDatalablesData[i])) {
                s = cv2Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block17GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,4 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','Instagram','Twitter'];
        datasetDataLength = cv2Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block17GenreGraphDatalablesData[i])) {
                s = cv2Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '' && cv2GenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 3,4 with agg"); toggellblCompareCVGenreArr2 = ['Aggregate','TikTok','Twitter'];
        datasetDataLength = cv2Block18GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block18GenreGraphDatalablesData[i])) {
                s = cv2Block18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cv2GenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2GenreAggrGraphDatasetData.length; i++)
        {
            cv2DatasetsContentAggr.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2GenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre all"); toggellblCompareCVGenreArr2 = ['YouTube','Instagram','TikTok','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3"); toggellblCompareCVGenreArr2 = ['YouTube','Instagram','TikTok'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4"); toggellblCompareCVGenreArr2 = ['YouTube','Instagram','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4"); toggellblCompareCVGenreArr2 = ['YouTube','TikTok','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4"); toggellblCompareCVGenreArr2 = ['Instagram','TikTok','Twitter'];
        datasetDataLength = cv2Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block17GenreGraphDatalablesData[i])) {
                s = cv2Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block17GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2"); toggellblCompareCVGenreArr2 = ['YouTube','Instagram'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3"); toggellblCompareCVGenreArr2 = ['YouTube','TikTok'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,4"); toggellblCompareCVGenreArr2 = ['YouTube','Twitter'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block17GenreGraphDatasetDataString != '' && cv2Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3"); toggellblCompareCVGenreArr2 = ['Instagram','TikTok'];
        datasetDataLength = cv2Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block17GenreGraphDatalablesData[i])) {
                s = cv2Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block17GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,4"); toggellblCompareCVGenreArr2 = ['Instagram','Twitter'];
        datasetDataLength = cv2Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block17GenreGraphDatalablesData[i])) {
                s = cv2Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block18GenreGraphDatasetDataString != '' && cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 3,4"); toggellblCompareCVGenreArr2 = ['TikTok','Twitter'];
        datasetDataLength = cv2Block18GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block18GenreGraphDatalablesData[i])) {
                s = cv2Block18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block16GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1"); toggellblCompareCVGenreArr2 = ['YouTube'];
        datasetDataLength = cv2Block16GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block16GenreGraphDatalablesData[i])) {
                s = cv2Block16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cv2Block16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cv2Block16GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentYt.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block16GenreGraphDatalablesData[i], "value": parseFloat(cv2Block16GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block17GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2"); toggellblCompareCVGenreArr2 = ['Instagram'];
        datasetDataLength = cv2Block17GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block17GenreGraphDatalablesData[i])) {
                s = cv2Block17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cv2Block17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];

        for(var i=0; i<cv2Block17GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentIg.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block17GenreGraphDatalablesData[i], "value": parseFloat(cv2Block17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 3"); toggellblCompareCVGenreArr2 = ['TikTok'];
        datasetDataLength = cv2Block18GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block18GenreGraphDatalablesData[i])) {
                s = cv2Block18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'TikTok', data: cv2Block18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];

        for(var i=0; i<cv2Block18GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTt.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block18GenreGraphDatalablesData[i], "value": parseFloat(cv2Block18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else if(cv2Block19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 4"); toggellblCompareCVGenreArr2 = ['Twitter'];
        datasetDataLength = cv2Block19GenreGraphDatasetData.length;
        for (var i = 0; i<cv2Block19GenreGraphDatalablesData.length; i++)
        {
            //console.log(cv2Block19GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cv2Block19GenreGraphDatalablesData[i])) {
                s = cv2Block19GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cv2Block19GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cv2Block19GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Twitter', data: cv2Block19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];

        for(var i=0; i<cv2Block19GenreGraphDatasetData.length; i++)
        {
            cv2DatasetsContentTwt.push({"label": cv2Block19GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
            cv2DatasetsContent.push({"label": cv2Block19GenreGraphDatalablesData[i], "value": parseFloat(cv2Block19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;
    }
    else
    {
        showMoodRadar = false;
    }

    old_datalablesData_genre_cv2 = datalablesData;
    old_datasetsContent_genre_cv2 = cv2DatasetsContent;
    old_toggellblArr_genre_cv2 = toggellblCompareCVGenreArr2;

    // var cv2dldString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    // var cv2dld = cv2dldString.split(',');

    if(cv2GenreAggrGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2GenreAggrGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2GenreAggrGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cv2Block16GenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block16GenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2Block16GenreGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cv2Block17GenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block17GenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2Block17GenreGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cv2Block18GenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block18GenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var cv2lblPostion = cv2Block18GenreGraphDatasetData.findIndex(data => data == cv2maxVal);
        console.log("cv2lblPostion",cv2lblPostion);
        old_highestGenrellbArr_2.push(datalablesData[cv2lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cv2Block19GenreGraphDatasetDataString != '')
    {
        var cv2maxVal = Math.max.apply(Math,cv2Block19GenreGraphDatasetData);
        console.log("cv2maxVal",cv2maxVal);
        var lblPostion = cv2Block19GenreGraphDatasetData.findIndex(data => data == cv2maxVal);
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

        if(toggellblCompareCVGenreArr2.length == 1)
        {
            // toggelCompareCVGenreBtns2 += '<div class="toggleWrapper">';
            // toggelCompareCVGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareCVGenreArr2[0]+'" disabled>';
            // toggelCompareCVGenreBtns2 += '<label for="r2toggle'+toggellblCompareCVGenreArr2[0]+'" class="r2toggle'+toggellblCompareCVGenreArr2[0]+'" disabled><span class="r2toggle'+toggellblCompareCVGenreArr2[0]+'_handler"></span></label>';
            // toggelCompareCVGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr2[0]+'</span>';
            // toggelCompareCVGenreBtns2 += '</div>';
            for(var i=0; i<cv2SocialMediaDataExistArray.length;i++){

                if(toggellblCompareCVGenreArr2.includes(cv2SocialMediaDataExistArray[i])){

                    toggelCompareCVGenreBtns2 += '<div class="toggleWrapper">';
                    toggelCompareCVGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareCVGenreArr2[0]+'" disabled>';
                    toggelCompareCVGenreBtns2 += '<label for="r2toggle'+toggellblCompareCVGenreArr2[0]+'" class="r2toggle'+toggellblCompareCVGenreArr2[0]+'" disabled><span class="r2toggle'+toggellblCompareCVGenreArr2[0]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr2[0]+'</span>';
                    toggelCompareCVGenreBtns2 += '</div>';

                }else{
                    toggelCompareCVGenreBtns2 += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggelCompareCVGenreBtns2 += '<input type="checkbox" id="r2toggle'+cv2SocialMediaDataExistArray[i]+'" disabled>';
                    toggelCompareCVGenreBtns2 += '<label for="r2toggle'+cv2SocialMediaDataExistArray[i]+'" class="r2toggle'+cv2SocialMediaDataExistArray[i]+'" disabled style="background: transparent"><span class="r2toggle'+cv2SocialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns2 += '<span class="cust-toggleBtnName">'+cv2SocialMediaDataExistArray[i]+'</span>';
                    toggelCompareCVGenreBtns2 += '</div>';
                }
            }

        }
        else
        {
            // for(var i=0; i<toggellblCompareCVGenreArr2.length;i++)
            // {
            //     toggelCompareCVGenreBtns2 += '<div class="toggleWrapper">';
            //     toggelCompareCVGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareCVGenreArr2[i]+'" >';
            //     toggelCompareCVGenreBtns2 += '<label for="r2toggle'+toggellblCompareCVGenreArr2[i]+'" class="r2toggle'+toggellblCompareCVGenreArr2[i]+'" onClick="toggleDataCompareCV(\''+toggellblCompareCVGenreArr2[i]+'\', \'withoutPopup\', \'cv2GenreRadarChart\')" ><span class="r2toggle'+toggellblCompareCVGenreArr2[i]+'_handler"></span></label>';
            //     toggelCompareCVGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr2[i]+'</span>';
            //     toggelCompareCVGenreBtns2 += '</div>';
            // }


            for(var i=0; i<cv2SocialMediaDataExistArray.length;i++)
            {
                if(toggellblCompareCVGenreArr2.includes(cv2SocialMediaDataExistArray[i])){
                    var Index = toggellblCompareCVGenreArr2.indexOf(cv2SocialMediaDataExistArray[i]);
                    toggelCompareCVGenreBtns2 += '<div class="toggleWrapper">';
                    toggelCompareCVGenreBtns2 += '<input type="checkbox" id="r2toggle'+toggellblCompareCVGenreArr2[Index]+'" >';
                    toggelCompareCVGenreBtns2 += '<label for="r2toggle'+toggellblCompareCVGenreArr2[Index]+'" class="r2toggle'+toggellblCompareCVGenreArr2[Index]+'" onClick="toggleDataCompareCV(\''+toggellblCompareCVGenreArr2[Index]+'\', \'withoutPopup\', \'cv2GenreRadarChart\')" ><span class="r2toggle'+toggellblCompareCVGenreArr2[Index]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr2[Index]+'</span>';
                    toggelCompareCVGenreBtns2 += '</div>';

                }else{
                    toggelCompareCVGenreBtns2 += '<div class="toggleWrapper" style="pointer-events: none;">';
                    toggelCompareCVGenreBtns2 += '<input type="checkbox" id="r2toggle'+cv2SocialMediaDataExistArray[i]+'" >';
                    toggelCompareCVGenreBtns2 += '<label for="r2toggle'+cv2SocialMediaDataExistArray[i]+'" class="r2toggle'+cv2SocialMediaDataExistArray[i]+'" onClick="toggleDataCompareCV(\''+cv2SocialMediaDataExistArray[i]+'\', \'withoutPopup\', \'cv2GenreRadarChart\')" style="background: transparent"><span class="r2toggle'+cv2SocialMediaDataExistArray[i]+'_handler"></span></label>';
                    toggelCompareCVGenreBtns2 += '<span class="cust-toggleBtnName">'+cv2SocialMediaDataExistArray[i]+'</span>';
                    toggelCompareCVGenreBtns2 += '</div>';
                }

            }


        }
        $("#cv2GenreRadarChartButtonBox").html(toggelCompareCVGenreBtns2);
        // $("#cv2GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index) {
        //     if(index > 0) {
        //         $(this).prop( "checked", true );
        //     }
        // });

        if(toggellblCompareCVGenreArr2.length == 1){

            $("#cv2GenreRadarChartButtonBox").find("input[type='checkbox']").each(function(index,element) {
                var checkboxId = $(element).attr("id").replace("r2toggle","");
                if(toggellblCompareCVGenreArr2.includes(checkboxId)){
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
        for(var i=0; i<toggellblCompareCVGenreArr2.length;i++)
        {
            toggelCompareCVGenreBtns2 += '<div class="toggleWrapper" >';
            toggelCompareCVGenreBtns2 += '<input type="checkbox" id="rtoggleCompareCV2Genre'+toggellblCompareCVGenreArr2[i]+'" >';
            toggelCompareCVGenreBtns2 += '<label for="rtoggleCompareCV2Genre'+toggellblCompareCVGenreArr2[i]+'" class="rtoggleCompareCV2Genre'+toggellblCompareCVGenreArr2[i]+'" onClick="rtoggleCompareCV2GenreData2('+i+')" ><span class="rtoggleCompareCV2Genre'+toggellblCompareCVGenreArr2[i]+'_handler"></span></label>';
            toggelCompareCVGenreBtns2 += '<span class="cust-toggleBtnName">'+toggellblCompareCVGenreArr2[i]+'</span>';
            toggelCompareCVGenreBtns2 += '</div>';
        }

        $("#cv2GenreRadarChartButtonBox").html(toggelCompareCVGenreBtns2);

        const ctx = document.getElementById('cv2GenreRadarChart').getContext('2d');
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
/* </script> */

//=============Radar chart GrapData start=========================
function getRadarChartGraphData(call_from,data_id){

    if(call_from == "cv1_Sonic_logo"){
        if(cv1_sonic_logo_main_mood_graph_dataset_data.hasOwnProperty(data_id)){
            console.log("call from cv1_Sonic_logo and data_id = ",data_id);
            var slMainMoodGraph_Holder_id = "cv1_sonicLogoMainMood_radarChart_holder";
            var slMainMoodGraph_Holder_id_append = "<canvas id='cv1_sonicLogoMainMood_radarChart'></canvas>";
            var datasetdata = cv1_sonic_logo_main_mood_graph_dataset_data[data_id].split(',');
            var datalablesData = cv1_sonic_logo_main_mood_graph_datalabels_data[data_id].split(',');
            var sonicLogoMainMoodGraph_id = "cv1_sonicLogoMainMood_radarChart";
        }
    }else{
        if(cv2_sonic_logo_main_mood_graph_dataset_data.hasOwnProperty(data_id)){
            console.log("call from cv2_Sonic_logo and data_id = ",data_id);
            var slMainMoodGraph_Holder_id = "cv2_sonicLogoMainMood_radarChart_holder";
            var slMainMoodGraph_Holder_id_append = "<canvas id='cv2_sonicLogoMainMood_radarChart'></canvas>";
            var datasetdata = cv2_sonic_logo_main_mood_graph_dataset_data[data_id].split(',');
            var datalablesData = cv2_sonic_logo_main_mood_graph_datalabels_data[data_id].split(',');
            var sonicLogoMainMoodGraph_id = "cv2_sonicLogoMainMood_radarChart";
        }
    }


    document.getElementById(slMainMoodGraph_Holder_id).innerHTML = "";
    document.getElementById(slMainMoodGraph_Holder_id).innerHTML = slMainMoodGraph_Holder_id_append;

    console.log("graph_data",call_from,data_id,datasetdata,datalablesData);

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

console.log("typeof cv1==",typeof cv1_sonic_logo_main_mood_graph_datalabels_data,Object.keys(cv1_sonic_logo_main_mood_graph_datalabels_data).length);
if(cv1_block_6_data_object.length > 0 && Object.keys(cv1_sonic_logo_main_mood_graph_datalabels_data).length > 0){
    var first_index_of_data = cv1_block_6_data_object[0]['b6_id'];
    getRadarChartGraphData("cv1_Sonic_logo",first_index_of_data)
}

console.log("typeof cv2==",typeof cv2_sonic_logo_main_mood_graph_datalabels_data,Object.keys(cv2_sonic_logo_main_mood_graph_datalabels_data).length);
if(cv2_block_6_data_object.length > 0 && Object.keys(cv2_sonic_logo_main_mood_graph_datalabels_data).length > 0){
    var first_index_of_data = cv2_block_6_data_object[0]['b6_id'];
    getRadarChartGraphData("cv2_Sonic_logo",first_index_of_data)
}
//=============Radar chart GrapData end=========================

//=============Pie chart GrapData start=========================
if(cv1b7DataCount > 0){
    console.log("cv1datasetsData lenght == ",cv1datasetsData);
    getDoughnutChartGraphData("cv1_Sonic_Logo",cv1datasetsData);
    var shwSec8Chart = false;
    var cv1sce8DataSetsContent = [];
        $.ajax({
            type: "GET",
            url: cv1suiaUrl,
            data: "",
            success: function(data) {
                //console.log("insudtry_yes_avg_data_array"+data['insudtry_yes_avg_data_array']+"--:--insudtry_no_avg_data_array"+data['insudtry_no_avg_data_array']);

                if(data['insudtry_yes_avg_data_array'] != '' && data['insudtry_yes_avg_data_array'] != undefined && data['insudtry_no_avg_data_array'] != '' && data['insudtry_no_avg_data_array'] != undefined)
                {
                    var cv1sce8DataSetsYesContent = 0;
                    var cv1sce8DataSetsYesContentCount = data['insudtry_yes_avg_data_array'].length;
                    for(var i = 0; i<data['insudtry_yes_avg_data_array'].length; i++)
                    {
                        cv1sce8DataSetsYesContent = cv1sce8DataSetsYesContent+parseInt(data['insudtry_yes_avg_data_array'][i]);
                    }
                    //console.log("cv1sce8DataSetsYesContent"+cv1sce8DataSetsYesContent);
                    var cv1sce8DataSetsYesContentValue = cv1sce8DataSetsYesContent/cv1sce8DataSetsYesContentCount;
                    cv1sce8DataSetsContent.push(parseFloat(cv1sce8DataSetsYesContentValue).toFixed(2));

                    var cv1sce8DataSetsNoContent = 0;
                    var cv1sce8DataSetsNoContentCount = data['insudtry_no_avg_data_array'].length;
                    for(var b = 0; b<data['insudtry_no_avg_data_array'].length; b++)
                    {
                        cv1sce8DataSetsNoContent = cv1sce8DataSetsNoContent+parseInt(data['insudtry_no_avg_data_array'][b]);
                    }
                    //console.log("cv1sce8DataSetsNoContent"+cv1sce8DataSetsNoContent);
                    var cv1sce8DataSetsNoContentValue = cv1sce8DataSetsNoContent/cv1sce8DataSetsNoContentCount;
                    cv1sce8DataSetsContent.push(parseFloat(cv1sce8DataSetsNoContentValue).toFixed(2));
                    //console.log("cv1sce8DataSetsContent"+cv1sce8DataSetsContent);
                }
            },
            complete: function(){

                if(cv1sce8DataSetsContent !='' && cv1sce8DataSetsContent !=undefined)
                {
                    getDoughnutChartGraphData("cv1_Industry_Logo",cv1sce8DataSetsContent);
                    if(cv1countSonicLogoAsPerTheCvIndustryDataString != ''){
                            getDoughnutChartGraphData("cv1_Logo_Count",cv1countSonicLogoAsPerTheCvIndustryData);
                    }

                }

            }
        });
}

if(cv2b7DataCount > 0){
    console.log("cv2datasetsData lenght == ",cv2datasetsData);
    getDoughnutChartGraphData("cv2_Sonic_Logo",cv2datasetsData);
    var shwSec8Chart = false;
    var cv2sce8DataSetsContent = [];
        $.ajax({
            type: "GET",
            url: cv2suiaUrl,
            data: "",
            success: function(data) {
                //console.log("insudtry_yes_avg_data_array"+data['insudtry_yes_avg_data_array']+"--:--insudtry_no_avg_data_array"+data['insudtry_no_avg_data_array']);

                if(data['insudtry_yes_avg_data_array'] != '' && data['insudtry_yes_avg_data_array'] != undefined && data['insudtry_no_avg_data_array'] != '' && data['insudtry_no_avg_data_array'] != undefined)
                {
                    var cv2sce8DataSetsYesContent = 0;
                    var cv2sce8DataSetsYesContentCount = data['insudtry_yes_avg_data_array'].length;
                    for(var i = 0; i<data['insudtry_yes_avg_data_array'].length; i++)
                    {
                        cv2sce8DataSetsYesContent = cv2sce8DataSetsYesContent+parseInt(data['insudtry_yes_avg_data_array'][i]);
                    }
                    //console.log("cv2sce8DataSetsYesContent"+cv2sce8DataSetsYesContent);
                    var cv2sce8DataSetsYesContentValue = cv2sce8DataSetsYesContent/cv2sce8DataSetsYesContentCount;
                    cv2sce8DataSetsContent.push(parseFloat(cv2sce8DataSetsYesContentValue).toFixed(2));

                    var cv2sce8DataSetsNoContent = 0;
                    var cv2sce8DataSetsNoContentCount = data['insudtry_no_avg_data_array'].length;
                    for(var b = 0; b<data['insudtry_no_avg_data_array'].length; b++)
                    {
                        cv2sce8DataSetsNoContent = cv2sce8DataSetsNoContent+parseInt(data['insudtry_no_avg_data_array'][b]);
                    }
                    //console.log("cv2sce8DataSetsNoContent"+cv2sce8DataSetsNoContent);
                    var cv2sce8DataSetsNoContentValue = cv2sce8DataSetsNoContent/cv2sce8DataSetsNoContentCount;
                    cv2sce8DataSetsContent.push(parseFloat(cv2sce8DataSetsNoContentValue).toFixed(2));
                    //console.log("cv2sce8DataSetsContent"+cv2sce8DataSetsContent);
                }
            },
            complete: function(){

                if(cv2sce8DataSetsContent !='' && cv2sce8DataSetsContent !=undefined)
                {
                    getDoughnutChartGraphData("cv2_Industry_Logo",cv2sce8DataSetsContent);
                    if(cv2countSonicLogoAsPerTheCvIndustryDataString != ''){
                            getDoughnutChartGraphData("cv2_Logo_Count",cv2countSonicLogoAsPerTheCvIndustryData);
                    }

                }

            }
        });
}

function getDoughnutChartGraphData(call_from,main_dataSet){

    if(call_from == "cv1_Sonic_Logo"){
        console.log("Pie chart Call From cv1_Sonic_Logo");
        console.log("main_dataSet = ",main_dataSet);
        // var destroy_var = brandCVPie1;
        var div_id = "compareCVPieDiv1";
        var svg_parent_div_id = "cv1pieChart";
        var div_append = '<div id="cv1pieChart" class="compareCVPie1WH"></div>';
        var datasetsData = main_dataSet;
        var innerFormat = "percentage";

    }else if(call_from == "cv1_Industry_Logo"){
        console.log("Pie chart Call From cv1_Industry_Logo");
        console.log("main_dataSet = ",main_dataSet);

        var div_id = "compareCVPieDiv2";
        var svg_parent_div_id = "cv1donutChart0";
        var div_append = '<div id="cv1donutChart0" class="compareCVPie2WH"></div>';
        // var destroy_var = brandCVPie2;
        var datasetsData = main_dataSet;
        var innerFormat = "percentage";

    }else if(call_from == "cv1_Logo_Count"){
        console.log("Pie chart Call From cv1_Logo_Count");
        console.log("main_dataSet =",main_dataSet);
        // var brandCVPie_logo3;
        var div_id = "compareCVPieDiv5";
        var svg_parent_div_id = "cv1pieChart_sl";
        var div_append = '<div id="cv1pieChart_sl" class="compareCVPie5WH"></div>';
        var datasetsData = main_dataSet;
        // var destroy_var = "";
        var innerFormat = "value";

    }else if(call_from == "cv2_Sonic_Logo"){
        console.log("Pie chart Call From cv2_Sonic_Logo");
        console.log("main_dataSet = ",main_dataSet);
        // var destroy_var = brandCVPie1;
        var div_id = "compareCVPieDiv3";
        var svg_parent_div_id = "cv2pieChart";
        var div_append = '<div id="cv2pieChart" class="compareCVPie3WH"></div>';
        var datasetsData = main_dataSet;
        var innerFormat = "percentage";

    }else if(call_from == "cv2_Industry_Logo"){

        console.log("Pie chart Call From cv2_Industry_Logo");
        console.log("main_dataSet = ",main_dataSet);

        var div_id = "compareCVPieDiv4";
        var svg_parent_div_id = "cv2donutChart0";
        var div_append = '<div id="cv2donutChart0" class="compareCVPie4WH"></div>';
        // var destroy_var = brandCVPie2;
        var datasetsData = main_dataSet;
        var innerFormat = "percentage";

    }else if(call_from == "cv2_Logo_Count"){

        console.log("Pie chart Call From cv2_Logo_Count");
        console.log("main_dataSet =",main_dataSet);
        // var destroy_var = brandCVPie1;
        var div_id = "compareCVPieDiv6";
        var svg_parent_div_id = "cv2pieChart_sl";
        var div_append = '<div id="cv2pieChart_sl" class="compareCVPie6WH"></div>';
        var datasetsData = main_dataSet;
        var innerFormat = "value";

    }else{
        console.log("not calling from anywhere");
    }


    if(main_dataSet[0]==0 && main_dataSet[1]!=0){
        var pieChartBgColorArray = ['#a7a8a9', '#a7a8a9'];
    }else{
        var pieChartBgColorArray = cv1pieChartBgColorNames.split(',');
    }


    var brandCVPieData = [
        { label: "", value: parseInt(datasetsData[0])},
        { label: "", value: parseInt(datasetsData[1])}
    ];


        var brandCVPieUpdate = function () {

            document.getElementById(div_id).innerHTML = "";
            document.getElementById(div_id).innerHTML = div_append;
            // if (destroy_var) destroy_var.destroy();

            var div1W = $('#'+div_id+'').width();
            var div1H = $('#'+div_id+'').height();
            var size = Math.min(div1W, div1H);
            var opt =  {
                data: {
                    content: brandCVPieData
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
                    inner: {
                        format: innerFormat,
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
                        segments: pieChartBgColorArray,
                        segmentStroke: "#8b8c90"
                    }
                }
            };
            brandCVPieUpdate = new d3pie(svg_parent_div_id, opt);
        };

        brandCVPieUpdate();
        window.addEventListener('resize', brandCVPieUpdate);

}
//=============Pie chart GrapData end=========================

///==============cv1 most populer video graph show =============
function cv1VideosRadarChartGraphData(vid,index,callFrom){
    // console.log("function videosRadarChartGraphData para == ",vid,index,callFrom);
    if(cv1MostPopulerVideosDataSetData.length > 0)
    {
        var cv1Datasetdata = [];
        var cv1DatalablesData = [];
        if(callFrom == "mostPopuler"){
            if(cv1MostPopulerVideosDataLabelSetData.hasOwnProperty(vid)){
                document.getElementById(`cv1VideoMPGraphRadarChart_Holder${index}`).innerHTML = "";
                document.getElementById(`cv1VideoMPGraphRadarChart_Holder${index}`).innerHTML =`<canvas id="cv1VideoMPGraphRadarChart${index}"></canvas>`;
                cv1Datasetdata = cv1MostPopulerVideosDataSetData[vid].split(',');
                cv1DatalablesData = cv1MostPopulerVideosDataLabelSetData[vid].split(',');
            }
        }else if(callFrom == "mood"){
            if(cv1MoodVideoGraphDataArrLabelSetData.hasOwnProperty(vid)){
                document.getElementById(`cv1VideoMoodGraphRadarChart_Holder${index}`).innerHTML = "";
                document.getElementById(`cv1VideoMoodGraphRadarChart_Holder${index}`).innerHTML =`<canvas id="cv1VideoMoodGraphRadarChart${index}"></canvas>`;
                cv1Datasetdata = cv1MoodVideoGraphDataArrSetData[vid].split(',');
                cv1DatalablesData = cv1MoodVideoGraphDataArrLabelSetData[vid].split(',');
            }
        }else{
            if(cv1GenreVideoGraphDataArrLabelSetData.hasOwnProperty(vid)){
                document.getElementById(`cv1VideoGenreGraphRadarChart_Holder${index}`).innerHTML = "";
                document.getElementById(`cv1VideoGenreGraphRadarChart_Holder${index}`).innerHTML =`<canvas id="cv1VideoGenreGraphRadarChart${index}"></canvas>`;
                cv1Datasetdata = cv1GenreVideoGraphDataArrSetData[vid].split(',');
                cv1DatalablesData = cv1GenreVideoGraphDataArrLabelSetData[vid].split(',');
            }
        }


        console.log("cv1 videos graph_data",vid,cv1Datasetdata,cv1DatalablesData);

        cv1DatasetsContent = [{data:cv1Datasetdata, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0}]

        if(cv1Datasetdata.length > 0 && cv1DatalablesData.length > 0)
        {
            if(callFrom == "mostPopuler"){

                var cv1Ctx = document.getElementById(`cv1VideoMPGraphRadarChart${index}`).getContext('2d');

            }else if(callFrom == "mood"){

                var cv1Ctx = document.getElementById(`cv1VideoMoodGraphRadarChart${index}`).getContext('2d');
            }else{

                var cv1Ctx = document.getElementById(`cv1VideoGenreGraphRadarChart${index}`).getContext('2d');
            }
            // downSlradarGraphDataSetcontent = datasetsContent;
            // downSlradarGraphDataLabelcontent = datalablesData;




            const cv1VideoGraphRadarChart = new Chart(cv1Ctx, {
                    type: 'radar',
                    plugins: [ChartDataLabels],
                    data:{
                        labels:cv1DatalablesData,
                        datasets:cv1DatasetsContent
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
                                    fontSize: 8,
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
                                    fontSize: 9,
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
                                        size: 9
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
                                        let label = cv1VideoGraphRadarChart.data.datasets.labels;
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });

                cv1VideoGraphRadarChart.update();
                // $(".cvVideoGraphRB").find(".overlay, .loading-img").remove();
        }
    }
}
// console.log("object key",Object.keys(cv1MostPopulerVideosDataLabelSetData));
if($(".cv1VideoGraphRB").find(".overlay").length == 0)
{
    $(".cv1VideoGraphRB").append(getLoader());
    $(".cv1VideoGraphRB").find(".loading-img").css("z-index","1030");
}
setTimeout(()=>{
    if(Object.keys(cv1MostPopulerVideosDataLabelSetData).length > 0){
        // console.log("************",Object.keys(cv1MostPopulerVideosDataLabelSetData)[0]);
        cv1VideosRadarChartGraphData(Object.keys(cv1MostPopulerVideosDataLabelSetData)[0],0,"mostPopuler")
    }else if(Object.keys(cv1MostPopulerVideosDataLabelSetData).length == 0 && Object.keys(cv1MoodVideoGraphDataArrLabelSetData).length > 0){
        cv1VideosRadarChartGraphData(Object.keys(cv1MoodVideoGraphDataArrLabelSetData)[0],0,"mood");

    }
    setTimeout(()=>{$(".cv1VideoGraphRB").find(".overlay, .loading-img").remove();},200);
},2000);

///==============cv2 most populer video graph show =============
function cv2VideosRadarChartGraphData(vid,index,callFrom){
    // console.log("function videosRadarChartGraphData para == ",vid,index,callFrom);
    if(cv2MostPopulerVideosDataSetData.length > 0)
    {
        var cv2Datasetdata = [];
        var cv2DatalablesData = [];
        if(callFrom == "mostPopuler"){
            if(cv2MostPopulerVideosDataLabelSetData.hasOwnProperty(vid)){
                document.getElementById(`cv2VideoMPGraphRadarChart_Holder${index}`).innerHTML = "";
                document.getElementById(`cv2VideoMPGraphRadarChart_Holder${index}`).innerHTML =`<canvas id="cv2VideoMPGraphRadarChart${index}"></canvas>`;
                cv2Datasetdata = cv2MostPopulerVideosDataSetData[vid].split(',');
                cv2DatalablesData = cv2MostPopulerVideosDataLabelSetData[vid].split(',');
            }
        }else if(callFrom == "mood"){
            if(cv2MoodVideoGraphDataArrLabelSetData.hasOwnProperty(vid)){
                document.getElementById(`cv2VideoMoodGraphRadarChart_Holder${index}`).innerHTML = "";
                document.getElementById(`cv2VideoMoodGraphRadarChart_Holder${index}`).innerHTML =`<canvas id="cv2VideoMoodGraphRadarChart${index}"></canvas>`;
                cv2Datasetdata = cv2MoodVideoGraphDataArrSetData[vid].split(',');
                cv2DatalablesData = cv2MoodVideoGraphDataArrLabelSetData[vid].split(',');
            }
        }else{
            if(cv2GenreVideoGraphDataArrLabelSetData.hasOwnProperty(vid)){
                document.getElementById(`cv2VideoGenreGraphRadarChart_Holder${index}`).innerHTML = "";
                document.getElementById(`cv2VideoGenreGraphRadarChart_Holder${index}`).innerHTML =`<canvas id="cv2VideoGenreGraphRadarChart${index}"></canvas>`;
                cv2Datasetdata = cv2GenreVideoGraphDataArrSetData[vid].split(',');
                cv2DatalablesData = cv2GenreVideoGraphDataArrLabelSetData[vid].split(',');
            }
        }


        console.log("cv2 videos graph_data",vid,cv2Datasetdata,cv2DatalablesData);

        cv2DatasetsContent = [{data:cv2Datasetdata, borderColor: mgYtBColorVal, backgroundColor: mgYtBgColorVal, pointBackgroundColor: mgYtPbgColorVal, pointBorderColor: mgYtPbColorVal, pointBorderWidth: 0, pointRadius: 0}]

        if(cv2Datasetdata.length > 0 && cv2DatalablesData.length > 0)
        {
            if(callFrom == "mostPopuler"){

                var cv2Ctx = document.getElementById(`cv2VideoMPGraphRadarChart${index}`).getContext('2d');

            }else if(callFrom == "mood"){

                var cv2Ctx = document.getElementById(`cv2VideoMoodGraphRadarChart${index}`).getContext('2d');
            }else{

                var cv2Ctx = document.getElementById(`cv2VideoGenreGraphRadarChart${index}`).getContext('2d');
            }
            // downSlradarGraphDataSetcontent = datasetsContent;
            // downSlradarGraphDataLabelcontent = datalablesData;




            const cv2VideoGraphRadarChart = new Chart(cv2Ctx, {
                    type: 'radar',
                    plugins: [ChartDataLabels],
                    data:{
                        labels:cv2DatalablesData,
                        datasets:cv2DatasetsContent
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
                                    fontSize: 8,
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
                                    fontSize: 9,
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
                                        size: 9
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
                                        let label = cv2VideoGraphRadarChart.data.datasets.labels;
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });

                cv2VideoGraphRadarChart.update();
                // $(".cvVideoGraphRB").find(".overlay, .loading-img").remove();
        }
    }

}
//console.log("object key",Object.keys(mostPopulerVideosDataLabelSetData));
if($(".cv2VideoGraphRB").find(".overlay").length == 0)
{
    $(".cv2VideoGraphRB").append(getLoader());
    $(".cv2VideoGraphRB").find(".loading-img").css("z-index","1030");
}
setTimeout(()=>{
    if(Object.keys(cv2MostPopulerVideosDataLabelSetData).length > 0){
        cv2VideosRadarChartGraphData(Object.keys(cv2MostPopulerVideosDataLabelSetData)[0],0,"mostPopuler")
    }else if(Object.keys(cv2MostPopulerVideosDataLabelSetData).length == 0 && Object.keys(cv2MoodVideoGraphDataArrLabelSetData).length > 0){
        cv2VideosRadarChartGraphData(Object.keys(cv2MoodVideoGraphDataArrLabelSetData)[0],0,"mood");

    }
    setTimeout(()=>{$(".cv2VideoGraphRB").find(".overlay, .loading-img").remove();},200);
},2000);

$('.compareCV2MostPopVideo').on('afterChange', function(event, slick, currentSlide, nextSlide){

    // console.log("graph == mostPopuler");
    // console.log("currentSlide == ",currentSlide);
    // // console.log("video  id == ",Object.keys(mostPopulerVideosDataLabelSetData)[currentSlide]);
    // console.log("video  id == ",mostPopulerVideoIdArr[currentSlide]);
    if($(".cv2VideoGraphRB").find(".overlay").length == 0)
    {
        $(".cv2VideoGraphRB").append(getLoader());
        $(".cv2VideoGraphRB").find(".loading-img").css("z-index","1030");
    }
    setTimeout(()=>{
        // videosRadarChartGraphData(Object.keys(mostPopulerVideosDataLabelSetData)[currentSlide],currentSlide,"mostPopuler");
        cv2VideosRadarChartGraphData(cv2MostPopulerVideoIdArr[currentSlide],currentSlide,"mostPopuler");
        setTimeout(()=>{$(".cv2VideoGraphRB").find(".overlay, .loading-img").remove();},200);
    },2000);
});

$('.compareCV2MostPopVideoMood').on('afterChange', function(event, slick, currentSlide, nextSlide){
    // console.log("graph == mood");
    // console.log("currentSlide == ",currentSlide);
    // // console.log("video  id == ",Object.keys(moodVideoGraphDataArrLabelSetData)[currentSlide]);
    // console.log("video  id == ",moodVideoIdArr[currentSlide]);
    if($(".cv2VideoGraphRB").find(".overlay").length == 0)
    {
        $(".cv2VideoGraphRB").append(getLoader());
        $(".cv2VideoGraphRB").find(".loading-img").css("z-index","1030");
    }
    setTimeout(()=>{
        // videosRadarChartGraphData(Object.keys(moodVideoGraphDataArrLabelSetData)[currentSlide],currentSlide,"mood");
        cv2VideosRadarChartGraphData(cv2MoodVideoIdArr[currentSlide],currentSlide,"mood");
        setTimeout(()=>{$(".cv2VideoGraphRB").find(".overlay, .loading-img").remove();},200);
    },2000);
});

$('.compareCV2MostPopVideoGenre').on('afterChange', function(event, slick, currentSlide, nextSlide){

    // console.log("graph == genre");
    // console.log("currentSlide == ",currentSlide);
    // // console.log("video  id == ",Object.keys(genreVideoGraphDataArrLabelSetData)[currentSlide]);
    // console.log("video  id == ",genreVideoIdArr[currentSlide]);
    if($(".cv2VideoGraphRB").find(".overlay").length == 0)
    {
        $(".cv2VideoGraphRB").append(getLoader());
        $(".cv2VideoGraphRB").find(".loading-img").css("z-index","1030");
    }
    setTimeout(()=>{
        // videosRadarChartGraphData(Object.keys(genreVideoGraphDataArrLabelSetData)[currentSlide],currentSlide,"genre");
        cv2VideosRadarChartGraphData(cv2GenreVideoIdArr[currentSlide],currentSlide,"genre");
        setTimeout(()=>{$(".cv2VideoGraphRB").find(".overlay, .loading-img").remove();},200);
    },2000);
});
