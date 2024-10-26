document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Pesan berhasil dikirim. Terima kasih!');
            contactForm.reset(); // Bersihkan formulir setelah submit
        } else {
            alert('Mohon lengkapi semua kolom sebelum mengirim pesan.');
        }
    });
});
