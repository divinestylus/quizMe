let user = document.querySelector('.greeting span');
let profileImg = document.querySelector('.profileImg');
let searchBoxes = document.querySelectorAll('.search-feild');
let subjectsName = document.querySelectorAll('.subjects div p');
let subjects = document.querySelectorAll('.subjects div');
let noResult = document.querySelector('.searchMsg');

user.innerText = localStorage.getItem("nameValue");
profileImg.src = localStorage.getItem("profileImg");


searchBoxes.forEach(function (searchBox) {
    searchBox.addEventListener('keyup', function (event) {
        let hasMatch = false;

        for (let i = 0; i < subjectsName.length; i++) {
            const searchSubjects = subjectsName[i];

            if (searchSubjects.innerText.toLowerCase().includes(searchBox.value.toLowerCase())) {
                searchSubjects.parentElement.style.display = "grid";
                hasMatch = true;
            }
            else {
                searchSubjects.parentElement.style.display = "none";
            }
        }
        if (hasMatch) {
            noResult.style.display = "none";
        }
        else {
            noResult.style.display = "block";
        }
    })
})

let subjectValue = "";
subjects.forEach(function (subject) {
    subject.addEventListener('click', function () {
        subjectValue = subject.lastElementChild.innerText;
        localStorage.setItem("subject", subjectValue);
        if (subjectValue.toLowerCase() === "html") {
            window.location.href = 'html-questions.html';
        }
        else if (subjectValue.toLowerCase() === "css") {
            window.location.href = 'css-questions.html';
        }
        else if (subjectValue.toLowerCase() === "javascript") {
            window.location.href = 'js-questions.html';
        }
        else if (subjectValue.toLowerCase() === "git") {
            window.location.href = 'git-questions.html';
        }
        else if (subjectValue.toLowerCase() === "python") {
            window.location.href = 'python-questions.html';
        }
        else if (subjectValue.toLowerCase() === "node js") {
            window.location.href = 'nodejs-questions.html';
        }
    })
})

