const burger = () => {
const burgerBtn = document.querySelector('.menu-icon')
const asideBar = document.querySelector('.header__nav')
const navLinks = document.querySelectorAll('.header__link')
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('clicked')
    if (burgerBtn.classList.contains('clicked')) {
        asideBar.classList.add('burger-active')
        document.body.style.overflow = 'hidden'
    } else {
        asideBar.classList.remove('burger-active')
        document.body.style.overflow = ''
    }
})
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        asideBar.classList.remove('burger-active')
        burgerBtn.classList.remove('clicked')
    })
})
}
export default burger