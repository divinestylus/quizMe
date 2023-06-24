let form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let profileImg = document.querySelector('.profileImg');
let uploadImg = document.querySelector('.uploadImg');
let addImgIcon = document.querySelector('.imgWrapper i');
let imgWrapper = document.querySelector('.imgWrapper');

profileImg.src = "./assets/user-icon.png";
localStorage.setItem("profileImg", profileImg.src);

form.addEventListener('submit', function (event) {
    localStorage.setItem("nameValue", nameInput.value);
    localStorage.setItem("emailValue", emailInput.value);

    event.preventDefault();

    if (localStorage.getItem("nameValue").length < 3) { // Validate Name
        removeErrorMessages();
        nameInput.insertAdjacentHTML('afterend', `<p class = "errorMsg">Name must be 3 or more characters.</p>`);
    }
    else if (!emailRegex.test(localStorage.getItem("emailValue"))) { // Validate Email
        removeErrorMessages();
        emailInput.insertAdjacentHTML('afterend', `<p class = "errorMsg">Invalid email. Try again.</p>`);
    }
    else { // Open Home Page
        removeErrorMessages();
        window.location.href = 'home.html';
    }
    function removeErrorMessages() {
        const errorMessages = document.querySelectorAll('.errorMsg');
        errorMessages.forEach(function (errorMessage) {
            errorMessage.remove();
        });
    }
    return false;
});



imgWrapper.addEventListener('click', function () {
    uploadImg.click();
})
uploadImg.addEventListener('change', function () {
    let newImg = uploadImg.files[0];
    const readFile = new FileReader();
    readFile.addEventListener('load', function () {
        profileImg.src = readFile.result;
        localStorage.setItem("profileImg", profileImg.src);
    })
    readFile.readAsDataURL(newImg);
    addImgIcon.style.display = "none";
    imgWrapper.addEventListener('mouseover', function () {
        addImgIcon.style.display = "flex";
    })

    imgWrapper.addEventListener('mouseout', function () {
        addImgIcon.style.display = "none";
    })
})


