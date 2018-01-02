(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".hero-slider").owlCarousel({
            items:1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });

        $(".team-member-list").owlCarousel({
            items:3,
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


        $(".testimonial-list").owlCarousel({
            items:1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:false,
        });


        $(".portfolio-list").isotope();

        $(".portfolio-sorting li").on("click",function() {

            $(".portfolio-sorting li").removeClass("active");
            $(this).addClass("active");

            var filterValue= $(this).attr("data-filter");
            $(".portfolio-list").isotope({
                filter: filterValue,
            });
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	