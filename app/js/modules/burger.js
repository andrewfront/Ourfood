const burger = () => {
const burgerBtn = document.querySelector('.menu-icon')
const asideBar = document.querySelector('.header__nav')
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
}
export default burger