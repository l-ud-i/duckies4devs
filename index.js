// cart

let cartBtn = document.getElementById("btnCart");
cartBtn.addEventListener('click', addToCart);

let cartHeader = document.getElementById("cartHeader");

let cartNb = document.getElementById("cartNb");

let sumCart = cartNb.value;

function addToCart(event) {
    cartHeader.textContent = sumCart++;
   }


// accordeons

let btnAvantages = document.getElementById("btnProductDescription");
btnAvantages.addEventListener('click', switchCLass);

let ulProductDescription = document.getElementById("removeUl")

function switchCLass(event) {
    if (ulProductDescription.classList.contains('remove')) {
        ulProductDescription.classList.remove('remove');
    }
    else {
        ulProductDescription.classList.add("remove");
    }  
}


// let btnCaracteristiques = document.getElementById("btnProductFeatures");
// btnCaracteristiques.addEventListener('click', changeCLass)

// let dtProductFeatures = document.getElementById("removeFeatures")
// console.log(dtProductFeatures);

// function changeCLass(event) {
//     dtProductFeatures.classList.toggle("remove");
// }

    
