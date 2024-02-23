// Counter Up Animation 
const counterUp = window.counterUp.default

const callback = entries => {
  entries.forEach(entry => {
    const el = entry.target
    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      })
      el.classList.add('is-visible')
    }
  })
}

const IO = new IntersectionObserver(callback, { threshold: 1 })

let el = document.querySelector('.counter')
let al = document.querySelector('.counter1')
let sl = document.querySelector('.counter2')
let dl = document.querySelector('.counter3')
IO.observe(el)
IO.observe(al)
IO.observe(sl)
IO.observe(dl)


// Hamburger 
const toggleButton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('nav-content')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})