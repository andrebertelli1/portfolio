function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 100 * i)
  });
}

const titulo = document.querySelector('.text');
typeWriter(titulo);


const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    }
  })
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 200));
}

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const toAbout = menuSection.querySelector(".to-about")
const toProjects = menuSection.querySelector(".to-projects")
const toSkills = menuSection.querySelector(".to-skills")

toAbout.addEventListener("click", () => {
  document.body.style.overflow = "initial"
  menuSection.classList.remove("on")
})

toProjects.addEventListener("click", () => {
  document.body.style.overflow = "initial"
  menuSection.classList.remove("on")
})

toSkills.addEventListener("click", () => {
  document.body.style.overflow = "initial"
  menuSection.classList.remove("on")
})

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial"

  menuSection.classList.toggle("on", show)
  show = !show;
})

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})
