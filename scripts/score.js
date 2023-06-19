let user = document.querySelector('.greetings span');
let profileImg = document.querySelector('.profileImg');
let score = document.querySelector('h1 span');


user.innerText = localStorage.getItem("nameValue");
profileImg.src = localStorage.getItem("profileImg");
score.innerText = `${localStorage.getItem("totalScore")}`;