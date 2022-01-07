$(document).ready(function (){
    $(window).scroll(function (){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });
    
    // Slide up Script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn').toggleClass('toggle');

    });

    // Typing Animation Script
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Web Designer", "WordPress Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Web Designer", "WordPress Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Owl-Carousel Script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 3000,
        autoPlayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    // Contact Form
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }
    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
         parent.classList.remove("focus");
        }
    }
    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
});