	// Pak de variable Words van words-nl.js als nummer en zorg ervoor dat je een willekeurig nummer van de woord krijgt in de console.
	var number = Math.floor(Math.random()*words_7.length - 1);
	console.log(number);

	// Pak nu het woord zonder de nummer door de net gemaakte variable te pakken en laat het zien in de console
	var chosen_word = words_7[number];
	console.log(chosen_word);

	// Split het gekozen woord in letters en laat het zien op het gekozen element
	var Randomletter = document.getElementById("random_letter_1");
	var Letters = chosen_word.split("");

	Randomletter.value = Letters[0];

	var count = 5;
	document.getElementById("amount_tries").value = count;

	// Check of het ingevulde woord overeenkomt met het antwoord of niet. 
	function Check() {
		// Het eerste letter van het woord staat altijd op de juiste plek en is automatisch goed.
		document.getElementById("random_letter_1").style.backgroundColor = "red";
		// Hier geven we de i een waarde van het tweede veld van de rij en tellen we dit op tot de laatste vak
		var amount_guessed_letters = 1; 
		if (count == 5) {
			for(var i = 1; i <= 6; i++) {
				var correct_letter = document.getElementById("input_letter_1"+i).value;
				// Als het letter die wel voorkomt niet op de goede plek staat, dan wordt het vak geel.
				if (Letters.indexOf(correct_letter) > -1) {
					document.getElementById("input_letter_1"+i).style.backgroundColor = "yellow";
				}
				// Als de letter voorkomt in het woord en staat op het juiste plek, dan word het vak rood. Als ze allemaal rood zijn, dan heb jij gewonnen. 
				if (Letters[i] == document.getElementById("input_letter_1"+i).value) {
					document.getElementById("input_letter_1"+i).style.backgroundColor = "red";
					var guessed_letters = document.getElementById("input_letter_2"+i);
					guessed_letters.value = document.getElementById("input_letter_1"+i).value;
					document.getElementById("input_letter_2"+i).style.backgroundColor = "red";
					amount_guessed_letters++;
				}
				// Als je het woord niet geraden hebt, dan ga je naar de volgende rij met het eerste letter en de juiste letters meegegeven.
				if (Letters[i] != document.getElementById("input_letter_1"+i).value) {
					var Randomletter_2 = document.getElementById("random_letter_2");
					Randomletter_2.value = Letters[0];
					document.getElementById("random_letter_2").style.backgroundColor = "red";
					var correct_letter_2 = document.getElementById("input_letter_2"+i).value;
				}
			}
		}

		if (count == 4) {
			// Hier geven we de i een waarde van het tweede veld van de rij en tellen we dit op tot de laatste vak
			for(var i = 1; i <= 6; i++) {
				var correct_letter_2 = document.getElementById("input_letter_2"+i).value;
				// Als het letter die wel voorkomt niet op de goede plek staat, dan wordt het vak geel.
				if (Letters.indexOf(correct_letter_2) > -1) {
					document.getElementById("input_letter_2"+i).style.backgroundColor = "yellow";
				}
				// Als de letter voorkomt in het woord en staat op het juiste plek, dan word het vak rood. Als ze allemaal rood zijn, dan heb jij gewonnen. 
				if (Letters[i] == document.getElementById("input_letter_2"+i).value) {
					document.getElementById("input_letter_2"+i).style.backgroundColor = "red";
					var guessed_letters_2 = document.getElementById("input_letter_3"+i);
					guessed_letters_2.value = document.getElementById("input_letter_2"+i).value;
					document.getElementById("input_letter_3"+i).style.backgroundColor = "red";
					amount_guessed_letters++;
				}
				// Als je het woord niet geraden hebt, dan ga je naar de volgende rij met het eerste letter en de juiste letters meegegeven.
				if (Letters[i] != document.getElementById("input_letter_2"+i).value) {
					var Randomletter_3 = document.getElementById("random_letter_3");
					Randomletter_3.value = Letters[0];
					document.getElementById("random_letter_3").style.backgroundColor = "red";
					var correct_letter_3 = document.getElementById("input_letter_3"+i).value;
				}
			}
		}

		if (count == 3) {
			// Hier geven we de i een waarde van het tweede veld van de rij en tellen we dit op tot de laatste vak
			for(var i = 1; i <= 6; i++) {
				var correct_letter_3 = document.getElementById("input_letter_3"+i).value;
				// Als het letter die wel voorkomt niet op de goede plek staat, dan wordt het vak geel.
				if (Letters.indexOf(correct_letter_3) > -1) {
					document.getElementById("input_letter_3"+i).style.backgroundColor = "yellow";
				}
				// Als de letter voorkomt in het woord en staat op het juiste plek, dan word het vak rood. Als ze allemaal rood zijn, dan heb jij gewonnen. 
				if (Letters[i] == document.getElementById("input_letter_3"+i).value) {
					document.getElementById("input_letter_3"+i).style.backgroundColor = "red";
					var guessed_letters_3 = document.getElementById("input_letter_4"+i);
					guessed_letters_3.value = document.getElementById("input_letter_3"+i).value;
					document.getElementById("input_letter_4"+i).style.backgroundColor = "red";
					amount_guessed_letters++;
				}
				// Als je het woord niet geraden hebt, dan ga je naar de volgende rij met het eerste letter en de juiste letters meegegeven.
				if (Letters[i] != document.getElementById("input_letter_2"+i).value) {
					var Randomletter_4 = document.getElementById("random_letter_4");
					Randomletter_4.value = Letters[0];
					document.getElementById("random_letter_4").style.backgroundColor = "red";
					var correct_letter_4 = document.getElementById("input_letter_4"+i).value;
				}
			}
		}

		if (count == 2) {
			// Hier geven we de i een waarde van het tweede veld van de rij en tellen we dit op tot de laatste vak
			for(var i = 1; i <= 6; i++) {
				var correct_letter_4 = document.getElementById("input_letter_4"+i).value;
				// Als het letter die wel voorkomt niet op de goede plek staat, dan wordt het vak geel.
				if (Letters.indexOf(correct_letter_4) > -1) {
					document.getElementById("input_letter_4"+i).style.backgroundColor = "yellow";
				}
				// Als de letter voorkomt in het woord en staat op het juiste plek, dan word het vak rood. Als ze allemaal rood zijn, dan heb jij gewonnen. 
				if (Letters[i] == document.getElementById("input_letter_4"+i).value) {
					document.getElementById("input_letter_4"+i).style.backgroundColor = "red";
					var guessed_letters_4 = document.getElementById("input_letter_5"+i);
					guessed_letters_4.value = document.getElementById("input_letter_4"+i).value;
					document.getElementById("input_letter_5"+i).style.backgroundColor = "red";
					amount_guessed_letters++;
				}
				// Als je het woord niet geraden hebt, dan ga je naar de volgende rij met het eerste letter en de juiste letters meegegeven.
				if (Letters[i] != document.getElementById("input_letter_4"+i).value) {
					var Randomletter_5 = document.getElementById("random_letter_5");
					Randomletter_5.value = Letters[0];
					document.getElementById("random_letter_5").style.backgroundColor = "red";
					var correct_letter_5 = document.getElementById("input_letter_5"+i).value;
				}
			}
		}

		if (count == 1) {
			// Hier geven we de i een waarde van het tweede veld van de rij en tellen we dit op tot de laatste vak
			for(var i = 1; i <= 6; i++) {
				var correct_letter_5 = document.getElementById("input_letter_5"+i).value;
				// Als het letter die wel voorkomt niet op de goede plek staat, dan wordt het vak geel.
				if (Letters.indexOf(correct_letter_5) > -1) {
					document.getElementById("input_letter_5"+i).style.backgroundColor = "yellow";
				}
				// Als de letter voorkomt in het woord en staat op het juiste plek, dan word het vak rood. Als ze allemaal rood zijn, dan heb jij gewonnen. 
				if (Letters[i] == document.getElementById("input_letter_5"+i).value) {
					document.getElementById("input_letter_5"+i).style.backgroundColor = "red";
					amount_guessed_letters++;
				}
				// Als je het woord niet geraden hebt en je bent bij de laatste rij, dan is het automatisch een gameover.
				if (Letters[i] != document.getElementById("input_letter_5"+i).value) {
					alert('Game over! Je hebt verloren!');
					alert(chosen_word);
				}
			}
		}

		if (amount_guessed_letters === 5) {
			alert("Gefeliciteerd! U hebt het juiste woord geraden!");
		}
		else {
			count--;
			document.getElementById("amount_tries").value = count;
		}
	}





