	let X = 300
	let Y = 300 
	MyArray = [];
	let N = 100
	let NumCirc = 0 
	
function setup() {
	createCanvas(600, 600);
	background(217, 148, 20);
	noStroke();
	for (let i = 0; i < N; i++){
		let col = color(random(0),random(0),random(255));
		MyArray[i] = new BoxCircles(col);
	}
}


function draw(){
	
	
	Rect(X,Y);
	
	
	for (let i = 0; i < MyArray.length; i++){
	MyArray[i].move(MyArray.length*360/i);
	MyArray[i].show();
	}
}


function mouseDragged() {

	   MyArray[NumCirc] = new BoxCircles(this.x,this.y);
	   NumCirc  = NumCirc +1;
	
}
class BoxCircles {
	constructor(col1) {
		background(217, 148, 20);
	this.X = 440;
	this.X1 = 225;
	this.X2 = 110;
	this.Y = 400;
	this.Y1 = 150;
	this.Y2 = 425;
	this.size = random(15,20);
	this.col = color(random(0),random(0),random(255));
	this.col1 = color(random(255),random(0),random(0));
	this.col2 = color(random(0),random(200),random(50));
	this.DirStepX = random(-5,5);
	this.DirStepY = random(-5,5);
		
	this.DirStepX1 = random(-5,5);
	this.DirStepY1 = random(-5,5);
		

	}
	
	show(){
		
	
		fill(this.col1);
		ellipse(this.X1,this.Y1,this.size,this.size);
		fill(this.col);
		ellipse(this.X,this.Y,this.size,this.size);
	}
	
	move(Theta){
		
	angleMode(DEGREES);
		
	this.X = this.X + cos(Theta)*this.DirStepX;
	this.Y = this.Y + sin(Theta)*this.DirStepY;
		
	this.X1 = this.X1 + cos(Theta)*this.DirStepX1;
	this.Y1 = this.Y1 + sin(Theta)*this.DirStepY1;

		
	}
	
	
}

function Rect(){
	let X = 300
	let Y = 300	
	let XPos = 300
	let YPos = 300
	let Blue1 = 245
	let Blue2 = 148
	let Blue3 = 71
//RECTANGLE
	fill (66, 147, Blue1);
	rect(X,Y,250,150);
	fill(74, 107, Blue2);
	quad(X,Y+150,X,Y,Y-50,Y+50,X-50,Y+200);
	fill(36, 52,Blue3);
	quad(X,Y+150,X-50,Y+200,X+200,Y+200,X+250,Y+150);
	
	fill(74, 107, Blue2);
	rect(325,325,200,100);
	fill(51, 70, 94);
	rect(325,375,150,50);
	fill(36, 52,Blue3);
	quad(325,325,325,375,475,375,525,325);

	
	
	//Triangle
	fill(245, 91, 83)
	triangle(25,200,225,50,450,200);
	fill(161, 54, 48);
	quad(25,200,50,225,425,225,450,200);
	fill(110, 38, 34);
	
	//Circle
	fill(78, 135, 50);
	ellipse(113,460,200,200);
	fill(122, 201, 83);
	ellipse(125,450,200,200);
	fill(58, 105, 35);
	ellipse(125,450,150,150);
	fill(78, 135, 50);
	ellipse(105,450,110,130);
	
	

	



	
}


	
