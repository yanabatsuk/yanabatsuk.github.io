document.addEventListener("DOMContentLoaded", function () {
    // Function to load a menu from JSON and append to a container
    function loadMenu(jsonFile, containerId) {
        fetch(jsonFile)
            .then((response) => response.json())
            .then((data) => {
                const container = document.getElementById(containerId);
                if (!container) return;

                data.forEach((item, index) => {
                    const link = document.createElement("a");
                    link.textContent = item.name;
                    link.href = item.url;
                    link.target = item.url.startsWith("http") ? "_blank" : "_self"; // Open external links in new tab
                    container.appendChild(link);
                
                    // Add separators (if not the last item)
                    if (index < data.length - 1) {
                        container.appendChild(document.createTextNode("  "));
                    }
                });
                
            })
            .catch((error) => console.error(`Error loading ${jsonFile}:`, error));
    }

    // Load the menus
    loadMenu("data/nav_header.json", "menu-header");

    // Add footer text dynamically
    const footer = document.getElementById("footer-container");
    if (footer) {
        footer.innerHTML += `
            <p>&copy; 2024 ethanphotojuice. All rights reserved.</p>
            <p>Designed by <a href="../batsukdesigns.com/index.html" target="_blank">Batsuk Designs </a> &copy; 2024</p>
        `;
    }
});