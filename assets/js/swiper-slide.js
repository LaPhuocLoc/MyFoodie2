var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    speed: 800,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});