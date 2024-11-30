document.addEventListener('DOMContentLoaded', function() {
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
        
        // Visa bekräftelseknappen när ett val är gjort
        document.getElementById('confirmation-box').classList.remove('hidden');
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
        
        // Visa bekräftelseknappen när ett val är gjort
        document.getElementById('confirmation-box').classList.remove('hidden');
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

    // Ta bort koden för "nytt val"-knappen
    // Denna kod har tagits bort eftersom du inte längre vill ha en sådan knapp.
    // Därmed behövs inte eventlistenern för 'new-choice' längre.

    // Funktion för att uppdatera feedback baserat på användarens val (valfritt)
    function updateFeedback() {
        // Här kan du lägga till kod för att uppdatera feedback till användaren
        // beroende på deras val, om du till exempel vill visa något annat.
    }

    // Bekräfta-val-knapp
    document.getElementById('confirm-button').addEventListener('click', function() {
        if (userChoice) {
            // Spela upp tompa.mp3
            playSound('tompa.mp3');
            
            // Visa bekräftande text
            const textBox = document.getElementById('text-box');
            textBox.innerHTML = Du har bekräftat ditt val av ${userChoice}. Vi ses ikväll<3;
            textBox.classList.add('show-text');
        } else {
            alert("Du måste välja solen eller månen innan du kan bekräfta ditt val!");
        }
    });
});

