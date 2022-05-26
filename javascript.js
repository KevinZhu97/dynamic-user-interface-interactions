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
dropdownButton2.addEventListener('mouseover', () => {
    dropdownMenuContainer2.classList.add('active')
})
dropdownButton2.addEventListener('mouseout', () => {
    dropdownMenuContainer2.classList.remove('active')
})
