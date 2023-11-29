$(document).ready(function() {
    var solved = false;
    var dynamicMazeChallenge = "Decode this message to escape the maze: ybire yrgg pbeare juvgr obk";
  
    $("#cipher-label").text(dynamicMazeChallenge);
  
    $("#submit-button").click(function() {
      var userInput = $("#cipher-input").val().toLowerCase();
  
      if (userInput === "lower left corner white box") {
        solved = true
        alert("Correct! You revealed the exit, press the box to escape the maze.")
      } else {
        alert("Incorrect! Try again.");
      }
    });
  
    $("#hidden-btn").click(function() {
        if (solved) {
            window.location.href = "level3.html";
        }
    });

    console.log(solved)
    generateMaze();
  });
  
  // Function to generate the maze dynamically
  function generateMaze() {
    var mazeContainer = $("#maze-container");
  
    var mazeStructure = `
      <div class="maze-row">
        <div class="maze-path"></div>
        <div class="maze-wall"></div>
        <div class="maze-path"></div>
      </div>
      <div class="maze-row">
        <div class="maze-wall"></div>
        <div class="maze-path"></div>
        <div class="maze-wall"></div>
      </div>
     <div class="maze-row">
      <div class="maze-path"><button id="hidden-btn"></button></div>
      <div class="maze-wall"></div>
      <div class="maze-path"></div>
    </div>
    `;
  
    mazeContainer.html(mazeStructure);
  }
  