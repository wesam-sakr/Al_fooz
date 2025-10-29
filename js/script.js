// $('.owl-carousel').addClass('owl-rtl')
// $('html').attr('dir', 'rtl');
// $('html').attr('lang', 'ar');
// $('link[href="css/bootstrap.min.css"]').attr('href', 'css/bootstrap.rtl.min.css');

// dir
var bodyDir = $('body').css('direction')
var dirAr
if (bodyDir == "rtl") {
  dirAr = true
}
else {
  dirAr = false
}

// loader
$('#loading').fadeOut(3000);

// make navbar fixed while scrolling
$(window).on("scroll", function () {
  $('header .navbar').toggleClass("fixed", $(this).scrollTop() > 40);
});

let started = false;
function animateCounters() {
  $('.counter').each(function () {
    let $this = $(this);
    let target = +$this.attr('data-target');

    $({ countNum: $this.text() }).animate(
      { countNum: target },
      {
        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }
      }
    );
  });
}

if ($('#stats').length > 0) {
  $(window).on('scroll', function () {
    let top = $('#stats').offset().top - window.innerHeight + 100;
    if (!started && $(window).scrollTop() > top) {
      animateCounters();
      started = true;
    }
  });

}

// owl carousel
$(document).ready(function () {

  function NumOf(n) {
    return (n < 10 && n != 0) ? '0' + n : '' + n;
  }
  $('.hero-sec .owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.silder-attach').html(`
        <div class="slider-counter">
          <span class="current">${NumOf(carousel.relative(carousel.current()) + 1)}</span>
          <span class="len mx-1">/</span>
          <span class="len"> ${NumOf(carousel.items().length)} </span>
        </div>
        `);
  }).owlCarousel({
    items: 1,
    rtl: dirAr,
    loop: true,
    margin: 60,
    stagePadding: 10,
    nav: false,
    autoplay: true,
    animateOut: 'fadeOut',
  });

  $('.blogs .owl-carousel').owlCarousel({
    margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    animateIn: 'fadeInLeft',
    stagePadding: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  $('.testimonials .owl-carousel').owlCarousel({
    margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    animateIn: 'fadeInLeft',
    stagePadding: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });

  $('.our_team .owl-carousel').owlCarousel({
    margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    autoplay: true,
    loop: true,
    animateIn: 'fadeInLeft',
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      }
    }
  });

  $('.related_projects .owl-carousel').owlCarousel({
    margin: 16,
    responsiveClass: true,
    rtl: dirAr,
    nav: false,
    autoplay: true,
    loop: true,
    animateIn: 'fadeInLeft',
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  });
});

// scroll to top page
var btn_top = $('#scrollUp');
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn_top.show();
  } else {
    btn_top.hide();
  }
});


$('[data-fancybox]').fancybox({
  buttons: [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "download",
    "thumbs",
    "close"
  ]
});
