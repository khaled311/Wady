$(function() {


    // // Toggle open
    $(".sideNav .drop span ,.sideNav .drop> i").on("click", function(e) {
        $(".subMenu").slideToggle();
        $(".drop .arr").toggleClass("open");
        e.stopPropagation();
    });


    // Toggle open
    $(".subMenu > li").on("click", function() {
        $(this).find(".arr-left").toggleClass("open");
    });


    // open Side Nav
    $(".menuTriger").on("click", function() {
        $(this).fadeOut();
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
    });


    // Close Side Nav
    $(".navover, .close1").on("click", function() {
        if($(".sideNav").hasClass("open")){
            $(".menuTriger").fadeIn();
            $(".navover").removeClass("open");
            $(".sideNav").toggleClass("open");
            $("body").css("overflow", "auto");
        }
    });

    // // Header Slider
    $('.car-sec .owl-carousel').owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 1,
        dots: true,
        smartSpeed: 1000
    });

    // // Disc Slider
    $('.disc .owl-carousel').owlCarousel({
        autoplay: false,
        rtl:true,
        loop:true,
        nav:true,
        items: 5,
        dots: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:5
            }
        },
        navText: ["<span></span>","<span></span>"]
    });

    //footer accordion
    if($(window).width() < 992){
        $(".foot-links button").attr("data-toggle", "collapse");
    }

    $('.foot-links button').on('click', function() {
        $(this).find("i").toggleClass("trans");
        $(this).parent().parent().siblings().find('.collapse').collapse('hide');
        $(this).parent().parent().siblings().find('button i').removeClass("trans");
    });

})