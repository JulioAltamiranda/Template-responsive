//Global Variables
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
const slide = document.querySelectorAll('.slide')
const slideContainer = document.querySelector('.slide-container')
const leftIcons = document.querySelector('.left-icons')
const bottomNav = document.querySelector('.bottom-nav')
const menuContainer = document.querySelector('.menu-container')
const btnBar = document.querySelector('.btn-bar')
let index = 0;


/* ================ ADD EVENT LISTENERS ================ */
btnBar.addEventListener('click', menuToggle)

btnNext.addEventListener('click', nextSlides);
btnPrev.addEventListener('click', prevSlides);

/* ================ FUNCTIONS ================ */
function hiddenSlides() {
    slide.forEach((element) => {
        element.classList.remove('active')
    })
}
function menuToggle() {
    slideContainer.classList.toggle('hidden')
    menuContainer.classList.toggle('hidden')
    leftIcons.classList.toggle('hidden')
    bottomNav.classList.toggle('hidden')
    this.classList.toggle('active')
}
function prevSlides() {
    if (index <= 0) {
        index = slide.length - 1;
    } else {
        index -= 1;
    }
    hiddenSlides()
    slide[index].classList.add('active')
}
function nextSlides() {
    if (index + 1 >= slide.length) {
        index = 0;
    } else {
        index += 1;
    }
    hiddenSlides()
    slide[index].classList.add('active')
}