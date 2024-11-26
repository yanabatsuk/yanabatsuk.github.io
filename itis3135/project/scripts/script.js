document.addEventListener("DOMContentLoaded", () => {
    // Client info. to dynamically load
    const clientName = "Ethan Orange";
    const clientCompany = "Ethanphotojuice";
    const clientEmail = "ethanorange@gmail";
    const clientPhone = "1+ (***) ***-****";

    // Insert into footer or contact section
    const footerElement = document.querySelector("footer");
    const contactSection = document.querySelector("#contact-info");

    if (footerElement) {
        footerElement.innerHTML += `<p>Contact: ${clientName} | ${clientEmail} | ${clientPhone}</p>`;
    }

    if (contactSection) {
        contactSection.innerHTML += `
        <p><strong>${clientName}</strong><br>${clientCompany}<br>
        Email: <a href="mailto:${clientEmail}">${clientEmail}</a><br>
        Phone: ${clientPhone}</p>`;
    }

    const backgroundImages = [
        'images/background1.jpg',
        'images/background2.jpg',
        'images/background3.jpg',
        'images/background4.jpg',
        'images/background5.jpg'
    ];

    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        if (backgroundImages[index]) {
            card.style.backgroundImage = `url(${backgroundImages[index]})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        }
    });

    const contactBtn = document.querySelector('#contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.location.href = 'contact.html';  // Navigates to the contact page
        });
    }
});