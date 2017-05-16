import Angular from 'angular';
import AngularRouter from 'angular-route';

console.log(Angular);

//Angular.module('myApp', [AngularRouter]);

let app = Angular.module('main', [AngularRouter]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl : "angular_templates/main.htm"
	})
	.when("/lukasz", {
		templateUrl : "angular_templates/marek.htm"
	});
});