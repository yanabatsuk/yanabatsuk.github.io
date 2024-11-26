document.addEventListener("DOMContentLoaded", () => {
    // test to check it works
    console.log("Website Loaded");

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
        'images/all-in-package.jpeg',
        'images/base-package.jpeg',
        'images/say-yes-package.jpeg',
        'images/single-portrait.jpeg',
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


    // slideshow
    const slides = document.querySelectorAll('#slideshow .slide');
    let currentIndex = 0;

    function showNextSlide() {
        slides.forEach((slide, index) => {
            
            slide.style.opacity = index === currentIndex ? '1' : '0';
        });

        
        currentIndex = (currentIndex + 1) % slides.length;
    }

    setInterval(showNextSlide, 3750);


    // Grab carousel and buttons
    const carousel = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.card').length;
    
    // Show next card
    function showNextCard() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to first card
        }
        updateCarousel();
    }

    // Show previous card
    function showPrevCard() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 1; // Loop back to last card
        }
        updateCarousel();
    }

    // Update carousel position based on current index
    function updateCarousel() {
        const cardWidth = document.querySelector('.card').offsetWidth + 30; // 30px is the margin
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Event listeners for buttons
    prevButton.addEventListener('click', showPrevCard);
    nextButton.addEventListener('click', showNextCard);    
});