/* jshint esnext: true */
var document,
    window;
(function ($) {
    'use stict';

    const flat = {};

    // preloader
    flat.fnPreloader = () => {
        flat.preloader = $('.preloader');
        if (flat.preloader.length) {
            flat.preloader.fadeOut(1000);
        }
    };


    flat.customCode = () => {
        // dynamic-margin-padding
        var dataMargin = $('[data-margin]');
        dataMargin.each(function () {
            var getMargin = $(this).attr('data-margin');
            $(this).css('margin', getMargin);
        });
        var dataPadding = $('[data-padding]');
        dataPadding.each(function () {
            var getPadding = $(this).attr('data-padding');
            $(this).css('padding', getPadding);
        });

        flat.faq = $('.faq');
        flat.faq.each(function () {
            flat.singleFaq = $(this).find('.single-item');
            flat.singleFaq.on('click', function () {
                $(this).find('.content').slideToggle();
                $(this).toggleClass('active');
            });
        });
        
        flat.windowHeight = $(window).height();
        $('.window-height').css('min-height',flat.windowHeight);
        
        flat.searchIcon = $('.search-icon');
        flat.searchForm = $('.search-form');
        flat.searchIcon.on('click', function() {
            $(this).add(flat.searchForm).toggleClass('active');
        });
    };

    flat.fnPlugins = () => {
        if($.fn.barfiller){
            flat.b_filler = $('.barfiller');
            flat.b_filler.barfiller();
        }
        if($.fn.slicknav){
            $('#menu > ul').slicknav();
        }
    };

    flat.wlPlugins = () => {
        if ($.fn.isotope) {
            
            flat.portfolio_isotope = $('.portfolio-isotope');
            flat.portfolio_menu = $('.isotope-menu li');
            flat.portfolio_isotope.isotope({
                itemSelector: '.single-portfolio',
                layoutMode: 'fitRows'
            });

            flat.portfolio_menu.on('click', function () {
                flat.portfolio_menu.removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                flat.portfolio_isotope.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });

        }

        if (typeof loopcounter !== 'undefined') {
            loopcounter('counter-box'); // jshint ignore:line
        }
    };

    flat.fnSlider = () => {
        if ($.fn.owlCarousel) {
            flat.heroSlider = $('.hero-slider');
            flat.heroSlider.addClass('owl-carousel');
            flat.heroSlider.owlCarousel({
                items: 1,
                autoplay: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOutLeft',
                loop: true,
                autoplayHoverPause: true,
                nav: true,
                autoHeight:true,
                navText: [
                    '<i class="fa fa-angle-left"></i>',
                    '<i class="fa fa-angle-right"></i>'
                ]
            });

            flat.tstSlider = $('.testimonial-slider');
            flat.tstSlider.addClass('owl-carousel');
            flat.tstSlider.owlCarousel({
                items: 3,
                autoplay: true,
                loop: true,
                margin: 30,
                dots: false,
                nav: true,
                navText: [
                    '<i class="fa fa-arrow-left"></i>',
                    '<i class="fa fa-arrow-right"></i>'
                ],
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            });
        }
    };



    // all functions of document ready
    flat.docReady = () => {
        flat.fnPreloader();
        flat.customCode();
        flat.fnPlugins();
        flat.fnSlider();
    };

    // all functions of window load
    flat.winLoad = () => {
        flat.fnPreloader();
        flat.wlPlugins();
    };


    $(document).ready(flat.docReady);
    $(window).on('load', flat.winLoad);



})(jQuery); // jshint ignore:line