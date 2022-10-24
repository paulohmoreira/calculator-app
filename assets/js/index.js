const tela = document.getElementById('tela');
const btn = Array.from(document.getElementsByClassName('btn'));
const clear = document.getElementById('reset-button');
const del = document.getElementById('del');
const equals = document.getElementById('equals-button');



// Adicionar numeros e operadores no display da calculadora
function adcTela(e) {
  const ultimoDigito = tela.innerText.slice(-1);
  const isUltimoDigitoOperador = (ultimoDigito === '+' || ultimoDigito === '-' || ultimoDigito === 'x' || ultimoDigito == '/');
  const isBtnOperador = (btn.innerText === '+' || btn.innerText === '-' || btn.innerText === 'x' || btn.innerText == '/');
  const isPonto = (tela.innerText.includes('.') && btn.innerText === '.');

  if (isBtnOperador && isUltimoDigitoOperador) {
    return
  } else if (isPonto) {
    return
  }
  tela.innerText += e.target.innerText;
}

btn.map(btn => {
  btn.addEventListener('click', (e) => {
    adcTela(e);
  })
})

// Limpar display da calculadora
function limpaTela() {
  tela.innerText = '';
}
clear.addEventListener('click', () => {
  limpaTela();
})

// Função delete button DEL
del.addEventListener('click', () => {
  if (tela.innerText) {
    tela.innerText = tela.innerText.slice(0, -1);
  }
})


// Função do botão "igual"
equals.addEventListener('click', () => {
  operacaoMatematica();
})

// Operações matemáticas
function operacaoMatematica() {
  const operadoresMatematicos = ["x", "-", "+", "/"];
  const operacaoCapturada = tela.innerText;
  let operadorClicado = '';
  let n1 = '';
  let n2 = '';
  let resultado = undefined;

  for (let i = 0; i < operadoresMatematicos.length; i++) {
    if (operacaoCapturada.includes(operadoresMatematicos[i])) {
      const operacaoFinal = operacaoCapturada.split(operadoresMatematicos[i]);
      operadorClicado = operadoresMatematicos[i];
      n1 = operacaoFinal[0];
      n2 = operacaoFinal[1];
    }
  }

  switch (operadorClicado) {
    case '+':
      resultado = Number(n1) + Number(n2)
      tela.innerText = resultado;
      break;
    case '-':
      resultado = Number(n1) - Number(n2)
      tela.innerText = resultado;
      break;
    case '/':
      resultado = Number(n1) / Number(n2)
      tela.innerText = resultado;
      break;
    case 'x':
      resultado = Number(n1) * Number(n2)
      tela.innerText = resultado;
      break;
  }
}