let form = document.querySelector('form');
let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let profileImg = document.querySelector('.profileImg');
let uploadImg = document.querySelector('.uploadImg');

form.addEventListener('submit', function(event) {
    localStorage.setItem("nameValue", nameInput.value);
    localStorage.setItem("emailValue", emailInput.value);

    event.preventDefault(); // Prevent form submission (optional)

    if (localStorage.getItem("nameValue").length < 3) { // Validate Name
        alert('Name must be 3 or more characters!');
    }
    else if (!emailRegex.test(localStorage.getItem("emailValue"))) { // Validate Email
        alert('Invalid Email');
    }
    else {
        window.location.href = 'home.html';
    }
});

profileImg.addEventListener('click', function() {
    uploadImg.click();
})

uploadImg.addEventListener('change', function() {
    let newImg = uploadImg.files[0];
    const readFile = new FileReader();

    readFile.addEventListener('load', function(){
        profileImg.src = readFile.result;
        localStorage.setItem("profileImg", profileImg.src);
    })
    readFile.readAsDataURL(newImg);
    // URL.revokeObjectURL(profileImg.src)
})
