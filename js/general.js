
 
 // Função para aumentar o tamanho da fonte
 var originalFontSize = window.getComputedStyle(document.body).fontSize;
 function toggleFontSize() {
    var root = document.documentElement;
    var fontSizeButton = document.getElementById("fontSizeButton");
    var currentFontSize = getComputedStyle(root).getPropertyValue('--base-font-size').trim();

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
var hamburgerIcon = document.getElementById("hamburgerIcon");
var hamburgerMenu = document.getElementById("hamburgerMenu");

var accessibilityIcon = document.getElementById("accessibilityIcon");
var accessibilityBar = document.getElementById("accessibilityBar");
var languageIcon = document.getElementById("languageIcon");


hamburgerIcon.addEventListener("click", function () {
    // Fechar o menu de acessibilidade, se aberto
    if (accessibilityBar.classList.contains("open")) {
        accessibilityBar.classList.remove("open");
    }
    // Alternar o menu de hambúrguer
    hamburgerMenu.classList.toggle("open");
});


document.getElementById('searchbar').addEventListener('input', function() {
    var query = this.value.toLowerCase();
    var resultsContainer = document.getElementById('searchResults');
    var accessibilityMenu = document.getElementById('accessibilityMenu'); // Assuming the menu has this ID
    var hamburgerMenu = document.getElementById('hamburgerMenu'); // Assuming the menu has this ID


    // Close accessibility and hamburger menus if they are open
    if (accessibilityMenu && accessibilityMenu.classList.contains('open')) {
        accessibilityMenu.classList.remove('open');
    }
    if (hamburgerMenu && hamburgerMenu.classList.contains('open')) {
        hamburgerMenu.classList.remove('open');
    }

    resultsContainer.innerHTML = ''; // Clear previous results

    if (query) {
        var results = searchItems(query);
        results.forEach(function (result) {
            var resultElement = document.createElement('div');
            resultElement.classList.add('search-result');
            resultElement.textContent = result.name;
            resultElement.addEventListener('click', function () {
                window.location = result.url;
            });
            resultsContainer.appendChild(resultElement);
        });
        resultsContainer.style.display = 'block'; // Mostrar container de resultados
    } else {
        resultsContainer.style.display = 'none'; // Ocultar container de resultados
    }
    
    
    function searchItems(query) {
        var items = [
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
            { name: 'Programa Eunice', url: 'index.html#Programa' }
        ];
        
        return items.filter(function (item) {
            return item.name.toLowerCase().includes(query.toLowerCase());
        });
    }
    
    



    accessibilityIcon.addEventListener("click", function () {
        // Fechar o menu de hambúrguer, se aberto
        if (hamburgerMenu.classList.contains("open")) {
            hamburgerMenu.classList.remove("open");
        }
        // Alternar o menu de acessibilidade
        accessibilityBar.classList.toggle("open");
    });
    

//muda logo para branco e ativa o ligth mode
function toggleDarkMode() {
    var body = document.body;
    var logo = document.getElementById("logo");
    var accessibilityIcon = document.getElementById("accessibilityIcon");
    var hamburgerIcon = document.getElementById("hamburgerIcon");
    var languageIcon = document.getElementById("languageIcon");
    var darkModeButton = document.getElementById("darkModeButton"); // Supondo que o botão tem este ID

    // Alternar classe de modo escuro
    body.classList.toggle("dark-mode");
    var isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem('darkMode', isDarkMode);

    // Atualizar ícones
    if (isDarkMode) {
        logo.src = "svg/Logotipo_branco.svg";
        accessibilityIcon.src = "svg/AccesibilityWhite.svg";        
        hamburgerIcon.src = "svg/hamburgerWhite.svg";        
        languageIcon.src = "svg/PTWhite.svg";        
        darkModeButton.textContent = "Light Mode"; // Atualizar texto do botão
    } else {
        logo.src = "svg/Logotipo.svg";
        accessibilityIcon.src = "svg/Accesibility.svg";        
        hamburgerIcon.src = "svg/hamburger.svg";        
        languageIcon.src = "svg/PT.svg";        
        darkModeButton.textContent = "Dark Mode"; // Atualizar texto do botão
    }
}



function initializeDarkMode() {
    var isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    var darkModeButton = document.getElementById("darkModeButton"); // Assuming the button has this ID

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
window.addEventListener('load', function () {
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById("logo").src = "svg/Logotipo_branco.svg";
        document.getElementById("accessibilityIcon").src = "svg/AccesibilityWhite.svg";
        document.getElementById("hamburgerIcon").src = "svg/hamburgerWhite.svg";
        document.getElementById("languageIcon").src = "svg/PTWhite.svg";
    }
});

});

// Scroll horizontal em containers
var scrollContainer = document.querySelector('.scrollHorizontalImagens');
var isDown = false;
var startX, scrollLeft;

scrollContainer.addEventListener('mousedown', function (e) {
    isDown = true;
    scrollContainer.classList.add('active');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', function () {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', function () {
    isDown = false;
    scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - scrollContainer.offsetLeft;
    var walk = (x - startX) * 1;
    scrollContainer.scrollLeft = scrollLeft - walk;
});
