document.addEventListener("DOMContentLoaded",(e) => {
  const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if (isMobile.any()) {
    document.body.classList.add('isMobile')
} else {
    document.body.classList.remove('isMobile')
};
  const mobileMenu = document.querySelector('.sidebar');
const burgerBtn = document.querySelectorAll('.burger');
const overlayItem = document.querySelector('.overlay');
if (mobileMenu) {
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('show');
    document.body.classList.toggle('no-scroll');
    overlayItem.classList.toggle('show')
  }
  burgerBtn.forEach(btn => {
    btn.addEventListener('click', toggleMobileMenu)
  })
  overlayItem.addEventListener('click',toggleMobileMenu )
}
;
  (function() {
  const sliderCardContainer = document.querySelector('.slider-card__slider');
  if (sliderCardContainer) {
      const sliderCardSlider = new Swiper(sliderCardContainer, {
        slidesPerView: 1,
        // loop: true,
        // preloadImages: false,
        spaceBetween: 15,
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          690: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1450: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          // 420: {
          //   slidesPerView: 2.5,
          //   spaceBetween: 17,
          // },
        },
        navigation: {
          nextEl: '.slider-card__button-next',
          prevEl: '.slider-card__button-prev',
        }
      })
  }
})();
   // selects
 const parentOfSelects = document.querySelector('.slots-choice');
 const selectsHeaders = document.querySelectorAll('.select__header');
 const selectsItems = document.querySelectorAll('.select__item');
 const selects = document.querySelectorAll('.select');
 if (selectsHeaders.length) {
   for (let i = 0; i < selectsHeaders.length; i++) {
     selectsHeaders[i].addEventListener('click', selectToggle)
   }
   for (let i = 0; i < selectsItems.length; i++) {
     selectsItems[i].addEventListener('click',selectChoose)
   }
   function selectToggle() {
     removeClassActive(this.closest('.select').dataset.select);
     this.closest('.select').classList.toggle('active')
   }
   function selectChoose() {
     const text = this.textContent;
     const dataValue = this.querySelector('input').value;
     const parent = this.closest('.select');
     const current = parent.querySelector('.select__current');
     const currentinput = parent.querySelector('.select__header input');
     current.textContent = text;
     currentinput.value = dataValue;
     parent.classList.remove('active')
   }
 }
 function removeClassActive(number) {
  for (let i = 0; i < selects.length; i++) {
    if (+number !== +(selects[i].dataset.select)) {
      selects[i].classList.remove('active')
    }
  }
};
  const buttonsView = document.querySelectorAll('[data-view]');
const catalogItem = document.querySelector('.games--catalog');
if (buttonsView.length) {
  buttonsView.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.currentTarget.dataset.view === 'list') {
        catalogItem.classList.add('list')
        console.log(e.currentTarget.parentElement)
        const activeBtn = e.currentTarget.parentElement.querySelector('button[data-view].active')
        if (activeBtn) {
          activeBtn.classList.remove('active')
        }
        e.currentTarget.classList.add('active')
      } else {
        const activeBtn = e.currentTarget.parentElement.querySelector('button[data-view].active')
        if (activeBtn) {
          activeBtn.classList.remove('active')
        }
        catalogItem.classList.remove('list')
        e.currentTarget.classList.add('active')
      }
    })
  })
};
  ;
  const formAreas = document.querySelectorAll('.form__area');
if (formAreas.length) {
  formAreas.forEach(area => {
    area.addEventListener('keyup', function(e){
      this.style.height = 210 + 'px';
      this.style.height = this.scrollHeight + "px";
    });
  })
};
  (function () {
  const filterPrice = document.getElementById('filter-range')
  if (!filterPrice) {
    return
  }
  const max = Number(filterPrice.getAttribute('data-max-value'));
  let pips = {mode: 'count', values: 11};
  let range = {min: 0, max: max}
  noUiSlider.create(filterPrice, {
    start: [0],
    connect: [true, false],
    range,
    pips,
    tooltips: false,
    format: wNumb({
      decimals: 0,
      thousand: ' ',
    }),
  })
  function setValuePip() {
    const value = +(this.dataset.value);
    filterPrice.noUiSlider.set(value);
  }
  const filterInputStart = document.querySelector('.form__control--filter')
  const filterInputs = [filterInputStart]
  filterPrice.noUiSlider.on('update', function (values, handle) {
    filterInputs[handle].value = values[handle]
  })
  filterInputStart.addEventListener('change', setPriceValues)
  function setPriceValues() {
    let priceStartValue = filterInputStart.value;
    filterPrice.noUiSlider.set([priceStartValue])
  }
  function updatePips() {
    if (document.documentElement.clientWidth <= 575) {
      pips.values = 4
      filterPrice.noUiSlider.updateOptions({
        pips: pips
      })
    } else {
      pips.values = 11
      filterPrice.noUiSlider.updateOptions({
        pips: pips
      })
    }
  }
  updatePips()
  const rangePips = filterPrice.querySelectorAll('.noUi-value');
  console.log(rangePips)

  rangePips.forEach(pip => {
    pip.style.cursor = 'pointer'
    pip.addEventListener('click',setValuePip)
  })

  window.addEventListener('resize', updatePips)
})()
;
  document.body.addEventListener('click', (e) => {
  // selects
  const select = e.target.closest('.select');
  if (!select) {
    removeClassActive()
  }
  // /end selects

  // modal-btn
  // const modalBtn = e.target.closest('[modal-btn]')
  // const modalOverlay = document.querySelector('.modal-overlay')
  // if (modalBtn) {
  //   e.preventDefault()
  //   const modal = document.querySelector(modalBtn.getAttribute('modal-btn'))
  //   if (modalBtn.getAttribute('modal-btn') === '#order-one') {
  //     const product = document.querySelector('.product--the-one')
  //     changeModalInfo(modal, product)
  //   }
  //   modalOverlay.classList.add('modal-overlay--show')
  //   showModal(modal)
  // }
  // modalOverlay.addEventListener('click', (e) => {
  //   if (e.target === modalOverlay || e.target.closest('.modal__close')) {
  //     const modals = document.querySelectorAll('.modal')
  //     closeModal(modals)
  //   }
  // })
  // function showModal(modal) {
  //   modal.style.display = 'flex'
  //   setTimeout(() => {
  //     modal.classList.add('active')
  //   }, 200)
  //   document.body.classList.add('no-scroll')
  // }
  // function changeModalInfo(modal, target) {
  //   const productImg = target
  //     .querySelector('.product__img img')
  //     .getAttribute('src')
  //   const productTitle = target
  //     .closest('.container')
  //     .querySelector('.product-title').textContent
  //   const productPrice = target.getAttribute('data-price')
  //   modal.querySelector('.modal-info-title').value = productTitle
  //   modal.querySelector('.modal-info-price').value = productPrice
  //   modal.querySelector('.modal__title').textContent = productTitle
  //   const modalProductPrice = modal.querySelector('.modal__price .price')
  //   modalProductPrice.textContent = productPrice
  //   modal.querySelector('.modal__img img').setAttribute('src', productImg)
  // }
  // function closeModal(modals) {
  //   modals.forEach((modal) => {
  //     modal.classList.remove('active')
  //     modal.querySelectorAll('.modal__form').forEach((form) => form.reset())
  //     modal
  //       .querySelectorAll('small')
  //       .forEach((error) => error.classList.remove('error'))
  //     setTimeout(() => {
  //       modal.style.display = 'none'
  //       modalOverlay.classList.remove('modal-overlay--show')
  //     }, 300)
  //   })
  //   if (
  //     !mobileMenu.classList.contains('show') &&
  //     !document.querySelector('.catalog-menu--active')
  //   ) {
  //     document.body.classList.remove('no-scroll')
  //   }
  // }
  // /end mdoal-btn
})
;

  // input-number
  const inputnumber = document.querySelectorAll('[input-number]');
  if (inputnumber.length) {
    inputnumber.forEach(input => {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
      })
    })
  }


});
