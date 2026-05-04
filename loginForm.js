
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passError").textContent = "";
        

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailPattern.test(email.value);
    let passwordans = passwordPattern.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if(!passwordans){
        document.querySelector("#passError").textContent =  "Password is incorrect";     
        document.querySelector("#passError").style.display =  "initial";     
        isValid =  false;
    }

    if(isValid){
        document.querySelector("#resultMessage").textContent = "Everything is correct";
    }

});