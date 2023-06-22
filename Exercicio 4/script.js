// função criada para pular uma linha.
function skipline() {
    document.write("<br>");	
}

//função criada para exibir um resultado e pular uma linha.
function showResult(frase) {
    document.write(frase);
    skipline();
}
function RegisterStudent() {
    let aluno = {};
    aluno.nome = prompt("Informe o nome do aluno");
    aluno.idade = parseInt(prompt("Informe a idade do aluno"));
    showResult("Nome: " + aluno.nome);
    showResult("Idade: " + aluno.idade);
}
RegisterStudent();
