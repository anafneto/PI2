// =================== VARIÁVEIS GLOBAIS ===================
// Guarda todos os elementos que vamos usar várias vezes
var domElements = {
    body: document.body,
    root: document.documentElement,
    logo: document.getElementById("logo"),
    hamburgerIcon: document.getElementById("hamburgerIcon"),
    hamburgerMenu: document.getElementById("hamburgerMenu"),
    accessibilityIcon: document.getElementById("accessibilityIcon"),
    accessibilityBar: document.getElementById("accessibilityBar"),
    languageIcon: document.getElementById("languageIcon"),
    darkModeButton: document.getElementById("darkModeButton"),
    fontSizeButton: document.getElementById("fontSizeButton"),
    scrollContainer: document.querySelector('.scroll-horizontal-imagens'),
    hero__image: document.querySelector('.hero__image'), 
    hero__description: document.querySelector('.hero__description')
};

// =================== FUNÇÕES BÁSICAS ===================
// Mudar de página
function redirectTo(page) {
    if (!page) {
        console.error('Erro: Nome da página em falta');
        return;
    }
    window.location.href = page;
}

// Ver em que página estamos
function getCurrentPage() {
    var path = window.location.pathname;
    var pageName = path.split("/").pop();
    return pageName || 'index.html'; // Se não encontrar, volta para index
}

// Traduzir nome da página
function getTranslatedPage(currentPage) {
    if (!currentPage) {
        return 'index.html';
    }
    
    var pageName = currentPage.replace('.html', '');
    
    // indexOf retorna -1 se não encontrar (Procura o index da primeira instância de "pt")
    if (pageName.indexOf('pt') !== -1) {
        // Se tem 'pt', remove para versão inglesa
        return pageName.replace('pt', '') + '.html';
    } else {
        // Se não tem 'pt', adiciona para versão portuguesa
        return pageName + 'pt.html';
    }
}

// =================== DARK MODE ===================
// Mudar entre modo claro e escuro
function toggleDarkMode() {

    // Adiciona ou remove a classe dark-mode
    if (domElements.body.classList.contains('dark-mode')) {
        domElements.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', false);
        updateInterface();
    } else {
        domElements.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', true);
        updateInterface();
    }
    
    // Guarda a preferência

}

// Atualiza os ícones baseado no modo
function updateInterface() {
    currentSize = parseInt(getComputedStyle(domElements.body).getPropertyValue('font-size').trim());
    var isIncreasedFont = currentSize === 24;
    var isPortuguese = getCurrentPage().indexOf('pt') !== -1;
    var isDarkMode = domElements.body.classList.contains('dark-mode');


        if (isDarkMode) {
            domElements.logo.src = isPortuguese ? "svg/Logotipo_brancopt.svg" : "svg/Logotipo_branco.svg";
            domElements.accessibilityIcon.src = "svg/AccesibilityWhite.svg";
            domElements.hamburgerIcon.src = "svg/hamburgerWhite.svg";
            domElements.languageIcon.src = isPortuguese ? "svg/ENGWhite.svg" : "svg/PTWhite.svg";
            domElements.darkModeButton.textContent = isPortuguese ? "Modo Claro" : "Light Mode";
            domElements.fontSizeButton.textContent = isIncreasedFont ? 
                (isPortuguese ? "Reverter Fonte" : "Revert Font Size") : 
                (isPortuguese ? "Aumentar Fonte" : "Increase Font");    
            domElements.hero__image.src = "images/hero-dark.png";
        } else {
            domElements.logo.src = isPortuguese ? "svg/Logotipopt.svg" : "svg/Logotipo.svg";
            domElements.accessibilityIcon.src = "svg/Accesibility.svg";
            domElements.hamburgerIcon.src = "svg/hamburger.svg";
            domElements.languageIcon.src = isPortuguese ? "svg/ENG.svg" : "svg/PT.svg";
            domElements.darkModeButton.textContent = isPortuguese ? "Modo Escuro" : "Dark Mode";
            domElements.fontSizeButton.textContent = isIncreasedFont ? 
                (isPortuguese ? "Reverter Fonte" : "Revert Font Size") : 
                (isPortuguese ? "Aumentar Fonte" : "Increase Font");
            domElements.hero__image.src = "images/1920banner.png";
        } 
}

// =================== ACESSIBILIDADE ===================
var originalFontSize = '16px';

function toggleFontSize() {
    var currentSize = parseInt(getComputedStyle(domElements.body).getPropertyValue('font-size').trim());
    
    if (currentSize === parseInt(originalFontSize) || currentSize === 18) {
        setFontSizeForAllElements('24px');
        localStorage.setItem('fontSize', '24');
        updateInterface();

    } else if (currentSize === 24) {
        setFontSizeForAllElements(originalFontSize);
        localStorage.setItem('fontSize', '16');
        updateInterface();

    } else {
        console.error('Erro: Tamanho de fonte desconhecido');
    }
}

function setFontSizeForAllElements(size) {
    var elements = document.querySelectorAll('*');
    elements.forEach(function(element) {
        element.style.fontSize = size;
    });
}



// =================== MENUS ===================
// Abrir e fechar menus
function toggleMenu(menuToToggle, menuToClose) {
    // Fecha menu aberto
    if (menuToClose && menuToClose.classList.contains("open")) {
        menuToClose.classList.remove("open");
    }
    
    // Abre ou fecha menu selecionado
    if (menuToToggle) {
        menuToToggle.classList.toggle("open");
    }
}

// =================== SCROLL HORIZONTAL ===================
var isDown = false;
var startX;
var scrollLeft;

// Funções para arrastar imagens na horizontal
function handleMouseDown(event) {
    isDown = true;
    domElements.scrollContainer.classList.add('active');
    startX = event.pageX - domElements.scrollContainer.offsetLeft;
    scrollLeft = domElements.scrollContainer.scrollLeft;
}

function handleMouseUp() {
    isDown = false;
    domElements.scrollContainer.classList.remove('active');
}

function handleMouseMove(event) {
    if (!isDown) {
        return;
    }
    event.preventDefault();
    var x = event.pageX - domElements.scrollContainer.offsetLeft;
    var walk = (x - startX) * 1;
    domElements.scrollContainer.scrollLeft = scrollLeft - walk;
}
// =================== SEARCH BAR ===================
// Função para lidar com a pesquisa

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
            resultElement.classList.add('header__search-result');
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
    
    

});

// =================== EVENT LISTENERS ===================
// Quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    var isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        domElements.body.classList.add('dark-mode');
        updateInterface();
    }

    var isIncreasedFont = localStorage.getItem('fontSize') === '24'; 

    if(isIncreasedFont) {
        setFontSizeForAllElements('24px');
        updateInterface();
    }
});

// Menus
domElements.hamburgerIcon.addEventListener("click", function() {
    toggleMenu(domElements.hamburgerMenu, domElements.accessibilityBar);
});

domElements.accessibilityIcon.addEventListener("click", function() {
    toggleMenu(domElements.accessibilityBar, domElements.hamburgerMenu);
});

// Idioma
domElements.languageIcon.addEventListener("click", function() {
    var currentPage = getCurrentPage();
    var isPortuguese = currentPage.indexOf('pt') !== -1;
    
    localStorage.setItem('language', isPortuguese ? 'en' : 'pt');
    redirectTo(getTranslatedPage(currentPage));
});

// Scroll horizontal
domElements.scrollContainer.addEventListener('mousedown', handleMouseDown);
domElements.scrollContainer.addEventListener('mouseleave', handleMouseUp);
domElements.scrollContainer.addEventListener('mouseup', handleMouseUp);
domElements.scrollContainer.addEventListener('mousemove', handleMouseMove);

