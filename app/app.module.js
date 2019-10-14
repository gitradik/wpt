import angular from 'angular';
import routes from './app.config';
import ngRoute from 'angular-route';
import homeModule from './pages/home/home.module';

angular.module('wptApp', [ngRoute, homeModule])
    .config(routes);
