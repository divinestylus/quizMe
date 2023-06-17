let user = document.querySelector('.greeting span');
let profileImg = document.querySelector('.profileImg');
let searchBox = document.querySelector('.search-feild');
let subjects = document.querySelectorAll('.subjects');

user.innerText = localStorage.getItem("nameValue");
profileImg.src = localStorage.getItem("profileImg");

searchBox.addEventListener('keyup', function(event) {

    for (let i = 0; i < subjects.children.length; i++) {
        const searchSubjects = subjects.children[i].firstElementChild;

        if (searchSubjects.v.innerText.toLowerCase().includes(searchBox.value.toLowerCase())){
            searchSubjects.parentElement.style.display = "grid";
        }
        else {
            searchSubjects.parentElement.style.display = "none";
        }
    }

})