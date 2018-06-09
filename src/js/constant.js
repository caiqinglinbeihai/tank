var log = console.log.bind(console);

var WIDTH = 512,
	HEIGHT = 448,
	SIZE = 32,
	IMG_MENU = document.querySelector('#img_menu'),
	IMG_TANK = document.querySelector('#img_tankAll'),
	STATE = {
		MENU: 0,
		PLAY: 1,
	},
	DIRECTION = {
		UP: 0,
		DOWN: 1,
		LEFT: 2,
		RIGHT: 3,
	},
	KEYBOARD = {
		W: 87, 
		S: 83,
		A: 65, 
		D: 68,
		J: 74,
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39,
		ENTER: 13,
		SPACE: 32,
	},
	TANK_ATTRS = {
		SELECTOR: {
			x: 140,
			ys: [250, 280],
			size: 28,
			imgPos: [128, 96],
		},
		PLAYER: [
			{
				x: 192,
				y: 416,
				imgPos: [[0,0], [32,0], [64,0], [96,0]],
				direction: DIRECTION.UP,
			},
			{
				x: 288,
				y: 416,
				imgPos: [[128,0], [160,0], [192,0], [224,0]],
				direction: DIRECTION.UP,
			}
		],
		ENEMY: [
			{
				pos: [[0,0], [240,0], [480,0]],
				imgPos: [[0,32], [32,32], [64,32], [96,32]],
				direction: DIRECTION.DOWN,
			},
			{
				pos: [[0,0], [240,0], [480,0]],
				imgPos: [[128,32], [160,32], [192,32], [224,32]],
				direction: DIRECTION.DOWN,
			},
			{
				pos: [[0,0], [240,0], [480,0]],
				imgPos: [[0,64], [32,64], [64,64], [96,64]],
				direction: DIRECTION.DOWN,
			},
			{
				pos: [[0,0], [240,0], [480,0]],
				imgPos: [[128,64], [160,64], [192,64], [224,64]],
				direction: DIRECTION.DOWN,
			},
		]
	};
