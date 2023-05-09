// cart

let cartBtn = document.getElementById("btnCart");
cartBtn.addEventListener('click', addToCart);

let cartHeader = document.getElementById("cartHeader");

let cartNb = document.getElementById("cartNb");

let sumCart = cartNb.value;

function addToCart(event) {
    cartHeader.textContent = sumCart++;
   }

cartBtn.addEventListener('click', updateBtn);
   
function updateBtn() {
    btnCart.textContent = "Déjà au panier";
    btnCart.disabled = true ;
    btnCart.classList.add("add-cta-disable");
   }  
 
//accordeons

let productDescription = document.getElementById("btnProductDescription");
let removeTxt = document.getElementById("removeUl");

productDescription.addEventListener('click', disableTxt);

function disableTxt(event) {
    removeTxt.classList.toggle('remove');
}

// let productFeatures = document.getElementById("btnProductFeatures");
// let removeTxtFeatures = document.getElementById("removeFeatures");

// productFeatures.addEventListener('click', disableTxt);

// function disableTxt(event) {
//     removeTxtFeatures.classList.toggle('remove');
// }