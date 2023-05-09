// cart

let cartBtn = document.getElementById("btnCart");
cartBtn.addEventListener('click', addToCart)

let cartNb = document.getElementById("cartNb");

let sumCart = 1;

function addToCart(event) {
    cartNb.textContent = sumCart++;
}