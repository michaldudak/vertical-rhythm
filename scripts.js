(function () {
	"use strict";
	
	var toggleLinesButton = document.getElementById("toggleLines");
	var pageElement = document.getElementById("page");
	var hasBackground = false;
	
	toggleLinesButton.addEventListener("click", function () {
		if (pageElement.className === "lines") {
			pageElement.className = "";
		} else {
			pageElement.className = "lines";
		}
	});
	
}());