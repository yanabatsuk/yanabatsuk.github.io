document.addEventListener("DOMContentLoaded", () => {
    // Client info. to dynamically load
    const clientName = "Ethan Orange";
    const clientCompany = "Ethanphotojuice";
    const clientEmail = "ethanorange@gmail";
    const clientPhone = "1+ (***) ***-****";


    // contact info grabber
    const contactSection = document.querySelector("#contact-info");

    if (contactSection) {
        contactSection.innerHTML += `
        <p><strong>${clientName}</strong><br>${clientCompany}<br>
        Email: <a href="mailto:${clientEmail}">${clientEmail}</a><br>
        Phone: ${clientPhone}</p>`;
    }

    // background images for cards, on packages page
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

    // contact button
    const contactBtn = document.querySelector('#contact-button');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    }


    // slideshow with interactivity aspect
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3750); 
    showSlide(currentSlide);
});