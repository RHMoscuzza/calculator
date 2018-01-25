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

	var setNum = function() {
		if (resultNum) {
			theNum = this.getAttribute("data-num");
			resultNum = "";
		}

		viewer.innerHTML = theNum;
	};

	var moveNum = function() {
		oldNum = theNum;
		theNum = "";
		operator = this.getAttribute("data-results", "");
	};

	var displayNum = function() {
		oldNum = parseFloat(oldNum);
		theNum = parseFloat(theNum);

		switch (operator) {
			case "plus":
				resultNum = oldNum + theNum;
				break;
			case "minus":
				resultNum = oldNum - theNum;
				break;
			case "multiply":
				resultNum = oldNum * theNum;
				break;
			case "divide":
				resultNum = oldNum / theNum;
				break;
			default:
				resultNum = theNum;
		}
	}
})