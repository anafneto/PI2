// Variáveis globais para controlo do tamanho da fonte
var originalFontSize = window.getComputedStyle(document.body).fontSize;

// Função para alternar tamanho da fonte
function toggleFontSize() {
    var root = document.documentElement;
    var fontSizeButton = document.getElementById("fontSizeButton");
    var currentFontSize = getComputedStyle(root).getPropertyValue('--base-font-size').trim();

    // Verificar tamanho atual e alternar
    if (currentFontSize === '16px') {
        root.style.setProperty('--base-font-size', '24px');
        fontSizeButton.textContent = "Resize Font";
    } else {
        root.style.setProperty('--base-font-size', '16px');
        fontSizeButton.textContent = "Increase Font"
    }
}

// Função para navegação entre páginas
function redirectTo(page) {
    window.location.href = page;
}

// Gestão dos menus
var hamburgerIcon = document.getElementById("hamburgerIcon");
var hamburgerMenu = document.getElementById("hamburgerMenu");
var accessibilityIcon = document.getElementById("accessibilityIcon");
var accessibilityBar = document.getElementById("accessibilityBar");
var languageIcon = document.getElementById("languageIcon");

// Ouvinte para o menu hamburger
hamburgerIcon.addEventListener("click", function() {
    if (accessibilityBar.classList.contains("open")) {
        accessibilityBar.classList.remove("open");
    }
    hamburgerMenu.classList.toggle("open");
});

// Ouvinte para o menu de acessibilidade
accessibilityIcon.addEventListener("click", function() {
    if (hamburgerMenu.classList.contains("open")) {
        hamburgerMenu.classList.remove("open");
    }
    accessibilityBar.classList.toggle("open");
});

// Pesquisa e resultados
document.getElementById('searchbar').addEventListener('input', function() {
    var pesquisa = this.value.toLowerCase();
    var contentorResultados = document.getElementById('searchResults');
    
    // Fechar menus se estiverem abertos
    if (accessibilityBar.classList.contains("open")) {
        accessibilityBar.classList.remove("open");
    }
    if (hamburgerMenu.classList.contains("open")) {
        hamburgerMenu.classList.remove("open");
    }

    // Limpar resultados anteriores
    contentorResultados.innerHTML = '';

    // Verificar se existe texto na pesquisa
    if (pesquisa) {
        try {
            var resultados = procurarItems(pesquisa);
            if (resultados.length > 0) {
                resultados.forEach(function(resultado) {
                    var elementoResultado = document.createElement('div');
                    elementoResultado.classList.add('search-result');
                    elementoResultado.textContent = resultado.name;
                    elementoResultado.addEventListener('click', function() {
                        window.location = resultado.url;
                    });
                    contentorResultados.appendChild(elementoResultado);
                });
                contentorResultados.style.display = 'block';
            } else {
                contentorResultados.style.display = 'none';
            }
        } catch (erro) {
            console.error('Erro na pesquisa:', erro);
            contentorResultados.style.display = 'none';
        }
    } else {
        contentorResultados.style.display = 'none';
    }
});

// Items para pesquisa
function searchItems(pesquisa) {
    var items = [
        { name: 'Viagens Porto & Lisboa', url: 'indextravel.html#porto' },
        { name: 'EUNICE Universidade Europeia', url: 'index.html#eunice' },
        { name: 'Assembleia Geral', url: 'index.html#assembly' },
        { name: 'Descrição do Evento', url: 'indexEventDescription.html#event' },
        { name: 'Instagram', url: 'https://www.instagram.com/eunice_uni_/' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/74565706/' },
        { name: 'YouTube', url: 'https://www.youtube.com/channel/UCXmj6Fg2Nev0Y12MbtcvFqg' },
        { name: 'Transportes', url: 'indextravel.html#transfer' },
        { name: 'Contactos', url: '#Contactos' },
        { name: 'Redes Sociais', url: '#redes-sociais' },
        { name: 'Programa Eunice', url: 'index.html#Programa' }
    ];
    
    return items.filter(function(item) {
        return item.name.toLowerCase().includes(pesquisa);
    });
}



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


// Mapa de páginas (pt-en) e lógica para o butão

