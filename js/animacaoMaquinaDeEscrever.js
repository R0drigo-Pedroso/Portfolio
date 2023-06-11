/* 
    Preciso busca no html o elemente h1 (Rodrigo Pedroso), criar uma animação em js estilo uma maquina de escrever.

    Primeira versão
*/

/* const textoPrincipal = document.querySelector("#textoPrincipal");

const animacaoMaquinaDeEscrever = (element, texto) => {
  const listaCaracter = texto.split("");

  listaCaracter.forEach((item, i) => {
    setTimeout(() => {
      element.innerHTML += item;
    }, 90 * i);
  });

  console.log(listaCaracter);
};

animacaoMaquinaDeEscrever(textoPrincipal, "Rodrigo Pedroso");
 */

// Seleciona o elemento do HTML onde o texto será exibido
const textoPrincipal = document.querySelector("#textoPrincipal");

// Texto que será exibido na animação
const texto = "Rodrigo Pedroso";

// Função responsável por animar a máquina de escrever
const animacaoMaquinaDeEscrever = (element, texto) => {
  let i = 0;
  const tempoDigitacao = 130; // Tempo em milissegundos entre cada caractere

  // Função recursiva para escrever cada caractere
  const escreverCaractere = () => {
    // Verifica se ainda há caracteres para escrever
    if (i < texto.length) {
      // Adiciona o próximo caractere ao elemento HTML
      element.innerHTML += texto.charAt(i);
      i++;

      // Chama a função novamente após o tempo de digitação
      setTimeout(escreverCaractere, tempoDigitacao);
    }
  };

  // Limpa o texto inicial antes de iniciar a animação
  element.innerHTML = "";

  // Inicia a animação
  escreverCaractere();
};

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
  // Chama a função de animação passando o elemento e o texto a ser exibido
  animacaoMaquinaDeEscrever(textoPrincipal, texto);
});
