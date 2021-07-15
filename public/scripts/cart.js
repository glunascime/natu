let cartItems = [];

function cartOnLoad() {
    let openCart = document.getElementById('emptyBag');
    let openCartFull = document.getElementById('fullBag');
    let closeCart = document.getElementById('exitCart');
    let cartContent = document.getElementById('cart');
    let shopButtons = document.getElementsByClassName('shop-button');
        
    openCart.addEventListener("click", () => {
        cartContent.classList.remove("hide");
    });

    openCartFull.addEventListener("click", () => {
        cartContent.classList.remove("hide");
    });

    closeCart.addEventListener("click", () => {
        cartContent.classList.add("hide");
    });

    console.log(shopButtons);
    Array.from(shopButtons).forEach(button => {
        
        button.addEventListener("click", () => {
            cartContent.classList.remove("hide");
        });
    });
}

function inc(amount) {
    let productAmount = document.getElementById('amountInfo');
    productAmount.value = parseInt(productAmount.value) + 1;
  }
  
  function dec(amount) {
    let productAmount = document.getElementById('amountInfo');
      if (parseInt(productAmount.value) > 1) {
        productAmount.value = parseInt(productAmount.value) - 1;
    }
  }


function inc(cartAmount) {
    let productCartAmount = document.getElementById('amountItem');
    productCartAmount.value = parseInt(productCartAmount.value) + 1;
  }
  
  function dec(cartAmount) {
    let productCartAmount = document.getElementById('amountItem');
      if (parseInt(productCartAmount.value) > 1) {
        productCartAmount.value = parseInt(productCartAmount.value) - 1;
    }
  }


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

