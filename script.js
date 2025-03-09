//Contact Form

document.getElementById("contactForm").addEventListener("submit", function(e){
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

//Sends to Whatsapp

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

function openLightbox(img) {
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox').classList.add('active');
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}


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
        if (category === filter) {
         card.style.display = 'block';
        } else {
         card.style.display = 'none';
        }
       }
      });
     });
    });
   });
