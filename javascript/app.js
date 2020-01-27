const parallax = document.querySelector(`.parallax`);

function scrollParallax() {
    let scrollTop = document.documentElement.scrollTop; 
    parallax.style.transform = `translateY(` +scrollTop * -0.3 + `px)`;
}

window.addEventListener(`scroll`, scrollParallax);