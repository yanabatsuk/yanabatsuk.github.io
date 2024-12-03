document.addEventListener("DOMContentLoaded", () => {
    function displayDateTime() {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeString = date.toLocaleTimeString();
        const dateString = date.toLocaleDateString(undefined, options);
        document.getElementById("current-date-time").textContent = `Today is ${dateString}, the time is ${timeString}`;
    }
    
    displayDateTime();
    
    function displayGreeting() {
        const userName = document.getElementById("user-name").value;
        const userMood = document.getElementById("user-mood").value;
        const companyName = "Yappy Bandicoot Nursery";
    
        const message = `The ${companyName} welcomes you, ${userName}! We're glad you're feeling ${userMood}!`;
        document.getElementById("greeting-message").textContent = message;
    }
    
    function showPolygonName() {
        const numSides = Math.abs(Math.round(parseFloat(document.getElementById("favorite-number").value)));
    
        const polygons = {
            2: 'digon',
            3: 'triange',
            4: 'quadrilateral',
            5: 'pentagon',
            6: 'hexagon',
            7: 'heptagon',
            8: 'octagon',
            9: 'nonagon',
            10: 'decagon'
        };
    
    
        const message = polygons[numSides]
            ? `The polygon with ${numSides} sides is called a ${polygons[numSides]}.`
            : "Invalid number of sides! Please enter a number from 2 to 10.";
    
        document.getElementById("polygon-message").textContent = message;
    }
    
    function generatePlantName() {
        const prefixes = [
            "Fern", "Sun", "Bloom", "Moon", "Glow", "Dew", "Star", "Shadow", "Ember", "Mist", "Thorn", "Sage", "Frost", "Cinder", "Wild", "Cloud", "Petal", "Ghost", "Fire"
        ];
    
        const suffixes = [
            "bloom", "root", "leaf", "shine", "spire", "whisper", "song", "thorn", "dream", "shade", "light", "branch", "blossom", "crest", "veil", "flare", "spirit", "bud", "wave", "flame", "feather"
        ];
    
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
        const plantName = `${randomPrefix}${randomSuffix}`;
        document.getElementById("plant-name").textContent = `Your plant name is: ${plantName}`;
    }
    
    function suggestExoticPlant() {
        const exoticPlants = [
            "Monstera Deliciosa 'Thai Constellation'",
            "Alocasia Frydrek Variegata",
            "Philodendron Tortum",
            "Hoya 'Mathilde Splash'",
            "Philodendron Florida Beauty",
            "Syngonium Podophyllum Albo",
            "Hoya Carnosa Compacta",
            "Monstera Adansonii Mint",
            "Alocasia 'Silver Dragon",
            "Philodendron Gloriosum",
            "Hoya Linearis",
            "Philodendron 'Rio",
            "Scindapsus Pictus 'Silvery Ann",
            "Alocasia 'Silver Dragon'",
            "Monstera Standleyana",
            "Raven ZZ Plant"
        ];
    
        const randomPlant = exoticPlants[Math.floor(Math.random() * exoticPlants.length)];
        document.getElementById("suggested-plant").textContent = `If you're looking to add a new unique plant, get a ${randomPlant}`;
    }
    
    function calculateSalePrice() {
        const basePrice = parseFloat(document.getElementById("plant-price").value);
        const salePercentage = parseFloat(document.getElementById("sale-percentage").value);
    
        if (isNaN(basePrice) || basePrice <= 0) {
            document.getElementById("sale-price-message").textContent = "Please enter a valid base price.";
            return;
        }
        if (isNaN(salePercentage) || salePercentage < 0) {
            document.getElementById("sale-price-message").textContent = "Please enter a valid sale percentage.";
            return;
        }
        
        const salePrice = (basePrice * (1 - salePercentage / 100)).toFixed(2);
    
        document.getElementById("sale-price-message").textContent = `Sale price is $${salePrice}`;
    }
    
    function plantCareTip() {
        const careTips = [
            "Place your plants in indirect sunlight for optimal growth.",
            "Avoid overwatering, let the soil dry out almost completely between waterings.",
            "Clean the leaves of your plants to maximize photosynthesis.",
            "Repot your plants every 1-2 years to refresh the soil.",
            "Use fertilizer during the growing season for better growth.",
            "Water deeply but infrequently to encourage strong root growth.",
            "Group plants together to naturally increase humidity.",
            "Inspect your plants regularly for pests like spider mites, aphids, and mealybugs.",
            "Keep tropical plants away from cold drafts or heat vents during winter.",
            "Trim yellow or dead leaves to redirect energy to healthy growth."
        ];
    
        const randomTip = careTips[Math.floor(Math.random() * careTips.length)];
        document.getElementById("plant-care-tip").textContent = `Plant Care Tip: ${randomTip}`;
    }
    
    function plantFact() {
        const plantFacts = [
            "While most houseplants are harmless, carnivorous sundews have sticky tentacles that trap insects like flies and gnats, making them a natural pest control option for your home.",
            "Plants can communicate with each other using chemical signals.",
            "Studies show that being around plants can reduce stress and boost productivity and creativity.",
            "Many plants appear dead in winter but are simply in a dormant phase, ready to regrow in spring.",
            "Bamboo is the fastest-growing plant in the world, capable of growing up to 35 inches in a day.",
            "The Venus flytrap is one of the few plants capable of rapid movement.",
            "The snake plant (Sansevieria) is one of the few houseplants that release oxygen at night, making it a great choice for bedrooms.",
            "Houseplants like philodendrons and ficus originate from tropical rainforests around the world.",
            "The money tree (Pachira aquatica) is believed to bring good luck and prosperity in feng shui.'There are over 390,000 different species of plants on Earth.'",
            "The camouflage plant (Calathea) folds its leaves upward at night, resembling praying hands.",
            "The Monstera deliciosa produces edible fruit in its native habitat, tasting like a mix of banana and pineapple.",
            "Many houseplants, like peace lilies and snake plants, help improve indoor air quality by removing toxins such as benzene and formaldehyde.",
            "Some houseplants, like pothos, grow toward light sources in a phenomenon called phototropism.",
            "Spider plants produce “babies” or offshoots, which you can easily propagate into new plants.",
            "ZZ plants (Zamioculcas zamiifolia) can thrive in low light and survive neglect, making them ideal for beginners."
        ];
    
        const randomFact = plantFacts[Math.floor(Math.random() * plantFacts.length)];
        document.getElementById("plant-fact").textContent = `Fun Fact: ${randomFact}`;
    }
    
    document.getElementById("greeting-button").addEventListener("click", displayGreeting);
    document.getElementById("polygon-button").addEventListener("click", showPolygonName);
    document.getElementById("generate-plant-button").addEventListener("click", generatePlantName);
    document.getElementById("suggest-plant-button").addEventListener("click", suggestExoticPlant);
    document.getElementById("calculate-price-button").addEventListener("click", calculateSalePrice);
    document.getElementById("plant-care-tip-button").addEventListener("click", plantCareTip);
    document.getElementById("plant-fact-button").addEventListener("click", plantFact);



    
    /* BYO Intro Page */
    const form = document.getElementById("intro-form");
    const courseInputs = document.getElementById("course-inputs");
    const addCourseButton = document.getElementById("add-course");

    // Add Course Text Box
    addCourseButton.addEventListener("click", () => {
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "course";
        newInput.placeholder = "Enter a course name";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", () => {
            courseInputs.removeChild(newInput);
            courseInputs.removeChild(deleteButton);
        });
        courseInputs.appendChild(newInput);
        courseInputs.appendChild(deleteButton);
    });

    // Form Submit Event
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const result = document.getElementById("result-end");
        result.innerHTML = `
            <h3>Your Introduction Page</h3>
            <ul>
                <li><strong>Name:</strong> ${formData.get("name")}</li>
                <li><strong>Mascot:</strong> ${formData.get("mascot")}</li>
                <li><strong>Image Caption:</strong> ${formData.get("caption")}</li>
                <li><strong>Personal Background:</strong> ${formData.get("personal-background")}</li>
                <li><strong>Professional Background:</strong> ${formData.get("professional-background")}</li>
                <li><strong>Academic Background:</strong> ${formData.get("academic-background")}</li>
                <li><strong>Background in Web Development:</strong> ${formData.get("web-development")}</li>
                <li><strong>Primary Computer Platform:</strong> ${formData.get("platform")}</li>
                <li><strong>Courses Currently Taking:</strong> ${[...formData.getAll("course")].join(", ")}</li>
                <li><strong>Funny Thing:</strong> ${formData.get("funny-thing")}</li>
                <li><strong>Anything Else:</strong> ${formData.get("anything-else")}</li>
            </ul>
            <img src="${URL.createObjectURL(formData.get("image"))}" alt="Uploaded Image" style="max-width:100%;">
        `;
        result.style.display = "block";
        form.style.display = "none";
    });

    // Reset Button
    form.addEventListener("reset", () => {
        const result = document.getElementById("result-end");
        result.style.display = "none";
        result.innerHTML = "";
        form.style.display = "block";
    });

});


