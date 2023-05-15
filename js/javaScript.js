// Get the DOM elements
var tRex = document.getElementById("trex");
var cactus = document.getElementById("cactus");

// Initialize the counter
var counter = 0;

// Function to handle the jump animation
function jump() {
  // If the trex is already jumping, do nothing
  if (tRex.classList.contains("jump-animate")) {
    return;
  }

  // Add the jump animation class to the trex
  tRex.classList.add("jump-animate");

  // Remove the jump animation class after 700 milliseconds
  setTimeout(function () {
    tRex.classList.remove("jump-animate");
  }, 700);
}

// Check for collision and update the score
var checkDead = setInterval(function () {
  // Get the bottom position of the trex and the left position of the cactus
  var tRexBottom = parseInt(
    window.getComputedStyle(tRex).getPropertyValue("bottom")
  );
  var cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // Check for collision
  if (tRexBottom <= 76 && cactusLeft <= 90 && cactusLeft >= 19) {
    // Stop the cactus animation
    cactus.style.animation = "none";

    // Display game over message with the score
    alert("Game Over. Score: " + Math.floor(counter / 100));

    // Reset the counter and restart the cactus animation
    counter = 0;
    cactus.style.animation = "cactusAnimate 2.5s linear infinite";
  } else {
    // Increment the counter and update the score
    counter++;
    document.getElementById("score").innerHTML = Math.floor(counter / 100);
  }
}, 10);

// Function to handle the jump on spacebar key press
function jumpKeypress(event) {
  if (event.which === 32) {
    jump();
  }
}

// Add event listener for keydown event to trigger jump on spacebar press
document.addEventListener("keydown", jumpKeypress);
