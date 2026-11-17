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


// images card slider

// const heroImage = document.getElementById("hero-img");

// const image = [
//   "https://plus.unsplash.com/premium_photo-1663051238732-d6246f747dab?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
// ];

// let index = 0;
// setInterval(()=>{
//   index++;
//   if(index >= image.length){
//     index = 0
//   }
// heroImage.src = image[index];
// }, 5000);