const toggleButton = document.querySelector(".toggle");
const navElement = document.querySelector("nav");

toggleButton.addEventListener("click", function(){
    navElement.classList.toggle("activated");
})