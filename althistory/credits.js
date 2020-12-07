var credits = document.createElement("DIV");
var credits_header = document.createElement("H4"); 
var credits_body = document.createElement("PRE");
credits_header.innerHTML = "Credit to creators of the following tools:";
credits.style.backgroundColor = "gray"
credits.style.border = "solid #000000";
credits.style.maxWidth = "500px";
credits.style.marginTop = "50px";
credits_body.innerHTML = "html2canvas by niklas hertzen, canvas2image by hongru";
document.body.appendChild(credits);
credits.appendChild(credits_header)
credits.appendChild(credits_body)