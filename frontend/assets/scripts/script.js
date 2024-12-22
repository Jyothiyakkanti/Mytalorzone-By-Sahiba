// Fetch product data from the backend and display it
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
          `;
          productList.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  });
  