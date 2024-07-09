$(document).ready(function(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        $('#cart-count').text(cart.length);
    }

    function addToCart(productId) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    $('.add-to-cart').click(function(){
        let productId = $(this).data('product-id');
        addToCart(productId);
    });

    updateCartCount();

});
