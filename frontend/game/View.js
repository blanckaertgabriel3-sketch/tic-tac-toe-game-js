export default class View {
	constructor() {
		this.game = document.getElementById("game");
		this.game.style.width = "500px";
		this.game.style.height = "500px";
		this.game.style.backgroundColor = "#992208";

		const button = document.createElement("div");
		button.style.height = "50px";
		button.style.width = "50px";
		button.style.backgroundColor = "green";
		console.log("button create");
		console.log(button);

		for(let i=0 ; i<9 ; i++) {
			var x = document.createElement("button");
			game.appendChild(x);
			
		}
	}
}