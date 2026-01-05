'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
    
});

$('.toggle-menu').click(function(){
    $('.nav-links').toggleClass('active');
});

$('.nav-links a').click(function(){
    $('.nav-links').removeClass('active');
});



$(window).scroll(function(){
    if ($(window).scrollTop() >= 90) {
        $('.menu-header').addClass('scroll-top');
        $('.md-section').css('padding-top','90px');
    }
    else {
        $('.menu-header').removeClass('scroll-top');
        $('.md-section').css('padding-top','auto');
    }
    
});


$('.ui.dropdown')
  .dropdown()
;

// $("#modal-sucess").fancybox().trigger('click');

new WOW().init();

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    video:true,
    responsive:{
        0:{
            items:1.3
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});


$(document).ready(function() {
    const $sections = $('.md-section'); 
    const $navLinks = $('.nav-link'); 
    const $navbar = $('.nav-links');
    let navbarHeight = $navbar.outerHeight(); 

    function updateActiveNavLink(currentSectionId) {
        $navLinks.removeClass('active'); 

        $navLinks.filter('[href="#' + currentSectionId + '"]').addClass('active');
    }
    $(window).scroll(function() {
        const scrollPosition = $(this).scrollTop(); 

        $sections.each(function() {
            const $currentSection = $(this);
            const sectionTop = $currentSection.offset().top;
            const sectionBottom = sectionTop + $currentSection.outerHeight();
            const sectionId = $currentSection.attr('id'); 


            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                updateActiveNavLink(sectionId);
            }
        });
    });

    $navLinks.on('click', function(e) {
        e.preventDefault(); 

        const targetId = $(this).attr('href'); 
        const $targetSection = $(targetId);

        if ($targetSection.length) { 
            const scrollTarget = $targetSection.offset().top - 80;

            $('html, body').stop().animate({ 
                scrollTop: scrollTarget
            }, 'slow', function() {
                updateActiveNavLink(targetId.substring(1));
            });
        }
    });
    $(window).scroll();
});


