import {Component, OnInit} from 'angular2/core';
import {User} from './user';
import {Router, RouteParams} from 'angular2/router';

@Component({
	selector: 'user-id',
	templateUrl: 'template/user-id.html',
})

export class UserIdComponent implements OnInit {
	user: User;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams) {}

	ngOnInit() {
		this.user = {
			id: +this._routeParams.get('id'),
			name: this._routeParams.get('name'),
		};
	}

	save() {
		
	}

	cancel() {

	}
}