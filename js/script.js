// brand slider
let brandSlider = null;

function brandSliderInit() {
  if (!brandSlider) {
    brandSlider = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

function brandSliderDestroy () {
  if (brandSlider) {
    brandSlider.destroy();
    brandSlider = null;
  }
}

window.onload = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    brandSliderInit()
  } else {
    brandSliderDestroy()
  }
};

window.addEventListener('resize', function(event){
  if (window.innerWidth < 767) {
    brandSliderInit()
  } else {
    brandSliderDestroy()
  }
});



// click events
document.addEventListener('click', function (event) {
  let target = event.target;
  let showMoreButton = target.closest('#slider__button');
  if (showMoreButton) {
    let spoiler = showMoreButton.previousElementSibling;
    spoiler.classList.toggle('content-block__spoiler');
    showMoreButton.innerHTML = showMoreButton.innerHTML ===
    `<div class="show-more_ic">
    <img src="./images/arrow_open.svg" alt="arrows">
    </div>
    <div class="show-more__text">Скрыть</div>` ?
    `<div class="show-more_ic">
    <img src="./images/arrow_close.svg" alt="arrows">
    </div>
    <div class="show-more__text">Показать все</div>` :
    `<div class="show-more_ic">
    <img src="./images/arrow_open.svg" alt="arrows">
    </div>
    <div class="show-more__text">Скрыть</div>`;
  }
});

