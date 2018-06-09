function Game() {
	this.keys = [];
	this.stage = new Stage('#stage');
	this.menu = new Menu('#menu');
	
	this.interval = null;
	this.state = STATE.MENU;
}

Game.prototype.keyboardListen = function() {
	var self = this;
	window.onkeydown = function (e) {
		if (self.keys.indexOf(e.keyCode) === -1) {
			self.keys.push(e.keyCode);
		}
	}

	window.onkeyup = function (e) {
		var i = self.keys.indexOf(e.keyCode);

		if (i !== -1) {
			self.keys.splice(i, 1);
		}
	}
};

Game.prototype.getKey = function() {
	return this.keys[this.keys.length - 1];
};

Game.prototype.run = function() {
	this.selectPlayer();
};

Game.prototype.loop = function() {
	var self = this;
	this.interval = setInterval(function () {
		
	}, 20);
};

Game.prototype.selectPlayer = function() {
	var self = this;
	var interval = setInterval(function () {
		self.menu.animate();
	}, 20);

	window.onkeydown = function (e) {
		var k = e.keyCode;
		if (k === KEYBOARD.UP || k === KEYBOARD.DOWN) {
			self.menu.selectPlayer();
		}

		if (k === KEYBOARD.ENTER) {
			clearInterval(interval);
			self.state = STATE.INIT;
			self.playerNumber = self.menu.num;
			self.keyboardListen();
			self.loop();
		}
	}
	
};
