
 
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

const accessibilityIcon = document.getElementById("accessibilityIcon");
const accessibilityBar = document.getElementById("accessibilityBar");
const languageIcon = document.getElementById("languageIcon");


hamburgerIcon.addEventListener("click", () => {
    // Close accessibility menu if open
    if (accessibilityBar.classList.contains("open")) {
        accessibilityBar.classList.remove("open");
    }
    // Toggle hamburger menu
    hamburgerMenu.classList.toggle("open");
});

accessibilityIcon.addEventListener("click", () => {
    // Close hamburger menu if open
    if (hamburgerMenu.classList.contains("open")) {
        hamburgerMenu.classList.remove("open");
    }
    // Toggle accessibility menu
    accessibilityBar.classList.toggle("open");
});

//muda logo para branco e ativa o ligth mode
function toggleDarkMode() {
    const body = document.body;
    const logo = document.getElementById("logo");
    const accessibilityIcon = document.getElementById("accessibilityIcon");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const languageIcon = document.getElementById("languageIcon");
    const darkModeButton = document.getElementById("darkModeButton"); // Assuming the button has this ID

    // Toggle dark mode class
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem('darkMode', isDarkMode);

    // Update icons
    if (isDarkMode) {
        logo.src = "svg/Logotipo_branco.svg";
        accessibilityIcon.src = "svg/AccesibilityWhite.svg";        
        hamburgerIcon.src = "svg/hamburgerWhite.svg";        
        languageIcon.src = "svg/PTWhite.svg";        
        darkModeButton.textContent = "Light Mode"; // Update button text
    } else {
        logo.src = "svg/Logotipo.svg";
        accessibilityIcon.src = "svg/Accesibility.svg";        
        hamburgerIcon.src = "svg/hamburger.svg";        
        languageIcon.src = "svg/PT.svg";        
        darkModeButton.textContent = "Dark Mode"; // Update button text
    }
}

// Check dark mode preference on page load
window.addEventListener('load', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById("logo").src = "svg/Logotipo_branco.svg";
        document.getElementById("accessibilityIcon").src = "svg/AccesibilityWhite.svg";
        document.getElementById("hamburgerIcon").src = "svg/hamburgerWhite.svg";
        document.getElementById("languageIcon").src = "svg/PTWhite.svg";
    }
});

// Scroll horizontal

const scrollContainer = document.querySelector('.scrollHorizontalImagens');

let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1; 
    scrollContainer.scrollLeft = scrollLeft - walk;
});
