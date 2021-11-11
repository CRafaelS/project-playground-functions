// Desafio 1
function compareTrue(primeiro, segundo) {
  // seu código aqui
  if (primeiro && segundo) {
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
  let ultimaPosicao = array.length - 1;
  let concatenar = array[ultimaPosicao] +", "+ array[0];

  return concatenar;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = (wins*3) + ties;

  return score;
}

// Desafio 6
function highestCount(contMaior) {
  // seu código aqui, referencia: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
  let max = 0;
  let cont = 0;
  for( let i = 0; i < contMaior.length; i += 1) {
    if(contMaior[i]>max) {
      max = contMaior[i];
    }

    if(contMaior[i] === max) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;

  if (dist1 < 0) {
    dist1 = dist1*(-1);
  }
  else if (dist2<0) {
    dist2 = dist2*(-1);
  }

  if (dist1 == dist2) {
    return "os gatos trombam e o rato foge";
  }
  else if ( dist1 < dist2){
    return 'cat1';
  }
  else{
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(number) {
  // seu código aqui
  let resultado = [];
  for ( let i=0; i<number.length; i +=1){
    if(number[i]%3==0 && number[i]%5 != 0){
      resultado.push("fizz");
    }
    else if(number[i]%3!=0 && number[i]%5 == 0){
      resultado.push("buzz");
    }
    else if(number[i]%3==0 && number[i]%5 == 0){
      resultado.push("fizzBuzz");
    }
    else if(number[i]%3!=0 && number[i]%5 != 0){
      resultado.push("bug");
    }
  }
  return resultado;
}

// Desafio 9
function encode(param) {
  // seu código aqui
  let cod = []
  for(let i = 0; i < param.length; i += 1){
    if(param[i] == 'a'){
      cod.push = 1;
    }
    else if(param[i] == 'e'){
      cod.push = 2;
    }
    else if(param[i] == 'i'){
      cod.push = 3;
    }
    else if(param[i] == 'o'){
      cod.push = 4;
    }
    else if(param[i] == 'u'){
      cod.push = 5;
    }
    else{
      cod.push(param[i]);
    }
  }
  return cod;
}
function decode(password) {
  // seu código aqui
  let resp = []
  for(let i = 0; i < password.length; i += 1){
    if(password[i] == 1){
      resp.push = 'a';
    }
    else if(password[i] == 2){
      resp.push = 'e';
    }
    else if(password[i] == 3){
      resp.push = 'i';
    }
    else if(password[i] == 4){
      resp.push = 'o';
    }
    else if(password[i] == 5){
      resp.push = 'u';
    }
    else{
      resp.push(password[i]);
    }
  }
  return resp;
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
