const ul = document.querySelector("#apiCart");
const input = document.querySelector("#input");
const category = document.querySelectorAll("#category");
const URL = "https://fakestoreapi.com";

function renderProduct(products) {
  products.forEach((e, index, arr) => {
    const li = document.createElement("li");
    li.style.width = "260px";
    li.innerHTML = `
        <img  class="main__api-img" src="${e.image}" alt="list">
        <h3 class="main__product-name">${e.title.slice(0, 23)}</h3>
        <span class="main__span">
          <span>&#11088</span>
          <span>&#11088</span>
          <span>&#11088</span>
          <span>&#11088</span>
          <span>&#11088</span>
        </span>
        <div class="sum">
         <p class="main__price2">${Math.round((e.price / 100) * 76)}</p>
         <del class="main__price1">${e.price}</del>
         <p class="main__sale">24% Off</p>
        </div>
    `;
    ul.append(li);
  });
}

function getItemAll() {
  fetch(URL + "/" + "products")
    .then((e) => e.json())
    .then((li) => renderProduct(li));
}
getItemAll();
