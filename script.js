window.onload = function() {
	const overlay = document.createElement("div");
	const text = document.createTextNode("DOM load Success");
	overlay.appendChild(text);
	document.documentElement.appendChild(overlay)
};