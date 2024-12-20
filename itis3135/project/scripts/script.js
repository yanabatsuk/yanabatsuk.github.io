document.addEventListener("DOMContentLoaded", () => {
    // test to check it works
    console.log("Website Loaded");

    // background images for cards, on packages page
    const backgroundImages = [
        'images/all-in-package.jpeg',
        'images/base-package.jpeg',
        'images/say-yes-package.jpeg',
        'images/single-portrait.jpeg'
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


    // **Carousel Navigation**
    const carousel = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const totalCards = document.querySelectorAll('.card').length; // total number of cards
    
    currentIndex = 0; // start at the first card

    // Function to update carousel position
    function updateCarousel() {
        const cardWidth = document.querySelector('.card').offsetWidth + 30; // 30px is the margin between cards
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`; // move carousel to current index
    }

    // Show next card (go right)
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first card
        }
        updateCarousel();
    });

    // Show previous card (go left)
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - 1; // Loop back to the last card
        }
        updateCarousel();
    });

    // Initial carousel position
    updateCarousel();



    /**  adding interactive element PART 4*/

});




