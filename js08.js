const prompt = require(`prompt-sync`)()

const custoF = parseInt(prompt(`Digite o valor de fabrica do carro: `));

const percentagem = (custoF*28)/100
const impostos = (custoF*45)/100
const custoC = custoF + percentagem + impostos

console.log(`o valor do carro pro consumidor sera ${custoC}`);

