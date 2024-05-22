const inputs = document.querySelectorAll('input[type="text"]');
// Adicionar ouvinte de evento focus a cada campo de entrada
inputs.forEach(input => {
  input.addEventListener('click', function () {
    this.select(); // Selecionar todo o conteúdo do campo ao clicar
  });
});