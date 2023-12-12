function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}` 
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// const horas = 60 * 60 * 3 * 1000; // Somando 3h
// const umDia = 60 * 60 * 24 * 1000; // Somando um dia
// const data = new Date(0 + horas + umDia); // 01/01/ 1970 timestamp unix ou época unix

// const data = new Date(2023, 11, 6, 15, 14, 27); // a, m, d, h, M, s, ms
// const data = new Date(1701911081549);
// console.log('Dia', data.getDate());
// console.log('mes', data.getMonth() + 1); // Mes começa do zero
// console.log('ano', data.getFullYear());
// console.log('hora', data.getHours());
// console.log('minuto', data.getMinutes());
// console.log('segundo', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString());
// console.log(Date.now());

