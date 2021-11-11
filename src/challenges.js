// Desafio 1
function compareTrue() {
  // seu código aqui
  let segundoProjeto = true;
  let aprovado = true;

  if (segundoProjeto == true && aprovado == true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea() {
  // seu código aqui
  let base = 10; 
  let height = 50;
  let area; 
  
  area = (base * height) / 2; 
  return area;
}

// Desafio 3
function splitSentence() {
  // seu código aqui referencia: https://blog.betrybe.com/javascript/javascript-split/
  let phrase = 'go Trybe';
  let split = phrase.split(' ');

  return split;
}

// Desafio 4
function concatName() {
  // seu código aqui
  let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  let ultimaPosicao = array.length-1;
  let concatenar = array[ultimaPosicao] +", "+ array[0];

  return concatenar;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
  let wins = 14;
  let ties = 8;
  let score = (wins*3) + ties;

  return score;
}

// Desafio 6
function highestCount() {
  // seu código aqui, referencia: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  let comp = [0, 0, 0];
  let max = 0;
  let cont = 0;

  for( let i = 0; i<comp.length; i += 1){
    if(comp[i]>max){
      max = comp[i];
    }
  }
  for( let i = 0; i<comp.length; i += 1){
    if(comp[i] == max){
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
