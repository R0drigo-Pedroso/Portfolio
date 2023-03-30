/* 
    Preciso busca no html o elemente h1 (Rodrigo Pedroso), criar uma animação em js estilo uma maquina de escrever.
*/

const textoPrincipal = document.querySelector("#textoPrincipal");

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
