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
            items:1
        },
        1000:{
            items:4
        }
    }
});

document.querySelector("#card1").addEventListener("click", function(){
    document.querySelector("#u1").style.display="block";
    document.getElementById('vector').remove();
    document.getElementById('bg').remove();
    document.getElementById('card1').focus();
    document.getElementById('card1').style.border="2px solid green";
}); 

document.querySelector("#explore").addEventListener("click", function(){
    document.querySelector("#v1").style.display="block";
    document.querySelector("#v1").scrollIntoView();
    // document.querySelector("#v1").style.scrollBehavior="smooth";
    document.getElementById('card1').focus();
    document.getElementById('card1').style.border="2px solid green";
}); 