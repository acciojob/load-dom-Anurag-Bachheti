window.onload = function() {
	const overlay = document.createElement("div");
	overlay.className = "overlay-message";
	overlay.innerText = "DOM load success"
	document.documentElement.appendChild(overlay)
};