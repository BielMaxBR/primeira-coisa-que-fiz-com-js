var song;

function preload() {
	//song = loadSound("Rude_Buster.mp3");
}
function setup() {
	createCanvas(windowWidth, windowHeight-10);
	// song = loadSound("Rude_Buster.mp3", loaded);
}

//function loaded() {
//	song.play();
//}
// frameRate();
var x = 1280/2;
var y = 720/2;
//
var r = 255;
var g = 255;
var b = 255;
function moveRight() {
	x += 7.5;
	
}
function moveLeft() {
	x -= 7.5;
}
function moveUp() {
	y -= 7.5;
}
function moveDown() {
	y += 7.5 ;
}
function draw() {
	r = random(10,255);
	g = random(10,255);
	b = random(10,255);	
	background(b,r,g);
	fill( r, g, b );
	ellipse(x, y, 30, 30);

	text("( '-' )", windowWidth/2-3, (windowHeight/2)+50, 200, 200)
	text(r, 0+5, 0+5, 200, 200)
	text(g, 0+15, 0+15, 200, 200)
	text(b, 0+25, 0+25, 200, 200)

	
    if (mouseX > x) {
	moveRight();
    noStroke();
  	}
  	else if (mouseX < x) {
	  moveLeft();
	  noStroke();
	} else {
		return;
	}
  	if (mouseY < y) {
	  moveUp();
	  noStroke();
  	}
  	else if (mouseY > y) {
	  moveDown();
	  noStroke();
  	}	else {
			return;
		}


}
function mousePressed() {
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	fill( r, g, b );
	x = mouseX;
	y = mouseY;

};
