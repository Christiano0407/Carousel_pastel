const parallax = document.querySelector(`.parallax`);
const title = document.querySelector(`.title`);

function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = `translateY(`+scrollTop * - 0.6 + `px)`;
    title.style.transform = `translateY(` + scrollTop * 0.3 + `px)`;
}

window.addEventListener(`scroll`, scrollParallax);