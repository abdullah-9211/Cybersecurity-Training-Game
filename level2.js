$(document).ready(function() {
    var dynamicMazeChallenge = "Decode this message to escape the maze: ybjre yrsg pbeare juvgr obk";
  
    $("#cipher-label").text(dynamicMazeChallenge);
  
    $("#submit-button").click(function() {
      var userInput = $("#cipher-input").val().toLowerCase();
  
      if (userInput === "lower left corner white box") {
        alert("Correct! You revealed the exit, press the box to escape the maze.")
        enableMazeInteraction();
      } else {
        alert("Incorrect! Try again.");
      }
    });
  
    $("#hidden-btn").click(function() {
        if (solved) {
            window.location.href = "level3.html";
        }
    });
  });
  
  // Function to enable maze interaction
  function enableMazeInteraction() {
    $(".correct-block").click(function() {
      window.location.href = "level3.html";
    });
  }