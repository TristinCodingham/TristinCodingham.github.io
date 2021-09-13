const navUl = document.getElementById("nav-ul");
const button = document.getElementById("nav-hamburger");

const toggleNav = () => {
    navUl.classList.toggle("toggle-nav");
}

button.onclick = toggleNav;