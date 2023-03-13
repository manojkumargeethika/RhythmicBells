var swiper1 = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 300,
   mousewheel: false,
   coverflowEffect: {
    rotate: 30,
    slideShadows: true
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      slidesPerView: 1,

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  

  

  