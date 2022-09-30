var start = true;
var patterstring = "";
var userPattern = "";
var level = 0;
$(document).keypress(function (e) {
  if (start == true) {
    randomMusic();
    start = false;
  } else if (e.key == "8" || e.key == "2" || e.key == "4" || e.key == "6") {
    makesound(e.key);
    userPattern = userPattern + e.key;
    if (userPattern == patterstring) {
      setTimeout(() => {
        randomMusic();
      }, 500);
      $("h1").text("Level " + ++level);
    } else {
      $("h1").text("You loose the match");
      setTimeout(function () {
        window.location.reload();
      }, 900);
    }
  } else {
    $("h1").text("You loose the match");
    setTimeout(function () {
      window.location.reload();
    }, 900);
  }
});

function randomMusic() {
  var randomKey = Math.floor(Math.random() * 4);
  makesound(randomKey);
  if (randomKey == 0) {
    patterstring = patterstring + "8";
  } else if (randomKey == 1) {
    patterstring = patterstring + "2";
  } else if (randomKey == 2) {
    patterstring = patterstring + "4";
  } else if (randomKey == 3) {
    patterstring = patterstring + "6";
  }
}

function pressedAnimation(eventh) {
  $("." + eventh).addClass("pressed");
  setTimeout(function () {
    $("." + eventh).removeClass("pressed");
  }, 300);
}

function makesound(randomKey) {
  switch (randomKey) {
    case 0:
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      pressedAnimation(8);
      break;
    case 1:
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      pressedAnimation(2);
      break;
    case 2:
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      pressedAnimation(4);
      break;
    case 3:
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      pressedAnimation(6);
      break;
    case "8":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      pressedAnimation(randomKey);
      break;
    case "2":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      pressedAnimation(randomKey);
      break;
    case "4":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      pressedAnimation(randomKey);
      break;
    case "6":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      pressedAnimation(randomKey);
      break;
  }
}
