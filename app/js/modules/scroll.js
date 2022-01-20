const scroll = () => {
    const menuLinks = document.querySelectorAll('[data-scroll]')
    if (menuLinks.length > 0) {
        menuLinks.forEach(link => {
            link.addEventListener('click', menuLinkClick)
        })
    }
    const headerLogo = document.querySelectorAll('.header__logo')
    headerLogo.forEach(logo => {
        logo.addEventListener('click', (e) => {
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
            const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
            window.scrollTo({
                top: goToBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}
export default scroll