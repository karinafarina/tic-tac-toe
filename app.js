$(document).ready(function() {
	var move = 1;
	var play = true;

	$('td').click(function() {
		if(move%2==1) {
			$(this).html("O");
		} else {
			$(this).html("X");
		}
		move++
		var winner = checkForWinner();
		if(winner !== -1 && winner !== undefined) {
			alert(winner + " is the winner!");
		} else if(winner !== undefined) { 

			alert("Draw!");
		}
	});

	function checkForWinner() {
		var space1 = $('#r1c1').text();
    	var space2 = $('#r1c2').text();
    	var space3 = $('#r1c3').text();
    	var space4 = $('#r2c1').text();
    	var space5 = $('#r2c2').text();
    	var space6 = $('#r2c3').text();
    	var space7 = $('#r3c1').text();
    	var space8 = $('#r3c2').text();
    	var space9 = $('#r3c3').text();
    	console.log(space7);
	//check rows
		if((space1 == space2) && (space2==space3)) {
			if(space3 == "X" || space3 == "O") {
				return space3;
			}
		} else if((space4==space5) && (space5 == space6)) {
			if(space6 == "X" || space6 == "O") {
				return space6;
			}
		} else if((space3==space8) && (space8==space9)) {
			if(space9 == "X" || space9 == "O") {
				return space9;
			}
		}
	//check columns
		else if ((space1==space4) && (space4 ==space7)) {
			if(space7 == "X" || space7 == "O") {
				return space7;
			}
		} else if((space2==space5) && (space5 ==space8)) {
			if(space8 == "X" || space8 == "O") {
				return space8;
			}
		} else if((space3==space6) && (space6==space9)) {
			if(space9 == "X" || space9 == "O") {
				return space9;
			}
		}
	//check diagonals
		else if((space1==space5) && (space5==space9)) {
			if(space9 == "X" || space9 == "O") {
				return space9;
			}
		} else if((space3==space5) && (space5==space7)) {
			if(space7 == "X" || space7 == "O") {
				return space7;
			}
		}
	}
	//no winner
		return -1

});