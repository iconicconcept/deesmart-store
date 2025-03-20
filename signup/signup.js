const menu = document.querySelector(".menu-bar")
const on = document.querySelector(".bar img")
const off = document.querySelector(".fa-close")

on.addEventListener("click", function(){
    on.style.display = "none"
    off.style.display = "flex"
    menu.style.display = "flex"
    console.log ("opened")
})

off.addEventListener("click", function(){
    on.style.display = "flex"
    off.style.display = "none"
    menu.style.display = "none"
    console.log ("closed")
})

        const form = document.getElementById("form");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const name = document.getElementById("name");

        var nameError = document.getElementById("nameError")
        var emailError = document.getElementById("emailError")
        var passwordError = document.getElementById("passwordError")

        form.addEventListener("submit", (e)=>{
            if (name.value==="" || name.value === null) {
               e.preventDefault();
               nameError.innerHTML = "The field is empty!"; 
            }
            else{
                nameError.innerHTML = "";
            }


            if (email.value==="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/" || email.value === "") {
               e.preventDefault();
               emailError.innerHTML = "Input a valid Email!" ;
            }
            else{
                emailError.innerHTML = "valid email!"
                emailError.style.color = "green"
            }


            if (password.value==="" || password.value === null) {
               e.preventDefault();
               passwordError.innerHTML = "The field is empty" ;
            }

            else{
                passwordError.innerHTML = "valid password!"
                passwordError.style.color = "green"
            }

            if (password.value <= 5) {
               e.preventDefault();
               passwordError.innerHTML = "It must not be less than 6 characters" ;
            }

            if (password.value >= 15){
               e.preventDefault();
               passwordError.innerHTML = "It must not be greater than 15 characters" 
            }
        })
