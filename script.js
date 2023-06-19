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

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productDetails = button.parentElement;
    const productImage = productDetails.querySelector('.product-image').src;
    const productTitle = productDetails.querySelector('.product-title').textContent;
    const productPrice = productDetails.querySelector('.product-price').textContent;

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
  });
});

// Open cart functionality
const viewCartButton = document.getElementById('view-cart');
const cartContainer = document.getElementById('cart-container');
const closeCartButton = document.getElementById('close-cart');

viewCartButton.addEventListener('click', () => {
  cartContainer.classList.add('open');
});

closeCartButton.addEventListener('click', () => {
  cartContainer.classList.remove('open');
});
