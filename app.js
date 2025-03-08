let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

const exibirTextoNaTela = (tag, texto) => document.querySelector(tag).innerHTML = texto; //Arrow functions
const input = document.querySelector('input');
const reiniciarBtn = document.getElementById ('reiniciar');

const exibirMensagemInicial = () => {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial()

//Função + nome da ação no Html
function verificarChute() {
    let chute = Number(input.value); //Garantindo que chute seja tratado como número

    if (isNaN(chute) || chute < 1 || chute > numeroLimite) { //se chute não for um número, for abaixo de 1 e acima do número limite, o texto da como erro
        exibirTextoNaTela('h1, Erro!');
        exibirTextoNaTela('p', 'Por favor insira um número entre 1 e 100');
        return;
    }

    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns você acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!`) //operador ternário
        reiniciarBtn.removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'Errou, tente novamente!');
        exibirTextoNaTela('p', `O número secreto é ${chute > numeroSecreto ? 'menor' : 'maior'}`); //operador ternário
    }
    tentativas++
    limparCampo()
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio() {
    if (listaDeNumerosSorteados.length === numeroLimite) listaDeNumerosSorteados = []; //Se a lista for igual NS, reinicia a lista
    let numeroEscolhido;
    //Usando do e while para gerar número aleatório sem recursão
    do {
        numeroEscolhido = Math.floor(Math.random() * numeroLimite + 1); //Gere um número aleatorio sendo ele inteiro 
    } while (listaDeNumerosSorteados.includes(numeroEscolhido)); //procura se o número sorteado esta na lista

    listaDeNumerosSorteados.push(numeroEscolhido); //caso não, ele adiciona a lista
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido; // e volta para a variavel
}
const limparCampo = () => document.querySelector('input').value = ''; //Arrow functions

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    reiniciarBtn.setAttribute('disabled', true);
}