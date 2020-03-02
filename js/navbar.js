const toggleButton = document.querySelector(".toggle");
const navElement = document.querySelector("nav");

toggleButton.addEventListener("click", function(){
    navElement.classList.toggle("activated");
})

const portfolioSection = document.querySelector("#portfolio");
const aboutSection = document.querySelector("#about");
const contactSection = document.querySelector("#contact");

const headerButton = document.querySelector("h1 a");
const portfolioButton = document.querySelector(".navbar-portfolio");
const aboutButton = document.querySelector(".navbar-about");
const contactButton = document.querySelector(".navbar-contact");

headerButton.addEventListener("click", function(){
    window.scrollTo(0, 0);
    navElement.className = "";
})

portfolioButton.addEventListener("click", function() {
    window.scrollTo(0, portfolioSection.offsetTop - 100);
    navElement.className = "";
});

aboutButton.addEventListener("click", function() {
    window.scrollTo(0, aboutSection.offsetTop - 100);
    navElement.className = "";
});

contactButton.addEventListener("click", function() {
    window.scrollTo(0, contactSection.offsetTop - 100);
    navElement.className = "";
});