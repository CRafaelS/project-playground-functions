// Desafio 1
function compareTrue(primeiro,segundo) {
  // seu código aqui
  if (primeiro== true && segundo == true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui 
  let area; 
  
  area = (base * height) / 2; 
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui referencia: https://blog.betrybe.com/javascript/javascript-split/
  let split = phrase.split(' ');

  return split;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let ultimaPosicao = array.length-1;
  let concatenar = array[ultimaPosicao] +", "+ array[0];

  return concatenar;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let wins = 14;
  let ties = 8;
  let score = (wins*3) + ties;

  return score;
}

// Desafio 6
function highestCount(comp) {
  // seu código aqui, referencia: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
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
function catAndMouse( mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;

  if (dist1<0){
    dist1 = dist1*(-1);
  }
  else if (dist2<0){
    dist2 = dist2*(-1);
  }
  else if (dist1 == dist2) {
    return "os gatos trombam e o rato foge";
  }
  else if ( dist1 < dist2){
    return 'cat1'
  }
  else{
    return 'cat2'
  }
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
