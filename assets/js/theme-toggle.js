const btnContainer = document.getElementById("theme-toggle");
const btns = btnContainer.getElementsByClassName("btn-box");

const equals = document.getElementById("equals-button");
const topo = document.querySelector(".topo");
const telaOperacoes = document.getElementById("operacoes")

// Loop para pegar todos os botões dos temas
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    setActiveButton(i, ...btns);
  });
}

// função para setar o tema no localstorage
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// função que troca entre os 3 temas disponíveis
function toggleTheme(theme) {
  if (theme === 'theme-3') {
    equals.style.color = "var(--text-dark)";
    topo.style.color = "var(--text)";
    telaOperacoes.style.color = "var(--text)";
  }
  if (theme === 'theme-2') {
    equals.style.color = "var(--text-2)";
    topo.style.color = "var(--text-3)";
    telaOperacoes.style.color = "var(--text-3)";
  }
  if (theme === 'theme-1') {
    topo.style.color = "var(--text-2)";
    telaOperacoes.style.color = "var(--text-2)";
    equals.style.color = "var(--text-2)";
  }
  setTheme(theme);
}

//função para adicionar a classe active no botão atualmente clicado
function setActiveButton(i, ...btns) {
  const current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "cor-fundo");
    }

    // Add the active class to the current/clicked button
    btns[i].className = btns[i].className.replace("cor-fundo", "active");

    // Alterando plano de fundo dos botões não ativos
    for (let j = 0; j < btns.length; j++) {
      if(i != j) btns[j].className = btns[j].className.replace("active", "cor-fundo");
    }
}

// Immediately invoked function para pegar o thema salvo no localstorage
(function () {
  if (localStorage.getItem('theme') === 'theme-1') {
    toggleTheme('theme-1');
    setActiveButton(0, ...btns);
  } else if (localStorage.getItem('theme') === 'theme-2') {
    toggleTheme('theme-2');
    setActiveButton(1, ...btns);
  } else {
    toggleTheme('theme-3');
    setActiveButton(2, ...btns);
  }
})();