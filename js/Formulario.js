'use strict';

function Formulario(props) {
  return React.createElement(
    "form",
    { onSubmit: (e) => { e.preventDefault(); alert('Formulário enviado!'); } },
    React.createElement(
      "div",
      { className: "left-panel" },
      null,
      React.createElement("label", null, "Nome:"),
      React.createElement("input", { type: "text", name: "nome", placeholder: "Digite seu nome" })
    ),
    React.createElement(
      "div",
      { className: "left-panel" },
      null,
      React.createElement("label", null, "Email:"),
      React.createElement("input", { type: "email", name: "email", placeholder: "Digite seu email" })
    ),
    React.createElement(
      "div",
      { className: "form-section" },
      null,
      React.createElement("label", null, "Mensagem:"),
      React.createElement("textarea", { name: "mensagem", placeholder: "Digite sua mensagem" })
    ),
    React.createElement("button", { type: "submit" }, "Enviar")
  );
}

function App() {
  return React.createElement("div", null,
    React.createElement("h1", null, "Formulário de Contato"),
    React.createElement(Formulario)
  );
}

ReactDOM.render(
    React.createElement(App), 
    document.getElementById('formulario-container')
  );