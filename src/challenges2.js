// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let arrayVazio = [];
  if (tech.length === 0) {
    return "Vazio!";
  }
  else {
    for (let i = 0; i < tech.length; i += 1){
      tech.sort();
      arrayVazio.push ({tech: tech[i], name})
    }
    return arrayVazio;
  }
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice 
  // e https://www.horadecodar.com.br/2021/08/24/como-remover-texto-de-string-em-javascript/
  let cont = 0;
  let number = 0;
  if (phone.length !== 11){
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i<phone.length; i += 1) {
    if (phone [i] === phone [i - 1]) {
      cont += 1;
    }
    else if (phone[i] < 0 || phone[i] >9 || cont >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    number = "(" + phone[0] + phone[1] + ")"+ " " + phone.slice(2,6) + "-" + phone.slice(7);
  }
  return number.replaceAll (',', '');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui 
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) ) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
