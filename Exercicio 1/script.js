//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
}

//função criada para calcular notas.
function calculateNotes(nota1, nota2, nota3) {
    var notas = (nota1 + nota2 + nota3) /3;
    return notas;
}

    let yourName = prompt("Informe o seu nome");
    let fistNote = parseInt(prompt(yourName + ", insira sua primeira nota"));
    let secondNote = parseInt(prompt(yourName + ", insira sua segunda nota"));
    let thirdNote = parseInt(prompt(yourName + ", insira sua terceira nota"));

    let totalNotes = calculateNotes(fistNote, secondNote, thirdNote);

    showResult(yourName + ", sua média é: " + totalNotes.toFixed(2));