const buttonsColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let gameStart = 0;
let gameLevel = -1;

function nextSequence(){
    const randomNumber = Math.floor(Math.random()*4);
    const randomChosenColor = buttonsColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    const audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
    console.log(gamePattern)
    gameLevel++
    $("h1").text("Level "+gameLevel);
}

$(".buttonStart").click(function(){
  $(".buttonStart").addClass("hidden");
  gameStart = 1;

})

$(document).on("keydown", function(event){
  if (gameStart == 0){  
    gameStart = 1;
      $(".buttonStart").addClass("hidden");
      $("h1").text("Level "+gameLevel);
      if (event.key) {
        nextSequence();
      }
  }
  });

$(".btn").click(function() {
  if (gameStart == 1){  
    const userChosenColor = $(this).attr("id");
    console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer()
  }
});

function checkAnswer(){
    for (let i = 0; i < userClickedPattern.length; i++){
      console.log(i);
      console.log(`The game chose ${gamePattern[i]}`);
      console.log(`The user clicked ${userClickedPattern[i]}`);
        if (gamePattern[i] == userClickedPattern[i]){
            console.log("Alright!");
          if ((gamePattern.length == userClickedPattern.length) && (gamePattern[gamePattern.length-1]) == userClickedPattern[userClickedPattern.length-1]){
              setTimeout(function(){
                nextSequence()
              }, 1000);
              while(userClickedPattern.length > 0) {
                userClickedPattern.pop();
              }
          }
        console.log(userClickedPattern);
        } else {
            console.log("fail")
            const audio = new Audio("sounds/wrong.mp3")
            audio.play();
            $("body").addClass("game-over")
            setTimeout(function () {
              $("body").removeClass("game-over");
            }, 200);
            startOver();
        }
    }
}

function playSound(color){
    const audio = new Audio("sounds/"+ color +".mp3")
    console.log(audio);
    audio.play();
}

function animatePress(currentColor) {

    //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
    $("#" + currentColor).addClass("pressed");
  
    //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function startOver(){
  while(userClickedPattern.length > 0) {
    userClickedPattern.pop();
  }
  while(gamePattern.length > 0) {
    gamePattern.pop();
  }
  gameStart = 0;
  gameLevel = 0;
  $("h1").text("Game Over, Press A Key to Start or Click Start")
  $(".buttonStart").removeClass("hidden");
}