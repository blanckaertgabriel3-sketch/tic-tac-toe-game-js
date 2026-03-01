export default class View {
	constructor() {
		this.game = document.getElementById("game");
		this.game.style.width = "480px";
		this.game.style.height = "480px";
		this.game.style.backgroundColor = "#992208";

		this.columnsNb = 3;
		this.rowsNb = 3;

		this.game.style.display = "grid";
		this.game.style.border = "10px solid black";
		this.game.style.gridTemplateColumns = `repeat(${this.columnsNb}, 1fr)`;
		this.game.style.gridTemplateRows = `repeat(${this.rowsNb}, 1fr)`;
		
	}
	createButton() {
		for(let i=0 ; i<this.columnsNb*this.rowsNb ; i++) {
			var x = document.createElement("button");
			x.style.border = "2px solid black";
			this.game.appendChild(x);

			
		}
	}
}