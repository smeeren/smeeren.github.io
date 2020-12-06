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
	
	//alert("A");
	
	html2canvas(document.getElementById("output")).then(cvs => {
		document.body.appendChild(cvs);
	});
	
	Canvas2Image.saveAsPNG(cvs, cvs.width, cvs.height);
	
}
	