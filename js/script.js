const products = document.querySelector("#products a");
const menu = document.querySelector('.menu');
const popup = document.getElementsByClassName("popup")[0];

const popupHandler = () => {
    popup.classList.toggle("open");
}

products.addEventListener("click", popupHandler);
menu.addEventListener("click", popupHandler);
