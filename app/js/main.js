//hamburger menu

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})


//arrivals slider



//search form
const searchBtn = document.querySelector('.search-form__btn');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    searchInput.classList.toggle('active');
})