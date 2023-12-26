// Banner

const bannerCloseBtn = document.querySelector(".banner-header__close");
const bannerBlock = document.querySelector(".banner-header");

bannerCloseBtn.addEventListener("click", function () {
  bannerBlock.classList.add("none");
});

// Swiper 

// document.addEventListener("DOMContentLoaded", function() {
//   const swiperIndexCurrent = document.querySelector(".swiper__index__current");

//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 3,
//     spaceBetween: 20,

//     autoplay: {
//       delay: 3000,
//     },

//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//       },
//       767: {
//         slidesPerView: 2,
//       },
//       1300: {
//         slidesPerView: 3,
//       }
//     },

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     on: {
//       init: function () {
//         const lastSlideIndex = this.slides.length;
//         const lastSlideIndexElement = document.querySelector('.swiper__index__last');
//         if (lastSlideIndex < 10) lastSlideIndexElement.textContent = `0${lastSlideIndex}`;
//         else lastSlideIndexElement.textContent = lastSlideIndex;

//         const realIndex = this.params.slidesPerView;
//         if (realIndex < 10) swiperIndexCurrent.textContent = `0${realIndex}`;
//         else swiperIndexCurrent.textContent = realIndex + " ";
//       },

//       slideChange: function () {
//         const realIndex = this.activeIndex + this.params.slidesPerView;
//         if (realIndex < 10) swiperIndexCurrent.textContent = `0${realIndex}`;
//         else swiperIndexCurrent.textContent = realIndex + " ";
//       },
//     },
//   });
// });
