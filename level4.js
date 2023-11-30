$(document).ready(function() {
    generateChallenge();
  });
  
  // Function to generate the single challenge with multiple options dynamically
  function generateChallenge() {
    var challengeContainer = $("#challenge-container");
  
    var challenge = {
      question: "Which image represents a phishing email?",
      options: [
        "./assets/correct_email_example.png",
        "./assets/phishing_example.png",
        "./assets/correct_email_example_2.png"
      ],
      correctOption: 1
    };
  
    var challengeElement = `<div class="challenge">`;
    challengeElement += `<p>${challenge.question}</p>`;
  
    challenge.options.forEach(function(option, optionIndex) {
      challengeElement += `<img src="${option}" class="challenge-option" data-option="${optionIndex}" alt="Option ${optionIndex + 1}">`;
    });
  
    challengeElement += "</div>";
  
    challengeContainer.append(challengeElement);
  
    $(".challenge-option").click(function() {
      var selectedOption = $(this).data("option");
  
      handleSingleChallenge(selectedOption);
    });
  }
  
  // Function to handle the single challenge with multiple options
  function handleSingleChallenge(selectedOption) {
    if (selectedOption === challenge.correctOption) {
      alert("Correct! You've successfully navigated the Labyrinth of Challenges.");
      window.location.href = "level5.html";
    } else {
      alert("Incorrect! Try again.");
    }
  }
  