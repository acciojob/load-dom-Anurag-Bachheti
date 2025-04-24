window.onload = function () {
        document.body.innerHTML = "";

        let overlay = document.createElement("div");
        overlay.className = "overlay-message";
        overlay.innerText = "DOM load success";

        document.body.appendChild(overlay);
};