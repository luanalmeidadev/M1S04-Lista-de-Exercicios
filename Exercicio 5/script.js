//função criada para exibir um resultado
function showResult(frase) {
    document.write(frase);
}

function calculateWeightedAverage(params) {
    alert("Vamos calcular a média ponderada");
    alert("Digite três números e seus respectivos pesos");

    let numberFirst = parseFloat(prompt("Informe o primeiro número"));
    let weightOne = parseFloat(prompt("Qual o peso do primeiro número?"));

    let numberSecond = parseFloat(prompt("Informe o segundo número"));
    let weightTwo = parseFloat(prompt("Qual o peso do segundo número?"));

    let numberThird = parseFloat(prompt("Informe o terceiro número"));
    let weightThree = parseFloat(prompt("Qual o peso do terceiro número?"));

    let average = (numberFirst*weightOne + numberSecond*weightTwo + numberThird*weightThree) / (weightOne + weightTwo + weightThree);

    showResult("A média ponderada é: " + average);
}

calculateWeightedAverage();