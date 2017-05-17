import Angular from 'angular';
import './style.scss';
import AngularRouter from 'angular-route';

console.log(Angular);

//Angular.module('myApp', [AngularRouter]);

let app = Angular.module('main', [AngularRouter]);

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

app.controller("ViewPeopleController", ["$http",function($http){
    var view_people = this;
    view_people.data = [];
    view_people.searchquery="";
    view_people.orderby="lname";
    $http.get('/web-frameworks/rest/person/').then(function(response){
    	view_people.data = response.data;
    	console.log("view_people.data: ", view_people.data);
    });
    
    view_people.cleansearchquery = function(){
    	view_people.searchquery="";
    	view_people.research();
    };
    view_people.research = function(){
    	console.log("research: ", view_people.searchquery);
    	$http.get('/web-frameworks/rest/person/',
    			{params: {
    				search: view_people.searchquery,
    				orderby: view_people.orderby
    					}
    			}).then(function(response){
    	view_people.data = response.data;
        	console.log("view_people.data: ", view_people.data);
        });
    };
    
  }]);

app.controller("ViewPersonController", ["$http", "$routeParams", "$location", function($http, $routeParams, $location){
    var view_person = this;
    view_person.data = [];
    view_person.id = $routeParams.personId;
    $http.get('/web-frameworks/rest/person/'.concat(view_person.id)).then(function(response){
    	view_person.data = response.data;
    	console.log("view_person.data: ", view_person.data);
    });
    
    view_person.deletePerson = function(){
    	$http.delete('/web-frameworks/rest/person/'.concat(view_person.id)).then(function(response){
    		console.log("Usunieto");
    		$location.path('/person');
        });
    };
    
  }]);

app.controller("CreatePersonController", ["$http","$location", function($http,$location){
	var create_ctrl = this;
	create_ctrl.person_data = {}; 
    
	create_ctrl.addPerson = function(){
    	console.log("do wysl");
    	$http.post('/web-frameworks/rest/person/', create_ctrl.person_data).then(function(response){
        	console.log("Wyslano:", create_ctrl.person_data);
        	create_ctrl.person_data = {};
        	$location.path('/person');
        });
    };
    
  }]);

app.controller("EditPersonController", ["$http","$location", "$routeParams", function($http,$location, $routeParams){
	var edit_ctrl = this;
	edit_ctrl.person_data = {}; 
	edit_ctrl.id = $routeParams.personId;
	$http.get('/web-frameworks/rest/person/'.concat(edit_ctrl.id)).then(function(response){
		edit_ctrl.person_data = response.data;
    	console.log("edit_person.data: ", edit_ctrl.person_data);
    });
	
	edit_ctrl.editPerson = function(){
    	console.log("do wysl");
    	$http.put('/web-frameworks/rest/person/', edit_ctrl.person_data).then(function(response){
        	console.log("Updated:", edit_ctrl.person_data);
        	edit_ctrl.person_data = {};
        	$location.path('/person');
        });
    };
    
  }]);