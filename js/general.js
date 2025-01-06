
 
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

    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        logo.src = "svg/Logotipo_branco.svg";
    } else {
        logo.src = "svg/Logotipo.svg";
    }
}

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

