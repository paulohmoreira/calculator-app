const textoOperadorAnterior = document.querySelector("#operacao-anterior");
const textoOperadorAtual = document.querySelector("#operacao-atual");
const botoes = document.querySelectorAll(".calculadora button");

class Calculadora {
  constructor(textoOperadorAnterior, textoOperadorAtual) {
    this.textoOperadorAnterior = textoOperadorAnterior;
    this.textoOperadorAtual = textoOperadorAtual;
    this.operacaoAtual = "";
  }

  // adiciona digitos à tela da calculadora
  adicionaDigitos(digito) {
    // Checar se o número já tem um ponto
    if (digito === "." && this.textoOperadorAtual.innerText.includes(".")) {
      return;
    }

    this.operacaoAtual = digito;
    this.atualizaTela();
  }

  // processa todos as operações da calculadora
  processaOperacao(operacao) {
    // Checa se o valor atual está vazio
    if (this.textoOperadorAtual.innerText === "" && operacao !== "RESET") {
      // Muda operação
      if (this.textoOperadorAnterior.innerText !== "") {
        this.mudaOperacao(operacao);
      }
      return;
    }

    // Pega valor atual e anterior
    let valorOperacao;
    let anterior = +this.textoOperadorAnterior.innerText.split(" ")[0];
    let atual = +this.textoOperadorAtual.innerText;

    switch (operacao) {
      case "+":
        valorOperacao = anterior + atual;
        this.atualizaTela(valorOperacao, operacao, atual, anterior);
        break;
      case "-":
        valorOperacao = anterior - atual;
        this.atualizaTela(valorOperacao, operacao, atual, anterior);
        break;
      case "x":
        valorOperacao = anterior * atual;
        this.atualizaTela(valorOperacao, operacao, atual, anterior);
        break;
      case "/":
        valorOperacao = anterior / atual;
        this.atualizaTela(valorOperacao, operacao, atual, anterior);
        break;
      case "DEL":
        this.processaBtnDel();
        break;
      case "RESET":
        this.processaBtnReset();
        break;
      case "=":
        this.processaBtnIgual();
        break;
      default:
        return;
    }

  }

  // Muda os valores na tela da calculadora
  atualizaTela(valorOperacao = null, operacao = null, atual = null, anterior = null) {
    if (valorOperacao === Infinity) {
      this.textoOperadorAnterior.innerText = "Não é possível dividir por zero";
      this.textoOperadorAtual.innerText = "";
    } else if (valorOperacao === null) {
      // Adiciona número ao operador atual
      this.textoOperadorAtual.innerText += this.operacaoAtual;
    } else {
      // checa se o valor é 0, se for apenas adiciona o valor atual
      if (anterior === 0) {
        valorOperacao = atual;
      }
      // Muda o valor atual para o anterior
      this.textoOperadorAnterior.innerText = `${valorOperacao} ${operacao}`;
      this.textoOperadorAtual.innerText = "";
    }
  }

  // Muda o operador matemático
  mudaOperacao(operacao) {
    const operadorMatematico = ["x", "-", "+", "/"];

    if (!operadorMatematico.includes(operacao)) {
      return;
    }

    this.textoOperadorAnterior.innerText = this.textoOperadorAnterior.innerText.slice(0, -1) + operacao;
  }

  // Deleta um digito
  processaBtnDel() {
    this.textoOperadorAtual.innerText = this.textoOperadorAtual.innerText.slice(0, -1);
  }

  // Limpa toda a tela
  processaBtnReset() {
    this.textoOperadorAtual.innerText = "";
    this.textoOperadorAnterior.innerText = "";
  }

  // Process an operation
  processaBtnIgual() {
    let operacao = this.textoOperadorAnterior.innerText.split(" ")[1];
    this.processaOperacao(operacao);
  }

}

const calc = new Calculadora(textoOperadorAnterior, textoOperadorAtual);

botoes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const valor = e.target.innerText;

    if (+valor >= 0 || valor === ".") {
      calc.adicionaDigitos(valor);
    } else {
      calc.processaOperacao(valor);
    }
  });
});