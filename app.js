const iconMenu = document.querySelector(".hamburger")
const nav = document.querySelector(".nav-list")

iconMenu.addEventListener("click", e=>{
    nav.classList.add("show")
})

window.addEventListener("click", e=>{
    if(nav.classList.contains("show") && e.target != iconMenu && e.target != nav){
        nav.classList.remove("show")
    }
 })

