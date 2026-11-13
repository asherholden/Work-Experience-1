const dropdownBtn = document.querySelector('.dropdown__btn')
const dropdownMenu = document.querySelector('.dropdown__menu')

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active')

})