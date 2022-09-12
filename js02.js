const prompt = require('prompt-sync')()

const TD = parseInt(prompt('quantos dias voce viveu? '))


const ano = Math.floor(TD/365)
const mes = Math.floor((TD%365) / 30)
const dia = Math.floor((TD%365) % 30)

console.log(`voce tem, ${ano} anos, ${mes} mes, ${dia} dias`)



