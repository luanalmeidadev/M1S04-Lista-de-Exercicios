// função criada para pular duas linhas.
function skipline() {
    document.write("<br><br>");	
}

//função criada para exibir um resultado e pular duas linhas.
function showResult(frase) {
    document.write(frase);
    skipline();
}

    let attempts = 1;
	let thoughtNumber = Math.round(Math.random() * 10);

	while(attempts <= 3) {

		var kick = parseInt(prompt("Já pensei. Qual você acha que é?"));

		if(kick == thoughtNumber) {
			showResult("Uau! Você acertou, pois eu pensei no " + numeroPensado);
			break;

		} else {
			showResult("Você errou! Eu tinha pensado no " + numeroPensado);
		}

		tentativas++
	}
	
	showResult("FIM!");
