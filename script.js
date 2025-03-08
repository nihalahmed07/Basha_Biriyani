document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:n.nihalahmed1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
    window.location.href = mailtoLink; // Opens email app
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