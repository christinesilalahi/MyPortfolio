const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

function highlightNavLink(){
    const helloSection = document.getElementById('Hello');
    const helloLink = document.querySelector('.nav-link[href="#Hello"]');

    const sectionTop = helloSection.getBoundingClientRect().top;
    const sectionHeight = helloSection.offsetHeight;

    if(sectionTop >= 0 && sectionTop < sectionHeight){
        helloLink.classList.add('active');
    } else {
        helloLink.classList.remove('active');
    }
}

window.addEventListener('scroll', highlightNavLink);