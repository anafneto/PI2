//acessibilidade´
import "./styles.css";


const accessibilityIcon = document.getElementById("accessibilityIcon");
const accessibilityBar = document.getElementById("accessibilityBar");

accessibilityIcon.addEventListener("click", () => {

   accessibilityBar.classList.toggle("open");
});

function activateTextToSpeech() {
   alert("Função Text-to-Speech ativada!");    
}

function increaseFontSize() {
   document.html.style.fontSize = "30px";
}

function toggleDarkMode() {
   document.body.classList.toggle("dark-mode");
}

function redirectTo(page) {
   window.location.href = page;
}

// Hamburger
const hamburgerIcon = document.getElementById("hamburgerIcon");
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerIcon.addEventListener("click", () => {
   hamburgerMenu.classList.toggle("open");
});

function redirectTo(page) {
   window.location.href = page;
}
//muda logo para branco e ativa o ligth mode
function toggleDarkMode() {
   const body = document.body;
   const logo = document.getElementById("logo");

   body.classList.toggle("dark-mode");
   if (body.classList.contains("dark-mode")) {
       logo.src = "svg/Logotipo_branco.svg";
   } else {
       logo.src = "svg/Logotipo.svg";
   }

   const darkModeButton = document.querySelector("#accessibilityBar button:last-child");
   if (document.body.classList.contains("dark-mode")) {
       darkModeButton.textContent = "Light Mode";
   } else {
       darkModeButton.textContent = "Dark Mode";
   }

} 


