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