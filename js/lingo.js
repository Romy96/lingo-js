	// Pak de variable Words van words-nl.js als nummer en zorg ervoor dat je een willekeurig nummer van de woord krijgt in de console.
	var number = Math.floor(Math.random()*words.length - 1);
	console.log(number);

	// Pak nu het woord zonder de nummer door de net gemaakte variable te pakken en laat het zien in de console
	var chosen_word = words[number];
	console.log(chosen_word);

	// Split het gekozen woord in letters en laat het zien op het gekozen element
	var Randomletter = document.getElementById("random_letter_1");
	var Letters = chosen_word.split("");

	Randomletter.value = Letters[0];

	// Check of het ingevulde woord overeenkomt met het antwoord of niet. 
	function Check() {
		// Het eerste letter van het woord staat altijd op de juiste plek en is automatisch goed.
		document.getElementById("random_letter_1").style.backgroundColor = "red";
		// Hier geven we de i een waarde van het tweede veld van de rij en tellen we dit op tot de laatste vak
		for(var i = 1; i <= 4; i++) {
			var Remaining_letters = document.getElementById("input_letter_1"+i).innerHTML;
			// Als de letter voorkomt in het woord en staat op het juiste plek, dan word het vak rood. Als ze allemaal rood zijn, dan heb jij gewonnen.
			if (Letters[i] == document.getElementById("input_letter_1"+i).value) {
				document.getElementById("input_letter_1"+i).style.backgroundColor = "red"; 
			}
			// Maar als het letter die wel voorkomt niet op de goede plek staat, dan wordt het vak geel.
			if (Letters[i] !== document.getElementById("input_letter_1"+i).value) {
				document.getElementById("input_letter_1"+i).style.backgroundColor = "yellow";
			}
		}
	}
	
