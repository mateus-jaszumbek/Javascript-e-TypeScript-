/*
    Entre 0 - 11 - Bom dia
    Entre 12 - 17 - Boa tarde
    Entre 18 - 23 - Boa noite

    if pode ser usado sozinho

    else -> sempre que ultilizado a palavra else, precio ter um if antes
*/

let hora = 70;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia");

} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");

} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite");

} else {
    console.log("Digite uma hora valida!")
}


