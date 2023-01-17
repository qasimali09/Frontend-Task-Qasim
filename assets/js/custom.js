(function($){

  // toggle menu on mobile
  $(".menu__toggle__btn").on("click", function(){
    $(".header__nav").toggleClass("active");
  });

  // remove active class on menu item click
  $(".header .header__nav ul > li a").on("click", function(){
    $(".header__nav").removeClass("active");
  });

  // remove active class from menu on click outside
  $(document).on("click", function(e){
    if(!$(e.target).closest(".header").length){
      $(".header__nav").removeClass("active");
    }
  });

  // add active class on scroll down in header
  $(window).on("load scroll", function(){
    var scroll = $(window).scrollTop();
    if(scroll > 30){
      $(".header").addClass("active");
    }else{
      $(".header").removeClass("active");
    }
  });

  // hero slider init
  const swiper = new Swiper(".hero__slider .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    loop: true,
    coverflowEffect: {
      rotate: 75,
      stretch: 110,
      depth: 0,
      slideShadows: false,
      modifier: 1,
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 2.4,
      },
    },
  });

  // why choose us slider init
  const whyChooseUs = new Swiper(".choose__slider .swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".choose__slider__pagination",
      clickable: true,
    },
  });

  // Testimonial slider init
  const testimonialSlider = new Swiper(".client__slider .swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: ".clients__slider__controllers .slider__progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".clients__slider__controllers .arrow__right",
      prevEl: ".clients__slider__controllers .arrow__left",
    },
  });

  // Brand logos slider init
  const logoSlider = new Swiper(".footer__brand_logos .swiper", {
    slidesPerView: 2,
    watchOverflow: true,
    spaceBetween: 20,
    breakpoints: {
      680: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 55,
      },
      1100: {
        slidesPerView: 6,
        spaceBetween: 65,
      },
    },
  });

})(jQuery);