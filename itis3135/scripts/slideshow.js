$(document).ready(function () {
    const images = [
        { src: "images/yoyo.jpg", caption: "Y for Yoyo" },
        { src: "images/apple.jpg", caption: "A for Apple" },
        { src: "images/necklace.jpg", caption: "N for Necklace" },
        { src: "images/airplane.jpg", caption: "A for Airplane" },
        { src: "images/bicycle.jpg", caption: "B for Bicycle" },
        { src: "images/aquarium.jpg", caption: "A for Aquarium" },
        { src: "images/teacup.jpg", caption: "T for Teacup" },
        { src: "images/seashell.jpg", caption: "S for Seashell" },
        { src: "images/umbrella.jpg", caption: "U for Umbrella" },
        { src: "images/kite.jpg", caption: "K for Kite" }
    ];

    let currentIndex = 0;

    function updateSlideshow() {
        $("#slideshow img").attr("src", images[currentIndex].src);
        $("#slideshow figcaption").text(images[currentIndex].caption);
    }

    // Initialize the slideshow
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

    // Generate thumbnails
    images.forEach((image, index) => {
        $("#thumbnail-list").append(
            `<img src="${image.src}" alt="${image.caption}" data-index="${index}" class="thumbnail">`
        );
    });

    // Thumbnail click event
    $(".thumbnail").click(function () {
        currentIndex = $(this).data("index");
        updateSlideshow();
    });
});
