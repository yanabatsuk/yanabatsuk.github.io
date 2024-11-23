function displayDateTime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeString = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString(undefined, options);
    document.getElementById("current-date-time").textContent = `Today is ${dateString}, the time is ${timeString}`;
}


function displayGreeting() {
    const userName = document.getElementById("user-name").value;
    const userMood = document.getElementById("user-mood").value;
    const companyName = "Yappy Bandicoot Nursery";

    const message = `The ${companyName} welcomes you, ${userName}! We're glad you're feeling ${userMood}!`;
    document.getElementById("greeting-message").textContent = message;
}

document.getElementById("greeting-button").addEventListener("click", displayGreeting);

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

    /*const outputElement = document.createElement("p");
    outputElement.id = "polygonMessage";

    let message = polygons[numSides]
        ? `The polygon with ${numSides} sides is called a ${polygons[numSides]}.`
        : "Invalid number of sides! Please enter a number from 2 to 10.";

    const existingMessage = document.getElementById("polygonMessage");
    if (existingMessage) {
        existingMessage.textContent = message;
    } else {
        outputElement.textContent = message;
        document.querySelector("section").appendChild(outputElement);
    }
    */
}

document.getElementById("polygon-button").addEventListener("click", showPolygonName);

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

document.getElementById("generate-plant-button").addEventListener("click", generatePlantName);