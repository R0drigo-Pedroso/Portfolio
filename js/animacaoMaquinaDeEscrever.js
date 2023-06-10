/* 
    Preciso busca no html o elemente h1 (Rodrigo Pedroso), criar uma animação em js estilo uma maquina de escrever.
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

/* const textoPrincipal = document.querySelector("#textoPrincipal");
const texto = "Rodrigo Pedroso";

const animacaoMaquinaDeEscrever = (element, texto) => {
  let i = 0;
  const tempoDigitacao = 150; // Tempo em milissegundos entre cada caractere

  const escreverCaractere = () => {
    if (i < texto.length) {
      element.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escreverCaractere, tempoDigitacao);
    }
  };

  escreverCaractere();
};

animacaoMaquinaDeEscrever(textoPrincipal, texto); */

const textoPrincipal = document.querySelector("#textoPrincipal");
const texto = "Rodrigo Pedroso";

const animacaoMaquinaDeEscrever = (element, texto) => {
  let i = 0;
  const tempoDigitacao = 90; // Tempo em milissegundos entre cada caractere

  const escreverCaractere = () => {
    if (i < texto.length) {
      element.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escreverCaractere, tempoDigitacao);
    } else {
      element.innerHTML = texto; // Exibir o texto completo após a animação
    }
  };

  escreverCaractere();
};

// Limpar o texto inicial antes de iniciar a animação
textoPrincipal.innerHTML = "";

animacaoMaquinaDeEscrever(textoPrincipal, texto);
