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

  new Swiper('#featuredProductSlider', {
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
