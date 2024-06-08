//hamburger menu

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})