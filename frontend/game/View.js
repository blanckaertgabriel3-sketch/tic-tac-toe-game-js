export default class View {
	constructor() {
		//game elements
		this.game = document.getElementById("game");
		this.game.style.width = "480px";
		this.game.style.height = "480px";
		this.game.style.backgroundColor = "#992208";
		//gid
		this.columnsNb = 3;
		this.rowsNb = 3;
		this.totalBtn = this.columnsNb*this.rowsNb;
		this.game.style.display = "grid";
		this.game.style.border = "10px solid black";
		this.game.style.gridTemplateColumns = `repeat(${this.columnsNb}, 1fr)`;
		this.game.style.gridTemplateRows = `repeat(${this.rowsNb}, 1fr)`;

		this.createButton();
		this.getButton();
		
	}
	//create button inside game div
	createButton() {
		for(let i=0 ; i<this.totalBtn ; i++) {
			let x = document.createElement("button");
			x.style.border = "2px solid black";
			x.style.padding = "0px";
			x.style.margin = "0px";
			x.id = 'button'+ i;
			this.game.appendChild(x);
		}
	}
	getButton() {
		for(let i=0 ; i<this.totalBtn ; i++) {
			this["button" + i] = document.getElementById(["button" + i]);
		}
	}

}