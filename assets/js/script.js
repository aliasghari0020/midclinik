const swiper = new Swiper('.swiper-one', {
    // Optional parameters
   
    loop: true,
    pagination: '.swiper-pagination1',
    paginationClickable: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
  const swiperTwo = new Swiper('.swiper-two', {
    // Optional parameters
    loop: true,
    pagination: '.swiper-pagination1',
    paginationClickable: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
