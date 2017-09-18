$(function(){
	//places player in start position
	var position = 1;
	$('.rollButton').on('click', function() {
		var dice = 1 + Math.floor(Math.random() * 6);
		$('.displayDice').html(dice);
		//moves player to position on board
		position = position + dice;
		$('li[value="'+position+'"]').append(player1);

	});
	
	
	
	
});