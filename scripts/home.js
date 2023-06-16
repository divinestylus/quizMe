let user = document.querySelector('.greeting span');
let profileImg = document.querySelector('.profileImg');

user.innerText = localStorage.getItem("nameValue");
profileImg.src = localStorage.getItem("profileImg");