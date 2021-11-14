// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let array = [];
  if (tech.length === 0) {
    return "Vazio!";
  }
  else {
    for (let i = 0; i < tech.length; i += 1){
      tech.sort();
      array.push ({tech: tech[i], name})
    }
    return array;
  }
}

// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
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
