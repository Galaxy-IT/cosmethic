;(function ($) {
  $(document).ready(function () {
    // SVG support for IE
    svg4everybody({})

    // masonry shop section
    $('.shop__items-wrap-inner').masonry({
      itemSelector: '.shop__item',
      horizontalOrder: true
    })

    // masonry blog&news section
    $('.blog-posts__posts').masonry({
      itemSelector: '.blog-posts__post--wrap',
      horizontalOrder: true,
    })

    // product related slider
    new Swiper('.product__related .swiper-container', {
      slidesPerView: 'auto',
      breakpoints: {
        1440: {
          slidesPerView: 2
        }
      },
      pagination: {
        el: '.product__related .swiper-pagination',
        type: 'fraction'
      },
      navigation: {
        nextEl: '.product__related .swiper-button-next',
        prevEl: '.product__related .swiper-button-prev'
      }
    })
  })

  // BURGER MENU ===============================================================================
  // add backdrop
  const addBackdrop = cb => {
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

  // burger menu
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

  // SLIDERS ===========================================================================================
  // featured product slider
  new Swiper('#featuredProductSlider', {
    slidesPerView: 'auto',
    // spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '#featuredProductSlider .swiper-button-next',
      prevEl: '#featuredProductSlider .swiper-button-prev'
    }
  })

  // slide-show
  $('.thumbnails-pic').on('click', function (e) {
    e.preventDefault()
    let $this = $(this),
      item = $this.closest('.thumbnails-item'),
      container = $this.closest('.gallery'),
      display = container.find('.gallery-big-pic'),
      path = item.find('img').attr('src'),
      duration = 100
    if (!item.hasClass('active')) {
      item.addClass('active').siblings().removeClass('active')
      display.find('img').fadeOut(duration, function () {
        $(this).attr('src', path).fadeIn(duration)
      })
    }
  })

  // select
  $('.select-trigger').on('click', function () {
    $('.select-dropdown').fadeOut(200).removeClass('active')
    let container = $(this).closest('.select-container'),
      value = container.find('.select-dropdown__option.active').text(),
      input = container.find('.select-value'),
      dropdown = container.find('.select-dropdown')

    if (!container.hasClass('active')) {
      $('.select-container').not($(this)).removeClass('active')
      container.stop(true).addClass('active')
      dropdown.stop(true).fadeIn(100).addClass('active')
      input.val(value)
    } else {
      container.removeClass('active')
      dropdown.stop(true).fadeOut(100).removeClass('active')
    }
  })

  $('.select-dropdown__option').on('click', function () {
    const container = $(this).closest('.select-container'),
      valueText = $(this).text(),
      valueItem = container.find('.select-value-item'),
      input = container.find('.select-value'),
      options = container.find('.select-dropdown__option'),
      dropdown = container.find('.select-dropdown')
    valueItem.text(valueText)
    input.val(valueText)
    container.removeClass('active')
    options.removeClass('active')
    $(this).addClass('active')
    dropdown.fadeOut(100).removeClass('active')
  })

  $('.wrapper').on('click', function (e) {
    let target = $(e.target)
    if (!target.closest('.select-container').length) {
      $('.select-container').removeClass('active')
      $('.select-dropdown').fadeOut(100).removeClass('active')
    }
  })

  // load more btn product
  $('.product__descr-load-more').on('click', function () {
    $('.hide-mobile').slideDown(200).addClass('slidedDown')
    $(this).fadeOut(200).addClass('hidden')
  })

  // product slider prev btn
  $('.product__related-btn-next').on('click', function () {
    $('.product__related-btn-prev').removeClass('hide')
  })
})(jQuery)
