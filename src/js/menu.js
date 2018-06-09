function Menu(el) {
	this.el = document.querySelector(el);
	this.ctx = this.el.getContext('2d');

	var selector = TANK_ATTRS['SELECTOR'];
	// size, ys, x, imgPos
	for (var i in selector) {
		if (selector[i] instanceof Object) 
			this[i] = Object.create(selector[i]);
		else 
			this[i] = selector[i];
	}
	this.top = HEIGHT;
	this.el.style.top = this.top + 'px';
	this.num = 1;
}

Menu.prototype.render = function () {
	this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
	this.ctx.drawImage(IMG_MENU, 0, 0, WIDTH, HEIGHT);
	this.ctx.drawImage(IMG_TANK, this.imgPos[0], this.imgPos[1], this.size, this.size, this.x, this.ys[this.num - 1], this.size, this.size);
	this.ctx.save();
}

Menu.prototype.selectPlayer = function() {
	this.num = this.num === 1 ? 2 : 1;
	this.render();
};

Menu.prototype.animate = function() {
	if (this.top > 0) {
		if (this.top >= HEIGHT) {
			this.render(this.num);
		}
		this.top -= 16;
		this.el.style.top = this.top + 'px';
	}
};