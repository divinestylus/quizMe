let profileImg = document.querySelector('.profileImg');
let form = document.querySelector('form');
let questonsOpt = document.querySelectorAll('form div');
let labels = document.querySelectorAll('label');
let multipleChoice = document.querySelectorAll('input');
let currentlyClicked = null;
let question = document.querySelector('.question');
let quitBtn = document.querySelector('.quit');
let nextBtn = document.querySelector('.next');
let pageTracker = document.querySelector('h1 span');


profileImg.src = localStorage.getItem("profileImg");



let timeLeft = 300; 
// Count-down timer when page loads
document.addEventListener('DOMContentLoaded', function() {
  countdown();
})

function countdown() {
    let timerDisplay = document.querySelector('.timer');
    let timer = setInterval(function() {
   
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
     
      timerDisplay.innerText = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
      timeLeft--;

      if (timeLeft < 0) {
        clearInterval(timer);
        window.location.href = "score.html";
      }
    }, 1000);
  }
 


// HTML questions bank
  const htmlQuestionsBank = [
    {
      question: "Which attribute is used to specify the location of an external CSS file?",
      answers: ["href","src", "class","style"],
      correctAnswer: "href"
    },
    {
      question: "Which tag is used to define an HTML link?",
      answers: ["<link>","<a>", " <href>"," <url>"],
      correctAnswer: "<a>"
    },
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language","High Technical Markup Language", "Home Tool Markup Language","Hyperlink and Text Markup Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "What is the correct HTML tag for the largest heading?",
      answers: ["<heading>", "<h6>", "<h1>", "<header>"],
      correctAnswer: "<h1>"
    },
    {
      question: "Which tag is used to create an unordered list in HTML?",
      answers: ["<ul>", "<ol>", "<li>", "<list>"],
      correctAnswer: "<ul>"
    },
    {
      question: "Which tag is used to insert an image in HTML?",
      answers: ["<image>", "<img>", "<picture>", "<src>"],
      correctAnswer: "<img>"
    },
    {
      question: `What does the "alt" attribute in the <img> tag specify?`,
      answers: ["The alignment of the image", "The alternative text for the image", "The size of the image", "The source URL of the image"],
      correctAnswer: "The alternative text for the image"
    },
    {
      question: "Which tag is used to define a table in HTML?",
      answers: ["<table>", "<tr>", "<td>", "<th>"],
      correctAnswer: "<table>"
    },
    {
      question: "Which attribute is used to make a text input field read-only in HTML?",
      answers: ["readonly", "disabled", "inputonly", "locked"],
      correctAnswer: "readonly"
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      answers: ["<break>", "<lb>", "<newline>", "<br>"],
      correctAnswer: "<br>"
    }
];




let i = 0;
question.innerText = htmlQuestionsBank[i].question;
labels[0].firstElementChild.innerText = htmlQuestionsBank[i].answers[0];
labels[1].firstElementChild.innerText = htmlQuestionsBank[i].answers[1];
labels[2].firstElementChild.innerText = htmlQuestionsBank[i].answers[2];
labels[3].firstElementChild.innerText = htmlQuestionsBank[i].answers[3];

// Check if the label's text matches the correct answer
// labels.forEach( function(label) {
//   if (label.firstElementChild.innerText === htmlQuestionsBank[i].correctAnswer) {
//     label.firstElementChild.checked = true; // Preselect the correct answer
//   }
// });


let selectionMade = false;
let currentIndex = 0;
let score = 0;
questonsOpt.forEach(function(option) {

  option.addEventListener('click', function() {
    let selectedOptionIndex = Array.from(questonsOpt).indexOf(option);
    let selectedAnswer = option.lastElementChild.innerText;
    let correctAnswer = htmlQuestionsBank[currentIndex].correctAnswer;
    let isCorrect = selectedAnswer === correctAnswer;

    option.lastElementChild.click();

    if (!selectionMade) {
      if (currentlyClicked) {
        currentlyClicked.style.border = "1px solid #646464";
        currentlyClicked.lastElementChild.style.color = "#646464";
        currentlyClicked.firstElementChild.style.border = "2px solid #646464";
        currentlyClicked.firstElementChild.style.backgroundColor = "transparent";
      }

      if (isCorrect) {
        option.style.border = "1px solid green";
        option.lastElementChild.style.color = "green";
        option.firstElementChild.style.border = "2px solid #ffffff";
        option.firstElementChild.style.backgroundColor = "green";
        score += 10;
      } else {
        option.style.border = "1px solid #e86225";
        option.lastElementChild.style.color = "#e86225";
        option.firstElementChild.style.border = "2px solid #ffffff";
        option.firstElementChild.style.backgroundColor = "#e86225";
      }
      
      currentlyClicked = option;
      selectionMade = true;

      questonsOpt.forEach(function(disableOption) {
        disableOption.removeEventListener('click', function(){});
      });
      currentIndex++;
      if (currentIndex >= 10) {
        currentTime = 10;
      }
    }
    let totalScore = score;
    localStorage.setItem("totalScore", totalScore);
  });
});



// Reset options style
function resetOptionsStyle() {
  questonsOpt.forEach(function(option) {
    option.style.border = "1px solid #646464";
    option.lastElementChild.style.color = "#646464";
    option.firstElementChild.style.border = "2px solid #646464";
    option.firstElementChild.style.backgroundColor = "transparent";
  });
}


i = 1;
let tracker = 1;
pageTracker.innerText = `${tracker}/10`;


nextBtn.addEventListener('click', function(event) {
  event.preventDefault();
  question.innerText = htmlQuestionsBank[i].question;
  labels[0].firstElementChild.innerText = htmlQuestionsBank[i].answers[0];
  labels[1].firstElementChild.innerText = htmlQuestionsBank[i].answers[1];
  labels[2].firstElementChild.innerText = htmlQuestionsBank[i].answers[2];
  labels[3].firstElementChild.innerText = htmlQuestionsBank[i].answers[3];
  i++;
  tracker++;

  if (i >= 10) {
    i = 9;
    submitQuiz();
    tracker = 10;
  }

  // Reset options style and re-enable options
  resetOptionsStyle();
  selectionMade = false;
  questonsOpt.forEach(function(option) {
    option.addEventListener('click', function(){});
  });

  pageTracker.innerText = `${tracker}/10`;
  if (tracker === 10) {
    nextBtn.innerText = "Submit";
  }
});


function submitQuiz() {
  if (tracker > 10) {
    window.location.href = "score.html";
  }
}


quitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  localStorage.removeItem("totalScore");
  window.location.href = "home.html";
})
