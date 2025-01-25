document.addEventListener("DOMContentLoaded", () => {
  // Loading animation
  setTimeout(() => {
    document.querySelector(".loading-screen").style.display = "none"
  }, 1500)

  // Typed.js animation
  new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500,
  })

  // Scroll reveal animations
  const sections = document.querySelectorAll("section, #personal-photo")
  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  })

  sections.forEach((section) => {
    sectionObserver.observe(section)
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Parallax effect for animated background
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const background = document.querySelector(".animated-bg")
    background.style.transform = `translateY(${scrolled * 1}px)`
  })
})

