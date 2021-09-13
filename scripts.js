const navUl = document.getElementById("nav-ul");
const button = document.getElementById("nav-hamburger");
let isOpen = false;

const toggleNav = () => {
    navUl.classList.toggle("toggle-nav");
    isOpen = true;
}

const closeNav = () => {
    if(isOpen) {
        navUl.classList.remove("toggle-nav");
    }
}

//window.addEventListener('click', closeNav);
button.addEventListener('click', toggleNav);
button.addEventListener('touchstart', toggleNav);