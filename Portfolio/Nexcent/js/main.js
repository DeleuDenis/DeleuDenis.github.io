const burgerBtn = document.querySelector('.header__button__mobile');
const burgerMenu = document.querySelector('.mobile-menu');
const svgBurger = document.getElementById('burger')

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});