$(document).ready(function() {
    // Simulated credentials (you would dynamically load or generate this)
    var correctUsername = "Murghi";
    var correctPassword = "There is no treasure";
  
    // Add event listener for the authenticate button
    $("#authenticate-button").click(function() {
      // Get the input values
      var enteredUsername = $("#username-input").val().trim();
      var enteredPassword = $("#password-input").val().trim();
  
      // Check if the entered credentials are correct
      if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Display success message
        alert("Two-Factor Authentication successful! You may now proceed.");
        // Enable the proceed button
        $("#proceed-button").removeAttr("disabled");
      } else {
        // Display an error message
        alert("Incorrect credentials! Try again.");
      }
    });
  
    // Add event listener for the proceed button
    $("#proceed-button").click(function() {
      // Redirect to the next level or perform next level logic
      alert("Proceeding to the next challenge.");
      window.location.href = "end.html";
    });
  });
  