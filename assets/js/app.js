$(document).ready(function() {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
    $('.TopSlider').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 5,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
    $('.featuredBrand').slick({
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 4,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });


    var swiper = new Swiper('.swiper-container-cube', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

      


});