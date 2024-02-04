document.addEventListener('DOMContentLoaded', function() {
    const addToWishlistButtons = document.querySelectorAll('.addToWishlist');

    
    let wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];

    addToWishlistButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.parentElement.getAttribute('data-product-id');
            if (!wishlist.includes(productId)) {
                wishlist.push(productId);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                alert('Product added to wishlist!');
            }
        });
    });

    
    if (document.getElementById('wishlist')) {
        displayWishlistItems();
    }
});

function displayWishlistItems() {
    let wishlist = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];
    const wishlistContainer = document.getElementById('wishlist');

    wishlist.forEach(productId => {
        
        const productElement = document.createElement('div');
        productElement.textContent = `Product ID: ${productId}`;
        wishlistContainer.appendChild(productElement);
    });
}

document.querySelectorAll('.removeFromWishlist').forEach(button => {
    button.addEventListener('click', function() {
        const productIndex = this.getAttribute('data-index');
        wishlist.splice(productIndex, 1); 
        localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
        displayWishlistItems(); 
    });
});

