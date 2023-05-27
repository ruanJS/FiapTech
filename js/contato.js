//NOME
const inputNome = document.querySelector("#nome");
let erroNome;

inputNome.addEventListener("focus", ()=>{
    inputNome.setAttribute("style","outline-color: #ff0000;");
})

inputNome.addEventListener("keyup", ()=>{
    const lblNome = document.querySelector("label[for='nome']");

    if(inputNome.value.length ==='' || inputNome.value.length < 3){
        inputNome.setAttribute("style","outline-color: #ff0000;");
        lblNome.setAttribute("style","color: #ff0000;");

    }else{
        inputNome.setAttribute("style","outline-color: #00ff00;");
        lblNome.setAttribute("style","color: #00ff00;");
    }
});

//SEGUNDO NOME
const inputSobrenome = document.querySelector("#Sobrenome");

    inputSobrenome.addEventListener("focus", ()=>{
    inputSobrenome.setAttribute("style","outline-color: #ff0000;");
})

    inputSobrenome.addEventListener("keyup", ()=>{

    const sobrenome = document.querySelector("label[for='Sobrenome']");

    if(inputSobrenome.value.length === '' || inputSobrenome.value.length < 5){
        inputSobrenome.setAttribute("style","outline-color: #ff0000;");
        segundoNome.setAttribute("style","color: #ff0000;");
    }else{
        inputSobrenome.setAttribute("style","outline-color: #00ff00;");
        sobrenome.setAttribute("style","color: #00ff00;");
    }
});

    inputSobrenome.addEventListener('blur', ()=>{
    if (inputSobrenome.value === '' || inputSobrenome.value.length < 5) {
      mostrarErro('O campo deve conter pelo menos 5 caracteres, e não pode estar vazio.');
    }
});

  function mostrarErro(mensagem) {
    erroNome = document.createElement('p');
    erroNome.style.color = 'red';
    erroNome.textContent = mensagem;
    document.body.appendChild(erroNome);
  }
  
  function removerErro() {
    if (erroNome) {
      erroNome.remove();
      erroNome = null;
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

inputEmail.addEventListener('blur', ()=>{
    if (inputEmail.value === '' || inputEmail.value.length < 5) {
       mostrarErro('O campo deve conter pelo menos 5 caracteres.');
        } else {
           removerErro();
        }
    });

    function mostrarErro(mensagem) {
       erroEmail = document.createElement('p');
           erroEmail.style.color = 'red';
           erroEmail.textContent = mensagem;

       document.body.appendChild(erroEmail);
    }
       
    function removerErro() {
       if (erroEmail) {
      erroEmail.remove();
       erroEmail = null;
   }}


    const inputSenha = document.querySelector("#senha");
    inputSenha.addEventListener("focus", ()=>{

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
});


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

const inputGenero = document.querySelector("#genero");
inputGenero.addEventListener("focus", ()=>{
    inputGenero.setAttribute("style","outline-color: #ff0000;");
})

inputGenero.addEventListener("keyup", ()=>{

    const lblGenero = document.querySelector("label[for='genero']");
    if(inputGenero.value.length < 2){
        inputGenero.setAttribute("style","outline-color: #ff0000;");
        lblGenero.setAttribute("style","color: #ff0000;");
    }else{
        inputGenero.setAttribute("style","outline-color: #00ff00;");
        lblGenero.setAttribute("style","color: #00ff00;");
    }
})

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








