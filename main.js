const menus = document.getElementById("menus");

const burger = document.getElementById("btn-burger");

burger.addEventListener("click", ()=>{
  menus.classList.toggle("active")
});

menus.querySelectorAll("a").forEach(link =>{
  link.addEventListener("click", ()=>{
    menus.classList.remove("active");
  });
});

// form validation

const form = document.getElementById("formContact");

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  const fullName = document.getElementById("name").value.trim();
  const phone = document.getElementById("number").value.trim();
  const text = document.getElementById("textarea").value.trim();
  const message = document.getElementById("message");

  if(fullName === ""){
   message.textContent = "Enter Your FullName";
   message.style.color = "red";
  }
else if(!/^(0\d{9}|\+231\d{9})$/.test(phone)){
  message.textContent = "Please Enter Valid Number";
  message.style.color = "red";
}
else if(text === ""){
  message.textContent = "Enter Your Message, Please!";
  message.style.color = "red"
}

else{
  message.textContent = "Form Submitted Sucessfully!";
  message.style.color = "green"
  form.reset();
}
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