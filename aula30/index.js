// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];

//  [a, b, c] = letras;

// console.log(a, b, c);


// ...rest, ...spread
//                0      1     2     3    4     5      6     7     8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros;
// console.log(um, tres, cinco );

const numeros = [ //A  I
    [1, 2, 3], //   0   0 1 2
    [4, 5, 6], //   1   0 1 2
    [7, 8, 9]  //   2   0 1 2
];
const [lista1, lis2, list3] = numeros;
console.log(list3[2]);
