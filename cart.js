document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const name = productCard.getAttribute('data-name');
            const price = parseFloat(productCard.getAttribute('data-price'));

            cart.push({ name, price });
            cartCount.textContent = cart.length;
            alert(`${name} has been added to the cart!`);
        });
    });

    document.querySelector('.view-cart').addEventListener('click', function() {
        let cartDetails = cart.map(item => `${item.name} - ₦${item.price}`).join('\n');
        alert(cartDetails || 'Your cart is empty.');
    });
});