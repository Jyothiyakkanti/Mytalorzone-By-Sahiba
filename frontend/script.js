// DOM Elements
const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('button');
const categorySelect = document.querySelector('select');
const cartIcon = document.querySelector('.fa-cart-plus');
const signInLink = document.querySelector('.link[href="signin.html"]');
const cartLink = document.querySelector('.link[href="cart.html"]');

// Mock Data (For demonstration purposes, you can replace with real data)
const products = [
    { name: "Product 1", price: 10.99, image: "product1.jpg" },
    { name: "Product 2", price: 25.49, image: "product.jpg" },
    { name: "Product 3", price: 30.00, image: "product3.jpg" },
    { name: "Product 4", price: 24.00, image: "product4.jpg" },
    { name: "Product 5", price: 22.00, image: "product5.jpg" },
    { name: "Product 6", price: 13.00, image: "product6.webp" },
];

// Function to filter products based on search input and category
function filterProducts() {
    const query = searchInput.value.toLowerCase();
    const category = categorySelect.value;
    
    const filteredProducts = products.filter(product => {
        const matchesQuery = product.name.toLowerCase().includes(query);
        const matchesCategory = category === "All" || product.name.toLowerCase().includes(category.toLowerCase());
        return matchesQuery && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Function to display products
function displayProducts(productsToDisplay) {
    const productSection = document.querySelector('.product-section');
    productSection.innerHTML = ''; // Clear previous products

    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productSection.appendChild(productElement);
    });
}

// Event Listener for search button
searchButton.addEventListener('click', filterProducts);

// Event Listener for enter key in search input
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        filterProducts();
    }
});

// Event Listener for category change
categorySelect.addEventListener('change', filterProducts);

// Cart and Sign In Actions
cartIcon.addEventListener('click', () => {
    alert('Redirecting to the Cart Page...');
    // Redirect to the cart page
    window.location.href = "cart.html";
});

signInLink.addEventListener('click', () => {
    alert('Redirecting to the Sign In Page...');
    // Redirect to the sign-in page
    window.location.href = "signin.html";
});

// Initial Product Display
window.addEventListener('load', () => {
    displayProducts(products);
});
