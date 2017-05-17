import Angular from 'angular';
import './style.scss';
import AngularRouter from 'angular-route';
import PersonCtrl from './personCtrl';

//Angular.module('myApp', [AngularRouter]);

let app = Angular.module('header-directive', []);

app.directive("intro", function() {
    return {
      restrict: 'A',
      templateUrl: "angular_templates/header-directive.htm"
    };
  });


export default app.name;