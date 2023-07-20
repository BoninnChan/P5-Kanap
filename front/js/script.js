// Emplacement sur la page d'accueil, dans la section avec l'id items //
const sectionItems = document.querySelector('#items');
// On récupère toutes les données de l'api //
fetch("http://localhost:3000/api/products")
  .then(reponse => reponse.json())
  .then(function (data) {
    console.log(data)
    for(product in data) {
        sectionItems.innerHTML += `<a href="./product.html?id=42">
        <article>
          <img src="${data[product].imageUrl}" alt="${data[product].altTxt}">
          <h3 class="productName">${data[product].name}</h3>
          <p class="productDescription">${data[product].description}</p>
        </article>
      </a>`
    }
  })