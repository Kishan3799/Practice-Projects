 let menu = document.querySelector(".navbar");
 let menu_btn = document.querySelector(".humberger-btn");

menu_btn.addEventListener("click" , function(){
   menu.classList.toggle("active2")
   menu_btn.classList.toggle("active2")
});