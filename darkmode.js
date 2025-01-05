let dark=localStorage.getItem("dark","acti")
let togSwitch=document.querySelector(".mode")
const eneableDark=()=>{
    console.log("activado");
    document.body.classList.add("dark")
    localStorage.setItem("dark","acti")
    
}
const disableDark=()=>{
    console.log("desactivado");
    localStorage.setItem("dark",null)
    document.body.classList.remove("dark")
}

if(dark==="acti") eneableDark()

togSwitch.addEventListener("click",()=>{
    dark=localStorage.getItem("dark")
    dark !== "acti" ? eneableDark() : disableDark()
    console.log("switch");
    
})