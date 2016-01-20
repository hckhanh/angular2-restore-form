import {Component} from 'angular2/core';
import {User} from './user';
import {TextViewComponent} from './text-view';
import {UserIdComponent} from './user-id';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

@Component({
	selector: 'user-list',
	templateUrl: 'template/user-list.html',
	directives: [TextViewComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/user', name: 'UserId', component: UserIdComponent }
])

export class UserListComponent {
	constructor(private _router: Router) {}

	users: User[] = [
		{
			id: 1,
			name: 'Khanh Kun'
		},
		{
			id: 2,
			name: 'Trieu Gun'
		},
		{
			id: 3,
			name: 'Van Rin'
		},
		{
			id: 4,
			name: 'Hung Pun'
		}
	];

	editId(user: User) {
		this._router.navigate(['UserId', user]);
	}
}