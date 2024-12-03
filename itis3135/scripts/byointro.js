// Define the functions first

// Function to add a course text field dynamically
function addCourseField() {
    var coursesList = document.getElementById("courses-list");
    var newCourse = document.createElement("input");
    newCourse.type = "text";
    newCourse.name = "courses[]";
    coursesList.appendChild(newCourse);
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        coursesList.removeChild(newCourse);
        coursesList.removeChild(deleteButton);
    });
    coursesList.appendChild(deleteButton);
}

// Function to validate the form before submission
function validateForm() {
    // Example validation logic (ensure that all required fields are filled)
    const name = document.getElementById("name").value.trim();
    const mascot = document.getElementById("mascot").value.trim();
    const image = document.getElementById("image").files.length > 0;
    const imageCaption = document.getElementById("image-caption").value.trim();

    if (!name || !mascot || !image || !imageCaption) {
        alert("Please fill in all required fields.");
        return false;
    }
    return true;
}



function submitForm(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const resultDiv = document.getElementById("result");
    const introContent = document.getElementById("intro-content");

    // Get all form values
    const name = document.getElementById("name").value;
    const mascot = document.getElementById("mascot").value;
    const imageCaption = document.getElementById("image-caption").value;
    const personalBackground = document.getElementById("personal-background").value;
    const professionalBackground = document.getElementById("professional-background").value;
    const academicBackground = document.getElementById("academic-background").value;
    const webDevelopment = document.getElementById("web-development").value;
    const platform = document.getElementById("platform").value;
    const funnyThing = document.getElementById("funny").value;
    const other = document.getElementById("other").value;

    // Get the uploaded image URL
    const uploadedImage = document.getElementById("intro-image").files[0];
    const imageURL = uploadedImage ? URL.createObjectURL(uploadedImage) : "";

    // Get the courses the user entered
    const courses = Array.from(document.querySelectorAll('input[name="courses[]"]'))
    .map((input) => input.value)
    .filter((value) => value.trim() !== "");


    // Dynamically populate the content with all form values
    introContent.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mascot:</strong> ${mascot}</p>
        ${imageURL ? `<p><strong>Image:</strong><br><img src="${imageURL}" alt="Uploaded Image"></p>` : ""}
        <p><strong>Image Caption:</strong> ${imageCaption}</p>
        <p><strong>Personal Background:</strong> ${personalBackground}</p>
        <p><strong>Professional Background:</strong> ${professionalBackground}</p>
        <p><strong>Academic Background:</strong> ${academicBackground}</p>
        <p><strong>Background in Web Development:</strong> ${webDevelopment}</p>
        <p><strong>Primary Computer Platform:</strong> ${platform}</p>
        <p><strong>Funny Thing:</strong> ${funnyThing}</p>
        <p><strong>Anything Else?</strong> ${other}</p>
        <p><strong>Courses Currently Taking:</strong></p>
        <ul>
            ${courses.map((course) => `<li>${course}</li>`).join("")}
        </ul>
    `;

    // Remove the "jsstring">'hidden' class to display the result
    resultDiv.classList.remove("hidden");
}



// Attach submitForm function to the form submit event
document.getElementById("intro-form").addEventListener("submit", submitForm);


// Function to load and display the image when it's selected
function loadImage() {
    var image = document.getElementById("jsstring">'Intro-image').files[0]; // Get the file from input

    if (image) {  // Check if a file was selected
        const imageURL = URL.createObjectURL(image);  // Create a URL for the file

        // Create an image element and set its src attribute
        var imgElement = document.createElement("jsstring">'img');
        imgElement.src = imageURL;

        // Clear previous content and append the new image
        var imageContainer = document.getElementById("jsstring">'load-image');
        imageContainer.innerHTML = "jsstring">''; // Clear previous image
        imageContainer.appendChild(imgElement); // Add the new image
    }
}

// Attach the loadImage function to the file input onchange event
document.addEventListener("DOMContentLoaded", () => {
    const addCourseButton = document.getElementById("add-course");
    const coursesList = document.getElementById("courses-list");

    
    function addCourseField() {
        const coursesList = document.getElementById("courses-list");
        
        // Create a wrapper div for the new course and description inputs
        const courseWrapper = document.createElement("div");
        courseWrapper.classList.add("course-wrapper");
    
        // Create the course input field
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.name = "courses[]";
        courseInput.placeholder = "Enter Course Name";

    
        // Create a delete button for the course
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add("delete-course-btn");
    
        // Event listener for the delete button
        deleteBtn.addEventListener("click", () => {
            coursesList.removeChild(courseWrapper);
        });
    
        // Append all elements to the wrapper
        courseWrapper.appendChild(courseInput);
        courseWrapper.appendChild(deleteBtn);
    
        // Append the wrapper to the courses list container
        coursesList.appendChild(courseWrapper);
    }
    
    document.getElementById("add-course-btn").addEventListener("click", addCourseField);


    document.getElementById("jsstring">'intro-form').addEventListener("jsstring">'reset', function () {
        const resultSection = document.getElementById("jsstring">'result');
        resultSection.classList.add("jsstring">'hidden'); // Hide the result section
        document.getElementById("jsstring">'intro-content').innerHTML = "jsstring">''; // Clear the dynamically populated content
        document.getElementById("jsstring">'load-image').innerHTML = "jsstring">''; // Clear the loaded image (if any)
    });
    
});