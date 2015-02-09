function Validate (word) {
	if (word == "rock" || word == "paper" || word == "scissor" || word == "scissors") {
		return true;
	} else {
		return false;
	}
}

function CreateComputerChoice (input) {
	var ccw;
	if (input < 0.34) {
		ccw = "rock";
	} else if (input <= 0.67) {
		ccw = "paper";
	} else {
		ccw = "scissor";
	}
	return ccw;
}

function ConvertScissors (word) {
	if (word == "scissors") {
		word = "scissor";
		return word;
	} else {
		return word;
	}
}

function Compare (user, computer) {
	var case1 = "It's a Tie!";
	var case2 = "Computer wins!";
	var case3 = "You win!";

	if (user == computer) {
		return case1;
	} else if (user == "rock" && computer == "paper") {
		return case2;
	} else if (user == "rock" && computer == "scissor") {
		return case3;
	} else if (user == "paper" && computer == "rock") {
		return case3;
	} else if (user == "paper" && computer == "scissor") {
		return case2;
	} else if (user == "scissor" && computer == "rock") {
		return case2;
	} else if (user == "scissor" && computer == "paper") {
		return case3;
	}
}

function ClearPictures () {
	var youRock = document.getElementById("youRock")
	var youPaper = document.getElementById("youPaper")
	var youScissor = document.getElementById("youScissor")

	var compRock = document.getElementById("compRock")
	var compPaper = document.getElementById("compPaper")
	var compScissor = document.getElementById("compScissor")

	youRock.style.display = 'none'; 
	youPaper.style.display = 'none'; 
	youScissor.style.display = 'none'; 
	compRock.style.display = 'none';  
	compPaper.style.display = 'none'; 
	compScissor.style.display = 'none';
}

function ShowPicture () {
	var youRock = document.getElementById("youRock")
	var youPaper = document.getElementById("youPaper")
	var youScissor = document.getElementById("youScissor")

	var compRock = document.getElementById("compRock")
	var compPaper = document.getElementById("compPaper")
	var compScissor = document.getElementById("compScissor")

	if (uc.value == "rock") {
		youRock.style.display = "block";
	} else if (uc.value == "paper") {
		youPaper.style.display = "block";
	} else {
		youScissor.style.display = "block";
	};

	if (compChoice == "rock") {
		compRock.style.display = "block";
	} else if (compChoice == "paper") {
		compPaper.style.display = "block";
	} else {
		compScissor.style.display = "block";
	};
}

function Results (result) {
		var resultH1 = document.getElementById("resultH1");
		var youChoice = document.getElementById("youChoice");
		var computerChoice = document.getElementById("computerChoice");
		var resultHTML = document.getElementById("resultHTML");
		var playAgain = document.getElementById("playAgain");

		resultH1.innerHTML = "Results:";
		youChoice.innerHTML = uc.value.toUpperCase();
		youChoice.style.color = "#459ed0";
		computerChoice.innerHTML = compChoice.toUpperCase();
		computerChoice.style.color = "#459ed0";
		resultHTML.innerHTML = result;
		if (result == "Computer wins!") {
			resultHTML.style.color = "#f16058";
		} else if (result == "You win!") {
			resultHTML.style.color = "#63bd65";
		}
		else {
			resultHTML.style.color = "black";
		}
		playAgain.innerHTML = "Play again?";
}

function ClearText () {
	var youChoice = document.getElementById("youChoice").style.display = 'none';
	var computerChoice = document.getElementById("computerChoice").style.display = 'none';
	var results = document.getElementById("results").style.display = 'none';
}

function Counter (input) {
	if (input == "You win!") {
		youWin++;
	} else if (input == "Computer wins!") {
		computerWin++;
	} else {
		tie++;
	}
}

var youWin = 0;
var computerWin = 0;
var tie = 0;

function PlayGame () {
	var uc = document.getElementById("uc").value;
	var cc = Math.random();
	ClearPictures();
	var validateResult = Validate(uc);
	var uc = ConvertScissors(uc);
	if (validateResult == true) {
		compChoice = CreateComputerChoice(cc);
		ShowPicture();
		var result = Compare(uc, compChoice);
		Results(result);
	} else {
		var resultH1 = document.getElementById("resultH1").innerHTML = "Please enter a valid value.";
		ClearPictures();
		ClearText();
	}
	var resetInput = document.getElementById("uc").value = "";
	Counter(result);
	var youCount = document.getElementById("youCount").innerHTML = youWin;
	var computerCount = document.getElementById("computerCount").innerHTML = computerWin;
	var tieCount = document.getElementById("tieCount").innerHTML = tie;

}	


