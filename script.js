// Product Quantity Update
const tshirtQuantityInput = document.getElementById('tshirt-quantity');
const pencilCaseQuantityInput = document.getElementById('pencil-case-quantity');

tshirtQuantityInput.addEventListener('change', updateQuantity);
pencilCaseQuantityInput.addEventListener('change', updateQuantity);

function updateQuantity(event) {
  const quantity = event.target.value;
  // Perform quantity update logic here
}

// Coupon Code
const couponInput = document.getElementById('coupon-input');
const applyCouponButton = document.getElementById('apply-coupon-button');

applyCouponButton.addEventListener('click', applyCoupon);

function applyCoupon() {
  const couponCode = couponInput.value;
  // Perform coupon code logic here
}

// Expiration Countdown
const countdownElement = document.getElementById('countdown');

// Set the expiration date (example: Father's Day)
const expirationDate = new Date('2023-06-18T23:59:59');

function updateCountdown() {
  const currentDate = new Date();
  const timeRemaining = expirationDate - currentDate;

  // Perform countdown update logic here
}

// Call updateCountdown every second (1000 milliseconds)
setInterval(updateCountdown, 1000);
