import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {UserListComponent} from './user-list';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(UserListComponent, [
	ROUTER_PROVIDERS
]);