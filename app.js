let products = [];
let shoppingCart = [];

getProducts();

async function getProducts() {
  try {
    let response = await fetch("./products.json");
    products = await response.json();
    console.log(products);
    renderProductsToUI();
  } catch (error) {}
}

function renderProductsToUI() {
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("article");
    product.classList.add("product");
    product.setAttribute("product-id", i);

    product.innerHTML = `
            <img src="img/${products[i].img}"/>
            <h3>${products[i].name}</h3>
            <h4>${products[i].pricePerHekto} kr/hg</h4>
            <button>Add to cart</button>
    `;

    product.addEventListener("click", addToCart);

    let productsContainer = document.querySelector(".products-container");
    productsContainer.appendChild(product);
  }
}

function addToCart() {
  let productId = this.getAttribute("product-id");
  let chosenProduct = products[productId];

  shoppingCart.push(chosenProduct);

  localStorage.setItem("product", JSON.stringify(shoppingCart));

  console.log("Card has been clicked");
  console.log(window);
  console.log(shoppingCart);
}
