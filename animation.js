const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else{
            entry.target.classList.remove("show")
        }
        
    })    
})

const hiddenElement = document.querySelectorAll(".first");
const switchElement = document.querySelectorAll(".second");
hiddenElement.forEach((el) => observer.observe(el));


// const scrollers = document.querySelector("#product")


// // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
// //     addAnimation();
// // }

// // function addAnimation() {
// //         scrollers.forEach((scroller) => {
// //         scroller.setAttribute("data-animated", true);
// //     });
// // }