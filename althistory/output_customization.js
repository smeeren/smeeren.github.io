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
	alert("A")
	var old_canvas = document.getElementById("canvas");
	if (old_canvas !== null) {
		old_canvas.remove();
	}
	alert("B")
	html2canvas(document.querySelector("#output")).then(canvas => {
		document.querySelector("#output").parentNode.insertBefore(canvas, document.querySelector("#output").nextSibling);
		canvas.id = "canvas"
	});
	alert("C")
	//saveAsPNG(canvas, canvas.width, canvas.height);
}