
    // Multiple option select Dropdown
    $(function() {
        window.fs_test = $('.compareIndustryDropDown').fSelect();
    });

    $(function() {
        window.fs_test = $('.compareSubIndustryDropDown').fSelect();
        $("#compare_sub_industry_dropdown").find(".fs-wrap").css("pointer-events","none");
        $("#compare_sub_industry_dropdown").css("cursor","not-allowed");
    });

    $(function() {
        window.fs_test = $('.compareBrandCVDropDown').fSelect();
    });

    function clearDropdown(element)
    {
        console.log($(element).closest(".fs-wrap").parent().attr("id"));
        parentDivId = $(element).closest(".fs-wrap").parent().attr("id");

        console.log(parentDivId);        
        
        if(parentDivId == 'compare_industry_dropdown')
        {
            $("#"+parentDivId.replace("_dropdown", "_cv_id_val")).val('');
            $("#"+parentDivId).find(".fs-label-wrap").find(".fs-label").text('Select Industry');
            if($("#compare_industry_cv_id_val").val() == '')
            {
                $("#compare_industry_dropdown").find(".fs-btnclear").addClass("hide");
                $("#compare_sub_industry_dropdown").find(".fs-btnclear").addClass("hide");
                $("#compare_cv_dropdown").find(".fs-btnclear").addClass("hide");
                $("#compare_option").val('');
                $("#compare_cv_dropdown").find(".fs-wrap").removeAttr("style");
                $("#compare_cv_dropdown").removeAttr("style");

                $("#compare_sub_industry_dropdown").find(".fs-options .fs-option:first").click();
                $("#compare_sub_industry_dropdown").find(".fs-options .fs-option:first").removeClass("hide");
                $("#compare_sub_industry_cv_id_val").val('');

                $("#compare_sub_industry_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").removeAttr("selected");
                $("#compare_sub_industry_dropdown").find(".fs-wrap").css("pointer-events","none");
                $("#compare_sub_industry_dropdown").css("cursor","not-allowed");
                $("#compare_sub_industry_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").removeClass("hide");

                $("#compare_cv_dropdown").find(".fs-options .fs-option:first").click();
                $("#compare_cv_dropdown").find(".fs-options .fs-option:first").removeClass("hide");
                $("#compare_cv_id_val").val('');

                $("#compare_cv_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").removeAttr("selected");
                $("#compare_cv_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").removeClass("hide");

                $("#compare_btn").attr("disabled","true");
                $("#compare_industry_cv_id_val").find(".fs-options .fs-option:first").removeClass("hide");
            }            
        }
        else if(parentDivId == 'compare_sub_industry_dropdown')
        {
            $("#"+parentDivId.replace("_dropdown", "_cv_id_val")).val('');
            $("#"+parentDivId).find(".fs-label-wrap").find(".fs-label").text('Select Sub Industry');
            if($("#compare_sub_industry_cv_id_val").val() == '')
            {
                $("#compare_sub_industry_dropdown").find(".fs-btnclear").addClass("hide");
                $("#compare_cv_dropdown").find(".fs-btnclear").addClass("hide");
                $("#compare_cv_dropdown").find(".fs-options .fs-option:first").click();
                $("#compare_cv_dropdown").find(".fs-options .fs-option:first").removeClass("hide");
                $("#compare_cv_id_val").val('');
                if($("#compare_industry_cv_id_val").val() != '')
                {
                    $("#compare_option").val('industry_cv');
                    var actionUrl = $("#compare_industry_form").val();
                    $("#modal_compare").find("form").attr("action",actionUrl);
                }
                else
                {
                    $("#compare_option").val('');
                }
                var selectedIndCvVal = $("#compare_industry_cv_id_val").val();
                if($("#compare_cv_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").hasClass('ind_'+atob(selectedIndCvVal.split('$_$')[0])))
                {
                    console.log('ind_'+atob(selectedIndCvVal.split('$_$')[0]));
                    $("#compare_cv_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").removeAttr("selected");
                    $("#compare_cv_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").removeClass("hide");
                    $("#compare_cv_dropdown").find(".fs-dropdown").find(".fs-options").find(".fs-option").not($("#compare_cv_dropdown").find(".fs-dropdown").find(".fs-options").find(".ind_"+atob(selectedIndCvVal.split('$_$')[0]))).addClass("hide");
                    
                }
            }
        }
        else if(parentDivId == 'compare_cv_dropdown')
        {
            $("#"+parentDivId.replace("_cv_dropdown", "_brand_cv_id_val")).val('');
            $("#"+parentDivId).find(".fs-label").text('Select CV');
            $("#compare_cv_dropdown").find(".fs-btnclear").addClass("hide");
            if($("#compare_industry_cv_id_val").val() != '')
            {
                if($("#compare_sub_industry_cv_id_val").val() != '')
                {
                    $("#compare_option").val('sub_industry_cv');
                    var actionUrl = $("#compare_sub_industry_form").val();
                    $("#modal_compare").find("form").attr("action",actionUrl);
                }
                else
                {
                    $("#compare_option").val('industry_cv');
                    var actionUrl = $("#compare_industry_form").val();
                    $("#modal_compare").find("form").attr("action",actionUrl);
                }
               
            }
            //$("#"+parentDivId).find(".fs-options .fs-option:first").addClass("selected");
            //$("#"+parentDivId).find(".fs-options .fs-option:first").removeClass("hide");
        }
    }

    $("#radarChartImg1").val();
    $("#radarChartImg1Btns").val();
    $("#radarChartImg2").val();
    $("#radarChartImg2Btns").val();
    $("#pieChartImg1").val();
    $("#pieChartImg2").val();
    $("#doughnutChartImg").val();
    $("#barChartImg").val();
    $("#pdf_cv_id").val();

    //- PIE CHART for Section 7 / SONIC LOGO USAGE
        
    //A DAY IN MY LIFE
    
    //window.onload = function () {        
        var b7DataCount = "{{count($cv_b7_dataset_data)}}";
        var datasetsDataString = "{{implode(',',$cv_b7_dataset_data)}}";
        var datasetsData= datasetsDataString.split(',');
        var pieChartBgColorNames = "{{ implode(',',config('custom.pie_chartsec78_bg_color'))}}";
        if(datasetsData[0]==0 && datasetsData[1]!=0)
        {
            var pieChartBgColorArrayB7 = ['#a7a8a9', '#a7a8a9'];
        }
        else 
        {
            var pieChartBgColorArrayB7 = pieChartBgColorNames.split(',');
        }
        //var pieChartBgColorArray = pieChartBgColorNames.split(',');        
        var brandCVPieData1 = [
            { label: "Yes", value: parseInt(datasetsData[0])},
            { label: "No", value: parseInt(datasetsData[1]) }
        ];
        
        var brandCVPie1;

        var brandCVPieUpdate1 = function () {
            if (brandCVPie1) brandCVPie1.destroy();
            var div1W = $("#brandCVPieDiv1").width();
            var div1H = $("#brandCVPieDiv1").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div1W, div1H);
            var opt =  {
                data: {
                    content: brandCVPieData1
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
                        color: "#000000",
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
                        color: "#000000",
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
            brandCVPie1 = new d3pie("brandCVPie1", opt);
        };
        
        brandCVPieUpdate1();
        window.addEventListener('resize', brandCVPieUpdate1);
        
        var industry_id = "{{$cv_data->industry_id}}";
        var shwSec8Chart = false;
        var sce8DataSetsContent = [];
        if(industry_id != '' && industry_id != null)
        {
            //alert('in if');
            var suiaUrl = "{{url('get-industry-avg')}}"+'/'+industry_id;                           
            
            $.ajax({
                type: "GET",
                url: suiaUrl,
                data: "",
                success: function(data) {
                    //console.log("insudtry_yes_avg_data_array"+data['insudtry_yes_avg_data_array']+"--:--insudtry_no_avg_data_array"+data['insudtry_no_avg_data_array']);
                    
                    if(data['insudtry_yes_avg_data_array'] != '' && data['insudtry_yes_avg_data_array'] != undefined && data['insudtry_no_avg_data_array'] != '' && data['insudtry_no_avg_data_array'] != undefined)
                    {
                        var sce8DataSetsYesContent = 0;
                        var sce8DataSetsYesContentCount = data['insudtry_yes_avg_data_array'].length;
                        for(var i = 0; i<data['insudtry_yes_avg_data_array'].length; i++)
                        {
                            sce8DataSetsYesContent = sce8DataSetsYesContent+parseInt(data['insudtry_yes_avg_data_array'][i]);
                        }
                        //console.log("sce8DataSetsYesContent"+sce8DataSetsYesContent);
                        var sce8DataSetsYesContentValue = sce8DataSetsYesContent/sce8DataSetsYesContentCount;
                        sce8DataSetsContent.push(parseFloat(sce8DataSetsYesContentValue).toFixed(2));

                        var sce8DataSetsNoContent = 0;
                        var sce8DataSetsNoContentCount = data['insudtry_no_avg_data_array'].length;
                        for(var b = 0; b<data['insudtry_no_avg_data_array'].length; b++)
                        {
                            sce8DataSetsNoContent = sce8DataSetsNoContent+parseInt(data['insudtry_no_avg_data_array'][b]);
                        }
                        //console.log("sce8DataSetsNoContent"+sce8DataSetsNoContent);
                        var sce8DataSetsNoContentValue = sce8DataSetsNoContent/sce8DataSetsNoContentCount;
                        sce8DataSetsContent.push(parseFloat(sce8DataSetsNoContentValue).toFixed(2));
                        //console.log("sce8DataSetsContent"+sce8DataSetsContent);
                    }
                },
                complete: function(){ 
                    //alert(sce8DataSetsContent);
                    if(sce8DataSetsContent !='' && sce8DataSetsContent !=undefined)
                    { 
                        if(sce8DataSetsContent[0]==0 && sce8DataSetsContent[1]!=0)
                        {
                            var pieChartBgColorArrayB8 = ['#a7a8a9', '#a7a8a9'];
                        }
                        else 
                        {
                            var pieChartBgColorArrayB8 = pieChartBgColorNames.split(',');
                        }
                        // Pie Chart 2
                        var brandCVPieData2 = [
                            { label: "Yes", value: parseFloat(sce8DataSetsContent[0]) },
                            { label: "No", value: parseFloat(sce8DataSetsContent[1]) }                            
                        ];

                        var brandCVPie2;

                        var brandCVPieUpdate2 = function () {
                            if (brandCVPie2) brandCVPie2.destroy();
                            var div2W = $("#brandCVPieDiv2").width();
                            var div2H = $("#brandCVPieDiv2").height();
                            //var size = Math.min(innerHeight, innerWidth) / 2;
                            var size = Math.min(div2W, div2H);
                            var opt =  {
                                data: {                    
                                    content: brandCVPieData2,
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
                                        color: "#000000",
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
                                        color: "#000000",
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
                                        segments: pieChartBgColorArrayB8,
                                        segmentStroke: "#8b8c90"
                                    }
                                }
                            };
                            brandCVPie2 = new d3pie("brandCVPie2", opt);
                        };
                        brandCVPieUpdate2();
                        window.addEventListener('resize', brandCVPieUpdate2);
                    }
                }                
            });
        }
        
        var b10datasetsbgColorDataString = "{{implode(',',$cv_b10_datasetsbgColor_data)}}";
        var b10datasetsbgColorData= b10datasetsbgColorDataString.split(',');
        var b10DataCount = "{{count($cv_b10_dataset_data)}}";
        var b10datasetsDataString = "{{implode(',',$cv_b10_dataset_data)}}";
        var b10datasetsData= b10datasetsDataString.split(',');
        var b10datalablesDataString = "{{implode(',',$cv_b10_datalables_data)}}";
        var b10datalablesData= b10datalablesDataString.split(',');
        var b10datasetsDataArr = [];
        
        for(var i=0; i<b10DataCount; i++)
        {
            b10datasetsDataArr.push({"label": b10datalablesData[i], "value": parseInt(b10datasetsData[i])});
        }
        
        var brandCVPieData3 =  b10datasetsDataArr;        
        var brandCVPie3;
        
        var brandCVPieOuterRadius = "";
        var brandCVPie3WinWidth = $(window).width();
        if (brandCVPie3WinWidth <= 1250 && brandCVPie3WinWidth >= 1200) {
            brandCVPieOuterRadius = "60%";
        }
        else if (brandCVPie3WinWidth <= 1199 && brandCVPie3WinWidth >= 993) {
            brandCVPieOuterRadius = "50%";
        }        
        else if (brandCVPie3WinWidth <= 549) {
            brandCVPieOuterRadius = "50%"
        }
        else {
            brandCVPieOuterRadius = "80%"
        }

        var brandCVPieUpdate3 = function () {
            if (brandCVPie3) brandCVPie3.destroy();
            var div3W = $("#brandCVPieDiv3").width();
            var div3H = $("#brandCVPieDiv3").height();
            //var size = Math.min(innerHeight, innerWidth) / 2;
            var size = Math.min(div3W, div3H);
            var opt =  {
                header:{
                    titleSubtitlePadding:0
                },
                data: {
                    sortOrder: "label-asc",
		            smallSegmentGrouping: {
			            enabled: true
		            },
                    content: brandCVPieData3,
                },
                size: {
                    pieInnerRadius: "40%",
                    pieOuterRadius: brandCVPieOuterRadius,
                    canvasHeight: div3H,
                    canvasWidth: div3W,
                },
                labels: {
                    outer: {                        
                        pieDistance: 15
                    },
                    mainLabel: {
                        font: "RobotoMonoMedium",
                        color: "#555555",
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
                        segments: b10datasetsbgColorData,
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
            brandCVPie3 = new d3pie("brandCVPie3", opt);
        };
        brandCVPieUpdate3();
        window.addEventListener('resize', brandCVPieUpdate3);

    //Music Types Usage (On Average)
    var b13DataCount = "{{count($cv_b13_dataset_data)}}";
    var b13datasetsDataString = "{{implode(',',$cv_b13_dataset_data)}}";
    var b13datasetsData= b13datasetsDataString.split(',');
    var b13datalablesDataString = "{{implode(',',$cv_b13_datalables_data)}}";
    var b13datalablesData= b13datalablesDataString.split(',');
    var b13borderWidthDataString = "{{implode(',',$cv_b13_borderwidth_data)}}";
    var b13borderWidthData= b13borderWidthDataString.split(',');
    //console.log(b13DataCount+b13datasetsData+b13datalablesData+b13borderWidthDataString);    
    if(b13DataCount != '' && b13DataCount != 0)
    {
        var winWBarChartDisplayCV = $(window).width();        
        var fontSBarChartDisplayCV = 13;
        var yAxesRotationBarChartDisplayCV = 0;
        var layoutPadding = 0;
        if(winWBarChartDisplayCV < 768) {
            fontSBarChartDisplayCV = 10;
            yAxesRotationBarChartDisplayCV = 30;
            layoutPadding = 25;
        }
        else {
            fontSBarChartDisplayCV = 13;
            yAxesRotationBarChartDisplayCV = 0;
            layoutPadding = 45;
        }  

        var areaChartData = {
            labels  : b13datalablesData,
            datasets: [
                {
                    label               : 'Average',
                    backgroundColor     : '#ffc531',
                    borderColor         : '#ffc531',
                    pointRadius          : false,
                    pointColor          : '#ffc531',
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
                    },
                    ticks: {                        
                        font: {                            
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#000000'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    },
                    ticks: {                     
                        font: {                            
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30
                        },
                        color: '#000000',
                        maxRotation: yAxesRotationBarChartDisplayCV,
                        minRotation: yAxesRotationBarChartDisplayCV

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
                            color: '#000000'
                        }
                    },
                    font: {
                        size: fontSBarChartDisplayCV,
                        family: 'RobotoMonoLight',
                    }
                },
                legend: {
                    display: true,
                    position: 'bottom',  
                    labels: {
                        font: {                            
                            size: fontSBarChartDisplayCV,
                            family: 'RobotoMonoLight',
                            padding: 30                            
                        },
                        color: '#000000'                        
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
            options: barChartOptions            
        });
    }
    else
    {
        $(".lp_section_13").find(".inner_section").find(".chart").text(" ");
    }

    var b15NumberData = "{{$b15NumberData}}";
    if(b15NumberData != '' && b15NumberData != null)
    {
        var mepvUrl = "{{url('get-music-expenditure-per-video-avg')}}"+'/'+"{{$cv_data->industry_id}}";
        //console.log("mepvUrl"+mepvUrl);
        var b15Avg = '', b15indAvg = '', b15indPublishedCVSum = '', b15indPublishedCVCount = '';
        $.ajax({
            type: "GET",
            url: mepvUrl,
            data: "",
            success: function(data) {
                //console.log("b15_sum_data"+data.split("_")[0]);
                if(data != '' && data != undefined)
                {
                    console.log("b15NumberData"+b15NumberData); 
                    b15Avg = b15NumberData / data.split("_")[0];
                    b15indPublishedCVSum = data.split("_")[0];
                    console.log("b15indPublishedCVSum"+b15indPublishedCVSum);
                    b15indPublishedCVCount = data.split("_")[1];
                    console.log("b15indPublishedCVCount"+b15indPublishedCVCount);
                }        
            },
            complete: function(){  
                //console.log("b15Avg"+b15Avg);
                b15indAvg = b15indPublishedCVSum / b15indPublishedCVCount;
                console.log("b15indAvg"+parseFloat(b15indAvg).toFixed());
                if(b15Avg != '' && b15Avg != undefined && b15Avg != 'NaN')
                {
                    //$("#mepvAvg").text(parseFloat(b15Avg).toFixed(2)+"%");
                    if(b15NumberData > parseFloat(b15indAvg).toFixed())
                    {
                        $(".lp_section_15_count").html('<img src="../public/images/lp-growing-arrow.png" alt=""><span class="count" id="mepvAvg">'+parseFloat(b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                        $("#sec15Val").val(parseFloat(b15Avg).toFixed(2));
                    }
                    else if(b15NumberData < parseFloat(b15indAvg).toFixed())
                    {
                        $(".lp_section_15_count").html('<img src="../public/images/lp-growing-arrowdown.png" alt=""><span class="count" id="mepvAvg">'+parseFloat(b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                        $("#sec15Val").val(parseFloat(b15Avg).toFixed(2));
                    }
                    else
                    {
                        $(".lp_section_15_count").html('<span class="count" id="mepvAvg">'+parseFloat(b15Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                        $("#sec15Val").val(parseFloat(b15Avg).toFixed(2));
                    }
                }
                else
                {
                    //$("#mepvAvg").text(" ");
                    $(".lp_section_15_count").html('<span class="naTextfont" id="mepvAvg">&nbsp;</span>');
                }
                //$("#mepvAvg").text(parseFloat(b15Avg).toFixed(2)+"%");
            }                
        });
    }
    var b14NumberData = "{{$b14NumberData}}";
    if(b14NumberData != '' && b14NumberData != null)
    {
        var mepyUrl = "{{url('get-music-expenditure-per-year-avg')}}"+'/'+"{{$cv_data->industry_id}}";
        var b14Avg = '', b14indAvg = '', b14indPublishedCVSum = '', b14indPublishedCVCount = '';
        $.ajax({
            type: "GET",
            url: mepyUrl,
            data: "",
            success: function(data) {
                //console.log("b14_sum_data_array"+data);
                if(data != '' && data != undefined)
                {
                    /* var b14AllCvData = 0;
                    for(var i = 0; i<data.length; i++)
                    {
                        b14AllCvData = b14AllCvData+parseInt(data[i]);
                    }
                    b14Avg = b14NumberData * 100 / b14AllCvData; */
                    //console.log("b14_sum_data"+data.split("_")[0]);
                    if(data != '' && data != undefined)
                    {
                        //console.log("b14NumberData"+b14NumberData); 
                        b14Avg = b14NumberData / data.split("_")[0];
                        b14indPublishedCVSum = data.split("_")[0];
                        //console.log("b14indPublishedCVSum"+b14indPublishedCVSum);
                        b14indPublishedCVCount = data.split("_")[1];
                        //console.log("b14indPublishedCVCount"+b14indPublishedCVCount);
                    } 
                }        
            },
            complete: function(){  
                //console.log("b14Avg"+b14Avg);
                b14indAvg = b14indPublishedCVSum / b14indPublishedCVCount;
                //console.log("b14indAvg"+parseFloat(b14indAvg).toFixed());
                if(b14Avg != '' && b14Avg != undefined && b14Avg != 'NaN')
                {
                    //$("#mepyAvg").text(parseFloat(b14Avg).toFixed(2)+"%");
                    if(b14NumberData > parseFloat(b14indAvg).toFixed())
                    {
                        $(".lp_section_14_count").html('<img src="../public/images/lp-growing-arrow.png" alt=""><span class="count" id="mepyAvg">'+parseFloat(b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                        $("#sec14Val").val(parseFloat(b14Avg).toFixed(2));
                    }
                    else if(b14NumberData < parseFloat(b14indAvg).toFixed())
                    {
                        $(".lp_section_14_count").html('<img src="../public/images/lp-growing-arrowdown.png" alt=""><span class="count" id="mepyAvg">'+parseFloat(b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                        $("#sec14Val").val(parseFloat(b14Avg).toFixed(2));
                    }
                    else
                    {
                        $(".lp_section_14_count").html('<span class="count" id="mepyAvg">'+parseFloat(b14Avg).toFixed(2)+'% <span class="astrick_count_txt">*</span></span>');
                        $("#sec14Val").val(parseFloat(b14Avg).toFixed(2));
                    }
                }
                else
                {
                    //$("#mepyAvg").text(" ");
                    $(".lp_section_14_count").html('<span class="naTextfont" id="mepyAvg">&nbsp;</span>');
                }
                //$("#mepyAvg").text(parseFloat(b14Avg).toFixed(2)+"%");
            }                
        });
    }

    
    var oldabtSect1 = $(".abtSect1").height();
    var oldabtSect2 = $(".abtSect2").height();
    console.log("oldabtSect2:"+oldabtSect2+"--- oldabtSect1:"+oldabtSect1);    

    function showAboutContent(flag)
    {
        if($(window).width() >992) {
            if(flag == 'more1') {
                
                $("#abtMore").addClass("hide");
                $("#abtContent").removeClass("hide");
                $(".readLess").removeClass("hide");
                var abtSect1 = $(".startTxt").text().replace("... Read More","").length+$("#abtContent").text().length;
                //var abtSect2  = $(".keyFindingsTxt").find("ul").text().length;
                var abtSect2  = $(".keyFindingsTxt").text().length;
                console.log(abtSect1+"-------------"+abtSect2);
                if(abtSect1 > 250  && abtSect1 <= 500)
                {
                    var row2_abt_height = 310;
                }
                else if(abtSect1 > 500  && abtSect1 <= 750)
                {
                    var row2_abt_height = 390;
                }
                else if(abtSect1 > 750  && abtSect1 <= 1000)
                {
                    var row2_abt_height = 460;
                }
                else if(abtSect1 > 1000  && abtSect1 <= 1250)
                {
                    var row2_abt_height = 530;
                }
                else if(abtSect1 > 1250  && abtSect1 <= 1500)
                {
                    var row2_abt_height = 610;                        
                }
                else if(abtSect1 > 1500  && abtSect1 <= 1750)
                {
                    var row2_abt_height = 660;                        
                }
                else if(abtSect1 > 1750  && abtSect1 <= 2000)
                {
                    var row2_abt_height = 750;
                }
                else {
                    var row2_abt_height = 900;
                }

                if(abtSect2 > 250  && abtSect2 <= 500)
                {
                    var row2_kp_height = 310;
                }
                else if(abtSect2 > 500  && abtSect2 <= 750)
                {
                    var row2_kp_height = 390;
                }
                else if(abtSect2 > 750  && abtSect2 <= 1000)
                {
                    var row2_kp_height = 460;
                }
                else if(abtSect2 > 1000  && abtSect2 <= 1250)
                {
                    var row2_kp_height = 530;
                }
                else if(abtSect2 > 1250  && abtSect2 <= 1500)
                {
                    var row2_kp_height = 610;                        
                }
                else if(abtSect2 > 1500  && abtSect2 <= 1750)
                {
                    var row2_kp_height = 660;                        
                }
                else if(abtSect2 > 1750  && abtSect2 <= 2000)
                {
                    var row2_kp_height = 750;
                }
                else {
                    var row2_kp_height = 900;
                }

                if(row2_abt_height==row2_kp_height)
                {
                   $(".abtsection").css("height",row2_abt_height);                    
                }
                else if(row2_abt_height>row2_kp_height)
                {
                   $(".abtsection").css("height",row2_abt_height);                    
                }
                else 
                {
                    $(".abtsection").css("height",row2_kp_height);
                }                
            }
            else if (flag == 'less1') {
                $("#abtContent").addClass("hide");
                $(".readLess").addClass("hide");
                $("#abtMore").removeClass("hide");
                var abtSect1 = $(".startTxt").text().length;
                //var abtSect2  = $(".keyFindingsTxt").find("ul").text().length;
                var abtSect2  = $(".keyFindingsTxt").text().length;
                console.log(abtSect1+"-------------"+abtSect2);
                if(abtSect1 <= 300)
                {
                    var row2_abt_height = 210;
                }
                else if(abtSect1 > 300  && abtSect1 <= 500)
                {
                    var row2_abt_height = 310;
                }
                else if(abtSect1 > 500  && abtSect1 <= 750)
                {
                    var row2_abt_height = 390;
                }
                else if(abtSect1 > 750  && abtSect1 <= 1000)
                {
                    var row2_abt_height = 500;
                }
                else if(abtSect1 > 1000  && abtSect1 <= 1250)
                {
                    var row2_abt_height = 600;
                }
                else if(abtSect1 > 1250  && abtSect1 <= 1500)
                {
                    var row2_abt_height = 700;                        
                }
                else if(abtSect1 > 1500  && abtSect1 <= 1750)
                {
                    var row2_abt_height = 800;                        
                }
                else if(abtSect1 > 1750  && abtSect1 <= 2000)
                {
                    var row2_abt_height = 900;
                }
                else {
                    var row2_abt_height = 1000;
                }

                if(abtSect2 <= 300)
                {
                    var row2_kp_height = 210;
                }
                else if(abtSect2 > 250  && abtSect2 <= 500)
                {
                    var row2_kp_height = 310;
                }
                else if(abtSect2 > 500  && abtSect2 <= 750)
                {
                    var row2_kp_height = 390;
                }
                else if(abtSect2 > 750  && abtSect2 <= 1000)
                {
                    var row2_kp_height = 500;
                }
                else if(abtSect2 > 1000  && abtSect2 <= 1250)
                {
                    var row2_kp_height = 600;
                }
                else if(abtSect2 > 1250  && abtSect2 <= 1500)
                {
                    var row2_kp_height = 700;                        
                }
                else if(abtSect2 > 1500  && abtSect2 <= 1750)
                {
                    var row2_kp_height = 800;                        
                }
                else if(abtSect2 > 1750  && abtSect2 <= 2000)
                {
                    var row2_kp_height = 900;
                }
                else {
                    var row2_kp_height = 1000;
                }

                if(row2_abt_height==row2_kp_height)
                {
                   $(".abtsection").css("height",row2_abt_height);                    
                }
                else if(row2_abt_height>row2_kp_height)
                {
                   $(".abtsection").css("height",row2_abt_height);                    
                }
                else 
                {
                    $(".abtsection").css("height",row2_kp_height);
                }  
            }
            else if (flag == 'more') {
                $("#abtMore").addClass("hide");
                $("#abtContent").removeClass("hide");
                $(".readLess").removeClass("hide");
            }
            else {
                $("#abtContent").addClass("hide");
                $(".readLess").addClass("hide");
                $("#abtMore").removeClass("hide");
            }
        }
        else {
            if (flag == 'more') {
                $("#abtMore").addClass("hide");
                $("#abtContent").removeClass("hide");
                $(".readLess").removeClass("hide");
            }
            else {
                $("#abtContent").addClass("hide");
                $(".readLess").addClass("hide");
                $("#abtMore").removeClass("hide");
            }
        }
    }
    
//Start RADAR Graph Script 1
    var cvBlock16MoodGraphDatasetDataString = "{{implode(',',$cv_block_16_mood_graph_dataset_data)}}";
    var cvBlock16MoodGraphDatasetData = cvBlock16MoodGraphDatasetDataString.split(',');
    //console.log("cvBlock16MoodGraphDatasetData:"+cvBlock16MoodGraphDatasetData);
    var cvBlock17MoodGraphDatasetDataString = "{{implode(',',$cv_block_17_mood_graph_dataset_data)}}";
    var cvBlock17MoodGraphDatasetData = cvBlock17MoodGraphDatasetDataString.split(',');
    //console.log("cvBlock17MoodGraphDatasetData:"+cvBlock17MoodGraphDatasetData);
    var cvBlock18MoodGraphDatasetDataString = "{{implode(',',$cv_block_18_mood_graph_dataset_data)}}";
    var cvBlock18MoodGraphDatasetData = cvBlock18MoodGraphDatasetDataString.split(',');
    //console.log("cvBlock18MoodGraphDatasetData:"+cvBlock18MoodGraphDatasetData);
    var cvBlock19MoodGraphDatasetDataString = "{{implode(',',$cv_block_19_mood_graph_dataset_data)}}";
    var cvBlock19MoodGraphDatasetData = cvBlock19MoodGraphDatasetDataString.split(',');
    //console.log("cvBlock19MoodGraphDatasetData:"+cvBlock19MoodGraphDatasetData);
    var cvMoodAggrGraphDatasetDataString = "{{implode(',',$cv_mood_aggr_graph_dataset_data)}}";
    var cvMoodAggrGraphDatasetData = cvMoodAggrGraphDatasetDataString.split(',');
    //console.log("cvMoodAggrGraphDatasetData:"+cvMoodAggrGraphDatasetData);
    //var cvBlock16MoodGraphDatalablesDataString = "{{implode(',',$cv_block_16_mood_graph_datalables_data)}}";
    //var cvBlock16MoodGraphDatalablesData = cvBlock16MoodGraphDatalablesDataString.split(',');
    var cvBlock16MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cvBlock16MoodGraphDatalablesData = cvBlock16MoodGraphDatalablesDataString.split(',');
    //console.log("cvBlock16MoodGraphDatalablesData:"+cvBlock16MoodGraphDatalablesData);
    //var cvBlock17MoodGraphDatalablesDataString = "{{implode(',',$cv_block_17_mood_graph_datalables_data)}}";
    //var cvBlock17MoodGraphDatalablesData = cvBlock17MoodGraphDatalablesDataString.split(',');
    var cvBlock17MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cvBlock17MoodGraphDatalablesData = cvBlock17MoodGraphDatalablesDataString.split(',');
    //console.log("cvBlock17MoodGraphDatalablesData:"+cvBlock17MoodGraphDatalablesData);
    //var cvBlock18MoodGraphDatalablesDataString = "{{implode(',',$cv_block_18_mood_graph_datalables_data)}}";
    //var cvBlock18MoodGraphDatalablesData = cvBlock18MoodGraphDatalablesDataString.split(',');
    var cvBlock18MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cvBlock18MoodGraphDatalablesData = cvBlock18MoodGraphDatalablesDataString.split(',');
    //console.log("cvBlock18MoodGraphDatalablesData:"+cvBlock18MoodGraphDatalablesData);
    //var cvBlock19MoodGraphDatalablesDataString = "{{implode(',',$cv_block_19_mood_graph_datalables_data)}}";
    //var cvBlock19MoodGraphDatalablesData = cvBlock19MoodGraphDatalablesDataString.split(',');
    var cvBlock19MoodGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cvBlock19MoodGraphDatalablesData = cvBlock19MoodGraphDatalablesDataString.split(',');
    //console.log("cvBlock19MoodGraphDatalablesData:"+cvBlock19MoodGraphDatalablesData);
    //var cvMoodAggrGraphDatalablesDataString = "{{implode(',',$cv_mood_aggr_graph_datalables_data)}}";
    //var cvMoodAggrGraphDatalablesData = cvMoodAggrGraphDatalablesDataString.split(',');
    var cvMoodAggrGraphDatalablesDataString = 'aggressive,calm,chilled,energetic,epic,happy,romantic,sad,scary,sexy,ethereal,uplifting';
    var cvMoodAggrGraphDatalablesData = cvMoodAggrGraphDatalablesDataString.split(',');
    //console.log("cvMoodAggrGraphDatalablesData:"+cvMoodAggrGraphDatalablesData);
    
    var datasetDataStringLength = 0;
    var datalablesData = '';
    var colorval1 = "#999999";
    var colorvalData1 = [];
    var datasetsContent = '';
    var showMoodRadar = false;
    
    var toggellblArr = [];
    var toggelBtns = '';
        
    if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood all with agg"); toggellblArr = ['Aggregate','YouTube','Instagram','Tiktok','Twitter']; 
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 1,2,3 with agg"); toggellblArr = ['Aggregate','YouTube','Instagram','Tiktok',];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 1,2,4 with agg"); toggellblArr = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,3,4 with agg"); toggellblArr = ['Aggregate','YouTube','Tiktok','Twitter'];  
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 2,3,4 with agg"); toggellblArr = ['Aggregate','Instagram','Tiktok','Twitter'];
        datasetDataStringLength = cvBlock17MoodGraphDatasetDataString.length;
        datalablesData = cvBlock17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 1,2 with agg"); toggellblArr = ['Aggregate','YouTube','Instagram'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 1,3 with agg"); toggellblArr = ['Aggregate','YouTube','Tiktok'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    {
        console.log("in mood 1,4 with agg"); toggellblArr = ['Aggregate','YouTube','Twitter'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 2,3 with agg"); toggellblArr = ['Aggregate','Instagram','Tiktok'];
        datasetDataStringLength = cvBlock17MoodGraphDatasetDataString.length;
        datalablesData = cvBlock17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock17MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 2,4 with agg"); toggellblArr = ['Aggregate','Instagram','Twitter'];
        datasetDataStringLength = cvBlock17MoodGraphDatasetDataString.length;
        datalablesData = cvBlock17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '' && cvMoodAggrGraphDatasetDataString != '')
    { 
        console.log("in mood 3,4 with agg"); toggellblArr = ['Aggregate','Tiktok','Twitter'];
        datasetDataStringLength = cvBlock18MoodGraphDatasetDataString.length;
        datalablesData = cvBlock18MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Aggregate', data: cvMoodAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '')
    { 
        console.log("in mood all"); toggellblArr = ['YouTube','Instagram','Tiktok','Twitter'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 1,2,3"); toggellblArr = ['YouTube','Instagram','Tiktok'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 1,2,4"); toggellblArr = ['YouTube','Instagram','Twitter'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 1,3,4"); toggellblArr = ['YouTube','Tiktok','Twitter'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 2,3,4"); toggellblArr = ['Instagram','Tiktok','Twitter'];
        datasetDataStringLength = cvBlock17MoodGraphDatasetDataString.length;
        datalablesData = cvBlock17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock17MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 1,2"); toggellblArr = ['YouTube','Instagram'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 1,3"); toggellblArr = ['YouTube','Tiktok'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 1,4"); toggellblArr = ['YouTube','Twitter'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock17MoodGraphDatasetDataString != '' && cvBlock18MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 2,3"); toggellblArr = ['Instagram','Tiktok'];
        datasetDataStringLength = cvBlock17MoodGraphDatasetDataString.length;
        datalablesData = cvBlock17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock17MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 2,4"); toggellblArr = ['Instagram','Twitter'];
        datasetDataStringLength = cvBlock17MoodGraphDatasetDataString.length;
        datalablesData = cvBlock17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock18MoodGraphDatasetDataString != '' && cvBlock19MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 3,4"); toggellblArr = ['Tiktok','Twitter'];
        datasetDataStringLength = cvBlock18MoodGraphDatasetDataString.length;
        datalablesData = cvBlock18MoodGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5},{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock16MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 1"); toggellblArr = ['YouTube'];
        datasetDataStringLength = cvBlock16MoodGraphDatasetDataString.length;
        datalablesData = cvBlock16MoodGraphDatalablesData;
        datasetsContent = [{ label: 'YouTube', data: cvBlock16MoodGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock17MoodGraphDatasetDataString != '')
    { 
        console.log("in mood 2"); toggellblArr = ['Instagram'];
        datasetDataStringLength = cvBlock17MoodGraphDatasetDataString.length;
        datalablesData = cvBlock17MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Instagram', data: cvBlock17MoodGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock18MoodGraphDatasetDataString != '')
    {
        console.log("in mood 3"); toggellblArr = ['Tiktok'];
        datasetDataStringLength = cvBlock18MoodGraphDatasetDataString.length;
        datalablesData = cvBlock18MoodGraphDatalablesData;
        datasetsContent = [{ label: 'TikTok', data: cvBlock18MoodGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else if(cvBlock19MoodGraphDatasetDataString != '')
    {
        console.log("in mood 4"); toggellblArr = ['Twitter'];
        datasetDataStringLength = cvBlock19MoodGraphDatasetDataString.length;
        datalablesData = cvBlock19MoodGraphDatalablesData;
        datasetsContent = [{ label: 'Twitter', data: cvBlock19MoodGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1)', backgroundColor: 'rgba(238, 198, 204, 1)', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for (var i = 0; i <= datasetDataStringLength; i++) {
            colorvalData1.push(colorval1);
        };
        showMoodRadar = true;        
    }
    else
    {
        showMoodRadar = false;
    }

    //console.log("datalablesData_1",datalablesData);
    //console.log("datasetsContent_1",datasetsContent);
    old_datalablesData_1 = datalablesData;
    old_datasetsContent_1 = datasetsContent;
    old_toggellblArr_1 = toggellblArr;

    if(cvMoodAggrGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvMoodAggrGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvMoodAggrGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cvBlock16MoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock16MoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock16MoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cvBlock17MoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock17MoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock17MoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cvBlock18MoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock18MoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock18MoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }

    if(cvBlock19MoodGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock19MoodGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock19MoodGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestMoodllbArr_1.push(datalablesData[lblPostion]);
        console.log("old_highestMoodllbArr_1",old_highestMoodllbArr_1);
    }
    
    if(showMoodRadar == true)
    {
        for(var i=0; i<toggellblArr.length;i++)
        {
            toggelBtns += '<div class="toggleWrapper" >';
            toggelBtns += '<input type="checkbox" id="toggle'+toggellblArr[i]+'" >';
            toggelBtns += '<label for="toggle'+toggellblArr[i]+'" class="toggle'+toggellblArr[i]+'" onClick="toggleData('+i+')" ><span class="toggle'+toggellblArr[i]+'_handler"></span></label>';
            toggelBtns += '<span class="cust-toggleBtnName">'+toggellblArr[i]+'</span>';
            toggelBtns += '</div>';
        }

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
            }
            if(showValue === false){
                radarChart1.show(value);
            }
        }        
        
    }
    
    //End RADAR Graph Script 1
//Start RADAR Graph Script 2
    var cvBlock16GenreGraphDatasetDataString = "{{implode(',',$cv_block_16_genre_graph_dataset_data)}}";
    var cvBlock16GenreGraphDatasetData = cvBlock16GenreGraphDatasetDataString.split(',');
    console.log("cvBlock16GenreGraphDatasetData:"+cvBlock16GenreGraphDatasetData);
    var cvBlock17GenreGraphDatasetDataString = "{{implode(',',$cv_block_17_genre_graph_dataset_data)}}";
    var cvBlock17GenreGraphDatasetData = cvBlock17GenreGraphDatasetDataString.split(',');
    console.log("cvBlock17GenreGraphDatasetData:"+cvBlock17GenreGraphDatasetData);
    var cvBlock18GenreGraphDatasetDataString = "{{implode(',',$cv_block_18_genre_graph_dataset_data)}}";
    var cvBlock18GenreGraphDatasetData = cvBlock18GenreGraphDatasetDataString.split(',');
    console.log("cvBlock18GenreGraphDatasetData:"+cvBlock18GenreGraphDatasetData);
    var cvBlock19GenreGraphDatasetDataString = "{{implode(',',$cv_block_19_genre_graph_dataset_data)}}";
    var cvBlock19GenreGraphDatasetData = cvBlock19GenreGraphDatasetDataString.split(',');
    console.log("cvBlock19GenreGraphDatasetData:"+cvBlock19GenreGraphDatasetData);
    var cvGenreAggrGraphDatasetDataString = "{{implode(',',$cv_genre_aggr_graph_dataset_data)}}";
    var cvGenreAggrGraphDatasetData = cvGenreAggrGraphDatasetDataString.split(',');
    console.log("cvGenreAggrGraphDatasetData:"+cvGenreAggrGraphDatasetData);
    //var cvBlock16GenreGraphDatalablesDataString = "{{implode(',',$cv_block_16_genre_graph_datalables_data)}}";
    //var cvBlock16GenreGraphDatalablesData = cvBlock16GenreGraphDatalablesDataString.split(',');
    var cvBlock16GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cvBlock16GenreGraphDatalablesData = cvBlock16GenreGraphDatalablesDataString.split(',');
    //console.log("cvBlock16GenreGraphDatalablesData:"+cvBlock16GenreGraphDatalablesData);
    //var cvBlock17GenreGraphDatalablesDataString = "{{implode(',',$cv_block_17_genre_graph_datalables_data)}}";
    //var cvBlock17GenreGraphDatalablesData = cvBlock17GenreGraphDatalablesDataString.split(',');
    var cvBlock17GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cvBlock17GenreGraphDatalablesData = cvBlock17GenreGraphDatalablesDataString.split(',');
    //console.log("cvBlock17GenreGraphDatalablesData:"+cvBlock17GenreGraphDatalablesData);
    //var cvBlock18GenreGraphDatalablesDataString = "{{implode(',',$cv_block_18_genre_graph_datalables_data)}}";
    //var cvBlock18GenreGraphDatalablesData = cvBlock18GenreGraphDatalablesDataString.split(',');
    var cvBlock18GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cvBlock18GenreGraphDatalablesData = cvBlock18GenreGraphDatalablesDataString.split(',');
    //console.log("cvBlock18GenreGraphDatalablesData:"+cvBlock18GenreGraphDatalablesData);
    //var cvBlock19GenreGraphDatalablesDataString = "{{implode(',',$cv_block_19_genre_graph_datalables_data)}}";
    //var cvBlock19GenreGraphDatalablesData = cvBlock19GenreGraphDatalablesDataString.split(',');
    var cvBlock19GenreGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cvBlock19GenreGraphDatalablesData = cvBlock19GenreGraphDatalablesDataString.split(',');
    //console.log("cvBlock19GenreGraphDatalablesData:"+cvBlock19GenreGraphDatalablesData);
    //var cvGenreAggrGraphDatalablesDataString = "{{implode(',',$cv_genre_aggr_graph_datalables_data)}}";
    //var cvGenreAggrGraphDatalablesData = cvGenreAggrGraphDatalablesDataString.split(',');
    var cvGenreAggrGraphDatalablesDataString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var cvGenreAggrGraphDatalablesData = cvGenreAggrGraphDatalablesDataString.split(',');
    //console.log("cvGenreAggrGraphDatalablesData:"+cvGenreAggrGraphDatalablesData);    

    var datasetDataStringLength = 0;
    var datasetDataLength = 0;
    var datalablesData = [];
    var colorval2 = "#999999";
    var colorvalData2 = [];
    var datasetsContent = [];
    var showMoodRadar = false;

    var toggellbl1Arr = [];
    var toggel1Btns = '';

    datasetsContentAggr = [];
    datasetsContentYt = [];
    datasetsContentIg= [];
    datasetsContentTt= [];
    datasetsContentTwt= [];
    if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre all with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','Tiktok','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                //s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }            
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        //console.log(cvGenreAggrGraphDatasetData, " Genre Value");
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','Tiktok'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }            
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Tiktok','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4 with agg"); toggellbl1Arr = ['Aggregate','Instagram','Tiktok','Twitter'];
        datasetDataLength = cvBlock17GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock17GenreGraphDatalablesData[i])) {
                s = cvBlock17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,2 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Instagram'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,3 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Tiktok'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }        
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 1,4 with agg"); toggellbl1Arr = ['Aggregate','YouTube','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,3 with agg"); toggellbl1Arr = ['Aggregate','Instagram','Tiktok'];
        datasetDataLength = cvBlock17GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock17GenreGraphDatalablesData[i])) {
                s = cvBlock17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock17GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 2,4 with agg"); toggellbl1Arr = ['Aggregate','Instagram','Twitter'];
        datasetDataLength = cvBlock17GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock17GenreGraphDatalablesData[i])) {
                s = cvBlock17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '' && cvGenreAggrGraphDatasetDataString != '')
    {
        console.log("in genre 3,4 with agg"); toggellbl1Arr = ['Aggregate','Tiktok','Twitter'];
        datasetDataLength = cvBlock18GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock18GenreGraphDatalablesData[i])) {
                s = cvBlock18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Aggregate', data: cvGenreAggrGraphDatasetData, borderColor: 'rgba(118, 119, 122, 1)', backgroundColor: 'rgba(118, 119, 122, 0.7)', pointBackgroundColor: '#76777a', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Tiktok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvGenreAggrGraphDatasetData.length; i++)
        {
            datasetsContentAggr.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvGenreAggrGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock18GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock18GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre all"); toggellbl1Arr = ['YouTube','Instagram','Tiktok','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,3"); toggellbl1Arr = ['YouTube','Instagram','Tiktok'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2,4"); toggellbl1Arr = ['YouTube','Instagram','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3,4"); toggellbl1Arr = ['YouTube','Tiktok','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3,4"); toggellbl1Arr = ['Instagram','Tiktok','Twitter'];
        datasetDataLength = cvBlock17GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock17GenreGraphDatalablesData[i])) {
                s = cvBlock17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock17GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,2"); toggellbl1Arr = ['YouTube','Instagram'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,3"); toggellbl1Arr = ['YouTube','Tiktok'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }        
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1,4"); toggellbl1Arr = ['YouTube','Twitter'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock17GenreGraphDatasetDataString != '' && cvBlock18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,3"); toggellbl1Arr = ['Instagram','Tiktok'];
        datasetDataLength = cvBlock17GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock17GenreGraphDatalablesData[i])) {
                s = cvBlock17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock17GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2,4"); toggellbl1Arr = ['Instagram','Twitter'];
        datasetDataLength = cvBlock17GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock17GenreGraphDatalablesData[i])) {
                s = cvBlock17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock18GenreGraphDatasetDataString != '' && cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 3,4"); toggellbl1Arr = ['Tiktok','Twitter'];
        datasetDataLength = cvBlock18GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock18GenreGraphDatalablesData[i])) {
                s = cvBlock18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Tiktok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}, { label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock18GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock18GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock18GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock16GenreGraphDatasetDataString != '')
    {
        console.log("in genre 1"); toggellbl1Arr = ['YouTube'];
        datasetDataLength = cvBlock16GenreGraphDatasetData.length;            
        for (var i = 0; i<cvBlock16GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock16GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock16GenreGraphDatalablesData[i])) {
                s = cvBlock16GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock16GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'YouTube', data: cvBlock16GenreGraphDatasetData, borderColor: 'rgba(255, 205, 3, 1)', backgroundColor: 'rgba(255, 205, 3, 1)', pointBackgroundColor: '#ffcd03', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock16GenreGraphDatasetData.length; i++)
        {
            datasetsContentYt.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock16GenreGraphDatalablesData[i], "value": parseFloat(cvBlock16GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    }
    else if(cvBlock17GenreGraphDatasetDataString != '')
    {
        console.log("in genre 2"); toggellbl1Arr = ['Instagram'];
        datasetDataLength = cvBlock17GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock17GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock17GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock17GenreGraphDatalablesData[i])) {
                s = cvBlock17GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock17GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Instagram', data: cvBlock17GenreGraphDatasetData, borderColor: 'rgba(221, 135, 151, 1)', backgroundColor: 'rgba(221, 135, 151, 1)', pointBackgroundColor: '#dd8797', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        for(var i=0; i<cvBlock17GenreGraphDatasetData.length; i++)
        {
            datasetsContentIg.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock17GenreGraphDatalablesData[i], "value": parseFloat(cvBlock17GenreGraphDatasetData[i])});
        }
        showMoodRadar = true;        
    } 
    else if(cvBlock18GenreGraphDatasetDataString != '')
    {
        console.log("in genre 3"); toggellbl1Arr = ['Tiktok'];
        datasetDataLength = cvBlock18GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock18GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock18GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock18GenreGraphDatalablesData[i])) {
                s = cvBlock18GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock18GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock18GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'TikTok', data: cvBlock18GenreGraphDatasetData, borderColor: 'rgba(167, 168, 169, 1', backgroundColor: 'rgba(167, 168, 169, 1', pointBackgroundColor: '#a7a8a9', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for(var i=0; i<cvBlock18GenreGraphDatasetData.length; i++)
        {
            datasetsContentTt.push({"label": cvBlock18GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock18GenreGraphDatalablesData[i], "value": parseFloat(cvBlock18GenreGraphDatasetData[i])});
        }
        
        showMoodRadar = true;        
    }
    else if(cvBlock19GenreGraphDatasetDataString != '')
    {
        console.log("in genre 4"); toggellbl1Arr = ['Twitter'];
        datasetDataLength = cvBlock19GenreGraphDatasetData.length;
        for (var i = 0; i<cvBlock19GenreGraphDatalablesData.length; i++)
        {
            //console.log(cvBlock19GenreGraphDatalablesData[i]);
            var pattern = new RegExp("^(?=.*[A-Z])$");
            if (/[A-Z]/.test(cvBlock19GenreGraphDatalablesData[i])) {
                s = cvBlock19GenreGraphDatalablesData[i].replace(/([A-Z])/g, ',$1').trim();
                //console.log(s.split(','));
                //datalablesData.push(s.split(','));
				datalablesData.push(cvBlock19GenreGraphDatalablesData[i]);
            }
            else
            {
                datalablesData.push(cvBlock19GenreGraphDatalablesData[i]);
            }
        }

        for (var i = 0; i <= datasetDataLength; i++) {
            colorvalData2.push(colorval2);
        };
        //datasetsContent = [{ label: 'Twitter', data: cvBlock19GenreGraphDatasetData, borderColor: 'rgba(238, 198, 204, 1', backgroundColor: 'rgba(238, 198, 204, 1', pointBackgroundColor: '#eec6cc', pointBorderColor: '#232323', pointBorderWidth: 1, pointRadius: 5}];
        
        for(var i=0; i<cvBlock19GenreGraphDatasetData.length; i++)
        {
            datasetsContentTwt.push({"label": cvBlock19GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
            datasetsContent.push({"label": cvBlock19GenreGraphDatalablesData[i], "value": parseFloat(cvBlock19GenreGraphDatasetData[i])});
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

    var dldString = 'ambient,blues,classical,country,edm,folk,indie,jazz,latin,metal,pop,punk,hiphop,reggae,rnb,rock,songwriter';
    var dld = dldString.split(',');

    if(cvGenreAggrGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvGenreAggrGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvGenreAggrGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(dld[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cvBlock16GenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock16GenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock16GenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(dld[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cvBlock17GenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock17GenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock17GenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(dld[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cvBlock18GenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock18GenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock18GenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(dld[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(cvBlock19GenreGraphDatasetDataString != '')
    {
        var maxVal = Math.max.apply(Math,cvBlock19GenreGraphDatasetData);
        console.log("maxVal",maxVal);
        var lblPostion = cvBlock19GenreGraphDatasetData.findIndex(data => data == maxVal);
        console.log("lblPostion",lblPostion);
        old_highestGenrellbArr_2.push(dld[lblPostion]);
        console.log("old_highestGenrellbArr_2",old_highestGenrellbArr_2);
    }

    if(showMoodRadar == true)
    {
        /* //console.log("datalablesData"+datalablesData);        
        for(var i=0; i<toggellbl1Arr.length;i++)
        {
            toggel1Btns += '<div class="toggleWrapper" >';
            toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[i]+'" >';
            toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[i]+'" class="r2toggle'+toggellbl1Arr[i]+'" onClick="toggleData2('+i+')" ><span class="r2toggle'+toggellbl1Arr[i]+'_handler"></span></label>';
            toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[i]+'</span>';
            toggel1Btns += '</div>';
        }
        
        $("#radarChart2ButtonBox").html(toggel1Btns);

        const ctx = document.getElementById('radarChart2').getContext('2d');
        Chart.register(ChartDataLabels);
        var radarChart2 = new Chart(ctx, {
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
        
        var genreBgColorDataString = "{{implode(',',$genre_bg_color_array)}}";
        var genreBgColorData = genreBgColorDataString.split(',');
        var radarChart2;
        
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
                        color: "#555555",
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
        if(toggellbl1Arr.length == 1)
        {
            toggel1Btns += '<div class="toggleWrapper">';
            toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[0]+'" disabled>';
            toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[0]+'" class="r2toggle'+toggellbl1Arr[0]+'" disabled><span class="r2toggle'+toggellbl1Arr[0]+'_handler"></span></label>';
            toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[0]+'</span>';
            toggel1Btns += '</div>';
        }
        else
        {
            for(var i=0; i<toggellbl1Arr.length;i++)
            {                
                toggel1Btns += '<div class="toggleWrapper">';
                toggel1Btns += '<input type="checkbox" id="r2toggle'+toggellbl1Arr[i]+'" >';
                toggel1Btns += '<label for="r2toggle'+toggellbl1Arr[i]+'" class="r2toggle'+toggellbl1Arr[i]+'" onClick="toggleDataBrandCV(\''+toggellbl1Arr[i]+'\', \'withoutPopup\')" ><span class="r2toggle'+toggellbl1Arr[i]+'_handler"></span></label>';
                toggel1Btns += '<span class="cust-toggleBtnName">'+toggellbl1Arr[i]+'</span>';
                toggel1Btns += '</div>';
            }
        }
        
        $("#radarChart2ButtonBox").html(toggel1Btns);
        $("#radarChart2ButtonBox").find("input[type='checkbox']").each(function(index) {
            if(index > 0) {
                $(this).prop( "checked", true );
            }
        });
    }   
    //End RADAR Graph Script 2

setTimeout(function()
{
    if($(window).width() >992)
    {
        var abtSect1 = $(".abtSect1").height();
        var abtSect2  = $(".abtSect2").height();
        
        
        if(abtSect1 > abtSect2)
        {    
            $(".abtsection").css("height",abtSect1);
        } 
        else
        {
            $(".abtsection").css("height",abtSect2);
        }
        
        if($(window).width() >1600)
        {
            var lpSection06Inner = $(".lp_sonic_logo_and_video_height_sec678").height()+60;
            var lpSection09Inner  = $(".lp_sonic_logo_and_video_height_sec9").height()+60;
        }
        else {
            var lpSection06Inner = $(".lp_sonic_logo_and_video_height_sec678").height()+45;
            var lpSection09Inner  = $(".lp_sonic_logo_and_video_height_sec9").height()+45;
        }   
              
        if(lpSection06Inner > lpSection09Inner)
        {                
            $(".lp_sonic_logo_and_video_height, .lp_sonic_logo_and_video_height_without_audio").css("height",lpSection06Inner);
            getMostPopVideoHeight(lpSection06Inner);
        }
        else
        {
            $(".lp_sonic_logo_and_video_height, .lp_sonic_logo_and_video_height_without_audio").css("height",lpSection09Inner);
            getMostPopVideoHeight(lpSection09Inner);
        }
        
        var lpSection1011 = $(".lp_section_1011").height();
        var lpSection1012  = $(".lp_section_1012").height();
        if(lpSection1011 > lpSection1012)
        {    
            $(".lp_aDayInMyLife_socialMediaS_height_10Rec").css("height",lpSection1011);
            $(".lp_aDayInMyLife_socialMediaS_height_15Rec").css("height",lpSection1011);
        }
        else
        {
            $(".lp_aDayInMyLife_socialMediaS_height_10Rec").css("height",lpSection1012);
            $(".lp_aDayInMyLife_socialMediaS_height_15Rec").css("height",lpSection1012);
        }
        //For Vertical Align Pie Chart
        var brandCVPie3WH = $(".brandCVPie3WH").height();            
        var mtopPie = lpSection1011 - brandCVPie3WH;            
        $(".brandCVPieVAlign").css("margin-top", mtopPie / 2 - 30);

        var lpSection1314 = $(".lp_section_1314").height()+40;
        var lpSection1315  = $(".lp_section_1315").height()+40;
        if(lpSection1314 > lpSection1315)
        {    
            $(".lp_music_typeUsages_perYear_perVideo_height").css("height",lpSection1314);  
        }
        else
        {
            $(".lp_music_typeUsages_perYear_perVideo_height").css("height",lpSection1315);
        }
        
        var radarGraphHolder1 = $(".radarGraphHolder1").height()+20;
        var radarGraphHolder2  = $(".radarGraphHolder2").height()+20;
        if(radarGraphHolder1 > radarGraphHolder2)
        {    
            $(".radarGraphHolderHeight").css("height",radarGraphHolder1);
        }
        else
        {
            $(".radarGraphHolderHeight").css("height",radarGraphHolder2);
        } 
        
    }
},2000);
function getMostPopVideoHeight(currentHeight){
    var displayCVMostPopVideoHeight = $("#modal_brandCVMPVideo").height();
    var ptopDiff = currentHeight - displayCVMostPopVideoHeight;
    var ptop = ptopDiff/2;
    console.log("displayCVMostPopVideoHeight"+displayCVMostPopVideoHeight+" currentHeight"+currentHeight+" ptop"+ptop);
    $(".displayCVMostPopVideoPDiv").css("margin-top",ptop-50);
}
setTimeout(function()
{
    //var svg = document.querySelector( "svg" );
    var svg = document.querySelectorAll( "svg" );
    //console.log(svg[0]);
    if(svg.length > 1)
    {
        var pieChartImg1SvgData = new XMLSerializer().serializeToString( svg[1] );
        /* var pieChartImg1Img = document.createElement( "img" );
        pieChartImg1Img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( pieChartImg1SvgData ) );
        console.log("data:image/svg+xml;base64," + btoa( pieChartImg1SvgData ));
        $("#img1").attr("src","data:image/svg+xml;base64," + btoa( pieChartImg1SvgData )); */
        $("#pieChartImg1").val("data:image/svg+xml;base64," + btoa( pieChartImg1SvgData ));
    }
    
    if(svg.length > 2)
    {
        //console.log(svg[1]);
        var pieChartImg2SvgData = new XMLSerializer().serializeToString( svg[2] );
        /* var pieChartImg2Img = document.createElement( "img" );
        pieChartImg2Img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( pieChartImg2SvgData ) );
        console.log("data:image/svg+xml;base64," + btoa( pieChartImg2SvgData ));
        $("#img2").attr("src","data:image/svg+xml;base64," + btoa( pieChartImg2SvgData )); */
        $("#pieChartImg2").val("data:image/svg+xml;base64," + btoa( pieChartImg2SvgData ));
    }

    if($('#radarChart1').length > 0)
    {
        var radarChart1Canvas = document.getElementById('radarChart1');
        var radarChart1DataURL = radarChart1Canvas.toDataURL();
        //console.log(radarChart1DataURL);
        //$("#radarImg1").attr("src",radarChart1DataURL);
        $("#radarChartImg1").val(radarChart1DataURL);
        $("#radarChartImg1Btns").val(toggellblArr);
    }
    
    if(svg.length > 0)
    {
        /* var radarChart2Canvas = document.getElementById('radarChart2');
        var radarChart2DataURL = radarChart2Canvas.toDataURL();
        //console.log(radarChart2DataURL);
        //$("#radarImg1").attr("src",radarChart2DataURL);
        $("#radarChartImg2").val(radarChart2DataURL);
        $("#radarChartImg2Btns").val(toggellbl1Arr); */
        var radarChartImg2SvgData = new XMLSerializer().serializeToString( svg[0] );
        $("#radarChartImg2").val("data:image/svg+xml;base64," + btoa( radarChartImg2SvgData ));
        $("#radarChartImg2Btns").val(toggellbl1Arr);
    }

    if(svg.length > 3)
    {
        //console.log(svg[2]);
        var doughnutChartImgSvgData = new XMLSerializer().serializeToString( svg[3] );
        $("#doughnutChartImg").val("data:image/svg+xml;base64," + btoa( doughnutChartImgSvgData ));
    }

    if($('#barChart').length > 0)
    {
        var barChartImgCanvas = document.getElementById('barChart');
        var barChartImgDataURL = barChartImgCanvas.toDataURL();
        //console.log(barChartImgDataURL);
        $("#barChartImg").val(barChartImgDataURL);
    }
    $("#printBtn").removeAttr("disabled");
    $("#printBtn").closest("span.link").removeAttr("style");
},5000);