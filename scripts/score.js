let feedback = document.querySelector('.user');
let score = document.querySelector('h1 span');
let scoreMsg = document.querySelector('.scoreMsg');
let solvedQst = localStorage.getItem("score") / 10;
let icon = document.querySelector('.reward');
let retakeQuizBtn = document.querySelector('button');
let totalScore = Number(localStorage.getItem("score"));



score.innerText = `${totalScore}%`;
scoreMsg.innerText = `Quiz completed successfully. You answered ${solvedQst} out of 10 questions.`;

if (totalScore >= 90) {
    feedback.innerText = "Congratulations";
    icon.innerHTML = `<i class="fa-solid fa-medal"></i>`;
}
else if (totalScore >= 70) {
    feedback.innerText = "Great Job";
    icon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
    icon.firstChild.style.color = "#2e2e2e";
}
else if (totalScore >= 40) {
    feedback.innerText = "Poor Job";
    icon.innerHTML = `<i class="fa-solid fa-thumbs-down"></i>`;
    icon.firstChild.style.color = "#2e2e2e";
}
else {
    feedback.innerText = "You need to study more";
    icon.innerHTML = `<i class="fa-solid fa-face-frown"></i>`;
    icon.firstChild.style.color = "#2e2e2e";
}

retakeQuizBtn.addEventListener('click', function () {
    localStorage.removeItem("score");
    window.location.href = "home.html";
})