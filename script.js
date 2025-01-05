let side=document.querySelector(".side-bar"),
contt=document.querySelector(".content");

side.addEventListener("mouseover",()=>{
    side.classList.add("actv")
    contt.classList.add("acti")
})
side.addEventListener("mouseleave",()=>{
    side.classList.remove("actv")
    contt.classList.remove("acti")
})