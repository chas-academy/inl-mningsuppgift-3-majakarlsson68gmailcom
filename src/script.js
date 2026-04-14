const inputElementName = document.getElementById("productInput");
const inputElementPrice = document.getElementById("priceInput");
const button = document.getElementById("addButton");
const cartList = document.getElementById("cartList");


let cartItems = [];


function getCartItem(){
    productName = inputElementName.value;
    price = Number(inputElementPrice.value);
    let quantity = 1;
    let item = {productName, price, quantity}
    
    let existingItem = cartItems.find((element) => element.productName  === productName);
    if (existingItem){
        existingItem.quantity += 1;
    } else {
        cartItems.push(item);
    }
    inputElementName.value="";
    inputElementPrice.value="";
}



button.addEventListener("click", () => {
    getCartItem();
    displayCartlist();
});




function displayCartlist(){
    let list = "";
    for (let product of cartItems) {
         list += `<li>${product.productName} ${product.price} ${product.quantity}</li>`;
    }
    cartList.innerHTML = list;
    }