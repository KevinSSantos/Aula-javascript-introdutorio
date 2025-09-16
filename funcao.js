
function sub(n1, n2) {
    let subtracao = n1 - n2;
    return subtracao;
}

function adicao(n1, n2) {
    let soma = n1 + n2;
    return soma;
}

function mult(n1, n2) {
    let multiplicacao = n1 * n2;
    return multiplicacao;
}

function divisao(n1, n2) {
    let divisao = n1 / n2;
    return divisao;
}

function calculadoraMedia(n1, n2) {
    let media = (n1 + n2) / 2;
    return media;
}

let media = calculadoraMedia(7, 8);

console.log(`A média é: ${media}`);