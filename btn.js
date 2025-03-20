let btn = document.querySelector("#email .container button");
let inside = document.querySelector("#email .container");
let input = document.querySelector("#email .container .box .input");
 let box = document.getElementById("#email .container .box")
 let boxError = document.getElementsByClassName("boxError")

        inside.addEventListener("submit", (e)=>{
            if (input.value==="" || box.value === null) {
               e.preventDefault();
               boxError.innerHTML = "The field is empty!"; 
               alert("subscribed")
            }
            else{
                boxError.innerHTML = "";
            }
        })