;(function ($) {
  $(document).ready(function () {
    svg4everybody({})
  })

  const addBackdrop = (cb) => {
    if ($('.menu-backdrop').length) {
      $('.menu-backdrop').remove()
    } else {
      $('body').append('<div class="menu-backdrop"></div>')

      $('.menu-backdrop').click(() => {
        cb()
        $('.menu-backdrop').remove()
      })
    }
  }

  $('.header__navigation-burger').on('click', function () {
    const toggle = () => {
      $(this).toggleClass('active')
      $('.header__menu').toggleClass('is-open')
    }
    toggle()
    addBackdrop(toggle)
  })

  $(window).on('resize', function () {
    $(this).removeClass('active')
    $('.menu-backdrop').remove()
    $('.header__menu').removeClass('is-open')
  })
  // slide-show
  $('.thumbnails-pic').on('click', function (e) {
    e.preventDefault();
    let $this = $(this),
        item = $this.closest('.thumbnails-item'),
        container = $this.closest('.gallery'),
        display = container.find('.gallery-big-pic'),
        path = item.find('img').attr('src'),
        duration = 100;
    if (!item.hasClass('active')) {
      item.addClass('active').siblings().removeClass('active');
      display.find('img').fadeOut(duration, function () {
        $(this).attr('src', path).fadeIn(duration);
      });
    }
  });
  // load more btn product
  $('.product__descr-load-more').on('click', function(){
    $('.hide-mobile').slideDown(200).addClass('slidedDown');
    $(this).fadeOut(200).addClass('hidden')
  })
  // product related slider
  let productRelated =  new Swiper('.product__related .swiper-container', {
    slidesPerView: 2,
    // spaceBetween: 10,
    // spaceBetween: 20,
    pagination: {
      el: '.product__related .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.product__related .swiper-button-next',
      prevEl: '.product__related .swiper-button-prev',
    },
  })
  new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    // spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})(jQuery)
