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
  products.forEach((item) => {
    let product = document.createElement("article");
    let productsContainer = document.querySelector(".products-container");

    product.classList.add("product");

    product.innerHTML = `
      <img src="img/${item.img}"/>
      <h3>${item.name}</h3>
      <h4>${item.pricePerHekto} kr/hg</h4>
      <button id="${item.SerialNumber}">Add to cart</button>
   `;

    productsContainer.appendChild(product);
  });

  addToCart();
}

function addToCart() {
  let buyButton = document.querySelectorAll("button");

  buyButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      let serialNumber = e.target.id;
      let index = products.findIndex(
        (product) => product.SerialNumber === serialNumber
      );

      let chosenProduct = products[index];
      shoppingCart.push(chosenProduct);

      localStorage.setItem("product", JSON.stringify(shoppingCart));

      console.log(serialNumber);
      console.log(index);
      console.log(shoppingCart);
      console.log(window);
    });
  });
}
