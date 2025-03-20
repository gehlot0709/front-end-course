// Select the necessary elements from the HTML
const form = document.querySelector(".products form"); // Form element for adding new products
const pName = document.querySelector("#pName"); // Input for product name
const pImg = document.querySelector("#pImg"); // Input for product image (file)
const pPrice = document.querySelector("#pPrice"); // Input for product price
const pDesc = document.querySelector("#pDest"); // Input for product description
const pList = document.querySelector("#product-list"); // Div to display the list of products

// Define a constant key to store data in the browser's local storage
const ITEM_KEY = "products";

// Load products from local storage if available, otherwise initialize an empty array
const products = JSON.parse(localStorage.getItem(ITEM_KEY)) || [];

// Function to display the list of products on the webpage
function listProducts(products) {
    pList.innerHTML = ""; // Clear the product list display
    products.forEach((product, index) => {
        // Add each product's details to the product list
        pList.innerHTML += `
      <div id="product-${index}">
        <h3>Name: ${product.name}</h3> <!-- Display product name -->
        <p>Price: $${product.price.toFixed(2)}</p> <!-- Display product price, formatted to 2 decimal places -->
        <div class="product-img">
          <img src="${product.img}" alt="Product Image"> <!-- Display product image -->
        </div>
        <p>Description: ${product.description}</p> <!-- Display product description -->
      </div>`;
    });
}

// Call the function to display any stored products on page load
listProducts(products);

// Add an event listener to the form for handling submissions
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page by default

    // Get and trim input values from the form
    let inputName = pName.value.trim(); // Get and clean product name input
    let inputPrice = parseFloat(pPrice.value.trim()); // Get and convert price input to a number
    let inputDesc = pDesc.value.trim(); // Get and clean description input
    let inputImg = pImg.files[0]; // Get the selected image file


    // Create a product object to store input values
    const product = {
        name: inputName,
        price: inputPrice,
        description: inputDesc,
    };

    // Use FileReader to read the selected image file as a Base64 string
    const reader = new FileReader();
    reader.readAsDataURL(inputImg); // Convert the image file to Base64
    reader.onload = () => {
        product.img = reader.result; // Save the Base64 image data to the product object
        products.push(product); // Add the new product to the product list
        localStorage.setItem(ITEM_KEY, JSON.stringify(products)); // Save the updated product list to local storage
        listProducts(products); // Refresh the displayed product list
    };

    // Reset the form inputs after the product is added
    form.reset();
});
