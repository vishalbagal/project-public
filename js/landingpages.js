$(document).ready(function(){
    //Embed Video Link : https://stackoverflow.com/questions/18726480/embed-html5-youtube-video-without-iframe
    $(".video_holder").find("iframe").attr("width","");
    $(".video_holder").find("iframe").attr("height","");
    $(".video_holder").find("iframe").addClass("video_link_area");
    $('.displayCVMostPopVideo').slick(
        {
            dots: true,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: true,
        }
    );

    $('.displayCVMostPopVideo').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var current = $(slick.$slides[currentSlide]);
        current.html(current.html());

    });

    $('.socialMediaStats, .socialMediaStats1, .socialMediaStats2').slick(
        {
            dots: true,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: true,
        }
    );
    $('.socialMediaStats, .socialMediaStats1, .socialMediaStats2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var current = $(slick.$slides[currentSlide]);
        current.html(current.html());

    });

    $('.displayCVVideosAnalysed, .displayCV1VideosAnalysed, .displayCV2VideosAnalysed').slick(
        {
            dots: true,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: true,
        }
    );
    // $('.displayCVVideosAnalysed').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     var current = $(slick.$slides[currentSlide]);
    //     current.html(current.html());

    // });

    /* $(".slick-next").on("click", function(){
        console.log("next-click");
        //$("#displayCVMostPopVideo").find(".slick-slide").find("iframe").find("#movie_player").not($("#displayCVMostPopVideo").find(".slick-current.slick-active").find("iframe").find("#movie_player")).addClass("Testing");
        $("#displayCVMostPopVideo").find(".slick-slide").find("iframe").addClass("Testing");
    }); */

    //$("#displayCVMostPopVideo").find("iframe.video_link_area").contents().find("#movie_player").get(0).stopViedo();
    /* $(".displayCVMostPopVideo").slick({
        dots: true,
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,

        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }); */
    $(".lp_welcomeRecent, .lp_welcomeMost, .lp_industryTwoLayer").slick({
        dots: false,
        infinite: false,
        variableWidth: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,

        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $(".lp_CompareCVVideo1, .lp_CompareCVVideo2").slick(
        {
            dots: true,
            autoplay: false,
            autoplaySpeed: 5000,
            pauseOnHover: true,
        }
    );
    $('.lp_CompareCVVideo1, .lp_CompareCVVideo2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var current = $(slick.$slides[currentSlide]);
        current.html(current.html());

    });
    /* $(".lp_CompareCVVideo1, .lp_CompareCVVideo2").slick({
        dots: true,
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,

        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }); */
    //lpFloatingMenu();
    lpBottomToTop();
    sectionNotVisible10();
    sectionNotVisible13();
    indMenu();
});
$(window).resize(function(){
    //lpFloatingMenu();
});
$(function () {
    $('.textarea').summernote();
});
function lpFloatingMenu(){
    var winH = $(window).height() / 2;
    $(".lp_floating_menu").css("top", winH);
}
function lpBottomToTop(){
    $(".lp_bottomtotop").click(function(){
        var body = $("html, body");
        body.stop().animate({scrollTop:0}, 500, 'swing', function() {
            //Call Back Function
        });
    });
}
function sectionNotVisible10() {
    if ($(".lp_section_10").is(":visible") == true) {
        $(".lp_section_1112").removeClass("col-md-12");
        $(".lp_section_11").removeClass("col-md-6");
        $(".lp_section_12").removeClass("col-md-6");
    }
    else {
        $(".lp_section_1112").addClass("col-md-12");
        $(".lp_section_11").addClass("col-md-6");
        $(".lp_section_12").addClass("col-md-6");
    }
}
function sectionNotVisible13() {
    if ($(".lp_section_13").is(":visible") == true) {
        $(".lp_section_1415").removeClass("col-md-12");
        $(".lp_section_14").removeClass("col-md-6");
        $(".lp_section_15").removeClass("col-md-6");
    }
    else {
        $(".lp_section_1415").addClass("col-md-12");
        $(".lp_section_14").addClass("col-md-6");
        $(".lp_section_15").addClass("col-md-6");
    }
}

function indMenu(){
    $(".indMenu_hol").find(".list").find("a.link").click(function(){
        $(".arrow").not($(this).find(".arrow").removeClass("indMenu_arrowDown").addClass("indMenu_arrowUp")).addClass("indMenu_arrowDown").removeClass("indMenu_arrowUp");
        $(".submenu").not($(this).parent().find(".submenu").slideDown("slow")).slideUp("fast");
    });
}

/* $(function () {
    //- DONUT CHART -
    // Section 07 01

    var donutDataLabels = [['Sonic Logo Usage 1', 'Sonic Logo Usage 2', 'Sonic Logo Usage 3', 'Sonic Logo Usage 4', 'Sonic Logo Usage 5'],['Mobile/App', 'Events', 'TV', 'Digital', 'Sponsoring']];
    var datasetsData = [[70,50,40,60,30],[40,30,60,40,50]];
    var datasetsBgColor = [['#efb119', '#e56e25', '#f18a1f', '#3ba3d2', '#4eb966'], ['#efb119', '#e56e25', '#f18a1f', '#3ba3d2', '#4eb966']];
    var datasetsBorder = [[0,0,0,0,0,0],[0,0,0,0,0,0]];
    var datasetsHoverBorderColor = [['#444444', '#444444', '#444444', '#444444', '#444444'], ['#444444', '#444444', '#444444', '#444444', '#444444']];
    var datasetsHoverBorderWidth = [[5, 5, 5, 5, 5], [5, 5, 5, 5, 5]];

    for (i=0; i<2; i++){
        var donutChartCanvas = $('#donutChart'+i).get(0).getContext('2d');
        if(i == 0){
            var donutOptions = {
                maintainAspectRatio : false,
                responsive : true,
                legend : false,
                cutoutPercentage: 40
            }
        }
        else {
            var donutOptions = {
                maintainAspectRatio : false,
                responsive : true,
                legend: {
                    labels: {
                        fontColor: 'white',
                        fontSize: 14,
                        fontFamily: 'RobotoMonoLight'
                    }
                },
                cutoutPercentage: 40
            }
        }
        var donutData = {
            labels: donutDataLabels[i],
            datasets: [{
                data: datasetsData[i],
                backgroundColor : datasetsBgColor[i],
                borderWidth: datasetsBorder[i],
                hoverBorderColor: datasetsHoverBorderColor[i],
                hoverBorderWidth: datasetsHoverBorderWidth[i]
            }]
        }

        var donutChart = new Chart(donutChartCanvas, {
            type: 'doughnut',
            data: donutData,
            options: donutOptions
        });
    }

    //- BAR CHART -
    var areaChartData = {
        labels  : ['Own Music', 'Custom Music', 'Licensed Music', 'Soundalikes', 'Stock Music', 'Silence'],
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
                data                : [28, 48, 40, 19, 86, 27],
                borderWidth: [0,0,0,0,0,0]
            }
        ]
    }

    var barChartCanvas = $('#barChart').get(0).getContext('2d')
    var barChartData = jQuery.extend(true, {}, areaChartData)
    var temp0 = areaChartData.datasets[0]
    //var temp1 = areaChartData.datasets[1]
    barChartData.datasets[0] = temp0
    //barChartData.datasets[1] = temp0

    var barChartOptions = {
        responsive              : true,
        maintainAspectRatio     : false,
        datasetFill             : false,
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: "ffffff",
                    fontSize: 14,
                    fontFamily: 'RobotoMonoLight',
                    stepSize: 0,
                    beginAtZero: true
                },
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: "ffffff",
                    fontSize: 14,
                    fontFamily: 'RobotoMonoLight',
                    stepSize: 1,
                    beginAtZero: true
                },
                gridLines: {
                    display:false
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'white',
                fontSize: 14,
                fontFamily: 'RobotoMonoLight'
            }
        },
        title: {
            fontColor: '#ffffff'
        }
    }
    var barChart = new Chart(barChartCanvas, {
        type: 'horizontalBar',
        data: barChartData,
        options: barChartOptions
    })
}); */
