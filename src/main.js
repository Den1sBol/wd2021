let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: "Конструктор Lego",
        tag:"lego",
        price:100,
        inCart:0 
    },
    {
        name: "Машинка",
        tag:"car",
        price:50,
        inCart:0 
    },
    {
        name: "Плюшовий ведмідь",
        tag:"teddy",
        price:150,
        inCart:0 
    },
    {
        name: "Армійський набір",
        tag:"army",
        price:200,
        inCart:0 
    },
    {
        name: "Кухня",
        tag:"kitchen",
        price:500,
        inCart:0 
    }
];

for (let i=0; i<carts.length;i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    } )
}

function onLoadNumbers(){
    let productNumbers = sessionStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = sessionStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if( productNumbers) {
        sessionStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        sessionStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);

}

function setItems(product){
    let cartItems = sessionStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined ){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]:product
        }

    }
   
    sessionStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    console.log("price", product.price);
    let cartCost = sessionStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        sessionStorage.setItem("totalCost", cartCost + product.price);
    } else {
        sessionStorage.setItem("totalCost", product.price);
    }    
}

function displayCart(){
    let cartItems = sessionStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = sessionStorage.getItem('totalCost');
    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="products">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
            <span>${item.inCart}</span>
            </div>
            <div class="total">${item.inCart * item.price} UAH</div>

            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Загальна ціна:</h4>
                <h4 class="basketTotal">${cartCost} UAH</h4>
            </div>
            `


    }
}
document.querySelector(".purchase").onclick=function(){
    alert("Дякуємо за покупку! Очікуйте товар у поштовому відділенні");
    sessionStorage.clear();

}


onLoadNumbers();
displayCart();