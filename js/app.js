$(function(){
	//places player in start position
	var p1position = 0;
	var turn 
	var alternate = true;
	var p2position = 0;
	


	$('.rollButton').on('click', function() {
		var dice = 1 + Math.floor(Math.random() * 6);
		$('.displayDice').html(dice);
		//moves player to position on board
		if (alternate === true) {
			p1position = p1position + dice;
			$('li[value="'+p1position+'"]').append(player1);
			alternate = false;
		} else{
			p2position = p2position + dice;
			$('li[value="'+p2position+'"]').append(player2);
			alternate = true;
		}
	// console.log(clickValue)

		if (p1position >= 49){
			alert("Player 1 Wins!")

		}else if (p2position >=49){
			alert("Player 2 wins")
		}

		//snakes

		if (p1position == 42 ){
			p1position = 27;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 42){
			p2position = 27;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 48 ){
			p1position = 24;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 48){
			p2position = 24;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 45 ){
			p1position = 31;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 45){
			p2position = 31;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 26 ){
			p1position = 5;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 26){
			p2position = 5;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 15 ){
			p1position = 2;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 15){
			p2position = 2;
			$('li[value="'+p2position+'"]').append(player2);
		};

		//ladders

		if (p1position == 6 ){
			p1position = 18;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 6){
			p2position = 18;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 20 ){
			p1position = 33;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 20){
			p2position = 33;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 31 ){
			p1position = 47;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 31){
			p2position = 47;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 29 ){
			p1position = 41;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 29){
			p2position = 41;
			$('li[value="'+p2position+'"]').append(player2);
		};

		if (p1position == 8 ){
			p1position = 35;
			$('li[value="'+p1position+'"]').append(player1);
		} else if (p2position == 8){
			p2position = 35;
			$('li[value="'+p2position+'"]').append(player2);
		};


	});
		//$( 'li[value=42]' ).appendTo( $( 'li[value=27]' ) );

	

	
	//if position(49) {
	//	alert("Player 1 wins!")
	//}else if player2.position(49) {
	//	alert("Player 2 wins!")
	//};
	$("#reset").click(function(){
  		document.location.reload(true);
  	});
});