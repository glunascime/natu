let cartItems = [];

function addToCart(shopButton) {

    let productId = shopButton.id;

    let product = {
        "name": document.getElementById(productId+"Name").innerText,
        "price": parseInt(document.getElementById(productId+"Price").innerText.replace("R$", ""))
    }

    cartItems.push(product);
    document.getElementById("itemCounter").innerHTML = cartItems.length;
     
 
    let emptyBag = document.getElementById("emptyBag");
    let fullBag = document.getElementById("fullBag");

    if (cartItems.length > 0) {
        emptyBag.classList.add("hide");
        fullBag.classList.remove("hide");
    } else { 
        emptyBag.classList.remove("hide");
        fullBag.classList.add("hide");
    }


    console.log(cartItems);
}

