const menus = document.getElementById("menus");

const burger = document.getElementById("btn-burger");

burger.addEventListener("click", ()=>{
  menus.classList.toggle("active")
});

menus.querySelectorAll("a").forEach(link =>{
  link.addEventListener("click", ()=>{
    menus.classList.remove("active")
  })
})