// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
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
