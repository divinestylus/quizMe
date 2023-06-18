let user = document.querySelector('.greeting span');
let profileImg = document.querySelector('.profileImg');
let searchBoxes = document.querySelectorAll('.search-feild');
let subjectsName = document.querySelectorAll('.subjects div p');
let subjects = document.querySelectorAll('.subjects div');
let noResult = document.querySelector('.searchMsg');

user.innerText = localStorage.getItem("nameValue");
profileImg.src = localStorage.getItem("profileImg");


searchBoxes.forEach( function(searchBox) {
    searchBox.addEventListener('keyup', function(event) {
        let hasMatch = false;

        for (let i = 0; i < subjectsName.length; i++) {
            const searchSubjects = subjectsName[i];
    
            if (searchSubjects.innerText.toLowerCase().includes(searchBox.value.toLowerCase())){
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

subjects.forEach( function(subject) {
    subject.addEventListener('click', function() {
        window.location.href = 'questions.html';
    })
})

