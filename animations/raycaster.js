//var heron = require("heronmodule");

var canvas = document.getElementById("viewfield");
var ctxt = canvas.getContext('2d');
var player;

/**
 * constructor and definition for vector object
 * @param {number} x 
 * @param {number} y 
 */
function Vec2(x, y) {
	this.x = x;
	this.y = y;
}
Vec2.prototype = {
	//Mozilla: if method is on object's prototype chain,
	//this refers to object the method was called on,
	//as if method were on object
	add: function (b) {
		return new Vec2(this.x+b.x, this.y+b.y);
	},
	sub: function (b) {
		return new Vec2(this.x-b.x, this.y-b.y);
	},
	// x ** y = x^y
	length: function () {
		return Math.sqrt(this.x ** 2 + this.y ** 2)
	}
}

/**
 * constructor and definition for ray object...
 * ...but is this a ray? we're using it for line segments.
 * @param {Vec2} pos vector that defines where ray starts
 * @param {Vec2} way vector that defines where ray goes
 */
function Ray2(pos, way) {
	this.pos = pos;
	this.way = way;
}
//static methods making no use of instance variables are
//best represented as properties of constructor
/* ray from two points, direction derived as (end - start) */
Ray2.with2p = (begin, end) => new Ray2(begin, end.sub(begin));
Ray2.prototype = {
	get begin() {
		return this.pos;
	},
	get end() {
		return this.pos.add(this.way);
	},
	intersect: function(r2) {
		let r1 = this;

		//in division below, as x tends to 0, slope to infinity
		//round to prevent this
		if(Math.abs(r1.way.x) < 0.01) r1.way.x = 0.01;
		if(Math.abs(r2.way.x) < 0.01) r2.way.x = 0.01;
		//w/ pos and way, can write ray in point-slope form
		let slope1 = r1.way.y / r1.way.x;
		let slope2 = r2.way.y / r2.way.x;
		//(y - y1) = m1(x - x1), (y - y2) = m2(x - x2)
		//for what x do these 2 functions have same y?
		//m1*x - m1*x1 + y1 = m2*x - m2*x2 + y2
		//solX = (m1*x1 - m2*x2 - y1 + y2) / (m1 - m2)
		let x1 = r1.pos.x;
		let x2 = r2.pos.x;
		let y1 = r1.pos.y;
		let y2 = r2.pos.y;
		let solX = (slope1*x1 - slope2*x2 - y1 + y2) / (slope1 - slope2);
		//solY = y1 + m1*(solX - x1)
		let solY = y1 + slope1*(solX - x1);
		
		if (solX > Math.min(r1.begin.x, r1.end.x) &&
			solX < Math.max(r1.begin.x, r1.end.x) &&
			solX > Math.min(r2.begin.x, r2.end.x) &&
			solX < Math.max(r2.begin.x, r2.end.x))
			return new Vec2(solX, solY);
		else return null;


	}
}
/**
 * constructor and definition for Player object, represents
 * player's location in 2D and the angle they're looking
 * (in this model, player doesn't have height but walls do)
 * @param {Vec2} pos 
 * @param {number} angle 
 */
function Player(pos = new Vec2(0, 0), angle = 0) {
	this.pos = pos;
	this.angle = angle;
}

/**
 * draws circular dot over a location
 * @param {number} x 
 * @param {number} y 
 * @param {number} radius 
 */
function point(x, y, radius, color = "rgb(200, 200, 0)") {
	ctxt.save()
	ctxt.fillStyle = color;
	ctxt.beginPath();
	//ctxt.moveTo(x, y); done for you by arc()
	ctxt.arc(x, y, radius, 0, Math.PI*2, true);
	ctxt.fill();
	ctxt.restore();
}
/**
 * draws line from one point to another
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 */
function line(x1, y1, x2, y2) {
	ctxt.beginPath();
	ctxt.moveTo(x1, y1);
	ctxt.lineTo(x2, y2)
	ctxt.stroke();
}
/**
 * sets background of canvas as some grayscale value
 * @param {number} grayscaleVal 
 */
// function background(grayscaleVal) {
// 	//saves current global attributes, transformation matrix
// 	//of context (not of canvas and its bitmap)
// 	ctxt.save(); 
// 	//var tmp = ctxt.fillStyle;
// 	ctxt.fillStyle = `rgb(${1*grayscaleVal}, ${1*grayscaleVal}, ${1*grayscaleVal})`;
// 	ctxt.fillRect(0, 0, canvas.width, canvas.height);
// 	//saves are pushed onto stack; last save in, first out
// 	//restore pops top save off stack
// 	ctxt.restore();
// 	//ctxt.fillStyle = tmp;
// }
/**
 * why are we drawing the background and walls over and over?
 * because drawing the player erases background (one layer);
 * when player moves, background needs to be redrawn behind
 * them (easiest way is to redraw background, then walls,
 * then player at new location)
 */
function drawUpdate() {
	background(60);
	
	ctxt.lineWidth = 3;
	ctxt.strokeStyle = "rgb(255, 255, 255)";
	let vertices = [
		new Vec2(50, 50),
		new Vec2(100, 300),
		new Vec2(250, 200),
	];
	let walls = [
		Ray2.with2p(vertices[0], vertices[1]),
		Ray2.with2p(vertices[1], vertices[2]),
		Ray2.with2p(vertices[2], vertices[0]),
	];
	for(let wall of walls) {
		line(wall.begin.x, wall.begin.y, wall.end.x, wall.end.y);
	}
	//line(50, 50, 100, 300);
	//line(100, 300, 250, 200);
	//line(250, 200, 50, 50)

	//drawPlayer();
	point(player.pos.x, player.pos.y, 12);
	let fov = Math.PI/2; //90 degree field of view
	let leftBound = player.angle - fov/2;
	let rightBound = player.angle + fov/2;
	
	let rayIndex = -1
	for(let theta = leftBound; theta < rightBound+0.01; theta += fov/20) {
		rayIndex++;
		
		//current traced-ray
		let pWay = new Ray2(
			player.pos, 
			new Vec2(Math.cos(theta)*100, Math.sin(theta)*100)
		);
		ctxt.lineWidth = 2;
		ctxt.strokeStyle = '#B00000'
		line(pWay.begin.x, pWay.begin.y, pWay.end.x, pWay.end.y);
		
		/*wall/light-ray collision handling, and 3d viewport*/
		for(let wall of walls) {
			let hitPos = pWay.intersect(wall);
			if(hitPos !== null) {
				point(hitPos.x, hitPos.y, 5, "#0000B0");
				let distance = hitPos.sub(pWay.begin).length(); //distance from wall to eye
				let distance_normal = distance * Math.cos(theta - player.angle);
				
				let lineHeight = 2800/distance_normal;
				//lineHeight -= lineHeight % 8;
				
				//point off to side, to draw 3d lines
				let viewRoot = new Vec2(300, 100);
				//once for every ray
				//why negative lineheight? trying to go up (negative y) then down(positive y)
				let lineBegin = viewRoot.add(new Vec2(6.5*rayIndex, -lineHeight/2));
				let lineEnd = lineBegin.add(new Vec2(0, lineHeight));
				ctxt.strokeStyle = "#FFFFFF";
				ctxt.lineWidth = 6;
				line(lineBegin.x, lineBegin.y, lineEnd.x, lineEnd.y);
			}
			
		}
	}

}
function init() {
	player = new Player(new Vec2(100, 200), Math.PI/4);
	drawUpdate();
}
init();
canvas.addEventListener("mousemove", (e) => {
	player.pos.x = e.clientX;//mouse location
	player.pos.y = e.clientY;//mouse location
	drawUpdate();
});
canvas.addEventListener("mouseout", () => {
	player.pos.x = 100;//mouse location
	player.pos.y = 200;//mouse location
	drawUpdate();
})
//canvas.focus()
canvas.addEventListener("keydown", (e) => {
	//console.log(e.key);
	switch(e.key) {
		case "a":
		case "A": //covers caps-locked A, or shift+A
		case "ArrowLeft":
			player.angle -= Math.PI/60;
			break;
		case "d":
		case "D":
		case "ArrowRight":
			player.angle += Math.PI/60;
			break;
		default:
			return;
	
	}
	drawUpdate();
});