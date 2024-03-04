//NAVBAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll("li");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("no-scroll");
}

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

// SCROLL TO TOP BUTTON AND REVEAL ANIMATION
function handleScroll() {
    if (window.scrollY > 150) {
        nav.classList.add('sticky-nav')
    } else {
        nav.classList.remove('sticky-nav')
    }
}
window.addEventListener('scroll', handleScroll)

// TYPING ANIMATION
function initTypedText() {
    const option = {
        strings: [
            "Hi, I'm Festo Muwanguzi",
            "A Software Engineer",
            "A Full Stack Developer",
            "From Kampala",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
    }
    const typed = new Typed("#typed-text", option);
}

initTypedText()


// FILTER PROJECTS
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter button')
    const projectCards = document.querySelectorAll(".project-card")

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });

    function filterProjects(category) {
        projectCards.forEach(card => {
            const projectCategory = card.getAttribute('data-category')
            if (category === 'all' || projectCategory === category) {
                card.style.display = 'block'
            } else {
                card.style.display = "none"
            }
        })
    }
})


// PROJECTS MODAL
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const modalClose = document.querySelector('.modal-close')
const projectCards = document.querySelectorAll('.project-card')
const modalTitle = document.querySelector('.modal-title')
const modalDescription = document.querySelector('.modal-description')
const modalImage = document.querySelector('.modal-image')
const modalLink = document.querySelector('.modal-link')
const modalGithub = document.querySelector('.modal-github')
