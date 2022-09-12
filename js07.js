const prompt = require('prompt-sync')()

const A = parseInt (prompt(`escreva a: `));
const B = parseInt (prompt(`escreva b: `));
const C = parseInt (prompt(`escreva c: `));
const D = parseInt (prompt(`escreva d: `));
const E = parseInt (prompt(`escreva e: `));
const F = parseInt (prompt(`escreva f: `));

const DX = (A*E) - (B*D)
const DY = (A*E) -(B*D)
const X = (C*E) - (B*F) / DX
const Y = (A*F) - (C*D) / DY

console.log(`O valor de X é ${X}.`)
console.log(`O valor de Y é ${Y}.`)



