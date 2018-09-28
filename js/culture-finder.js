(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $('#eventCreationBtn').click(function() {
    $('#featureImg').hide().attr('src', 'img/eventCreation.png').fadeIn(1000);
    $('.active-text').hide().removeClass('active-text');
    $('.active-link').removeClass('active-link');
    $('#eventCreationBtn').addClass('active-link');
    $('#eventCreation').fadeIn(2000).addClass('active-text');
  })

  $('#eventDataBtn').click(function() {
    $('#featureImg').hide().attr('src', 'img/eventData.png').fadeIn(1000);
    $('.active-text').hide().removeClass('active-text');
    $('.active-link').removeClass('active-link');
    $('#eventDataBtn').addClass('active-link');
    $('#eventData').fadeIn(2000).addClass('active-text');
  })

  $('#eventSharingBtn').click(function() {
    $('#featureImg').hide().attr('src', 'img/eventSharing.png').fadeIn(1000);
    $('.active-text').hide().removeClass('active-text');
    $('.active-link').removeClass('active-link');
    $('#eventSharingBtn').addClass('active-link');
    $('#eventSharing').fadeIn(2000).addClass('active-text');
  })

  $('#artistDirectoryBtn').click(function() {
    $('#featureImg').hide().attr('src', 'img/ArtistDirectory.png').fadeIn(1000);
    $('.active-text').hide().removeClass('active-text');
    $('.active-link').removeClass('active-link');
    $('#artistDirectoryBtn').addClass('active-link');
    $('#artistDirectory').fadeIn(2000).addClass('active-text');
  })

  $('#publicArtBtn').click(function() {
    $('#featureImg').hide().attr('src', 'img/publicArt.png').fadeIn(1000);
    $('.active-text').hide().removeClass('active-text');
    $('.active-link').removeClass('active-link');
    $('#publicArtBtn').addClass('active-link');
    $('#publicArt').fadeIn(2000).addClass('active-text');
  })

  if ($(window).width() > 1200) {
    setTimeout(function(){
      $("#transition-container").remove();
      $('#mainNav').show();
    }, 1000)
  } else {
    $('#mainNav').show();
  }

  $(window).scroll( function(){
    
    /* Check the location of each desired element */
    $('.fademe').each( function(i){
        
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},1500);
                
        }
        
    }); 

});

})(jQuery); // End of use strict
