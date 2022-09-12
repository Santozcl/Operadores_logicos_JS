const prompt = require('prompt-sync')()

const segundos =  parseInt(prompt(`Quantos segundos tera sua festa ? `));

const H = Math.floor (segundos/3600)
const mnt = Math.floor((segundos%3600)/60)
const seg = Math.floor((segundos%3600)%60)


console.log(`Seu evento tera ${H} horas, ${mnt} minutos e ${seg} segundos`)



