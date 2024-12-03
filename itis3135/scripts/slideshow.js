$(document).ready(function () {
    const images = [
        { src: "images/yogurt.jpg", caption: "Y for Yogurt" },
        { src: "images/apple.jpg", caption: "A for Apple" },
        { src: "images/necklace.jpg", caption: "N for Necklace" },
        { src: "images/avocado.jpg", caption: "A for Avocado" },
        { src: "images/balloon.jpg", caption: "B for Balloon" },
        { src: "images/airplane.jpg", caption: "A for Airplane" },
        { src: "images/trees.jpg", caption: "T for Trees" },
        { src: "images/sunflowers.jpg", caption: "S for Sunflowers" },
        { src: "images/umbrella.jpg", caption: "U for Umbrella" },
        { src: "images/kiwi.jpg", caption: "K for Kiwi" }
    ];


    let currentIndex = 0;

    // Update the slideshow image and caption
    function updateSlideshow() {
        const currentImage = images[currentIndex];
        $("#slideshow img").attr("src", currentImage.src).attr("alt", currentImage.caption);
        $("#slideshow figcaption").text(currentImage.caption);
    }

    // Initialize slideshow
    updateSlideshow();

    // Next button
    $("#next").click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlideshow();
    });

    // Previous button
    $("#prev").click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlideshow();
    });

    // Generate thumbnail images
    images.forEach((image, index) => {
        const thumbnail = $(`<img class="thumbnail" src="${image.src}" alt="${image.caption}" data-index="${index}">`);
        $("#thumbnail-list").append(thumbnail);
    });

    // Thumbnail click event
    $("#thumbnail-list").on("click", ".thumbnail", function () {
        currentIndex = $(this).data("index");
        updateSlideshow();
    });
});