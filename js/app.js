$(function(){
	//places player in start position
	var p1position = 0;
	var turn 
	var alternate = true;
	var player
	var p2position = 0;
	var bananas = [
			[42, 27],
			[48, 24],
			[45, 31],
			[26, 5],
			[15, 2]
		]
	var monkeys = [
			[6, 18],
			[20, 33],
			[31, 47],
			[29, 41],
			[8, 35]
	]
	$(".title, .btnReset, .rollButton, ul, .displayDice, #player1, #player2").hide();

	$("#startGame").one("click", function(){
		$(".cards, #startGame").hide();
	$("h1, .btnReset, .rollButton, ul, .displayDice, #player1, #player2").show();
	})
		//snakes
	function checkBananas(position, player){
		bananas.forEach(function(banana){
			if (position == banana[0]){
				position = banana[1];
				setTimeout(function(){
					$('li[value="'+position+'"]').append(player).animate();
				}, 1000);
			}		
		});
	};
		//ladders
		function checkMonkeys(position, player){
			monkeys.forEach(function(monkey){
				if (position == monkey[0]){
					position = monkey[1];
					setTimeout(function(){
						$('li[value="'+position+'"]').append(player).animate();
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
			checkBananas(p1position, player1);
			checkMonkeys(p1position, player1);
			alternate = false;
		} else{
			p2position = p2position + dice;
			$('li[value="'+p2position+'"]').append(player2);
			checkBananas(p2position, player2);
			checkMonkeys(p2position, player2);
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