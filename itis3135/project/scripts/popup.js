    // Show the popup after the page loads
    window.onload = function() {
        setTimeout(function() {
            document.getElementById("popupad").style.display = "flex"; // Show the popup after a delay
        }, 3000); // 3-second delay
        };
    
        // Close the popup when the close button is clicked
        document.getElementById("closebtn").onclick = function() {
        document.getElementById("popupad").style.display = "none";
        };