//função criada para exibir um resultado
function showResult(frase) {
    document.write(frase);
}

function concatenatingName() {
    let firstName = prompt("Informe o seu primeiro nome");
    let secondName = prompt("Informe o seu segundo nome");

    let fullName = firstName + (" ") + secondName;

    showResult("Seu nome completo é: " + fullName);
}
concatenatingName();