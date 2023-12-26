document.addEventListener("DOMContentLoaded", function() {
    const swiperIndexCurrent1 = document.querySelector(".swiper__index__current1");
  
    const swiper1 = new Swiper('.swiper1', {
      slidesPerView: 3,
      spaceBetween: 20,
  
      autoplay: {
        delay: 3000,
      },
  
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        }
      },
  
      navigation: {
        nextEl: '.button-next1',
        prevEl: '.button-prev1',
      },
  
      on: {
        init: function () {
          const lastSlideIndex = this.slides.length;
          const lastSlideIndexElement = document.querySelector('.swiper__index__last1');
          if (lastSlideIndex < 10) lastSlideIndexElement.textContent = `0${lastSlideIndex}`;
          else lastSlideIndexElement.textContent = lastSlideIndex;
  
          const realIndex = this.params.slidesPerView;
          if (realIndex < 10) swiperIndexCurrent1.textContent = `0${realIndex}`;
          else swiperIndexCurrent1.textContent = realIndex + " ";
        },
  
        slideChange: function () {
          const realIndex = this.activeIndex + this.params.slidesPerView;
          if (realIndex < 10) swiperIndexCurrent1.textContent = `0${realIndex}`;
          else swiperIndexCurrent1.textContent = realIndex + " ";
        },
      },
    });
  
    const swiperIndexCurrent2 = document.querySelector(".swiper__index__current2");
  
    const swiper2 = new Swiper('.swiper2', {
      slidesPerView: 3,
      spaceBetween: 20,
  
      autoplay: {
        delay: 3000,
      },
  
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        }
      },
  
      navigation: {
        nextEl: '.button-next2',
        prevEl: '.button-prev2',
      },
  
      on: {
        init: function () {
          const lastSlideIndex = this.slides.length;
          const lastSlideIndexElement = document.querySelector('.swiper__index__last2');
          if (lastSlideIndex < 10) lastSlideIndexElement.textContent = `0${lastSlideIndex}`;
          else lastSlideIndexElement.textContent = lastSlideIndex;
  
          const realIndex = this.params.slidesPerView;
          if (realIndex < 10) swiperIndexCurrent2.textContent = `0${realIndex}`;
          else swiperIndexCurrent2.textContent = realIndex + " ";
        },
  
        slideChange: function () {
          const realIndex = this.activeIndex + this.params.slidesPerView;
          if (realIndex < 10) swiperIndexCurrent2.textContent = `0${realIndex}`;
          else swiperIndexCurrent2.textContent = realIndex + " ";
        },
      },
    });

    const swiperIndexCurrent3 = document.querySelector(".swiper__index__current3");

    const swiper3 = new Swiper('.swiper3', {
        slidesPerView: 3,
        spaceBetween: 20,
    
        autoplay: {
          delay: 3000,
        },
    
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          }
        },
    
        navigation: {
          nextEl: '.button-next3',
          prevEl: '.button-prev3',
        },
    
        on: {
          init: function () {
            const lastSlideIndex = this.slides.length;
            const lastSlideIndexElement = document.querySelector('.swiper__index__last3');
            if (lastSlideIndex < 10) lastSlideIndexElement.textContent = `0${lastSlideIndex}`;
            else lastSlideIndexElement.textContent = lastSlideIndex;
    
            const realIndex = this.params.slidesPerView;
            if (realIndex < 10) swiperIndexCurrent3.textContent = `0${realIndex}`;
            else swiperIndexCurrent3.textContent = realIndex + " ";
          },
    
          slideChange: function () {
            const realIndex = this.activeIndex + this.params.slidesPerView;
            if (realIndex < 10) swiperIndexCurrent3.textContent = `0${realIndex}`;
            else swiperIndexCurrent3.textContent = realIndex + " ";
          },
        },
      });
  });