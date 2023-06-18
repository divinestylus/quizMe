let profileImg = document.querySelector('.profileImg');
let questonsOpt = document.querySelectorAll('form div');
let labels = document.querySelectorAll('label');
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

let timer = 59;

function countDown() {
    timer--;
}

setInterval(countDown, 1000);