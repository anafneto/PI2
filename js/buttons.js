// DOM Elements
var contentDiv = document.getElementById('content');
var buttons = document.querySelectorAll('.date-buttons__button');
var scrollContainer = document.querySelector('.scroll-horizontal-imagens');

// Dados dos eventos - EN 
// IN PARALLEL SECTIONS, TIME CAN BE USED FOR LINK. CHANGE FOR RELEASE :)
var eventsEN = {
    1: [
        { time: '20:00', title: 'Welcome Dinner', location: 'Pousada de Viseu' }
    ],
    2: [
        { time: '8:30', title: 'Registration & Coffee', location: 'Foyer Central Services' },
        { time: '9:00', title: 'Campus Tour', location: 'ESTGV' },
        { time: '10:00', title: 'Welcome and Opening', location: 'Aula Magna' },
        { time: '11:00', title: 'General Assembly', location: 'CAFAC' },
        { 
            time: '11:00', 
            title: 'Parallel Sessions', 
            location: 'ESTGV',
            parallel: [
                { time: 'More info', title: 'Session B: Web Dev', location: 'Room B1' },
                { time: 'More info', title: 'Session C: Mobile', location: 'Room C1' }
            ]
        },
        { time: '13:00', title: 'Lunch', location: 'CAFAC' },
        { time: '14:30', title: 'General Assembly', location: 'Aula Magna' },
        { time: '16:00', title: 'Coffee Break', location: 'CAFAC' },
        { 
            time: '16:30', 
            title: 'Parallel Sessions', 
            location: 'ESTGV',
            parallel: [
                { time: '', title: 'Session 2A – EUNICE General Assembly', location: 'Senate Hall 4.40 | Main Building (HG)' },
                { time: '', title: 'Session 2B | REUNICE Meeting', location: '7th floor | IKMZ' },
                { time: '', title: 'Session 2C | PMT Meeting', location: 'Room 4.04 | Main Building (HG)' },
                { time: '', title: 'Session 2D | MTF & WP3 Meeting', location: 'Room 4.29 | Main Building (HG)' },
                { time: '', title: 'Session 2E | Language Group Meeting', location: 'Room 0.16 | Main Building (HG)' }
            ]
        },
        { time: '19:00', title: 'Reception', location: 'Câmara Municipal de Viseu' },
        { time: '19:00', title: 'Dinner', location: 'LUSOVINI - Nelas' }
    ],
    3: [
        { time: '8:30', title: 'Registration & Coffee', location: 'Foyer Central Services' },
        { 
            time: '9:00', 
            title: 'Parallel Sessions', 
            location: 'ESTGV',
            parallel: [
                { time: '', title: 'Sample Session A', location: 'Room A1' },
                { time: '', title: 'Sample Session B', location: 'Room B1' },
                { time: '', title: 'Sample Session C', location: 'Room C1' }
            ]
        },
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
        { 
            time: '16:30', 
            title: 'Sessões Paralelas', 
            location: 'ESTGV',
            parallel: [
                { time: '', title: 'Sessão 2A – Assembleia Geral EUNICE', location: 'Sala do Senado 4.40 | Edifício Principal (HG)' },
                { time: '', title: 'Sessão 2B | Reunião REUNICE', location: '7º andar | IKMZ' },
                { time: '', title: 'Sessão 2C | Reunião PMT', location: 'Sala 4.04 | Edifício Principal (HG)' },
                { time: '', title: 'Sessão 2D | Reunião MTF & WP3', location: 'Sala 4.29 | Edifício Principal (HG)' },
                { time: '', title: 'Sessão 2E | Reunião do Grupo de Línguas', location: 'Sala 0.16 | Edifício Principal (HG)' }
            ]
        },
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
    var isParallel = event.title.toLowerCase().includes('parallel') || 
                     event.title.toLowerCase().includes('paralela');

        if(isParallel) {
            return `
                <div class="cardsPrograma" id="Programa">
                    <div class="cardsPrograma__main" onclick="toggleParallel(this, '.cardsPrograma__separator, .cardsPrograma__parallel')">
                        <div class="cardsPrograma__content">
                            <p>${event.time}</p>
                            <h3>${event.title}</h3>
                            <p>${event.location} <img src="svg/local.svg" alt="location icon"></p>
                        </div>
                        <svg viewBox="0 0 256 256" class="cardsPrograma__arrowDown">
                        <path class="st0" d="M254.3,69.5c0-2.5-1-5-2.9-7-3.8-3.8-10.1-3.8-13.9,0l-109.7,109.7L18.2,62.6c-3.8-3.8-10.1-3.8-13.9,0-3.8,3.8-3.8,10.1,0,13.9l116.6,116.6c3.8,3.8,10.1,3.8,13.9,0l116.6-116.6c1.9-1.9,2.9-4.4,2.9-7Z"/>
                        </svg>
                    </div>
                    <div class="cardsPrograma__separator hide"></div>
                    <div class="cardsPrograma__parallel hide">
                        ${event.parallel ? event.parallel.map(session => `
                            <div class="cardsPrograma__session">
                                <p class="link-style" onclick="redirectTo('${targetPage}')">${session.time}</p>
                                <h4>${session.title}</h4>
                                <p>${session.location}</p>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>`;
        } else {
        return `
            <div onclick="redirectTo('${targetPage}')" class="cardsPrograma" id="Programa">
                <p>${event.time}</p>
                <h3>${event.title}</h3>
                <p>${event.location} <img src="svg/local.svg"></p>
            </div>
        `; 
    }
}

function toggleParallel(element, selectors) {
    var parent = element.closest('.cardsPrograma');
    var arrow = element.querySelector('.cardsPrograma__arrowDown');
    var elementsToToggle = parent.querySelectorAll(selectors);
    
    elementsToToggle.forEach(function(el) {
        if(el.classList.contains('hide')) {
            el.classList.remove('hide');
            arrow.style.transform = 'rotate(180deg)';
        } else {
            el.classList.add('hide');
            arrow.style.transform = 'rotate(0deg)';
        }
    });
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