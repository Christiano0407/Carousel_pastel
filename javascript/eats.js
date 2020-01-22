document.addEventListener(`DOMContentLoader`, () => {
const elementsCarousel = document.querySelectorAll(`.carousel`);
M.Carousel.init(elementsCarousel, {
    duration: 150,
});

});