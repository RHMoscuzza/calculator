(function() {
	"use strict";

	var el = function(element) {
		if (element.charAt(0) === "#") {
			return document.querySelector(element);
		}
		return document.querySelector(element);
	};

	var viewer = el("#viewer"),
		equals = el("#equals"),
		num = el(".num"),
		op = el(".operations"),
		theNum = "",
		oldNum = "",
		resultNum,
		operator;

	
})