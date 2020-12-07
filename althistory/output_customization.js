//update size of output box
function widthOut() {
	let x = document.getElementById("wout").value+"px";
	document.getElementById("output").style.width = x;
	
	// Get the root element
	var r = document.querySelector(':root');
	r.style.setProperty('--width', x);
	
	/*var rs = getComputedStyle(r);
	alert("The value of --width is: " + rs.getPropertyValue('--width'));*/
	
}
	
//change font size
function fontOut() {
	var x = document.getElementById("fsize").value+"px";
	document.getElementById("output").style.fontSize = x;
}
	
//screenshot of output
function copyImg() {
	//trad. JS to select an element, and to append it to DOM
	var old_canvas = document.getElementById("canvas");
	if (old_canvas !== null) {
		old_canvas.remove();
	}
	var output_element = document.querySelector("#output")
	var output_border = output_element.style.border
	output_element.style.border = null
	html2canvas(output_element).then(canvas => {
		document.querySelector("#output").parentNode.insertBefore(canvas, document.querySelector("#output").nextSibling);
		canvas.id = "canvas";
	});
	output_element.style.border = output_border
	//saveAsPNG(canvas, canvas.width, canvas.height);
}