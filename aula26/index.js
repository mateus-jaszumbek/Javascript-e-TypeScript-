// ? :
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "usuario VIP" : "Usuario Normal";


const corUsuario = null;
const corPadrao = corUsuario || 'Pink';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//     console.log("Usuario VIP");
// } else {
//     console.log("Usuario normal");
// }