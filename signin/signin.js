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
        const password = document.getElementById("password");
        const name = document.getElementById("name");

        var nameError = document.getElementById("nameError")
        var passwordError = document.getElementById("passwordError")

        form.addEventListener("submit", (e)=>{
            if (name.value==="" || name.value === null) {
               e.preventDefault();
               nameError.innerHTML = "The field is empty!"; 
            }
            else{
                nameError.innerHTML = "";
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
               passwordError.innerHTML = "Incorrect Password" ;
            }

            if (password.value >= 15){
               e.preventDefault();
               passwordError.innerHTML = "It must not be greater than 15 characters" 
            }
        })