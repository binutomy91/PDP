(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LotteryMachine = function () {
	function LotteryMachine(settings) {
		_classCallCheck(this, LotteryMachine);

		Object.assign(this, settings);
	}

	_createClass(LotteryMachine, [{
		key: "drawNumbers",
		value: function drawNumbers() {
			var numbers = [];

			for (var i = 0; i < this.total; i++) {
				var randomNumber = Math.floor(Math.random() * this.max + this.min);
				do {
					numbers.push(randomNumber);
				} while (!numbers.includes(randomNumber));
			}

			return numbers;
		}
	}]);

	return LotteryMachine;
}();

exports.default = LotteryMachine;

},{}],2:[function(require,module,exports){
"use strict";

var _LotteryMachine = require("./LotteryMachine.js");

var _LotteryMachine2 = _interopRequireDefault(_LotteryMachine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
	var currentDraw = new _LotteryMachine2.default({
		min: 1,
		max: 50,
		total: 6
	});

	currentDraw.drawNumbers();
}

window.onload = init;

},{"./LotteryMachine.js":1}]},{},[2]);
