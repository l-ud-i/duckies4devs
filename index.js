// cart

let cartBtn = document.getElementById("btnCart");
cartBtn.addEventListener('click', addToCart)

let cartNb = document.getElementById("cartNb");
// console.log(cartNb);

let sumCart = 0;

function addToCart(event) {
    cartNb.textContent = sumCart++;
}