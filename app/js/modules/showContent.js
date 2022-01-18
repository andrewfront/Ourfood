const showContent = () => {
    const showMenuBtn = document.querySelector('.gallery__btn')
    const firstContainer = document.querySelector('.gallery__container')
    const secondContainer = document.querySelectorAll('.second__container')
    showMenuBtn.addEventListener('click', (e) => {
        secondContainer.forEach(container => {
            container.classList.remove('hide__container')
            container.classList.add('showmenu')
            showMenuBtn.remove()
            firstContainer.style.paddingBottom = 10 + 'px'
        })
    })
}
export default showContent