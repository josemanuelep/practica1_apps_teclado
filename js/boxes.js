   
var cara , fondo1, fondo2;
cara = document.getElementsByClassName("face");
fondo1 = document.getElementById("slide1");
fondo2 = document.getElementById("slide2");

cara[0].addEventListener("click", function(){

    this.classList.add("hide");
    fondo1.classList.remove("hide");
    fondo1.classList.add("slides","animated","bounce");
    
 });
 fondo1.addEventListener("click", function(){

    this.classList.add("hide");
    fondo2.classList.remove("hide");
    fondo2.classList.add("slides","animated","bounce");
    
 });
    