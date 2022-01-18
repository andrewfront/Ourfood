const counter = () => {
    const counterContainer = document.querySelector('.works__items')
    const counters = document.querySelectorAll('.counter__number')
    let a = 0
    if (counterContainer && counters) {
        window.addEventListener('scroll', () => {
            const containerElementToViewport = counterContainer.getBoundingClientRect().top
            const {scrollTop, clientHeight} = document.documentElement
            if (a == 0 && scrollTop > (scrollTop + containerElementToViewport).toFixed() - clientHeight * 0.7) {
            counters.forEach(counter => {
                counter.innerText = '0'
                function updateCounter() {
                    const target = +counter.getAttribute('data-target')
                    const c = +counter.innerText
                    const increment = target / 200
                    if (c < target) {
                        counter.innerText = `${Math.ceil(c + increment)}`
                        setTimeout(updateCounter, 15)
                    } else {
                        counter.innerText = target
                    }
                }
                updateCounter()
                a = 1
            })
        }
            })
    }
}
export default counter