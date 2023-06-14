//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
}

function calculateImc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

let yourName = prompt("Informe seu nome");
let reportedWeight = parseFloat(prompt(yourName + ", informe seu peso"));
let reportedHeight = parseFloat(prompt(yourName + ", informe sua altura"));

let imcResult = calculateImc(reportedHeight, reportedWeight);

showResult(yourName + ", seu imc é: " + imcResult);

