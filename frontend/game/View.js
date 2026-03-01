export default class View {
	constructor(model) {
		this.model = model;
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
			//textContent Size
			this["button" + i].style.fontSize = "100px";
		}
	}
	printIntoButton(caseNumber) {
		if(this.somethingInTheCase(caseNumber) == true) {
			if(this.model.player1Turn) {
				this["button" + caseNumber].textContent = this.model.player1.symbol;
				this.model.player1Turn = false;
			}
			else {
				this["button" + caseNumber].textContent = this.model.player2.symbol;
				this.model.player1Turn = true;
	
			}
			this.rowWin();
		}
	}
	somethingInTheCase(caseNumber) {
		if(this["button" + caseNumber].textContent != "") {
			return false;
		}
		return true;
		
	}
	rowWin() {
		console.log("array");
		let columnIndex;
		//create array for each row
		for(let i=0 ; i<this.rowsNb ; i++) {
			this["rowArray" + i] = [];
			console.log(this["rowArray" + i]);
		}
		for(let r=0 ; r<this.rowsNb ; r++) {
			if(r==0) {
				columnIndex = 0;
			}
			else {
				columnIndex = r * this.columnsNb;
			}
			for(let i=0 ; i < this.columnsNb; i++) {
				this["rowArray" + r].push(this["button" + (i+columnIndex)].textContent);
	
			}
			// console.log("rowIndex", columnIndex);
		}
	}

}