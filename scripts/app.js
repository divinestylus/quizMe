document.addEventListener('DOMContentLoaded', function () {
  let timeLeft = 2; // 1 minute in second
  let timer = setInterval(function () {
    // Calculate minutes and seconds
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    timeLeft--;

    // Check if the timer has reached 0
    if (timeLeft === 0) {
      window.location.href = 'login.html';
    }
  }, 1000);
})



