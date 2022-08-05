const swiper = new Swiper('.top-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 5,

    scrollbar: {
      el: '.catalog__top-scrollbar',
      draggable: true,
      hide: false
    },
    breakpoints: {
      572: {
        slidesPerView: 2,
        spaceBetween: 10, 
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20, 
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30, 
      }     
    }
  });

  const swiper2 = new Swiper('.bottom-swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 5, 

    breakpoints: {
      572: {
        slidesPerView: 2,
        spaceBetween: 10, 
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20, 
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30, 
      }     
    },

    scrollbar: {
      el: '.catalog__bottom-scrollbar',
      draggable: true,
      hide: false
    },
  });


  const burger=document.getElementById('burger');

  burger.addEventListener('click',burgerOpen);

  function burgerOpen(){
    const menu=document.getElementById('menu');
    menu.classList.toggle('open');
    burger.classList.toggle('open');
  }

