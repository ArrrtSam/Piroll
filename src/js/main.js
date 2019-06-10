$("#hamburger-btn").click(function() {
  $("#menu").toggleClass("menu--active");
  $(this).toggleClass("is-active");
});
$(".counter").each(function() {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo
    },

    {
      duration: 2500,
      easing: "linear",
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    }
  );
});

new WOW().init();

var owl = $(".owl-carousel");
if (owl) {
  owl.owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000
  });
}

$(document).ready(function() {
  var owl_2 = $(".img-carousel");
  owl_2.slick({
    arrows: false,
    slidesToShow: 5,
    infinite: true
  });
});

if ($("#progress_frt").length) {
  var line = new ProgressBar.Line("#progress_frt");
  var bar = new ProgressBar.Line(progress_frt, {
    strokeWidth: 3,
    easing: "easeInOut",
    duration: 2500,
    color: "#10C9C3",
    trailColor: "#D8D8D8",
    trailWidth: 3,
    svgStyle: { width: "100%", height: "100%" }
  });

  bar.animate(0.75);
}

if ($("#progress_sec").length) {
  var line = new ProgressBar.Line("#progress_sec");
  var bar = new ProgressBar.Line(progress_sec, {
    strokeWidth: 4,
    easing: "easeInOut",
    duration: 2500,
    color: "#10C9C3",
    trailColor: "#D8D8D8",
    trailWidth: 4,
    svgStyle: { width: "100%", height: "100%" }
  });
  bar.animate(0.9);
}

if ($("#progress_sec").length) {
  var line = new ProgressBar.Line("#progress_thr");

  var bar = new ProgressBar.Line(progress_thr, {
    strokeWidth: 4,
    easing: "easeInOut",
    duration: 2500,
    color: "#10C9C3",
    trailColor: "#D8D8D8",
    trailWidth: 4,
    svgStyle: { width: "100%", height: "100%" }
  });
  bar.animate(0.65);
}

var lightbox = $(".works_con a").simpleLightbox();

var lightbox = $(".uiux-img-con a").simpleLightbox();

new WOW().init();

$(".counter").each(function() {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo
    },

    {
      duration: 2500,
      easing: "linear",
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    }
  );
});
