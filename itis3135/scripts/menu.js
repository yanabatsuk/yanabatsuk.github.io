document.addEventListener("DOMContentLoaded", function () {
    // Function to load a menu from JSON and append to a container
    function loadMenu(jsonFile, containerId) {
        fetch(jsonFile)
            .then((response) => response.json())
            .then((data) => {
                const container = document.getElementById(containerId);
                if (!container) return;

                data.forEach((item) => {
                    const link = document.createElement("a");
                    link.textContent = item.name;
                    link.href = item.url;
                    link.target = item.url.startsWith("http") ? "_blank" : "_self"; // Open external links in new tab
                    container.appendChild(link);

                    // Add separators (if needed)
                    if (container.lastElementChild !== link) {
                        container.appendChild(document.createTextNode(" || "));
                    }
                });
            })
            .catch((error) => console.error(`Error loading ${jsonFile}:`, error));
    }

    // Load the menus
    loadMenu("nav_main.json", "menu-main");
    loadMenu("nav_footer.json", "menu-footer");
    loadMenu("nav_submenu.json", "menu-submenu");

    // Add footer text dynamically
    const footer = document.getElementById("footer-container");
    if (footer) {
        footer.innerHTML += `
            <p>Page Designed by <a href="batsukdesigns.com/" target="_blank">Batsuk Designs</a> &copy; 2024</p>
            <p>Certified in <a href="https://www.freecodecamp.org/certification/ybatsuk/responsive-web-design" target="_blank">Responsive Web Design</a>, Certified in <a href="https://www.freecodecamp.org/certification/ybatsuk/javascript-algorithms-and-data-structures-v8" target="_blank">JavaScript Algorithms and Data Structures</a></p>
            <a href="https://validator.w3.org/check?uri=referer" id="validation-link-html">
            <img src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png" alt="Valid HTML!">
            </a>
            <a href="https://jigsaw.w3.org/css-validator/check/referer" id="validation-link-css">
            <img src="https://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!">
            </a>
        `;
    }
});
