const slides = document.querySelectorAll('.card.snoopy .slide');
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}

// Initially show the first slide
slides[currentIndex].classList.add('active');

// Set interval for shuffling slides (e.g., every 3 seconds)
setInterval(showNextSlide, 3000);



function stopMusic() {
    var music = document.getElementById("background-music");
    music.pause(); // Pause the audio
    music.currentTime = 0; // Optionally reset the audio to the beginning
}

// Existing toggleMusic function
function toggleMusic() {
    var music = document.getElementById("background-music");
    var icon = document.querySelector("#music-toggle i"); // Select the icon
    var button = document.getElementById("music-toggle"); // Get the music button

    if (music.paused) {
        music.play(); // Play the audio
        music.muted = false; // Ensure it's unmuted
        icon.style.color = "green"; // Change color to green when unmuted
    } else {
        music.pause(); // Pause the audio
        icon.style.color = "red"; // Change color to red when muted

        // Add the shake effect
        button.classList.add('shake');

        // Remove the shake class after animation ends
        setTimeout(() => {
            button.classList.remove('shake');
        }, 500); // Match this duration to the animation duration
    }
}
