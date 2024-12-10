//acessibilidade´

const accessibilityIcon = document.getElementById("accessibilityIcon");
const accessibilityBar = document.getElementById("accessibilityBar");

accessibilityIcon.addEventListener("click", () => {

   accessibilityBar.classList.toggle("open");
});



function activateTextToSpeech() {
  if ('speechSynthesis' in window) {
   const text = document.body.innerText; // Obtém todo o texto do corpo
   const speech = new SpeechSynthesisUtterance(text); // Cria uma instância de fala
   speech.lang = 'en-US'; // Define o idioma (ajuste conforme necessário)
   speech.rate = 1; // Velocidade da fala (1 é normal)
   speech.pitch = 1; // Tom da voz (1 é normal)
   window.speechSynthesis.speak(speech); // Reproduz o texto em voz
} else {
   alert('Desculpe, seu navegador não suporta Text-to-Speech.');
}
}

// Função para aumentar o tamanho da fonte
var originalFontSize = window.getComputedStyle(document.body).fontSize;
function toggleFontSize() {
   const root = document.documentElement; // Seleciona o :root
   const fontSizeButton = document.getElementById("fontSizeButton"); // Seleciona o botão
   const currentFontSize = getComputedStyle(root).getPropertyValue('--base-font-size');
   
   if (currentFontSize.trim() === '16px') { // Se for o tamanho padrão
       root.style.setProperty('--base-font-size', '24px'); // Define o tamanho aumentado
       fontSizeButton.textContent = "Resize Font"; // Atualiza o texto do botão
   } else {
       root.style.setProperty('--base-font-size', '16px'); // Volta para o tamanho padrão
       fontSizeButton.textContent = "Increase Font"; // Atualiza o texto do botão
   }
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
       darkModeButton.textContent = "Black Mode";
   }

} 


