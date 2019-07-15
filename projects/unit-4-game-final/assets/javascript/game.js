var blueValue = 4
var yellowValue = 6
var purpleValue = 8
var redValue  = 10
var targetScoreValues = [4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100]
var targetScore = []
var currentScore = 0
var win = 1
var loss = 1

//generates a random number from the list
$(document).ready(function(){
$("#yourScore").html("<h1> Your Score: "+ 0 ,"</h1>");
$("#targetScore").ready(function(){
  targetScore = targetScoreValues[Math.floor(Math.random() * targetScoreValues.length)];
  $("#targetScore").html("<h1>Target Score: " + targetScore,"</h1>");  
  console.log(targetScore);
});

$("#blue").click(function(){
    currentScore = currentScore + blueValue;
    $("#yourScore").html("<h1> Your Score: " + currentScore ,"</h1>");
    console.log(currentScore);
    });

$("#yellow").click(function(){
    currentScore = currentScore + yellowValue;
    $("#yourScore").html("<h1> Your Score: " + currentScore ,"</h1>");
    console.log(currentScore);
  });
$("#purple").click(function(){
    currentScore = currentScore + purpleValue;
    $("#yourScore").html("<h1> Your Score: " + currentScore ,"</h1>");
    console.log(currentScore);
  });
$("#red").click(function(){
    currentScore = currentScore + redValue;
    $("#yourScore").html("<h1> Your Score: " + currentScore ,"</h1>");
    console.log(currentScore);
  });
});

  //timer to check every second if the user has won the game
  var bContinue = setInterval(function(){ checkWin(); }, 1000);

  function checkWin()
  {
     if (currentScore === targetScore)
     {
         alert("You Win!");
         clearInterval(bContinue);
         currentScore = 0;
         $("#wins").html("<h4> Wins: " + win++ ,"</h4>");
         $("#yourScore").html("<h1> Your Score: "+ 0 ,"</h1>");
  targetScore = targetScoreValues[Math.floor(Math.random() * targetScoreValues.length)];
  $("#targetScore").html("<h1>Target Score: " + targetScore,"</h1>");
  var bContinue = setInterval(function(){ checkWin(); }, 1000);
     }
  }

  //timer to check every second if the user has lost the game
  var aContinue = setInterval(function(){ checkLose(); }, 1000);

  function checkLose()
  {
    if (currentScore > targetScore)
    {
      alert("You Lose");
      clearInterval(aContinue);
      currentScore = 0;
      $("#losses").html("<h4> Losses: " + loss++ ,"</h4>");
      $("#yourScore").html("<h1> Your Score: "+ 0 ,"</h1>");
  targetScore = targetScoreValues[Math.floor(Math.random() * targetScoreValues.length)];
  $("#targetScore").html("<h1>Target Score: " + targetScore,"</h1>");
  var aContinue = setInterval(function(){ checkLose(); }, 1000);
    }
  };