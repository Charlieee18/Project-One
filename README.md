# Monkeys and Bananas
A running single page application to create a game similar to snakes and ladders.

## Purpose:

This was an application to showcase my skills that I have developed over the past three weeks using HTML, CSS, BootStrap, JavaScript and JQuery.

It has been styled to be responsive with different devices both desktop and mobile.

## Functionality:

This is a single page application which consists of an instruction page, created using html and JavaScript and styled using BootStrap. It also has a board game and player icons to be able to move around the board.

## Implementation:

The game has been implemented using:
	* Semantic HTML
	* HTML5
	* CSS
	* Bootstrap version 4
	* JavaScript
	* JQuery
	* Sublime text
	* Google Chrome

### Building

To create this application it firstly started with sketching out how I wanted the board to look. I originally started using snakes and ladders and implemented them in roughly where I thought they needed to go so they looked spaced out and made the game more fun than having them all on one or two lines.

I decided that the board was going to be 7 x 7 as this made 49 squares which is just big enough without making the game drag on. It also meant that the game was not too short to only last a couple of minutes.

After this I then decided to style the board on the page. I used an unordered list and made this to fit the list items in and styled it so that the list items made seven columns and seven rows.

Once this was completed I decided to colour it. I went for pink as this was my favourite colour but later when I styled it properly I changed this and created a very pale mint green and a brighter mint green board.

Next was styling the background. I changed this to pink to match the board but again, later once I styled the board to mint green I decided a light grey was a much better choice as it did not clash.

I then decided to create the dice function so that when clicked the players would move to this number. It involved using math.floor and math.random so that the dice function worked using jquery. I console logged it to make sure it worked.

I then created two divs and named them player1 and player2.

After this I then styled the players so they looked like they began at the start.

The next challenge was getting the players to move the number on the dice and changing the players so player1 was not moving all the time. I did this using a click function with an alternate set to true and false so that if it was true it was player1's turn and if it was false it was player2's turn. I then created a variable called p1 position and p2 position so that the players could move around the board and it would add the number on the dice with the position they are currently at to create a new position on the board and place them at the new position.

I then created a win alert so that if either of the positions equalled 49 they would win. It had the ability to win even if the exact number had not been rolled.

I then created a reset button so that once the game had ended you could reset everything back to the beginning.

The next challenge was getting the 'snake' functions working so that if a player landed on a certain spot it would take them back however many spaces it was allocated. I originally used if/else statements to say if player lands on 42 then move back to 27, else if player2 lands on 42 move them back to 27. Later on in the development of this app there were far too many lines of code being repeated so I decided to change this and create functions which was a difficult challenge for me but is something I perservered with and managed to get it to only a few lines of code instead.

Once the snakes were working I implemented the ladders and did the same process. I started out with if/else statements saying if p1positon lands on 6 take the player to 18 and eventually got too many lines of code being repeated so created an array with the values in and then set it so that if player lands on position 1 it will move to position2.

At this point in the game there was no physical representation of the snakes or ladders so it just looked like the players were jumping about everywhere. It did not look very good. So I attempted to create lines to join the list items together so that you could see where the snakes and ladders were, the idea being that the ladders would be green and snakes would be red so that you could tell the difference. However I was not able to do this so decided to create a class in the html for snakes and a class for ladders and then in the css create a background image for the classes so that they would show where the snakes and ladders are. It was at this point when I was looking for a ladder image that I realised ladders looked boring and needed a different idea so I searched for a cartoon monkey image and a banana image and went for this idea as I thought it looked nicer than a picture of ladders. The idea was you would 'slip' on a banana and would go back a few spaces and if you landed on a monkey it would move you forward a few spaces.

Once these images were in place I realised that they still did not show you where they would land so I implemented classes with the names 'brown' and 'yellow' and these would colour in the spot that you would go to if you landed on either a monkey or banana.

After this was done the game was more or less fully working but was not reponsive so I had a look at bootstrap columns and set the grid out so that the buttons, players and all the board was available on every device at the same time.

##Issues
Making the page responsive was a challenge as the elements did not want to align in different ways depending on the size of the page.

There was also the issue of having snakes and ladders on the board. Originally I was going to draw lines on the board on top of the list items but this proved to be an almost impossible job so I resolved this issue by implementing background images onto the board where the snakes and ladders would be and decided on using monkeys and bananas instead which once complete looked really good.

##Site
The website can be found here: 
https://charlieee18.github.io/Project-One/





