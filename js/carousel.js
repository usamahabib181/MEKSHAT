$('.banner-silder').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        freeDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
        rtl: $('html').attr('dir') == 'rtl' ? true : false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: false
            }
        }
    })
    // 
$('.section-filter__filter-btn').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        mouseDrag: true,
        rtl: $('html').attr('dir') == 'rtl' ? true : false,
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            400: {
                items: 5,
                nav: true
            },
            600: {
                items: 7,
                nav: false
            },
            700: {
                items: 8,
                nav: false
            },
            800: {
                items: 7,
                nav: false
            },
            1000: {
                items: 8,
                nav: true,
                loop: false
            }
        }
    })
    //
$('.section-justadded-products__products').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: false,
        mouseDrag: true,
        rtl: $('html').attr('dir') == 'rtl' ? true : false,
        responsive: {
            0: {
                items: 2,
                nav: true,
                margin: 150
            },
            400: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            800: {
                items: 4,
                nav: false,
                margin: 50
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            },

        }
    })
    // login
$('.login-silder').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    rtl: $('html').attr('dir') == 'rtl' ? true : false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})