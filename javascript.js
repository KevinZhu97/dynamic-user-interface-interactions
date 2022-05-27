//target button
const dropdownButton = document.querySelector('.dropdown-menu-button')
const dropdownMenuContainer = document.querySelector('.dropdown-menu-container')
dropdownButton.addEventListener('click', () => {
    if (dropdownMenuContainer.classList.contains('active')) {
        dropdownMenuContainer.classList.remove('active')
    } else {
        dropdownMenuContainer.classList.add('active')
    }
})

//hover button
const dropdownButton2 = document.querySelector('.dropdown-menu-button2')
const dropdownMenuContainer2 = document.querySelector('.dropdown-menu-container2')
const dropdownMenu2 = document.querySelector('.dropdown-menu2')
const hoverMenu = document.querySelector('.hover-menu')

dropdownButton2.addEventListener('mouseover', () => {
    dropdownMenuContainer2.classList.add('active')
})

dropdownMenuContainer2.addEventListener('mouseleave', () => {
    dropdownMenuContainer2.classList.remove('active')
})


//prev and next buttons
const nextSlideButton = document.querySelector('.next')
const prevSlideButton = document.querySelector('.prev')

const slides = document.getElementsByClassName('slides')
let slideIndex = 0;

function ShowSlide(n) {
    if (n > slides.length - 1) {slideIndex = 0; n = 0};
    if (n < 0) {slideIndex = 3; n = 3} 
    // if (n < 1) {n = slides.length - 1};
    slides[n].style.display = "block"
    for (let i = 0; i < slides.length; i++) {
        if (i != n) {
            slides[i].style.display = "none";
        }
    }
    }

function NextSlide() {
    console.log(slideIndex)
    slideIndex += 1
    ShowSlide(slideIndex)
}

function PreviousSlide() {
    slideIndex -= 1
    ShowSlide(slideIndex)
}

ShowSlide(slideIndex)
nextSlideButton.addEventListener('click', NextSlide);
prevSlideButton.addEventListener('click', PreviousSlide);


//Make it to only show the slideindex number, all else display: none;