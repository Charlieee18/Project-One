$(function(){
	//places player in start position
	var p1position = 0;
	var turn 
	var alternate = true;
	var player
	var p2position = 0;
	var snakes = [
			[42, 27],
			[48, 24],
			[45, 31],
			[26, 5],
			[15, 2]
		]
	var ladders = [
			[6, 18],
			[20, 33],
			[31, 47],
			[29, 41],
			[8, 35]
	]
		//snakes
	function checkSnakes(position, player){
		snakes.forEach(function(snake){
			if (position == snake[0]){
				position = snake[1];
				setTimeout(function(){
					$('li[value="'+position+'"]').append(player);
				}, 1000);
			}		
		});
	};
		//ladders
		function checkLadders(position, player){
			ladders.forEach(function(ladder){
				if (position == ladder[0]){
					position = ladder[1];
					setTimeout(function(){
						$('li[value="'+position+'"]').append(player);
					}, 1000);
				}		
			});
		};
	

	$('.rollButton').on('click', function() {
		var dice = 1 + Math.floor(Math.random() * 6);
		$('.displayDice').html(dice);
		//moves player to position on board
		if (alternate === true) {
			p1position = p1position + dice;
			$('li[value="'+p1position+'"]').append(player1);
			checkSnakes(p1position, player1);
			checkLadders(p1position, player1);
			alternate = false;
		} else{
			p2position = p2position + dice;
			$('li[value="'+p2position+'"]').append(player2);
			checkSnakes(p2position, player2);
			checkLadders(p2position, player2);
			alternate = true;
		}

		if (p1position >= 49){
			alert("Player 1 Wins!")

		}else if (p2position >=49){
			alert("Player 2 wins")
		}

	



	});


	$("#reset").click(function(){
  		document.location.reload(true);
  	});
});