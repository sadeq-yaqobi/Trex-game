var tRex = document.getElementById("trex");
var cactus = document.getElementById("cactus");
var counter = 0;

function jump() {
  if (tRex.classList == "jump-animate") {
    return;
  }
  tRex.classList.add("jump-animate");
  setTimeout(function () {
    tRex.classList.remove("jump-animate");
  }, 700);
}
var checkDead = setInterval(function () {
  let tRexBottom = parseInt(
    window.getComputedStyle(tRex).getPropertyValue("bottom")
  );
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (tRexBottom <= 76 && cactusLeft <= 90 && cactusLeft >= 19) {
    cactus.style.animation = "none";
    alert("Game Over . Score :  " + Math.floor(counter / 100));
    counter = 0;
    cactus.style.animation = "cactusAnimate 2.5s linear infinite";
  } else {
    counter++;
    document.getElementById("score").innerHTML = Math.floor(counter / 100);
  }
}, 10);

function jumpKeypress(event) {
  if (event.which === 32) {
    jump();
  }
}
document.addEventListener("keydown", jumpKeypress);
