// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String
		let options = [];

		if (choice == 0) {
			/* PART A0: Start your story! */
			msg =
				"It's a dark October night. You're staying up late coding but suddenly you hear a knock at your door!\n\n\t" +
				'1: Ask "Who is it?"\n\t' +
				'2: Ignore it and keep coding\n\t' +
				'3: Try to go to sleep';
			options = [1, 2, 3];
		} else if (choice == 1) {
			/* PART A1: continue the story */
			msg = 'its a creepy halloweeen guy\n\t' + '4: another option\n\t' + '5: another option';
			options = [4, 5];
		}

		// prompt the player to make choices

		let num = await prompt(msg);

		if (options.includes(num)) {
			choice = num;
		} else {
			await alert('invalid choice');
		}
		/* PART B0: end the game if there are no more choices to make */

		/* PART B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
})(); // end wrapper
