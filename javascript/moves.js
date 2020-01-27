const animation = document.querySelectorAll(`.animation`); 

function mostrarScroll() {
    let scrollTop = document.scrollingElement.scrollTop;
    for(var i = 0; i < animation.length; i++){
        let alturaAnimation = animation[i].offsetTop;
        if(alturaAnimation -500 < scrollTop){
          animation[i].style.opacity = 1;
          animation[i].classList.add(`mostrarArriba`);
        }
    }
}

window.addEventListener(`scroll`, mostrarScroll);