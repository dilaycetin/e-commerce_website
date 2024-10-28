const products = {
    featured: [
        { name: "Women's Grey Sweatshirt", price: 50, image: 'product1.avif', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product2.jpg' },
        { name: 'Brown Bag', price: 50, image: 'product3.jpg', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product4.jpg'},
        { name: 'Brown Bag', price: 50, image: 'product5.jpg', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product6.jpg' },
        { name: "Women's Grey Sweatshirt", price: 50, image: 'product1.avif', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product2.jpg' }
    ],
    mostViewed: [
        { name: 'Brown Bag', price: 50, image: 'product3.jpg', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product4.jpg' },
        { name: 'Brown Bag', price: 50, image: 'product5.jpg', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product6.jpg' },
        { name: "Women's Grey Sweatshirt", price: 50, image: 'product1.avif', sale: 25 },
        { name: "Women's Grey Sweatshirt", price: 50, image: 'product1.avif' },
        { name: 'Brown Bag', price: 50, image: 'product2.jpg', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product2.jpg' }
    ],
    new: [
        { name: 'Brown Bag', price: 50, image: 'product2.jpg', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product4.jpg' },
        { name: "Women's Grey Sweatshirt", price: 50, image: 'product1.avif', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product2.jpg' },
        { name: "Women's Grey Sweatshirt", price: 50, image: 'product1.avif', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product3.jpg'},
        { name: 'Brown Bag', price: 50, image: 'product5.jpg', sale: 25 },
        { name: 'Brown Bag', price: 50, image: 'product6.jpg'}
    ]
};

function displayProducts(category) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = ''; // Clear existing products

    products[category].forEach(product => {
        const productHTML = `
            <div class="col-4">
                <div class="product-container">
                    <img src="images/${product.image}" alt="${product.name}">
                    ${product.sale ? `<div class="sale-badge">-${product.sale}%</div>` : ''}
                </div>
                <h4 class="product-title">${product.name}</h4>
                <div class="price">
                    $${product.price}
                    ${product.sale ? `<span class="sale-text">-${product.sale}%</span>` : ''}
                </div>
            </div>
        `;
        productsGrid.innerHTML += productHTML;
    });
}

// Add click event listeners to navigation buttons
document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Display products for selected category
        displayProducts(this.dataset.category);
    });
});

// Initially display featured products
displayProducts('featured');