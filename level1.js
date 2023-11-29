$(document).ready(function() {

  $("#cipher-label").text("Decode the phrase: jopjrlu kybtzapjrz");

  $("#submit-button").click(function() {
    var userInput = $("#cipher-input").val().toLowerCase();
    if (userInput === "chicken drumsticks") {
      window.location.href = "level2.html";
    } else {
      alert("Incorrect! Try again.");
    }
  });
});
