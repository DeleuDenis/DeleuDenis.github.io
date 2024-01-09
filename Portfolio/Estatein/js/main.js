// Banner

const bannerCloseBtn = document.querySelector(".banner-header__close");
const bannerBlock = document.querySelector(".banner-header");

bannerCloseBtn.addEventListener("click", function () {
  bannerBlock.classList.add("none");
});


const menu = document.querySelector(".mobile-menu");
const openMenuButton = document.querySelector(".main-header__mobile-menu");
const closeMenuButton = document.querySelector(".mobile-menu__mobile-menu");

openMenuButton.addEventListener("click", () => {
  menu.classList.remove("none");
  document.body.style.overflow = "hidden";
});

closeMenuButton.addEventListener("click", () => {
  menu.classList.add("none");
  document.body.style.overflow = "initial";
});