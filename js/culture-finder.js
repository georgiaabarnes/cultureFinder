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
    $('#featureImg').attr('src', 'img/eventCreation.png');
    $('.active').fadeOut(500).removeClass('active');
    $('.active-link').removeClass('active-link');
    $('#eventCreationBtn').addClass('active-link');
    $('#eventCreation').fadeIn(2000).addClass('active');
  })

  $('#eventDataBtn').click(function() {
    $('#featureImg').attr('src', 'img/eventData.png');
    $('.active').hide().removeClass('active');
    $('.active-link').removeClass('active-link');
    $('#eventDataBtn').addClass('active-link');
    $('#eventData').fadeIn(2000).addClass('active');
  })

  $('#eventSharingBtn').click(function() {
    $('#featureImg').attr('src', 'img/eventSharing.png');
    $('.active').hide().removeClass('active');
    $('.active-link').removeClass('active-link');
    $('#eventSharingBtn').addClass('active-link');
    $('#eventSharing').fadeIn(2000).addClass('active');
  })

  $('#artistDirectoryBtn').click(function() {
    $('#featureImg').attr('src', 'img/ArtistDirectory.png');
    $('.active').hide().removeClass('active');
    $('.active-link').removeClass('active-link');
    $('#artistDirectoryBtn').addClass('active-link');
    $('#artistDirectory').fadeIn(2000).addClass('active');
  })

  $('#publicArtBtn').click(function() {
    $('#featureImg').attr('src', 'img/publicArt.png');
    $('.active').hide().removeClass('active');
    $('.active-link').removeClass('active-link');
    $('#publicArtBtn').addClass('active-link');
    $('#publicArt').fadeIn(2000).addClass('active');
  })

})(jQuery); // End of use strict
