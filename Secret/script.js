let userChoice = "";
let currentAudio = null; // Håller reda på det aktuella ljudet som spelas

document.getElementById('sun').addEventListener('click', function() {
    // Spela upp ljud för solen
    playSound('talking_sun.mp3');
    
    // Ändra bakgrund till solens färg
    document.body.classList.add('sun-selected');
    document.body.classList.remove('moon-selected');
    
    // Lägg till animation på solen och återställ månen till normal storlek
    document.getElementById('sun').classList.add('clicked');
    document.getElementById('moon').classList.remove('clicked');
    
    // Ändra text och visa den med animation
    const textBox = document.getElementById('text-box');
    textBox.innerHTML = "Du har valt solen, en källa till värme och ljus. Mystiska krafter ligger bakom detta val.";
    textBox.classList.add('show-text');
    
    // Spara användarens val
    userChoice = "solen";
    updateFeedback();
});

document.getElementById('moon').addEventListener('click', function() {
    // Spela upp ljud för månen
    playSound('talking_moon.mp3');
    
    // Ändra bakgrund till månen färg
    document.body.classList.add('moon-selected');
    document.body.classList.remove('sun-selected');
    
    // Lägg till animation på månen och återställ solen till normal storlek
    document.getElementById('moon').classList.add('clicked');
    document.getElementById('sun').classList.remove('clicked');
    
    // Ändra text och visa den med animation
    const textBox = document.getElementById('text-box');
    textBox.innerHTML = "Du har valt månen, som vilar tyst i mörkret. Vad kommer denna nattliga kraft att avslöja?";
    textBox.classList.add('show-text');
    
    // Spara användarens val
    userChoice = "månen";
    updateFeedback();
});

// Funktion för att spela upp ljudet baserat på val
function playSound(file) {
    // Stoppa och återställ det aktuella ljudet om det finns
    if (currentAudio) {
        currentAudio.pause(); // Pausa ljudet
        currentAudio.currentTime = 0; // Återställ ljudet till början
    }

    // Skapa nytt ljudobjekt och spela upp det
    currentAudio = new Audio(file);
    currentAudio.play(); // Spela upp ljudet
}

// Reset-knapp
document.getElementById('new-choice').addEventListener('click', function() {
    // Återställ bilderna till normal storlek
    document.getElementById('sun').classList.remove('clicked');
    document.getElementById('moon').classList.remove('clicked');
    
    // Återställ bakgrundsfärg
    document.body.classList.remove('sun-selected');
    document.body.classList.remove('moon-selected');
    
    if (currentAudio) {
        currentAudio.pause(); // Pausa ljudet
        currentAudio.currentTime = 0; // Återställ ljudet till början
    }

    // Återställ text
    const textBox = document.getElementById('text-box');
    textBox.innerHTML = "";
    textBox.classList.remove('show-text');
    
    // Återställ användarens val
    userChoice = "";
    updateFeedback();
});

// Funktion för att uppdatera feedback baserat på användarens val (valfritt)
function updateFeedback() {
    // Här kan du lägga till kod för att uppdatera feedback till användaren
    // beroende på deras val, om du till exempel vill visa något annat.
}

