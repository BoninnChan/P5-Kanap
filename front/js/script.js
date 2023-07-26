// Emplacement sur la page d'accueil, dans la section avec l'id items //
const sectionItems = document.querySelector('#items');
// On récupère toutes les données de l'api //
fetch("http://localhost:3000/api/products")
  .then(reponse => reponse.json())
  .then(data => {
    for (const products of data){
      console.log(products);
 
      let listProducts = document.createElement('a');
      listProducts.setAttribute("href", `./product.html?id=${products._id}`);
      sectionItems.appendChild(listProducts);

      let articleElement = document.createElement('article');
      listProducts.appendChild(articleElement);

      let imageElement = document.createElement('img');
      imageElement.setAttribute("src", products.imageUrl);
      imageElement.setAttribute("alt", products.altTxt);
      articleElement.appendChild(imageElement);

      let nomElement = document.createElement('h3');
      nomElement.setAttribute("class","productName");
      nomElement.innerText = products.name;
      articleElement.appendChild(nomElement);
      
      let categorieElement = document.createElement('p');
      categorieElement.setAttribute("class","productDescription");
      categorieElement.innerText = products.description;
      articleElement.appendChild(categorieElement);
    }
})
.catch(err => {
    alert(`Une erreur s'est produite et ne permet pas d'afficher les produits de notre catalogue.`);
    console.log("Erreur Fetch script.js", err);
   })