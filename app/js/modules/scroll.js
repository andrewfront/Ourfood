const scroll = () => {
    const headerLinks = document.querySelectorAll('.header__link')
    const headerNav = document.querySelector('.header__nav')
    const menuIcon = document.querySelector('.menu-icon')
    const menuLinks = document.querySelectorAll('[data-scroll]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', menuLinkClick)
        })
    }
    const headerLogo = document.querySelectorAll('.header__logo')
    headerLogo.forEach(logo => {
        logo.addEventListener('click', (e) => {
            headerNav.classList.remove('burger-active')
            menuIcon.classList.remove('clicked')
            document.body.style.overflow = ''
            e.preventDefault()
            window.scrollTo({
                top: (0, 0),
                behavior: 'smooth'
            })
        })
    })
    function menuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
            const goToBlock = document.querySelector(menuLink.dataset.scroll)
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset
            window.scrollTo({
                top: goToBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerNav.classList.remove('burger-active')
            document.body.style.overflow = ''
        })
    })
}
export default scroll