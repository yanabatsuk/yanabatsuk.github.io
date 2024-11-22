// temporary script for default scripts
function scriptTest() {
    alert("Hey my script is running");
}


function displayDateTime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeString = date.toLocaleTimeString();
    const dateString = date.toLocaleDateString(undefined, options);
    document.getElementById("currentDateTime").textContent = `Today is ${timeString} on ${dateString}`;
}

window.onload = displayDateTime;

function displayGreeting() {
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const companyName = "Yappy Bandicoot Nursery";

    const message = `The ${companyName} welcomes you, ${userName}! We're glad you're feeling ${userMood}!`;
    document.getElementById("greetingMessage").textContent = message;
}

function showPolygonName() {
    const numSides = Math.abs(Math.round(parseFloat(document.getElementById("favoriteNumber").value)));

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

    if (polygons[numSides]) {
        alert(polygons[numSides]);
    } else {
        alert('Invalid number of sides! Please try a number from 2 to 10.');
    }
}

function generatePlantName() {
    const prefixes = [
        "Fern", "Sun", "Bloom", "Moon", "Glow", "Dew", "Star", "Shadow", "Ember", "Mist", "Thorn", "Sage", "Frost", "Cinder", "Wild", "Cloud", "Petal", "Ghost", "Fire"
    ];

    const suffixes = [
        "bloom", "root", "leaf", "shine", "spire", "whisper", "song", "thorn", "dream", "shade", "light", "branch", "blossom", "crest", "veil", "flare", "spirit", "bud", "wave", "flame", "feather"
    ];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const ranfomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const plantName = `${randomPrefix} ${randomSuffix}`;
    document.getElementById("plantName").textContent = `Your plant name is: ${plantName}`;
}

