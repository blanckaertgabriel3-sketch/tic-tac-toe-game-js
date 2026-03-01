export default class View {
	constructor() {
		this.game = document.getElementById("game");
		this.game.style.width = "500px";
		this.game.style.height = "500px";
		this.game.style.backgroundColor = "#992208";

		for(let i=0 ; i<9 ; i++) {
			var x = document.createElement("button");
			game.appendChild(x);
			
		}
	}
}