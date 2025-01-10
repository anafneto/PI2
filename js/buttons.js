// Travel btns
const PortoBtn = document.getElementById('PortoBtn');
const LisboaBtn = document.getElementById('LisboaBtn');
const BusBtn = document.getElementById('BusBtn');
const TransferBtn = document.getElementById('TransferBtn');
const datebutton = document.getElementsByClassName('date-button');
let LocationBtnSelected;
let TravelBtnSelected;

// Travel info
const PortoBusInfo = document.getElementById('PortoBus');
const LisboaBusInfo = document.getElementById('LisboaBus');
const PortoTransferInfo = document.getElementById('PortoTransfer');
const LisboaTransferInfo = document.getElementById('LisboaTransfer');

// Set Defaults
PortoBtn.classList.add('selected');
BusBtn.classList.add('selected');
LocationBtnSelected = 'Porto';
TravelBtnSelected = 'Bus';

// Hide all but Default Info
PortoTransferInfo.classList.add('hide');
LisboaTransferInfo.classList.add('hide');
LisboaBusInfo.classList.add('hide');


function changeBackgroundColor(element) {
    const elementId = element.getAttribute('id');
    // Remove color from opposite btn
    elementId === 'PortoBtn' ? LisboaBtn.classList.remove('selected') :
    elementId === 'LisboaBtn' ? PortoBtn.classList.remove('selected') :
    elementId === 'BusBtn' ? TransferBtn.classList.remove('selected') :
    elementId === 'TransferBtn' ? BusBtn.classList.remove('selected') : null;

    // Keep info on selected btns
    elementId === 'PortoBtn' ? LocationBtnSelected = 'Porto':
    elementId === 'LisboaBtn' ? LocationBtnSelected = 'Lisboa':
    elementId === 'BusBtn' ? TravelBtnSelected = 'Bus' :
    elementId === 'TransferBtn' ? TravelBtnSelected = 'Transfer' : null;

    // Add color to selected btn
    changeInfo();
    element.classList.add('selected');
}

function changeInfo() {

    LocationBtnSelected === 'Porto' && TravelBtnSelected === 'Bus' ? (
        PortoBusInfo.classList.remove('hide'),        PortoTransferInfo.classList.add('hide'),
        LisboaTransferInfo.classList.add('hide'),
        LisboaBusInfo.classList.add('hide')
    ) :
    LocationBtnSelected === 'Porto' && TravelBtnSelected === 'Transfer' ? (
        PortoBusInfo.classList.add('hide'),  
        PortoTransferInfo.classList.remove('hide'),
        LisboaTransferInfo.classList.add('hide'),
        LisboaBusInfo.classList.add('hide')
    ) :
    LocationBtnSelected === 'Lisboa' && TravelBtnSelected === 'Bus' ? (
        PortoBusInfo.classList.add('hide'),  
        PortoTransferInfo.classList.add('hide'),
        LisboaTransferInfo.classList.add('hide'),
        LisboaBusInfo.classList.remove('hide')
    ) :
    LocationBtnSelected === 'Lisboa' && TravelBtnSelected === 'Transfer' ? (
        PortoBusInfo.classList.add('hide'),  
        PortoTransferInfo.classList.add('hide'),
        LisboaTransferInfo.classList.remove('hide'),
        LisboaBusInfo.classList.add('hide')
    ) : null;
    
}


// ESTA PRÓXIMA FUNÇÃO DEVE SER MODIFICADA  ehehxd

function changeContent()
{
// Different syntax, same logic - Date buttons
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
})}

function changeContent(day, button) {
    // Esconde os botões de data
    const buttons = document.querySelectorAll('.date-button');
    const contentDiv = document.getElementById('content');
    
    // Define o conteúdo com base no dia clicado
    const content = {
        1: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registration & Coffee</h3>
                <p>Foyer Central Services <img src="svg/local.svg"></p>
            </div>
             <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registration & Coffee</h3>
                <p>Foyer Central Services <img src="svg/local.svg"></p>
            </div>
            </div>`,
            
        2: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>9:30</p>
                <h3>Registration & Coffee</h3>
                <p>Foyer Central Services <img src="svg/local.svg"></p>
            </div>
             
            </div>`,
        3: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registration & Coffee</h3>
                <p>Foyer Central Services <img src="svg/local.svg"></p>
            </div>
             <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registration & Coffee</h3>
                <p>Foyer Central Services <img src="svg/local.svg"></p>
            </div>
            <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registration & Coffee</h3>
                <p>Foyer Central Services <img src="svg/local.svg"></p>
            </div>
            </div>`,
        4: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registration & Coffee</h3>
                <p>Foyer Central Services <img src="svg/local.svg"></p>
            </div>
            
            </div>`,
    };

    // Atualiza o conteúdo da div com HTML
    contentDiv.innerHTML = content[day];
    contentDiv.style.visibility = 'visible'; // Torna a div visível
    
    // Adiciona a classe 'selected' para o botão que foi clicado
    buttons.forEach(button => {
            button.classList.remove('selected');
    });
    button.classList.add("selected");
}