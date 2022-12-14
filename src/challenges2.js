// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let arrayVazio = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i += 1) {
    tech.sort();
    arrayVazio.push({ tech: tech[i], name });
  }
  return arrayVazio;
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  // e https://www.horadecodar.com.br/2021/08/24/como-remover-texto-de-string-em-javascript/
  let number = 0;
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  } for (let i = 0; i < phone.length; i += 1) {
    let cont = 0;
    for (let k = 1; k < phone.length; k += 1) {
      if (phone[i] === phone[k]) {
        cont += 1;
      } if (phone[i] < 0 || phone[i] > 9 || cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      number = '(' + phone[0] + phone[1] + ')' + ' ' + phone.slice(2, 7) + '-' + phone.slice(7);
    }
  } for (let j = 0; j < 7; j += 1) {
    number = number.replace(',', '');
  } return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(bebidas) {
  // seu código aqui https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript
  let num = bebidas.match(/\d+/g).map(Number);
  let sum = 0;
  for (let i = 0; i < num.length; i += 1) {
    sum += num[i];
  }
  if (sum === 1) {
    return sum + ' copo de água';
  }
  return sum + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
