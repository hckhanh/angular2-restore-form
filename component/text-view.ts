import {Component, Input} from 'angular2/core';

@Component({
	selector: 'text-view',
	templateUrl: 'template/text-view.html'
})

export class TextViewComponent {
	isEdit: boolean;
	private previousText: string;

	@Input() label: string;
	@Input() text: string;

	editItem() {
		this.isEdit = true;
		this.previousText = this.text;
	}

	saveItem() {
		this.isEdit = false;
		this.previousText = this.text;
	}

	cancelEdit() {
		this.isEdit = false;
		this.text = this.previousText;
	}
}