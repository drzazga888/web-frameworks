import Angular from 'angular';
import './style.scss';
import AngularRouter from 'angular-route';
import PersonCtrl from './personCtrl';
import HeaderDirective from './header-directive';
console.log(Angular);

//Angular.module('myApp', [AngularRouter]);

let app = Angular.module('main', [AngularRouter, PersonCtrl, HeaderDirective]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "angular_templates/view_people.htm"
	})
	.when("/person/create", {
		templateUrl : "angular_templates/create_person.htm"
	})
	.when("/person", {
		templateUrl : "angular_templates/view_people.htm"
	})
	.when("/person/:personId/edit", {
		templateUrl : "angular_templates/edit_person.htm"
	})
	.when("/person/:personId", {
		templateUrl : "angular_templates/view_person.htm"
	});
});
