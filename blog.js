new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    //pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
// responsive breakpoints
breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10, // Smaller space for mobile
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15, // Medium space for tablets
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 150, // Standard space for desktops
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 25, // Extra space for large screens
    },
  },
});