import angular from 'angular';
import homeComponent from './home.component';

export default angular.module('pageHome', [])
.component('pageHome', homeComponent).name;
