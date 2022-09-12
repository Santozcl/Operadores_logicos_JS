const prompt = require('prompt-sync')()

const a = parseInt(prompt(`De um valor a A: `))
const b = parseInt(prompt(`De um valor a B: `))
const c = parseInt(prompt(`De um valor C : `))

const r = Math.pow((a+b),2)
const s = Math.pow((b+c),2)
const d = (r+s)/2

console.log(`O resutado é ${d}.`)




