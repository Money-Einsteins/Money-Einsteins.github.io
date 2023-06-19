// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});

// JavaScript code for all pages

// Retrieve cart items from local storage and display them
document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${item.productImage}" alt="Product Image">
      <div class="product-info">
        <h3 class="product-title">${item.productTitle}</h3>
        <p class="product-price">${item.productPrice}</p>
      </div>
      <button class="remove-from-cart">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
  });
});

// Add to cart functionality
document.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart')) {
    const productDetails = event.target.closest('.product-details');
    const productImage = productDetails.querySelector('.product-image').src;
    const productTitle = productDetails.querySelector('.product-title').textContent;
    const productPrice = productDetails.querySelector('.product-price').textContent;

    const item = { productImage, productTitle, productPrice };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const cartItemsContainer = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img src="${productImage}" alt="Product Image">
      <div class="product-info">
        <h3 class="product-title">${productTitle}</h3>
        <p class="product-price">${productPrice}</p>
      </div>
      <button class="remove-from-cart">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItem);
  }
});

// Remove from cart functionality
document.addEventListener('click', event => {
  if (event.target.classList.contains('remove-from-cart')) {
    const cartItem = event.target.closest('.cart-item');
    const productTitle = cartItem.querySelector('.product-title').textContent;

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCartItems = cartItems.filter(item => item.productTitle !== productTitle);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    cartItem.remove();
  }
});
