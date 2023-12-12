function getDiadaSemana(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
        break;
        case 1:
            diaSemanaTexto = 'Segunda';
        break;
        case 2:
            diaSemanaTexto = 'Terça';
        break;
        case 3:
            diaSemanaTexto = 'Quarta';
        break;
        case 4:
            diaSemanaTexto = 'Quinta';
        break;
        case 5:
            diaSemanaTexto = 'Sexta';
        break;
        case 6:
            diaSemanaTexto = 'Sabado';
        break;
        default:
            diaSemanaTexto ="Dia da semana invalido";
        break
    }
    return diaSemanaTexto;
 }


const data = new Date();
const diaSemana = data.getDay(0);
const diaSemanaTexto = getDiadaSemana(diaSemana);
console.log(diaSemanaTexto);
 
// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda'
// }else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça'
// }else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta'
// }else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta'
// }else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta'
// }else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado'
// } else {
//     diaSemanaTexto = 'Dia da semana invalido'
// }

