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

let scrollBox = document.querySelector("#home .container")
let right = document.querySelector("#home .fa-greater-than")
let left = document.querySelector("#home .fa-less-than")
let laptop = document.querySelector("#home .container .home1")
let smartphone = document.querySelector("#home .container .home2")
let cctv = document.querySelector("#home .container .home3")
let peck = document.querySelector("#home .container .peck")
let smallRight = document.querySelector("#home .before")
let smallLeft = document.querySelector("#home .after")


right.addEventListener("click", ()=>{
    scrollBox.style.scrollBehavior = "smooth"
    scrollBox.scrollLeft += 912; 
})

left.addEventListener("click", ()=>{
    scrollBox.style.scrollBehavior = "smooth"
    scrollBox.scrollLeft -= 912;
})


// smallRight.addEventListener("click", ()=>{
//     scrollBox.style.scrollBehavior = "smooth"
//     scrollBox.scrollLeft += 329; 
// })

// smallLeft.addEventListener("click", ()=>{
//     scrollBox.style.scrollBehavior = "smooth"
//     scrollBox.scrollLeft -= 329;
// })


// scrollBox.addEventListener("wheel", (evt)=>{
//     evt.preventDefault();
//     scrollBox.scrollLeft += evt.deltaX; 
//  })