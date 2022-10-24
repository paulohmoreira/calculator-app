const tela = document.getElementById('tela');
const btn = Array.from(document.getElementsByClassName('btn'));
const clear = document.getElementById('reset-button');
const del = document.getElementById('del');


// Adicionar numeros e operadores no display da calculadora
btn.map(btn => {
  btn.addEventListener('click', (e) => {
    tela.innerText += e.target.innerText;
  })
})

// Limpar display da calculadora
clear.addEventListener('click', (e) => {
  tela.innerText = '';
})

// Função delete button DEL
del.addEventListener('click', (e) => {
  if (tela.innerText) {
    tela.innerText = tela.innerText.slice(0, -1);
  }
})
