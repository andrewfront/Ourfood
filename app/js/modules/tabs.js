const tabs = () => {
const tabs = document.querySelectorAll('.header__btn-item')
const tabsContent = document.querySelectorAll('.header__tabcontent')
const tabsParent = document.querySelector('.header__tabitems')
function hideTabsContent() {
    tabsContent.forEach(item => {
        item.classList.add('hide')
        item.classList.remove('show')
    })
    tabs.forEach(item => {
        item.classList.remove('header__btn-item-active')
    })
}
function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('header__btn-item-active')
}
hideTabsContent()
showTabsContent()
tabsParent.addEventListener('click', (e) => {
    const target = e.target
    if (target && target.classList.contains('header__btn-item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabsContent()
                showTabsContent(i)
            }
        })
    }
})
}
export default tabs