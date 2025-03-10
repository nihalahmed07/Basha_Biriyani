// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    fetch("https://script.google.com/macros/s/AKfycbxVjYHW3xx8qiZl38CVk2-orXgTkNYqlssH7TMFkIymUL1asFYrOlC6OClbYGTJSrvW/exec", {
        method: "POST",
        body: new FormData(this)
    })
    .then(response => response.text())
    .then(data => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
});

// Sends to WhatsApp
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
   
    // Capture form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
   
    // Format WhatsApp message
    var whatsappMessage = `📩 *New Contact Form Submission*%0A%0A👤 *Name:* ${name}%0A📧 *Email:* ${email}%0A📄 *Subject:* ${subject}%0A💬 *Message:* ${message}`;
   
    // WhatsApp API URL
    var whatsappURL = `https://wa.me/917010933659?text=${whatsappMessage}`;
   
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
   });

// Lightbox Functionality
function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Filter Menu Items
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.textContent.trim().toLowerCase();
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.getAttribute('data-category').toLowerCase();
                    card.style.display = category === filter ? 'block' : 'none';
                }
            });
        });
    });
});

// Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart


function addToCart(item) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1; // Increase quantity if item exists
    } else {
        item.quantity = 1; // Set initial quantity to 1
        cart.push(item); // Add new item to cart
    }
    
    saveCart(); // Save updated cart to local storage

    // Show toast notification
    showToast(`${item.name} has been added to your cart!`);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.style.display = 'block';
    toast.style.opacity = '1';

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 500); // Wait for fade out to finish
    }, 3000);
}
// Function to save cart to local storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    calculateTotal(); // Update total whenever the cart is saved
}

// Function to calculate total
function calculateTotal() {
    let total = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    document.getElementById('cart-total').innerText = total;
}

// Add event listeners to order buttons
document.querySelectorAll('.order-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const card = button.closest('.card');
        const itemName = card.querySelector('h3').innerText;
        const itemPrice = parseInt(card.querySelector('.text-orange-500').innerText.replace('PRICE: ₹', '').trim());
        const itemImage = card.querySelector('img').src; // Assuming there's an image in the card

        addToCart({ name: itemName, price: itemPrice, image: itemImage });
    });
});

// Function to go to cart
function goToCart() {
    window.location.href = 'cart.html'; // Ensure this matches the filename of your cart page
}
function goToTrackOrder() {
    window.location.href = 'track order.html'; // Redirect to track order page
}

// Initial calculation of total on page load
calculateTotal();