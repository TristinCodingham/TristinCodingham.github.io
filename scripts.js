const navUl = document.getElementById("nav-ul");
const button = document.getElementById("nav-hamburger");
const date = document.getElementById("powered-by-date");

const toggleNav = () => {
    navUl.classList.toggle("toggle-nav");
}

const closeNav = () => {
    if(isOpen) {
        navUl.classList.remove("toggle-nav");
    }
}

document.getElementById("logo-link").focus();

//window.addEventListener('click', closeNav);
button.addEventListener('click', toggleNav);

date.innerText = new Date().getFullYear();