const btn = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const topBtn = document.querySelector('.fab')

btn.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav')
    btn.classList.toggle('toggle')

})

topBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
})