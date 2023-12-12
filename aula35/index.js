const pessoa = {
    nome: 'Luis',
    sobrenome: 'Otavio'
};

// For clasico - Geralmente com iteraveis (array ou string)
// For in - retorna o indice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (itevaeis, arrays ou strings)
for (let chave in pessoa) {
    confirm.log(chave, pessoa[chave]);
}
// 01234..
// const nome = ['Mateus', 'Jose', 'dIEGO'];

//  for (let i = 0; i < nome.length; i++) {
//      console.log(nome[i])
//  }

// console.log("___________");

// for (let i in nome ) {   
//       console.log(nome[i])
// }

// console.log("___________\n");

// for (let valor of nome) {
//     console.log(valor);
// }

// console.log("___________\n");

// nome.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });
    