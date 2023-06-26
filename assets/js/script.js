new Swiper('#swiper-two', {
    // Optional parameters
    loop: true,
    paginationClickable: true,
    pagination: {
        el: '#swiper-two-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#swiper-two-button-next',
        prevEl: '#swiper-two-button-next',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '#swiper-two-scrollbar',
    },
});

new Swiper('#swiper-one', {
    loop: true,
    paginationClickable: true,
    pagination: {
        el: '#swiper-one-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#swiper-one-button-next',
        prevEl: '#swiper-one-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '#swiper-one-scrollbar',
    },
});