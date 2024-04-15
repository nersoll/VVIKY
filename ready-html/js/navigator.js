
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
 
function fixNav() {
    if(window.scrollY > window.innerHeight) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
