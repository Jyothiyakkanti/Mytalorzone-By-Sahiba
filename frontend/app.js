// API URL to fetch products from the backend (adjust as needed)
const API_URL = 'http://localhost:5000/api/products';

// Function to fetch and display products
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        
        // Get the product list container
        const productList = document.getElementById('product-list');
        
        // Clear previous content
        productList.innerHTML = '';
        
        // Loop through the products and display them
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
            `;
            
            productList.appendChild(productItem);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Fetch products when the page loads
window.onload = fetchProducts;
