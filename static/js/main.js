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


  // custom select
  let openCustomSelectBtn = document.querySelectorAll('.checkout__form-custom-select-title');

  function openAndHiddenSelectMenu() {
    let customSelectWrapper = this.parentNode;
    let customSelectTitle = this;
    let customSelectBody = this.nextElementSibling;
    let customSelectOptions = customSelectBody.querySelectorAll('.checkout__form-custom-select-option');
    let customSelectInput = customSelectBody.parentNode.querySelector('.checkout__form-custom-select-hidden-input');

    if(!customSelectBody.classList.contains('checkout__form-custom-select-body--active')){
      customSelectBody.classList.add('checkout__form-custom-select-body--active');
      customSelectWrapper.classList.add('checkout__form-custom-select--active');

      customSelectOptions.forEach((elm) => {
        elm.onclick = function(){
          customSelectTitle.textContent = elm.textContent;
          customSelectInput.value = elm.textContent;
          hidden();
        }
      });
      return false;
    };

    function hidden(){
      customSelectBody.classList.remove('checkout__form-custom-select-body--active');
      customSelectWrapper.classList.remove('checkout__form-custom-select--active');
    }
    hidden();

  };

  if(openCustomSelectBtn) openCustomSelectBtn.forEach((elm) => {
    elm.addEventListener('click', openAndHiddenSelectMenu);
  });

})(jQuery)