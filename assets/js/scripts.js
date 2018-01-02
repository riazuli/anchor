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