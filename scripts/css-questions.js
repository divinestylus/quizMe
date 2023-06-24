// Question elements
const questionEl = document.querySelector('.question');
const nextBtnEl = document.querySelector('.next');
const previousBtnEl = document.querySelector('.previous');

// Option elements
let optionsContainerEl = document.querySelector('.options');
let pageTrackerEl = document.querySelector('h1 span');
let courseTitleEl = document.querySelector('.topic span');
let profileImg = document.querySelector('.profileImg')
let currentIndex = 0;
let score = 0;

profileImg.src = localStorage.getItem("profileImg");
courseTitleEl.innerText = localStorage.getItem("subject");




// Count-down timer when page loads
let timeLeft = 90;
document.addEventListener('DOMContentLoaded', function () {
  countdown();
})
function countdown() {
  let timerDisplay = document.querySelector('.timer');
  let timer = setInterval(function () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.innerText = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    timeLeft--;
    if (timeLeft === 0) {
      timerDisplay.innerText = "Times up!";
    }
    if (timeLeft === -1) {
      timerDisplay.innerText = "Times up!";
      clearInterval(timer);
      window.location.href = "score.html"
    }
  }, 1000);
}




// Question details
let questionCount = 0;
function displayQuestion(qObj) {
  pageTrackerEl.textContent = `${questionCount + 1}/${cssQuestionsBank.length}`;
  questionEl.textContent = `${qObj[currentIndex].question}`;
  displayOptions(qObj[currentIndex].options);
}

// Options methods
function displayOptions(optArr) {
  optArr.forEach(function (element) {
    optionsContainerEl.innerHTML += `<div>
    <input type="radio" class="option-item" value="${element}" name="multipleChoice"> 
    <label for="a"><span>${element}</span></label>
  </div>`
  });
}




// Buttons functionality
nextBtnEl.addEventListener('click', function () {
  enablePrevBtn();
  if (currentIndex < cssQuestionsBank.length) {
    questionCount++;
    question = cssQuestionsBank[currentIndex];
    currentIndex++;
    optionsContainerEl.innerHTML = "";
    if (currentIndex >= cssQuestionsBank.length - 1) {
      nextBtnEl.innerText = "Submit";
    }
    if (currentIndex >= cssQuestionsBank.length) {
      window.location.href = "score.html";
      return;
    }
    displayQuestion(cssQuestionsBank);
    checkAnswer()
  }
})

disablePrevBtn();
previousBtnEl.addEventListener('click', function () {
  if (currentIndex < cssQuestionsBank.length) {
    questionCount--;
    currentIndex--;
    question = cssQuestionsBank[currentIndex];
    optionsContainerEl.innerHTML = "";
    if (currentIndex === 0) {
      disablePrevBtn();
    }
    if (currentIndex < cssQuestionsBank.length - 1) {
      nextBtnEl.innerText = "Next";
    }
    displayQuestion(cssQuestionsBank);
    checkAnswer()
  }

})




// Preview button enable and disable toggle
function enablePrevBtn() {
  previousBtnEl.style.backgroundColor = "#646464";
  previousBtnEl.style.color = "#ffffff";
  previousBtnEl.disabled = false;
}

function disablePrevBtn() {
  previousBtnEl.style.backgroundColor = "#2e2e2e";
  previousBtnEl.style.color = "#646464";
  previousBtnEl.disabled = true;
}

displayQuestion(cssQuestionsBank);




// Validate answer
function checkAnswer() {
  let questionsOpt = document.querySelectorAll('.options div');
  let selectionMade = false;
  let currentlyClicked;
  let correctAnswer = cssQuestionsBank[currentIndex].correctAnswer;
  questionsOpt.forEach(function (option) {
    let result = option.lastElementChild.innerText.replace("<", "&lt;").replace(">", "&gt;");
    option.addEventListener('click', function (event) {
      option.lastElementChild.click();

      if (!selectionMade) {
        if (currentlyClicked) {
          currentlyClicked.style.border = "1px solid #646464";
          currentlyClicked.lastElementChild.style.color = "#646464";
          currentlyClicked.firstElementChild.style.border = "2px solid #646464";
          currentlyClicked.firstElementChild.style.backgroundColor = "transparent";
        }
        if (result == correctAnswer) {
          option.style.border = "1px solid green";
          option.lastElementChild.style.color = "green";
          option.firstElementChild.style.border = "2px solid #ffffff";
          option.firstElementChild.style.backgroundColor = "green";
          score += 10;
        }
        else {
          option.style.border = "1px solid #e86225";
          option.lastElementChild.style.color = "#e86225";
          option.firstElementChild.style.border = "2px solid #ffffff";
          option.firstElementChild.style.backgroundColor = "#e86225";
        }
        currentlyClicked = option;
        selectionMade = true;

        console.log(score);
        localStorage.setItem("score", score);
      }
    });
  });

  // Reset options style
  function resetOptionsStyle() {
    questionsOpt.forEach(function (option) {
      option.style.border = "1px solid #646464";
      option.lastElementChild.style.color = "#646464";
      option.firstElementChild.style.border = "2px solid #646464";
      option.firstElementChild.style.backgroundColor = "transparent";
    });
  }
}

checkAnswer();