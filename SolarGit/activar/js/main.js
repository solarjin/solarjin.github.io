/*  ---------------------------------------------------
  Template Name: Activitar
  Description:  Activitar Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls ul li').on('click', function () {
            $('.gallery-controls ul li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.gallery-filter').length > 0) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

        $('.blog-gird').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
        });

    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Menu Hover
    --------------------*/
    $(".header-section .nav-menu .mainmenu ul li").on('mousehover', function () {
        $(this).addClass('active');
    });
    $(".header-section .nav-menu .mainmenu ul li").on('mouseleave', function () {
        $('.header-section .nav-menu .mainmenu ul li').removeClass('active');
    });

    /*------------------
        Carousel Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.show-result-select').niceSelect();

    /*------------------
       Timetable Filter
    --------------------*/
    $('.timetable-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.timetable-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.classtime-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.classtime-table').addClass('filtering');
        }
        $('.ts-item').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

    

    // Modal

    // pop 0

   /*  $('[data-podal=sekil]').on('click', function () {
        $('.overlay, #sekil').css("display", "flex").hide().fadeIn();
    })


    $('.overlay').on('click', function (e) {
        if (!$(e.target).hasClass('.podal') && !$(e.target).closest('.podal').length) {
            $('.overlay, #sekil').fadeOut();
        }
    })

    $('.podal_close').on('click', function () {
        $('.overlay, #sekil').fadeOut();
    }) */
    


     // pop 1
     
    $('[data-podal=pop_gym]').on('click', function () {
        $('.overlay, #pop_gym').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_gym').fadeOut();
    });

    // pop 2
     
    $('[data-podal=pop_workout]').on('click', function () {
        $('.overlay, #pop_workout').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_workout').fadeOut();
    });

    // pop 3
     
    $('[data-podal=pop_box]').on('click', function () {
        $('.overlay, #pop_box').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_box').fadeOut();
    });

    // pop 4
     
    $('[data-podal=pop_beauty]').on('click', function () {
        $('.overlay, #pop_beauty').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_beauty').fadeOut();
    });

    // pop 5
     
    $('[data-podal=pop_spa]').on('click', function () {
        $('.overlay, #pop_spa').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_spa').fadeOut();
    });

    // pop 6
     
    $('[data-podal=pop_form]').on('click', function () {
        $('.overlay, #pop_form').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_form').fadeOut();
    });

     // pop 7
     
     $('[data-podal=pop_group]').on('click', function () {
        $('.overlay, #pop_group').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_group').fadeOut();
    });

     // pop 8
     
     $('[data-podal=pop_personal]').on('click', function () {
        $('.overlay, #pop_personal').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_personal').fadeOut();
    });

     // pop 9
     
     $('[data-podal=pop_nutr]').on('click', function () {
        $('.overlay, #pop_nutr').css("display", "flex").hide().fadeIn();
    });

    $('.podal_close').on('click', function () {
        $('.overlay, #pop_nutr').fadeOut();
    });


   /*  $('.podal_close').on('click', function () {
        $('.overlay, #pop_workout').fadeOut();
    }); */


// Modal end


    $('.tabs_nav_tab').on('click', function () {
        $('.tabs_content_tab, .tabs_nav_tab').removeClass('active');
        $('.tabs_content_tab[data-id="' + $(this).attr('data-id') + '"]').addClass('active');
        $('.tabs_nav_tab[data-id="' + $(this).attr('data-id') + '"]').addClass('active');

        $('.tabs_content_tab.active .tabs_content_tab_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
    
            ]
        }
        );
    })

    $('.single-item2').slick({
        arrows: true,
    }
    );

    $('.tabs_content_tab.active .tabs_content_tab_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

        ]

    }
    );


    $('.partners_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        infinite: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }

        ]

    });

    $('.tabz_nav_tab').on('click', function () {
        $('.tabz_content_tab, .tabz_nav_tab').removeClass('active');
        $('.tabz_content_tab[data-id="' + $(this).attr('data-id') + '"]').addClass('active');
        $('.tabz_nav_tab[data-id="' + $(this).attr('data-id') + '"]').addClass('active');

        
    })





})(jQuery);