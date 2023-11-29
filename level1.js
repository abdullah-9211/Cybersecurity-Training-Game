$(document).ready(function() {

  $("#cipher-label").text("Decode the phrase: Gur Pnpur vf Fvpxre");

  // Add event listener for the submit button
  $("#submit-button").click(function() {
    // Get the input value
    var userInput = $("#cipher-input").val().toLowerCase();

    // Check if the input matches the correct answer
    if (userInput === "the chicken is chicken") {
      // Redirect to the next level or perform next level logic
      window.location.href = "level2.html";
    } else {
      // Display an error message or provide feedback to the user
      alert("Incorrect! Try again.");
    }
  });
});
