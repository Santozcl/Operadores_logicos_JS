const prompt = require('prompt-sync')()
///////////////////////////////////////
const ano = parseInt(prompt('Digite quantos anos você tem: '));

const mes =  parseInt(prompt('Digite o mes que nasceu: '));

const  dia =  parseInt(prompt('digite o dia que voce nasceu: '));


const diasV = Math.floor((ano*360) + (mes*30) + dia) 

console.log(`Voce viveu, ${diasV} totais`)
