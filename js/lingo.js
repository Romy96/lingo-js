
	var number = Math.floor(Math.random()*words.length - 1);
	console.log(number);

	var chosen_word = words[number];
	console.log(chosen_word);

	var Randomletter = document.getElementById("random_letter_1");
	var Letter = chosen_word.split("");

	Randomletter.value = Letter[0];

	function Check() {
		document.getElementById("random_letter_1").style.backgroundColor = "red";
		for(var i = 1; i <= 4; i++) {
			if (Letter[i] == document.getElementById("input_letter_1"+i).value) {
				document.getElementById("input_letter_1"+i).style.backgroundColor = "red"; 
			} 
		}
	
	}
