$(document).ready(function() {
    var binaryCodeAnswer = "goat";
    
    var correctBridge = 1;

    // Add event listener for the translate button
    $("#translate-button").click(function() {
      // Get the input value
      var userInput = $("#binary-code-input").val().trim();
  
      // Check if the input matches the correct answer
      if (userInput === binaryCodeAnswer) {
        // Display success message
        $("#translation-result").text("Correct! Now, choose the correct bridge.");
        // Enable the bridge options
        $(".bridge-option").css("pointer-events", "auto");
      } else {
        // Display an error message
        $("#translation-result").text("Incorrect! Try again.");
      }
    });

    // Add event listener for the bridge options
    $(".bridge-option").click(function() {
      // Get the selected bridge number
      var selectedBridge = $(this).data("bridge");
      
      // Check if the correct bridge is chosen
      if (selectedBridge === correctBridge) {
        // Display a success message and enable the proceed button
        alert("Congratulations! You've successfully crossed the Bridge and chose the correct bridge.");
        $("#proceed-button").removeAttr("disabled");
      } else {
        // Display an error message
        alert("Oops! It seems you chose the wrong bridge. Try again.");
      }
    });

    // Add event listener for the proceed button
    $("#proceed-button").click(function() {
      // Redirect to the next level or perform next level logic
      alert("Proceeding to the next challenge.");
      window.location.href = "level4.html";
    });
  });
