const form = document.querySelector(".product-form form");
const inputText = form.querySelector("div:nth-child(1) #pName");
const inputPrice = form.querySelector("div:nth-child(2) #pPrice");
const inputDesc = form.querySelector("div:nth-child(3) #pDesc");
const inputFile = form.querySelector("div:nth-child(4) #pImg");
const updateBtn = form.querySelector(".button-set input[type='button']");
const submitBtn = form.querySelector(".button-set input[type='submit']");
const dataList = document.querySelector(".products #display-product");
const previewImg = document.querySelector(".product-form .image-preview");
const reader = new FileReader();
const STORAGE_KEY = "products";
const products = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function displayData(products) {
  dataList.innerHTML = "";
  products.forEach((product, index) => {
    dataList.innerHTML += `
    <div class="col-3">
      <div class="product-item">
        <div class="product-img">
          <img src="${product.image}" alt="" />
        </div>
        <h3>${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <p class="product-desc">${product.desc}</p>
        <div class="product-opps">
          <a href="javascript:void(0)" onclick="updateItem(${index})">Update</a>
          <a href="javascript:void(0)" onclick="deleteItem(${index})">Delete</a>
        </div>
      </div>
    </div>
    `;
  });
}

inputFile.addEventListener("change", () => {
  const image = inputFile.files[0];
  reader.readAsDataURL(image);
  reader.onload = () => {
    previewImg.innerHTML = `<img src="${reader.result}" alt="" />`;
  };
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = inputText.value;
  const productPrice = inputPrice.value;
  const productDesc = inputDesc.value;
  const productImg = reader.result;

  const product = {
    name: productName,
    price: productPrice,
    desc: productDesc,
    image: productImg,
  };
  products.push(product);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  displayData(products);

  inputText.value = "";
  inputPrice.value = "";
  inputDesc.value = "";
  inputFile.files[0] = {};
  previewImg.innerHTML = "No Image";
});

function updateItem(productIndex) {
  form.setAttribute("index", productIndex);
  updateBtn.style.display = "block";
  submitBtn.style.display = "none";

  const product = products.find((value, index) => {
    return index == productIndex;
  });
  inputText.value = product.name;
  inputPrice.value = product.price;
  inputDesc.value = product.desc;
  previewImg.innerHTML = `<img src="${product.image}" alt="" />`;
}

function deleteItem(index) {
  products.splice(index, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  displayData(products);
}

updateBtn.addEventListener("click", (e) => {
  const index = form.getAttribute("index");
  const productName = inputText.value;
  const productPrice = inputPrice.value;
  const productDesc = inputDesc.value;
  const productImg = reader.result;

  // update data
  products[index].name = productName || products[index].name;
  products[index].price = productPrice || products[index].price;
  products[index].desc = productDesc || products[index].desc;
  products[index].image = reader.result || products[index].image;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  displayData(products);

  inputText.value = "";
  inputPrice.value = "";
  inputDesc.value = "";
  previewImg.innerHTML = "No Image";

  updateBtn.style.display = "none";
  submitBtn.style.display = "block";
});

displayData(products);
