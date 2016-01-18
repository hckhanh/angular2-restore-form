import {Component} from 'angular2/core';
import {User} from './user';
import {TextViewComponent} from './text-view'

@Component({
	selector: 'user-list',
	templateUrl: 'template/user-list.html',
	directives: [TextViewComponent]
})

export class UserListComponent {
	label: string = 'Name: ';
	users: User[] = [
		{
			name: 'Khanh Kun'
		},
		{
			name: 'Trieu Gun'
		},
		{
			name: 'Van Rin'
		},
		{
			name: 'Hung Pun'
		}
	];
}