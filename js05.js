const prompt = require(`prompt-sync`)()

const n1 = parseInt (prompt(`nota 1: `))
const n2 = parseInt (prompt(`nota 2: `))
const n3 = parseInt (prompt(`nota 3 : `))

const p1 = 2
const p2 = 3
const p3 = 5

const notaF1 = n1*p1
const notaF2 = n2*p2
const notaF3 = n3*p3

const somaN = notaF1+notaF2+notaF3
const somaP = p1+p2+p3

const media = somaN/somaP

console.log (`media final foi de ${media}`)


