var acc = document.getElementsByClassName("accordion"); // Obtém todos os elementos com a classe 'accordion' e os armazena na variável 'acc'

var i; // Declara a variável 'i' para uso no loop for

for (i = 0; i < acc.length; i++) { // Inicia um loop que irá percorrer todos os elementos 'accordion'
  acc[i].addEventListener("click", function() { // Adiciona um ouvinte de evento de clique a cada elemento 'accordion'
    this.classList.toggle("active"); // Alterna a classe 'active' no elemento clicado. Se 'active' já estiver definido, ele será removido; se não, será adicionado
    var panel = this.nextElementSibling; // Obtém o próximo elemento irmão do elemento clicado, que é o painel associado ao 'accordion'

    if (panel.style.maxHeight) { // Verifica se o painel já tem um maxHeight definido
      panel.style.maxHeight = null; // Se sim, remove o maxHeight, fazendo o painel colapsar
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Se não, define o maxHeight para a altura total do conteúdo do painel, fazendo-o expandir
    }
  });
}

