document.addEventListener(`DOMContentLoader`, () => {
    const elementsCarousel = document.querySelectorAll(`.carousel`);
    M.carousel.init(elementsCarousel, {
        duration: 150
    })
})