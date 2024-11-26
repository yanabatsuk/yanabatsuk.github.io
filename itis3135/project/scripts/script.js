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


    // **Carousel Navigation with Infinite Loop**
    const carousel = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let totalCards = document.querySelectorAll('.card').length; // total number of cards
    currentIndex = 0; // start at the first card

    // Clone the first and last cards to create infinite loop
    const firstCard = document.querySelector('.carousel-inner .card:first-child');
    const lastCard = document.querySelector('.carousel-inner .card:last-child');
    
    const cloneFirstCard = firstCard.cloneNode(true);
    const cloneLastCard = lastCard.cloneNode(true);

    // Append cloned cards to make the carousel infinite
    carousel.appendChild(cloneFirstCard);  // Clone the first card and append it to the end
    carousel.insertBefore(cloneLastCard, firstCard);  // Clone the last card and prepend it to the start

    // Update totalCards because we now have extra cloned cards
    totalCards = totalCards + 2; // Plus two because of the clones

    // Function to update carousel position
    function updateCarousel() {
        const cardWidth = document.querySelector('.card').offsetWidth + 30; // 30px is the margin between cards
        carousel.style.transition = "transform 0.3s ease"; // smooth transition
        carousel.style.transform = `translateX(-${(currentIndex + 1) * cardWidth}px)`; // move carousel to current index
    }

    // Show next card (go right)
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
        } else {
            currentIndex = 1; // Jump to the first "real" card after the last one
            setTimeout(() => {
                carousel.style.transition = "none"; // Disable transition for instant jump
                updateCarousel();
            }, 300);  // Allow time for the last transition to complete
        }
        updateCarousel();
    });

    // Show previous card (go left)
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 2; // Jump to the last "real" card before the cloned last card
            setTimeout(() => {
                carousel.style.transition = "none"; // Disable transition for instant jump
                updateCarousel();
            }, 300);  // Allow time for the last transition to complete
        }
        updateCarousel();
    });

    // Initial carousel position
    updateCarousel();
    
});