$(document).ready(function () {
    const images = [
        { src: "images/yogurt.jpeg", caption: "Y for Yogurt" },
        { src: "images/apple.jpeg", caption: "A for Apple" },
        { src: "images/necklace.jpeg", caption: "N for Necklace" },
        { src: "images/avocado.jpeg", caption: "A for Avocado" },
        { src: "images/balloon.jpeg", caption: "B for Balloon" },
        { src: "images/airplane.jpeg", caption: "A for Airplane" },
        { src: "images/trees.jpeg", caption: "T for Trees" },
        { src: "images/sunflowers.jpeg", caption: "S for Sunflowers" },
        { src: "images/umbrella.jpeg", caption: "U for Umbrella" },
        { src: "images/kiwi.jpeg", caption: "K for Kiwi" }
    ];

    let currentIndex = 0;

    // Update the main slideshow image and caption
    function updateSlideshow() {
        const { src, caption } = images[currentIndex];
        $("#slideshow img").attr("src", src).attr("alt", caption);
        $("#slideshow figcaption").text(caption);
    }

    // Initialize slideshow with the first image
    updateSlideshow();

    // Next button functionality
    $("#next").click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlideshow();
    });

    // Previous button functionality
    $("#prev").click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlideshow();
    });

    // Add thumbnails dynamically
    images.forEach((image, index) => {
        const thumbnail = $(`
            <img 
                class="thumbnail" 
                src="${image.src}" 
                alt="${image.caption}" 
                data-index="${index}" 
            >
        `);
        $("#thumbnail-list").append(thumbnail);
    });

    // Thumbnail click event
    $("#thumbnail-list").on("click", ".thumbnail", function () {
        currentIndex = $(this).data("index");
        updateSlideshow();
    });
});