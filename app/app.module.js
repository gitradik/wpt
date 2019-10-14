import angular from 'angular';
import routes from './app.config';
import ngRoute from 'angular-route';

angular.module('wptApp', [ngRoute])
    .config(routes);
