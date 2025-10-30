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

  // car details carousel
  // Resize and refresh page. slider-two slideBy bug remove
  var changeSlide = 4; // mobile -1, desktop + 1
  var slide = changeSlide;
  if ($(window).width() < 600) {
    var slide = changeSlide;
    slide--;
  } else if ($(window).width() > 999) {
    var slide = changeSlide;
    slide++;
  } else {
    var slide = changeSlide;
  }

  $(".one").owlCarousel({
    nav: false,
    dots: false,
    items: 1,
    margin: 5,
    autoplay: 5000,
    rtl: dirAr,
  });
  $(".two").owlCarousel({
    nav: false,
    dots: false,
    margin: 5,
    rtl: dirAr,
    responsive: {
      0: {
        items: changeSlide - 1,
        slideBy: changeSlide - 1,
      },
      600: {
        items: changeSlide,
        slideBy: changeSlide,
      },
      1000: {
        items: changeSlide + 1,
        slideBy: changeSlide + 1,
      },
    },
  });
  var owl = $(".one");
  owl.owlCarousel();
  owl.on("translated.owl.carousel", function (event) {
    $(".right").removeClass("nonr");
    $(".left").removeClass("nonl");
    if ($(".one .owl-next").is(".disabled")) {
      $(".slider .right").addClass("nonr");
    }
    if ($(".one .owl-prev").is(".disabled")) {
      $(".slider .left").addClass("nonl");
    }
    $(".slider-two .item").removeClass("active");
    var c = $(".slider .owl-item.active").index();
    $(".slider-two .item").eq(c).addClass("active");
    var d = Math.ceil((c + 1) / slide) - 1;
    $(".slider-two .owl-dots .owl-dot").eq(d).trigger("click");
  });
  // $(".right").click(function () {
  //   $(".slider .owl-next").trigger("click");
  // });
  // $(".left").click(function () {
  //   $(".slider .owl-prev").trigger("click");
  // });
  $(".slider-two .item").click(function () {
    var b = $(".item").index(this);
    $(".slider .owl-dots .owl-dot").eq(b).trigger("click");
    $(".slider-two .item").removeClass("active");
    $(this).addClass("active");
  });
  var owl2 = $(".two");
  owl2.owlCarousel();
  owl2.on("translated.owl.carousel", function (event) {
    $(".right-t").removeClass("nonr-t");
    $(".left-t").removeClass("nonl-t");
    if ($(".two .owl-next").is(".disabled")) {
      $(".slider-two .right-t").addClass("nonr-t");
    }
    if ($(".two .owl-prev").is(".disabled")) {
      $(".slider-two .left-t").addClass("nonl-t");
    }
  });
  $(".right-t").click(function () {
    $(".slider-two .owl-prev").trigger("click");
  });
  $(".left-t").click(function () {
    $(".slider-two .owl-next").trigger("click");
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
