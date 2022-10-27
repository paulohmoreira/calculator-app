const btnContainer = document.getElementById("theme-toggle");
const btns = btnContainer.getElementsByClassName("btn-box");

const equals = document.getElementById("equals-button");
const topo = document.querySelector(".topo");
const telaOperacoes = document.getElementById("operacoes")

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active", "cor-fundo");
    }

    // Add the active class to the current/clicked button
    this.className = this.className.replace("cor-fundo", "active");

    // Alterando plano de fundo dos botões não ativos
    for (let j = 0; j < btns.length; j++) {
      if(i != j) btns[j].className = btns[j].className.replace("active", "cor-fundo");
    }
  });
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
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
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme('theme-1');
  } else {
    setTheme('theme-2');
  }
})();