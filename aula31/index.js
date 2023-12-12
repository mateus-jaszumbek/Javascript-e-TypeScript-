const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Jose',
    idade: 23,
    endereco: {
        rua: "Av Brasil",
        numero: 320
    }
};

// Atribuição Via desestruturação
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);