function Stage(el) {
	this.el = document.querySelector(el);
	this.ctx = this.el.getContext('2d');

	this.state = 'close';
	this.y = 0;
	this.fillStyle = '#999';
	this.ready = false;
	this.tmp = 0;
}

Stage.prototype.render = function(level) {
	if (this.state === 'close') {

		if (this.y < HEIGHT / 2) {
			this.y += 8;
			this.ctx.fillStyle = this.fillStyle;
			this.ctx.fillRect(0, 0, WIDTH, this.y);
			this.ctx.fillRect(0, HEIGHT - this.y, WIDTH, this.y);
		} else {
			if (this.tmp === 0) {
				level = level || 1;
				this.ctx.fillStyle = '#000';
				this.ctx.font = '24px serif';
				this.ctx.textAlign = 'center';
				this.ctx.fillText('stage ' + level, WIDTH / 2, HEIGHT / 2, 200);
			}
			this.tmp++;
			if (this.tmp === 50) {
				this.state = 'open';
				this.tmp = 0;
			}
			log(this.state);
		}
	} else {
		this.y -= 8;
		this.ctx.clearRect(0, this.y, WIDTH, HEIGHT - this.y * 2);
		if (this.y <= 0) {
			this.state = 'close';
			this.ready = true;
		}
	}
};