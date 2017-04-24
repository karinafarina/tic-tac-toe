$(document).ready(function() {
	var move = 1;
	var play = true;

	$("td").click(function() {
		console.log(this);
		if($(this).text()=="" && play) {
			if((move%2)==1) {
				$(this).append('X');
			} else {
				$(this).append('O');
			}
			move++;
			if(checkForWinner() !=-1 && checkForWinner() !="") {
				if(checkForWinner() == 'X') {
					alert('Player 1 wins!');
				} else {
					alert('Player 2 wins!');
				}
				play = false;
			}
		}
	})
	function checkForWinner () {
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
			return space3;
		} else if((space4==space5) && (space5 == space6)) {
			return space6;
		} else if((space3==space8) && (space8==space9)) {
			return space9;
		}
	//check columns
		else if ((space1==space4) && (space4 ==space7)) {
			return space7;
		} else if((space2==space5) && (space5 ==space8)) {
			return space8;
		} else if((space3==space6) && (space6==space9)) {
			return space9;
		}
	//check diagonals
		else if((space1==space5) && (space5==space9)) {
			return space9;
		} else if((space3==space5) && (space5==space7)) {
			return space7;
		}
	//no winner
		return -1
	}
});