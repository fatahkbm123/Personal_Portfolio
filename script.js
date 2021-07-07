const navbar = document.querySelector('#navbar')
const navbarA = document.querySelectorAll('#navbar a')
const section = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
  let currentSection = ''

  section.forEach((s) => {
    const sectionTop = s.offsetTop
    const sectionHeight = s.clientHeight

    if (pageYOffset >= sectionTop - sectionHeight / 30) {
      currentSection = s.getAttribute('id')
    }
  })

  navbarA.forEach((a) => {
    a.classList.remove('active')
    if (a.classList.contains(currentSection)) {
      a.classList.add('active')
    }
  })

  // Navbar background animation
  if (pageYOffset > 0) {
    navbar.classList.add('active')
  } else {
    navbar.classList.remove('active')
  }
})
