//acessibilidade
const accessibilityIcon = document.getElementById("accessibilityIcon");
const accessibilityBar = document.getElementById("accessibilityBar");

accessibilityIcon.addEventListener("click", () => {

  accessibilityBar.classList.toggle("open");
});

function activateTextToSpeech() {
  alert("Função Text-to-Speech ativada!");
}

function increaseFontSize() {
  document.body.style.fontSize = "larger";
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

// Butoes de date (index)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.date-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'selected' class from sibling buttons
            button.parentElement.querySelectorAll('.date-button').forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            button.classList.add('selected');
            // Change content based on clicked button
            changeContent(button.getAttribute('data-id'));
        });
    });
});

// Butoes de travel
document.addEventListener('DOMContentLoaded', () => {
    const locationButtons = document.querySelectorAll('.location-button');
    const travelButtons = document.querySelectorAll('.travel-button');

    // Add event listeners to location buttons
    locationButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button, '.location-button');
        });
    });

    // Add event listeners to travel buttons
    travelButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button, '.travel-button');
        });
    });

    // Set default selections
    const defaultLocationButton = document.querySelector('.location-button[data-id="1"]');
    const defaultTravelButton = document.querySelector('.travel-button[data-id="3"]');
    if (defaultLocationButton) {
        defaultLocationButton.classList.add('selected');
    }
    if (defaultTravelButton) {
        defaultTravelButton.classList.add('selected');
    }
    changeContent(); // Update content based on default selections
});

function handleButtonClick(button, selector) {
    // Remove 'selected' class from sibling buttons within the same category
    document.querySelectorAll(selector).forEach(btn => btn.classList.remove('selected'));
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    // Change content based on clicked button
    changeContent();
}

function changeContent() {
    const info = document.getElementById('info');
    const selectedLocationButton = document.querySelector('.location-button.selected');
    const selectedTravelButton = document.querySelector('.travel-button.selected');

    let content = '';
    if (selectedLocationButton && selectedTravelButton) {
        const locationId = selectedLocationButton.getAttribute('data-id');
        const travelId = selectedTravelButton.getAttribute('data-id');

        if (locationId === '1' && travelId === '3') {
            content = `
                <div><svg class="icon"><!-- SVG for clock --></svg> 2h40 to 3h</div>
                <div><svg class="icon"><!-- SVG for money --></svg> 15€ to 16€</div>
                <div><svg class="icon"><!-- SVG for metro --></svg> From Airport Purple line to Campanhã</div>
                <div><svg class="icon"><!-- SVG for walking --></svg> 6min to Bus Station</div>
                <div><svg class="icon"><!-- SVG for Bus --></svg> Porto (Campanhã) to Viseu</div>
                <div>Metro tickets are bought on the Metro Station machines</div>
            `;
        } else if (locationId === '2' && travelId === '3') {
            content = `
                <div><svg class="icon"><!-- SVG for clock --></svg> 2h40 to 3h</div>
                <div><svg class="icon"><!-- SVG for money --></svg> 15€ to 16€</div>
                <div><svg class="icon"><!-- SVG for metro --></svg> From Airport Purple line to Oriente</div>
                <div><svg class="icon"><!-- SVG for walking --></svg> 10min to Bus Station</div>
                <div><svg class="icon"><!-- SVG for Bus --></svg> Lisboa (Oriente) to Viseu</div>
                <div>Metro tickets are bought on the Metro Station machines</div>
            `;
        } else if (locationId === '1' && travelId === '4') {
            content = `
                <div><svg class="icon"><!-- SVG for clock --></svg> 2h40 to 3h</div>
                <div><svg class="icon"><!-- SVG for money --></svg> 15€ to 16€</div>
                <div><svg class="icon"><!-- SVG for transfer --></svg> Direct transfer from Porto airport to Viseu</div>
            `;
        } else if (locationId === '2' && travelId === '4') {
            content = `
                <div><svg class="icon"><!-- SVG for clock --></svg> 2h40 to 3h</div>
                <div><svg class="icon"><!-- SVG for money --></svg> 15€ to 16€</div>
                <div><svg class="icon"><!-- SVG for transfer --></svg> Direct transfer from Lisboa airport to Viseu</div>
            `;
        }
    }
    info.innerHTML = content;
}