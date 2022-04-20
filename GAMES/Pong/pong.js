// screen width is 256, height is 192

let imgBall = spriteArt(
	`
..wwww..
.ww..ww.
ww....ww
w......w
w......w
ww....ww
.ww..ww.
..wwww..`
);

// the \n means new line
let imgPaddle = spriteArt('.wwwwww.\nwwwwwwww\n' + 'ww....ww\n'.repeat(42) + 'wwwwwwww\n.wwwwww.');

/* PART B: Make image for the wall */
let imgWallX = spriteArt('w'.repeat(256));

// places a ball in center of the screen
let ball = createSprite(imgBall);
ball.x = width / 2;
ball.y = height / 2;
ball.velocity.x = 1;
ball.velocity.y = 1;

let leftScore = 0;
let rightScore = 0;

text(leftScore, 3, 18);
text(rightScore, 3, 15);
/* PART A0: create two paddles, place on each end of the screen */
let paddleL = createSprite(imgPaddle);
paddleL.x = 16;
paddleL.y = 80;

let paddleR = createSprite(imgPaddle);
paddleR.x = 240;
paddleR.y = 80;

let topwall = createSprite(imgWallX);
topwall.x = 0;
topwall.y = 10;

let bottomwall = createSprite(imgWallX);
bottomwall.x = 0;
bottomwall.y = 182;

function draw() {
	background(0);

	if (isKeyDown('ArrowUp') && paddleR.y > 12) {
		paddleR.y -= 2; // move the player right by 2 pixels
	}
	if (isKeyDown('ArrowDown') && paddleR.y < 135) {
		paddleR.y += 2; // move the player left by 2 pixels
	}

	if (isKeyDown('W') && paddleL.y > 12) {
		paddleL.y -= 2; // move the player right by 2 pixels
	}
	if (isKeyDown('S') && paddleL.y < 135) {
		paddleL.y += 2; // move the player left by 2 pixels
	}

	if (ball.y == topwall.y) {
		ball.velocity.y = 1;
	}
	if (ball.y + ball.h == bottomwall.y) {
		ball.velocity.y = -1;
	}

	if (ball.x <= paddleL.x + paddleL.w && ball.x > paddleL.x && ball.y > paddleL.y && ball.y < paddleL.y + paddleL.h) {
		ball.velocity.x = 1;
	}
	if (
		ball.x + ball.w >= paddleR.x &&
		ball.x + ball.w < paddleR.x + paddleR.w &&
		ball.y > paddleR.y &&
		ball.y < paddleR.y + paddleR.h
	) {
		ball.velocity.x = -1;
	}

	// left side player lost the ball
	if (ball.x < -15) {
		rightScore = rightScore + 1;
		text(rightScore, 3, 15);
		ball.velocity.x = 1; // serve right
	}
	// right side player lost the ball
	if (ball.x > width + 15) {
		leftScore = leftScore + 1;
		text(leftScore, 3, 18);
		ball.velocity.x = -1; // serve left
	}

	// if either player lost the ball
	if (ball.x < -15 || ball.x > width + 15) {
		// move ball to center
		ball.x = width / 2;
		ball.y = height / 2;
		// serve ball up or down
		let serveY = Math.random();
		if (serveY > 0.5) {
			ball.velocity.y = -1;
		} else {
			ball.velocity.y = 1;
		}
	}

	drawSprites();
}
