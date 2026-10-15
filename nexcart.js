const cartButtons = document.querySelectorAll('.cart-btn');
const cartCount = document.getElementById('cart-count');
let count = 0;

cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('added')) {
            button.classList.add('added');
            button.textContent = 'Added ✓';
            count += 1;
            cartCount.textContent = count;
        } else {
            button.classList.remove('added');
            button.textContent = 'Add to Cart';
            count = Math.max(0, count - 1);
            cartCount.textContent = count;
        }
    });
});