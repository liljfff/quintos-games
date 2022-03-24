(async () => {
	// your code goes here!

	let num = Math.random() * 100;
	num = Math.ceil(num);

	let guess;
	while (guess != num) {
		guess = await prompt('guess a number 1-100');
		if (guess == num) {
			await alert('you got it right');
		} else if (guess < num) {
			await alert('too low');
		} else if (guess > num) {
			await alert('too high');
		}
	}
	exit(); // exits the game
})(); // end wrapper
