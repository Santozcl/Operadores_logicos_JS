const prompt = require('prompt-sync')() 

const x1 = parseInt(prompt(`escreva valor de x1: `))
const x2 = parseInt(prompt(`escreva valor de x2: `))
const y1 = parseInt(prompt(`escreva valor de y1: `))
const y2 = parseInt(prompt(`escreva valor de y2 : `))

const d = Math.sqrt((Math.pow(x2-x1),2) + (Math.pow (y2-y1),2))

console.log (`O resultado é ${d}`)


