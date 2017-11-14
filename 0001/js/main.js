jQuery(document).ready(function($) { 

    var bg = $('.bg');

    console.log('ready');

    $('.bg').slick({
        fade: true,
        arrows: false,
        dots: false,
        speed: '0',
        autoplay: true,
        autoplaySpeed: 2000,        
    });

});    
