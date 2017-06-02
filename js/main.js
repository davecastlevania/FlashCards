$(document).ready(function() {
	// Data
	var tipsArray = [
		"Don\'t forget the <span class='code'>var</span> keyword when assigning a variable\'s value for the first time.",

		"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",

		"Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>...<br> }</span>",

		"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if ( <em>condition</em> ) { <br/>...<br/>} else { <br/>...<br/>}",

		"You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>var myFunction = function(){<br> return 5 * 5; <br>}<br>console.log(myFunction()); // Outputs: 25</span> ",

		"The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

		"The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

		"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for( var i = 0; i < myArray.length; i++ ) { <br> ... <br>}</span>",

		"To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> \"Hello, my name is \" + myName;</span>",

		"To generate a random number, use JavaScript's built in function <span class='code'>Math.random()</span>.",

		"Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>"
	];

	// Counter
	var count = 3;

	// Generate random number, dependent on how many tips there are.
	function generateNumber() {
		return Math.floor(Math.random() * tipsArray.length);
	}

	// 1. Get random number.
	// 2. Get the tip from the array
	// 3. Show the number and the tip text
	// 4. Show the count, and make sure the plural makes sense
	function generateTip() {
		var tipIndex = generateNumber();
		var tip = tipsArray[tipIndex];

		$('.tip-index').html(tipIndex + 1);
		$('.js-tip').html(tip);

		if (count === 1) {
			$('.plural').html('');
		} else {
			$('.plural').html('s');
		}
		$('.status').html(count);
	}

	// Function called when user presses the new tip button
	// If count is greater than 0, then generate another tip.
	// If it is 0, then disable the button, change its text
	$('.tip-button').click(function() {
		count--;
		if (count >= 0) {
			generateTip();

			if (count === 0) {
				$('.tip-button').html("See you in another tab!").addClass('disabled');
			}
		}
	});

	//Get the first tip
	generateTip();
});
