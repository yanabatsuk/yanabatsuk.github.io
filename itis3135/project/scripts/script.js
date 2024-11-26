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
    

    // gallery page below

    // Define card data
    const cardData = [
        {
            title: "Wedding Gallery",
            image: "images/wedding.jpg", // Replace with your image path
            link: "https://example.com/wedding",
        },
        {
            title: "Engagement Gallery",
            image: "images/engagement.jpg", // Replace with your image path
            link: "https://example.com/engagement",
        },
        {
            title: "Portraits Gallery",
            image: "images/portraits.jpg", // Replace with your image path
            link: "https://example.com/portraits",
        },
    ];

    // Select gallery-cards container
    const galleryContainer = document.getElementById("gallery-cards");

    // Dynamically create cards
    cardData.forEach(({ title, image, link }) => {
        const card = document.createElement("a");
        card.href = link;
        card.className = "gallery-card";
        card.style.backgroundImage = `url(${image})`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
        card.style.display = "block";
        card.style.height = "300px";
        card.style.borderRadius = "10px";
        card.style.margin = "15px";
        card.style.textAlign = "center";
        card.style.color = "#fff";
        card.style.textDecoration = "none";
        card.style.lineHeight = "300px";
        card.style.fontSize = "1.5rem";
        card.style.fontWeight = "bold";
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";

        card.textContent = title;

        // Add hover effect
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });

        galleryContainer.appendChild(card);
    });



});