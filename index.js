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
   }  
 
