let feedback = document.querySelector('.greetings');
let user = document.querySelector('.greetings span');
let score = document.querySelector('h1 span');
let scoreMsg = document.querySelector('.scoreMsg');
let solvedQst = localStorage.getItem("totalScore") / 10;
let icon = document.querySelector('.reward');
let takeAgainBtn = document.querySelector('button');



takeAgainBtn.addEventListener('click', function(){
    windowlocation.href = "home.html";
})

user.innerText = localStorage.getItem("nameValue");
score.innerText = `${localStorage.getItem("totalScore")}%`;
scoreMsg.innerText = `Quiz completed successfuly. You answered ${solvedQst} out of 10 questions.`;

if (score > 90) {
    feedback.innerText = "Congratulations ";
    icon.innerHTML = `<i class="fa-solid fa-medal"></i>`;
}
else if (score > 70) {
    feedback.innerText = "Great Job ";
    icon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
    icon.firstChild.style.color = "#2e2e2e";
}
else if (score > 40) {
    feedback.innerText = "Poor Job ";
    icon.innerHTML = `<i class="fa-solid fa-thumbs-down"></i>`;
    icon.firstChild.style.color = "#2e2e2e";
}
else {
    feedback.innerText = "You need help ";
    icon.innerHTML = `<i class="fa-solid fa-face-frown"></i>`;
    icon.firstChild.style.color = "#2e2e2e";
}