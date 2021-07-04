$(".carousel").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: false,
    dots: false,
    nav: true, 
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    items: 5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});