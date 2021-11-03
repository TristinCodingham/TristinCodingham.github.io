const navUl = document.getElementById("nav-ul");
const button = document.getElementById("nav-hamburger");
const date = document.getElementById("powered-by-date");

var isOpen = false;
const maskTTBAnimation = [
    {transform: 'translateY(50px)'}
];
const maskTTBOptions = {
    duration: 500,
    easing: 'ease-in-out',
    fill: 'forwards'
}

const toggleNav = () => {
    if(isOpen) {
        navUl.getAnimations().forEach(animation => {
            animation.reverse();
        });
        isOpen = false;
        return;
    }
    navUl.animate(maskTTBAnimation, maskTTBOptions);
    isOpen = isOpen ? false : true;
    console.log(isOpen);

}

button.addEventListener('click', toggleNav);

date.innerText = new Date().getFullYear();