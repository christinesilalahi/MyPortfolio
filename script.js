// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// Active Section Scroll Spy
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNavLink() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If at the bottom of the page, activate Contact (last section)
    if (scrollPosition + windowHeight >= documentHeight - 50) {
        navLinks.forEach(link => link.classList.remove("active"));
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
            const lastLink = document.querySelector(`.nav-link[href="#${lastSection.id}"]`);
            if (lastLink) lastLink.classList.add("active");
        }
        return;
    }

    // Otherwise, find which section is currently active
    let currentSectionId = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollPosition >= sectionTop) {
            currentSectionId = section.getAttribute("id");
        }
    });

    if (currentSectionId) {
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }
}

window.addEventListener("scroll", highlightNavLink);
window.addEventListener("load", highlightNavLink);

// Dynamic Typing Effect for Roles
const roles = [
    "Software Engineer",
    "Full Stack Developer",
];

const descElement = document.querySelector(".desc");
if (descElement) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            const nextText = currentRole.substring(0, charIndex - 1);
            descElement.innerHTML = nextText || "&nbsp;";
            charIndex--;
            typingSpeed = 50;
        } else {
            const nextText = currentRole.substring(0, charIndex + 1);
            descElement.innerHTML = nextText || "&nbsp;";
            charIndex++;
            typingSpeed = 90;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 1800; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400; // Pause before new word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Start typing after initial load
    setTimeout(typeEffect, 600);
}