$(function(){
	$('.rollButton').on('click', function() {
		var dice = 1 + Math.floor(Math.random() * 6);
		$('.displayDice').html(dice);

	});
	//places player in start position
	$('li').eq(0).append(player1);
	var start 
	

	
});