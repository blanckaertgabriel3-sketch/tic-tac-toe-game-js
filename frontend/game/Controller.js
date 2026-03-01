export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		for(let i=0 ; i<this.view.totalBtn ; i++) {
			this.view["button" + i].addEventListener("click", ()=>{this.view.printIntoButton(i)});

		}
	}
}