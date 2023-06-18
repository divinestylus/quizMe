let profileImg = document.querySelector('.profileImg');
let questonsOpt = document.querySelectorAll('form div');
let labels = document.querySelectorAll('label');
let multipleChoice = document.querySelectorAll('input');
let currentlyClicked = null;

profileImg.src = localStorage.getItem("profileImg");

questonsOpt.forEach(function(option) {
    option.addEventListener('click', function() {
        option.lastElementChild.click();
        if (currentlyClicked) {
            currentlyClicked.style.border = "1px solid #646464";
            currentlyClicked.lastElementChild.style.color = "#646464";
        }
        option.style.border = "1px solid #e86225";
        option.lastElementChild.style.color = "#ffffff";
        currentlyClicked = option;
    })
})


document.addEventListener('DOMContentLoaded', function() {
  countdown();
})


function countdown() {
    let timerDisplay = document.querySelector('.timer');
    let timeLeft = 5; // 1 minute in second
    let timer = setInterval(function() {
      // Calculate minutes and seconds
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      // Display the time in MM:SS format
      timerDisplay.innerText = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

      timeLeft--;
  
      // Check if the timer has reached 0
      if (timeLeft < 0) {
        clearInterval(timer);
        timerDisplay.innerText = `Time's up!`;
      }
    }, 1000);
  }
 