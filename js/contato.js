//NOME
const inputNome = document.querySelector("#nome");
let erroNome;

inputNome.addEventListener("focus", ()=>{
    inputNome.setAttribute("style","outline-color: #ff0000;");
})

inputNome.addEventListener("keyup", ()=>{
    const lblNome = document.querySelector("label[for='nome']");

    if(inputNome.value.length ==='' || inputNome.value.length < 5){
        inputNome.setAttribute("style","outline-color: #ff0000;");
        lblNome.setAttribute("style","color: #ff0000;");

    }else{
        inputNome.setAttribute("style","outline-color: #00ff00;");
        lblNome.setAttribute("style","color: #00ff00;");
    }
});
function validateInputNome() {
    const input = document.getElementById('nome').value;
    const errorMsg = document.getElementById('errorMsgNome');

    if (input.length < 5) {
      errorMsg.innerText = 'O campo "Nome" deve ter mais de 5 dígitos.';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }
  }

//SEGUNDO NOME
const inputSobrenome = document.querySelector("#sobrenome");

    inputSobrenome.addEventListener("focus", ()=>{
    inputSobrenome.setAttribute("style","outline-color: #ff0000;");
})

    inputSobrenome.addEventListener("keyup", ()=>{

    const sobrenome = document.querySelector("label[for='sobrenome']");

    if(inputSobrenome.value.length === "" || inputSobrenome.value.length < 5){
        inputSobrenome.setAttribute("style","outline-color: #ff0000;");
        sobrenome.setAttribute("style","color: #ff0000;");
    }else{
        inputSobrenome.setAttribute("style","outline-color: #00ff00;");
        sobrenome.setAttribute("style","color: #00ff00;");
    }
});

function validateInputSobrenome() {
    const input = document.getElementById('sobrenome').value;
    const errorMsg = document.getElementById('errorMsgSobrenome');

    if (input.length < 5) {
      errorMsg.innerText = 'O campo "Sobrenome" deve ter mais de 5 dígitos.';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }
  }

//E-MAIL
const inputEmail = document.querySelector("#email");
inputEmail.addEventListener("focus", ()=>{
    inputEmail.setAttribute("style","outline-color: #ff0000;");
})

inputEmail.addEventListener("keyup", ()=>{

    const lblEmail = document.querySelector("label[for='email']");
    if(inputEmail.value.length < 5){
        inputEmail.setAttribute("style","outline-color: #ff0000;");
        lblEmail.setAttribute("style","color: #ff0000;");
    }else{
        inputEmail.setAttribute("style","outline-color: #00ff00;");
        lblEmail.setAttribute("style","color: #00ff00;");
    }
});

function validateInputEmail() {
    const input = document.getElementById('email').value;
    const errorMsg = document.getElementById('errorMsgEmail');

    if (input.length < 5) {
      errorMsg.innerText = 'O campo "Email" deve ter mais de 5 dígitos.';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }
  }


    const inputSenha = document.querySelector("#senha");
    inputSenha.addEventListener("focus", ()=>{
    });
    inputSenha.setAttribute("style","outline-color: #ff0000;");

    inputSenha.addEventListener("keyup", ()=>{

    const lblSenha = document.querySelector("label[for='senha']");
    if(inputSenha.value.length > 6){
        inputSenha.setAttribute("style","outline-color: #00ff00;");
        lblSenha.setAttribute("style","color: #00ff00;");
    }else{
        inputSenha.setAttribute("style","outline-color: #ff0000;");
        lblSenha.setAttribute("style","color: #ff0000;");
    }
});

    function validateInputSenha() {
    const input = document.getElementById('senha').value;
    const errorMsg = document.getElementById('errorMsgSenha');

    if (input.length < 5) {
      errorMsg.innerText = 'O campo "Senha" deve ter mais de 5 dígitos.';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }
  }

const inputTelefone = document.querySelector("#telefone");
inputTelefone.addEventListener("focus", ()=>{
    inputTelefone.setAttribute("style","outline-color: #ff0000;");
})

inputTelefone.addEventListener("keyup", ()=>{

    const lblTelefone = document.querySelector("label[for='telefone']");
    if(inputTelefone.value.length < 8){
        inputTelefone.setAttribute("style","outline-color: #ff0000;");
        lblTelefone.setAttribute("style","color: #ff0000;");
    }else{
        inputTelefone.setAttribute("style","outline-color: #00ff00;");
        lblTelefone.setAttribute("style","color: #00ff00;");
    }
})

function validateInputTelefone() {
    const input = document.getElementById('telefone').value;
    const errorMsg = document.getElementById('errorMsgTelefone');

    if (input.length < 5) {
      errorMsg.innerText = 'O campo "Telefone" deve ter mais de 5 dígitos.';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }
  }

  const inputCPF = document.querySelector("#cpf");
  inputCPF.addEventListener("focus", ()=>{
      inputCPF.setAttribute("style","outline-color: #ff0000;");
  })
  
  inputCPF.addEventListener("keyup", ()=>{
  
      const lblcpf = document.querySelector("label[for='cpf']");
      if(inputCPF.value.length < 11){
          inputCPF.setAttribute("style","outline-color: #ff0000;");
          lblcpf.setAttribute("style","color: #ff0000;");
      }else{
          inputCPF.setAttribute("style","outline-color: #00ff00;");
          lblcpf.setAttribute("style","color: #00ff00;");
      }
  })
  
  function validateInputcpf() {
      const input = document.getElementById('cpf').value;
      const errorMsg = document.getElementById('errorMsgcpf');
  
      if (input.length < 11) {
        errorMsg.innerText = 'O campo "CPF" deve ter mais de 11 dígitos.';
        errorMsg.style.display = 'block';
      } else {
        errorMsg.style.display = 'none';
      }
    }
  
  
  const inputDatanasc = document.querySelector("#datanasc");
  inputDatanasc.addEventListener("focus", ()=>{
      inputDatanasc.setAttribute("style","outline-color: #ff0000;");
  })
  
  inputDatanasc.addEventListener("keyup", ()=>{
  
      const lbldatanasc = document.querySelector("label[for='datanasc']");
      if(inputDatanasc.value.length < 10){
          inputDatanasc.setAttribute("style","outline-color: #ff0000;");
          lbldatanasc.setAttribute("style","color: #ff0000;");
      }else{
          inputDatanasc.setAttribute("style","outline-color: #00ff00;");
          lbldatanasc.setAttribute("style","color: #00ff00;");
      }
  })
  
  function validateInputdatanasc() {
      const input = document.getElementById('datanasc').value;
      const errorMsg = document.getElementById('errorMsgdatanasc');
  
      if (input.length < 10) {
        errorMsg.innerText = 'Insira uma Data de Nascimento válida.';
        errorMsg.style.display = 'block';
      } else {
        errorMsg.style.display = 'none';
      }
    }
  
  
  const inputGenero = document.querySelector("#genero");
  inputGenero.addEventListener("focus", ()=>{
      inputGenero.setAttribute("style","outline-color: #ff0000;");
  })
  
  inputGenero.addEventListener("keyup", ()=>{
  
      const lblGenero = document.querySelector("label[for='genero']");
      if(inputGenero.value.length < 5){
          inputGenero.setAttribute("style","outline-color: #ff0000;");
          lblGenero.setAttribute("style","color: #ff0000;");
      }else{
          inputGenero.setAttribute("style","outline-color: #00ff00;");
          lblGenero.setAttribute("style","color: #00ff00;");
      }
  })
  function validateInputGenero() {
    const input = document.getElementById('genero').value;
    const errorMsg = document.getElementById('errorMsgGenero');

    if (input.length < 5) {
      errorMsg.innerText = 'Insira um Gênero válido.';
      errorMsg.style.display = 'block';
    } else {
      errorMsg.style.display = 'none';
    }
  }

  const inputCep = document.querySelector("#cep");
  inputCep.addEventListener("focus", ()=>{
      inputCep.setAttribute("style","outline-color: #ff0000;");
  })
  
  inputCep.addEventListener("keyup", ()=>{
  
      const lblCep = document.querySelector("label[for='cep']");
      if(inputCep.value.length < 8){
          inputCep.setAttribute("style","outline-color: #ff0000;");
          lblCep.setAttribute("style","color: #ff0000;");
      }else{
          inputCep.setAttribute("style","outline-color: #00ff00;");
          lblCep.setAttribute("style","color: #00ff00;");
      }
  })
  
  function validateInputcep() {
      const input = document.getElementById('cep').value;
      const errorMsg = document.getElementById('errorMsgcep');
  
      if (input.length < 8) {
        errorMsg.innerText = 'Insira um CEP válido.';
        errorMsg.style.display = 'block';
      } else {
        errorMsg.style.display = 'none';
      }
    }
  
  const inputEndereco = document.querySelector("#endereco");
  inputEndereco.addEventListener("focus", ()=>{
      inputEndereco.setAttribute("style","outline-color: #ff0000;");
  })
  
  inputEndereco.addEventListener("keyup", ()=>{
  
      const lblEndereco = document.querySelector("label[for='endereco']");
      if(inputEndereco.value.length < 5){
          inputEndereco.setAttribute("style","outline-color: #ff0000;");
          lblEndereco.setAttribute("style","color: #ff0000;");
      }else{
          inputEndereco.setAttribute("style","outline-color: #00ff00;");
          lblEndereco.setAttribute("style","color: #00ff00;");
      }
  })
  
  function validateInputendereco() {
      const input = document.getElementById('endereco').value;
      const errorMsg = document.getElementById('errorMsgendereco');
  
      if (input.length < 5) {
        errorMsg.innerText = 'Insira um endereço válido';
        errorMsg.style.display = 'block';
      } else {
        errorMsg.style.display = 'none';
      }
    }
  
  
  
  