document.addEventListener(`DOMContentLoaded`, () => {
  const elementsCarousel = document.querySelectorAll(`.carousel`);
  M.Carousel.init(elementsCarousel, {
      duration:150,
      dist: -50,
      shift: 5,
      padding: 5,
      numVisible: 3, 
      indicators: true,
      noWrap: true
  })
} );