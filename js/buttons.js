// DOM Elements
var contentDiv = document.getElementById('content');
var buttons = document.querySelectorAll('.date-buttons__button');
var scrollContainer = document.querySelector('.scroll-horizontal-imagens');

// Dados dos eventos - EN
var eventsEN = {
    1: [
        { time: '20:00', title: 'Welcome Dinner', location: 'Pousada de Viseu' }
    ],
    2: [
        { time: '8:30', title: 'Registration & Coffee', location: 'Foyer Central Services' },
        { time: '9:00', title: 'Campus Tour', location: 'ESTGV' },
        { time: '10:00', title: 'Welcome and Opening', location: 'Aula Magna' },
        { time: '11:00', title: 'General Assembly', location: 'CAFAC' },
        { time: '11:00', title: 'Parallel Sessions', location: 'ESTGV' },
        { time: '13:00', title: 'Lunch', location: 'CAFAC' },
        { time: '14:30', title: 'General Assembly', location: 'Aula Magna' },
        { time: '16:00', title: 'Coffee Break', location: 'CAFAC' },
        { time: '16:30', title: 'Parallel Sessions', location: 'ESTGV' },
        { time: '19:00', title: 'Reception', location: 'Câmara Municipal de Viseu' },
        { time: '19:00', title: 'Dinner', location: 'LUSOVINI - Nelas' }
    ],
    3: [
        { time: '8:30', title: 'Registration & Coffee', location: 'Foyer Central Services' },
        { time: '9:00', title: 'Parallel Sessions', location: 'ESTGV' },
        { time: '10:30', title: 'Coffee Break', location: 'CAFAC' },
        { time: '11:00', title: 'Parallel Sessions', location: 'ESTGV' },
        { time: '13:00', title: 'Lunch', location: 'ESTGV' },
        { time: '14:30', title: 'Parallel Sessions', location: 'ESTGV' },
        { time: '15:30', title: 'Coffee Break', location: 'CAFAC' },
        { time: '16:30', title: 'Parallel Sessions', location: 'ESTGV' },
        { time: '17:30', title: 'Closing Ceremony', location: 'Aula Magna' },
        { time: '20:00', title: 'Dinner', location: 'Quinta da Magarenha' }
    ],
    4: [
        { time: '8:30', title: 'Visit to S. Pedro do Sul', location: '???' }
    ]
};

// Dados dos eventos - PT
var eventsPT = {
    5: [
        { time: '20:00', title: 'Jantar de Boas-vindas', location: 'Pousada de Viseu' }
    ],
    6: [
        { time: '8:30', title: 'Registo e Café', location: 'Foyer Serviços Centrais' },
        { time: '9:00', title: 'Visita ao Campus', location: 'ESTGV' },
        { time: '10:00', title: 'Boas-vindas e Abertura', location: 'Aula Magna' },
        { time: '11:00', title: 'Assembleia Geral', location: 'CAFAC' },
        { time: '11:00', title: 'Sessões Paralelas', location: 'ESTGV' },
        { time: '13:00', title: 'Almoço', location: 'CAFAC' },
        { time: '14:30', title: 'Assembleia Geral', location: 'Aula Magna' },
        { time: '16:00', title: 'Pausa para Café', location: 'CAFAC' },
        { time: '16:30', title: 'Sessões Paralelas', location: 'ESTGV' },
        { time: '19:00', title: 'Receção', location: 'Câmara Municipal de Viseu' },
        { time: '19:00', title: 'Jantar', location: 'LUSOVINI - Nelas' }
    ],
    7: [
        { time: '8:30', title: 'Registo e Café', location: 'Foyer Serviços Centrais' },
        { time: '9:00', title: 'Sessões Paralelas', location: 'ESTGV' },
        { time: '10:30', title: 'Pausa para Café', location: 'CAFAC' },
        { time: '11:00', title: 'Sessões Paralelas', location: 'ESTGV' },
        { time: '13:00', title: 'Almoço', location: 'ESTGV' },
        { time: '14:30', title: 'Sessões Paralelas', location: 'ESTGV' },
        { time: '15:30', title: 'Pausa para Café', location: 'CAFAC' },
        { time: '16:30', title: 'Sessões Paralelas', location: 'ESTGV' },
        { time: '17:30', title: 'Cerimónia de Encerramento', location: 'Aula Magna' },
        { time: '20:00', title: 'Jantar', location: 'Quinta da Magarenha' }
    ],
    8: [
        { time: '8:30', title: 'Visita a S. Pedro do Sul', location: '???' }
    ]
};

// Scroll Positions
var SCROLL_POSITIONS = {
    1: 1, // 31 Mar
    2: 330,  // 01 April
    3: 3905, // 02 April
    4: 10000 // 03 April
};

// Botões de navegação 
var PortoBtn = document.getElementById('PortoBtn');
var LisboaBtn = document.getElementById('LisboaBtn');
var BusBtn = document.getElementById('BusBtn');
var TransferBtn = document.getElementById('TransferBtn');

// Estado de seleção dos botões
var LocationBtnSelected;
var TravelBtnSelected;

// Painéis de informação
var PortoBusInfo = document.getElementById('PortoBus');
var LisboaBusInfo = document.getElementById('LisboaBus');
var PortoTransferInfo = document.getElementById('PortoTransfer');
var LisboaTransferInfo = document.getElementById('LisboaTransfer');

// Configurar estado inicial
PortoBtn.classList.add('selected');
BusBtn.classList.add('selected');
LocationBtnSelected = 'Porto';
TravelBtnSelected = 'Bus';

// Esconder painéis não padrão
PortoTransferInfo.classList.add('hide');
LisboaTransferInfo.classList.add('hide');
LisboaBusInfo.classList.add('hide');



// Altera a cor do botão e atualiza o estado quando um botão é clicado
function changeBackgroundColor(element) {
    var elementId = element.getAttribute('id');
    
    // Remove seleção do botão oposto
    elementId === 'PortoBtn' ? LisboaBtn.classList.remove('selected') :
        elementId === 'LisboaBtn' ? PortoBtn.classList.remove('selected') :
            elementId === 'BusBtn' ? TransferBtn.classList.remove('selected') :
                elementId === 'TransferBtn' ? BusBtn.classList.remove('selected') : null;

    // Atualiza estado de seleção
    elementId === 'PortoBtn' ? LocationBtnSelected = 'Porto' :
        elementId === 'LisboaBtn' ? LocationBtnSelected = 'Lisboa' :
            elementId === 'BusBtn' ? TravelBtnSelected = 'Bus' :
                elementId === 'TransferBtn' ? TravelBtnSelected = 'Transfer' : null;

    // Aplica seleção ao botão clicado
    changeInfo();
    element.classList.add('selected');

    // Atualiza visibilidade dos painéis desktop
    if (elementId === 'PortoBtn') {
        document.getElementById('fromPortoDesktop').classList.remove('hide');
        document.getElementById('fromLisbonDesktop').classList.add('hide');
    } else if (elementId === 'LisboaBtn') {
        document.getElementById('fromPortoDesktop').classList.add('hide');
        document.getElementById('fromLisbonDesktop').classList.remove('hide');
    }
}

// Atualiza a visibilidade dos painéis de informação baseado na seleção atual
function changeInfo() {
    LocationBtnSelected === 'Porto' && TravelBtnSelected === 'Bus' ? (
        PortoBusInfo.classList.remove('hide'),
        PortoTransferInfo.classList.add('hide'),
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

// Função para criar carta 
function createEventCard(event, isPortuguese) {
    var targetPage = isPortuguese ? 'indexEventpt.html' : 'indexEvent.html';
    return `
        <div onclick="redirectTo('${targetPage}')" class="cardsPrograma">
            <p>${event.time}</p>
            <h3>${event.title}</h3>
            <p>${event.location} <img src="svg/local.svg"></p>
        </div>
    `;
}

function changeContent(day, button) {
    if (!day || !button) return;
    
    var isPortuguese = day > 4;
    var events = isPortuguese ? eventsPT[day] : eventsEN[day];
    
    if (events) {
        contentDiv.innerHTML = `<div>${
            events.map(event => createEventCard(event, isPortuguese)).join('')
        }</div>`;
        contentDiv.style.visibility = 'visible';
    }
    
    buttons.forEach(btn => btn.classList.remove('date-buttons__button--selected'));
    button.classList.add('date-buttons__button--selected');
    
    if(isPortuguese)
    {
        day = day - 4;
    }

    if (SCROLL_POSITIONS[day]) {
        scrollContainer.scrollLeft = SCROLL_POSITIONS[day];
    }
}