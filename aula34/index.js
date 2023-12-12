const frutas =['pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }
// For in -> le os indices ou chaves do objetos 
// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Jose',
    idade: 30
}; 


for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
 }
