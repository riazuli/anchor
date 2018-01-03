(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        //Hero Slider
        $(".hero-slider").owlCarousel({
            items:1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });

        $(".hero-slider").on("translate.owl.carousel", function() {
            $(".hero-slider .hero-text h3").removeClass("animated fadeInUp").css("opacity", "0");
            $(".hero-slider .hero-text .boxed-btn").removeClass("animated zoomIn").css("opacity", "0");
        });

        $(".hero-slider").on("translated.owl.carousel", function() {
            $(".hero-slider .hero-text h3").addClass("animated fadeInUp").css("opacity", "1");
            $(".hero-slider .hero-text .boxed-btn").addClass("animated zoomIn").css("opacity", "1");
        });

        //Team Slider
        $(".team-member-list").owlCarousel({
            margin:30,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        });


        //Testimonial Slider
        $(".testimonial-list").owlCarousel({
            items:1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:false,
        });

        //portfolio sorting
        $(".portfolio-list").isotope();

        $(".portfolio-sorting li").on("click",function() {

            $(".portfolio-sorting li").removeClass("active");
            $(this).addClass("active");

            var filterValue= $(this).attr("data-filter");
            $(".portfolio-list").isotope({
                filter: filterValue,
            });
        });


        //Hamburger Menu
        $(".menu-triger").on("click", function() {
            $(".offcanvas-menu , .offcanvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close , .offcanvas-overlay").on("click", function() {
            $(".offcanvas-menu ,.offcanvas-overlay").removeClass("active");
        });


        //Sticky Menu
        $(window).scroll(function(){
            if($(this).scrollTop()>100){
                $(".header-area").addClass("sticky");
            }
            else{
                $(".header-area").removeClass("sticky");
            }
        }); 

        //SmoothScroll
        $('.main-menu ul li a, .scroll-to-about,.back-to-top').on('click', function(event) {
            $('.main-menu ul li a').parent().removeClass('active');
            var $anchor = $($(this).attr('href')).offset().top - 80;
            $('body, html').animate({
                scrollTop: $anchor
            }, 1500);
            event.preventDefault();
            return false;
        });
        $('.offcanvas-menu ul li a').on('click', function(event) {
            $(".offcanvas-menu ,.offcanvas-overlay").removeClass("active");
            var $anchor = $($(this).attr('href')).offset().top;
            $(this).parent().addClass('active');
            $('body, html').animate({
                scrollTop: $anchor
            }, 800);
            event.preventDefault();
            return false;
        });

        // jQuery scroll spy
        $('body').scrollspy({
            target: '.main-menu',
            offset: 85,
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	