
 
 // Função para aumentar o tamanho da fonte
 var originalFontSize = window.getComputedStyle(document.body).fontSize;
 function toggleFontSize() {
    const root = document.documentElement;
    const fontSizeButton = document.getElementById("fontSizeButton");
    const currentFontSize = getComputedStyle(root).getPropertyValue('--base-font-size').trim();

    if (currentFontSize === '16px') {
        root.style.setProperty('--base-font-size', '24px');
        fontSizeButton.textContent = "Resize Font";
    } else {
        root.style.setProperty('--base-font-size', '16px');
        fontSizeButton.textContent = "Increase Font";
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

document.getElementById('searchbar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    const accessibilityMenu = document.getElementById('accessibilityMenu'); // Assuming the menu has this ID
    const hamburgerMenu = document.getElementById('hamburgerMenu'); // Assuming the menu has this ID

    // Close accessibility and hamburger menus if they are open
    if (accessibilityMenu && accessibilityMenu.classList.contains('open')) {
        accessibilityMenu.classList.remove('open');
    }
    if (hamburgerMenu && hamburgerMenu.classList.contains('open')) {
        hamburgerMenu.classList.remove('open');
    }

    resultsContainer.innerHTML = ''; // Clear previous results

    if (query) {
        const results = searchItems(query);
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('search-result');
            resultElement.textContent = result.name;
            resultElement.addEventListener('click', () => {
                window.location = result.url;
            });
            resultsContainer.appendChild(resultElement);
        });
        resultsContainer.style.display = 'block'; // Show results container
    } else {
        resultsContainer.style.display = 'none'; // Hide results container
    }
    });
    
    function searchItems(query) {
        const items = [
            { name: 'Travel From Porto & Lisbon', url: 'indextravel.html#porto' },
            { name: 'EUNICE European University', url: 'index.html#eunice' },
            { name: 'General Assembly', url: 'index.html#assembly' },
            { name: 'Event Description', url: 'indexEventDescription.html#event' },
            { name: 'Instagram', url: 'https://www.instagram.com/eunice_uni_/' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/company/74565706/' },
            { name: 'YouTube', url: 'https://www.youtube.com/channel/UCXmj6Fg2Nev0Y12MbtcvFqg' },
            { name: 'Transport', url: 'indextravel.html#transfer' },
            { name: 'Contactos', url: '#Contactos' },
            { name: 'Redes Sociais', url: '#redes-sociais' },
            { name: 'Programa Eunice', url: 'index.html#Programa' },
        ];
        return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }
    



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

function initializeDarkMode() {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    const darkModeButton = document.getElementById("darkModeButton"); // Assuming the button has this ID

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "Light Mode"; // Update button text
    } else {
        document.body.classList.remove("dark-mode");
        darkModeButton.textContent = "Dark Mode"; // Update button text
    }
}


// Call the initialize function when the site loads
document.addEventListener('DOMContentLoaded', initializeDarkMode);


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

// Scroll horizontal em containers
const scrollContainer = document.querySelector('.scrollHorizontalImagens');
var isDown = false;
var startX, scrollLeft;

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