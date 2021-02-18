var canvas = document.getElementById("viewfield");
var ctxt = canvas.getContext('2d');

/**
 * sets background of canvas as some grayscale value
 * @param {number} grayscaleVal 
 */
function background(grayscaleVal) {
	//saves current global attributes, transformation matrix
	//of context (not of canvas and its bitmap)
	ctxt.save(); 
	//var tmp = ctxt.fillStyle;
	ctxt.fillStyle = `rgb(${1*grayscaleVal}, ${1*grayscaleVal}, ${1*grayscaleVal})`;
	ctxt.fillRect(0, 0, canvas.width, canvas.height);
	//saves are pushed onto stack; last save in, first out
	//restore pops top save off stack
	ctxt.restore();
	//ctxt.fillStyle = tmp;
} 