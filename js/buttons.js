// Travel btns
var PortoBtn = document.getElementById('PortoBtn');
var LisboaBtn = document.getElementById('LisboaBtn');
var BusBtn = document.getElementById('BusBtn');
var TransferBtn = document.getElementById('TransferBtn');
var datebutton = document.getElementsByClassName('date-button');
var LocationBtnSelected;
var TravelBtnSelected;

// Travel info
var PortoBusInfo = document.getElementById('PortoBus');
var LisboaBusInfo = document.getElementById('LisboaBus');
var PortoTransferInfo = document.getElementById('PortoTransfer');
var LisboaTransferInfo = document.getElementById('LisboaTransfer');

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
    var elementId = element.getAttribute('id');
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

    // Show or hide the appropriate divs
    if (elementId === 'PortoBtn') {
        document.getElementById('fromPortoDesktop').classList.remove('hide');
        document.getElementById('fromLisbonDesktop').classList.add('hide');
    } else if (elementId === 'LisboaBtn') {
        document.getElementById('fromPortoDesktop').classList.add('hide');
        document.getElementById('fromLisbonDesktop').classList.remove('hide');
    }
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


function changeContent(id) {
    var contentElement = document.getElementById('content');
    contentElement.textContent = "Conteúdo para o botão com id: " + id;
}

var buttons = document.querySelectorAll('.date-button');

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', function () {
        var siblings = button.parentElement.querySelectorAll('.date-button');
        for (var j = 0; j < siblings.length; j++) {
            siblings[j].classList.remove('selected');
        }
        button.classList.add('selected');
        changeContent(button.getAttribute('data-id'));
    });
}



function changeContent(day, button) {
    // Esconde os botões de data
    var buttons = document.querySelectorAll('.date-button');
    var contentDiv = document.getElementById('content');
    
    // Define o conteúdo com base no dia clicado
    var content = {
        1: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>20:00</p>
                <h3>Welcome Dinner</h3>
                <p>Pousada de Viseu <img src="svg/local.svg"></p>
            </div>
            </div>`,
            
        2: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>8:30</p>
            <h3>Registration & Coffee</h3>
            <p>Foyer Central Services <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>9:00</p>
            <h3>Campus Tour</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>10:00</p>
            <h3>Welcome and Opening</h3>
            <p>Aula Magna <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>11:00</p>
            <h3>General Assembly</h3>
            <p>CAFAC <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>11:00</p>
            <h3>Parallel Sessions</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>13:00</p>
            <h3>Lunch</h3>
            <p>CAFAC <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>14:30</p>
            <h3>General Assembly</h3>
            <p>Aula Magna <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>16:00</p>
            <h3>Coffee Break</h3>
            <p>CAFAC <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>16:30</p>
            <h3>Parallel Sessions</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>19:00</p>
            <h3>Reception</h3>
            <p>Câmara Municipal de Viseu <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>19:00</p>
            <h3>Dinner</h3>
            <p>LUSOVINI - Nelas <img src="svg/local.svg"></p>
        </div>
             
            </div>`,
        3: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>8:30</p>
            <h3>Registration & Coffee</h3>
            <p>Foyer Central Services <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>9:00</p>
            <h3>Parallel Sessions</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>10:30</p>
            <h3>Coffee Break</h3>
            <p>CAFAC <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>11:00</p>
            <h3>Parallel Sessions</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>13:00</p>
            <h3>Lunch</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>14:30</p>
            <h3>Parallel Sessions</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>15:30</p>
            <h3>Coffee Break</h3>
            <p>CAFAC <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>16:30</p>
            <h3>Parallel Sessions</h3>
            <p>ESTGV <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>17:30</p>
            <h3>Closing Ceremony</h3>
            <p>Aula Magna <img src="svg/local.svg"></p>
        </div>

        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
            <p>20:00</p>
            <h3>Dinner</h3>
            <p>Quinta da Magarenha <img src="svg/local.svg"></p>
        </div>
            </div>`,
        4: `<div>
        <div onclick="redirectTo('indexEventDescription.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Visit to S. Pedro do Sul</h3>
                <p>??? <img src="svg/local.svg"></p>
            </div>
            
            </div>`,
                        5: `<div>
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                    <p>20:00</p>
                    <h3>Jantar de Boas-vindas</h3>
                    <p>Pousada de Viseu <img src="svg/local.svg"></p>
                </div>
                </div>`,
                
            6: `<div>
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registo e Café</h3>
                <p>Foyer Serviços Centrais <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>9:00</p>
                <h3>Visita ao Campus</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>10:00</p>
                <h3>Boas-vindas e Abertura</h3>
                <p>Aula Magna <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>11:00</p>
                <h3>Assembleia Geral</h3>
                <p>CAFAC <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>11:00</p>
                <h3>Sessões Paralelas</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>13:00</p>
                <h3>Almoço</h3>
                <p>CAFAC <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>14:30</p>
                <h3>Assembleia Geral</h3>
                <p>Aula Magna <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>16:00</p>
                <h3>Pausa para Café</h3>
                <p>CAFAC <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>16:30</p>
                <h3>Sessões Paralelas</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>19:00</p>
                <h3>Receção</h3>
                <p>Câmara Municipal de Viseu <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>19:00</p>
                <h3>Jantar</h3>
                <p>LUSOVINI - Nelas <img src="svg/local.svg"></p>
            </div>
                </div>`,
            7: `<div>
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>8:30</p>
                <h3>Registo e Café</h3>
                <p>Foyer Serviços Centrais <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>9:00</p>
                <h3>Sessões Paralelas</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>10:30</p>
                <h3>Pausa para Café</h3>
                <p>CAFAC <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>11:00</p>
                <h3>Sessões Paralelas</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>13:00</p>
                <h3>Almoço</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>14:30</p>
                <h3>Sessões Paralelas</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>15:30</p>
                <h3>Pausa para Café</h3>
                <p>CAFAC <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>16:30</p>
                <h3>Sessões Paralelas</h3>
                <p>ESTGV <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>17:30</p>
                <h3>Cerimónia de Encerramento</h3>
                <p>Aula Magna <img src="svg/local.svg"></p>
            </div>
    
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                <p>20:00</p>
                <h3>Jantar</h3>
                <p>Quinta da Magarenha <img src="svg/local.svg"></p>
            </div>
                </div>`,
            8: `<div>
            <div onclick="redirectTo('indexEventDescriptionpt.html')" class="cardsPrograma">
                    <p>8:30</p>
                    <h3>Visita a S. Pedro do Sul</h3>
                    <p>??? <img src="svg/local.svg"></p>
                </div>
                </div>`,
        };

    // Atualiza o conteúdo da div com HTML
    contentDiv.innerHTML = content[day];
    contentDiv.style.visibility = 'visible'; // Torna a div visível
    
    // Adiciona a classe 'selected' para o botão que foi clicado
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
    
    button.classList.add('selected');

    // Scroll the scrollHorizontalImagens element
    var scrollPositions = {
        2: 330, // 01 Abril
        3: 3905, // 02 Abril
        4: 10000, // 03 Abril
    };
    scrollContainer.scrollLeft = scrollPositions[day];
}