const menuButton = document.querySelector('.menu');
const showMenu = document.querySelector('#menu-products');
const close = document.querySelector('#menu-products button');

menuButton.addEventListener("click", () => {
    showMenu.classList.remove("hide")
});

close.addEventListener("click", () => {
    showMenu.classList.add("hide")
});
