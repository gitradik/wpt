import angular from 'angular';
import routes from './app.config';
import redirects from './app.redirects';
import ngRoute from 'angular-route';
import homeModule from './pages/home/home.module';
import signUpModule from './pages/signUp/signUp.module';
import shared from './shared/shared.module';

angular.module('wptApp', [ngRoute, homeModule, signUpModule, shared])
    .config(routes)
    .run(['$rootScope', 'Account', function ($rootScope, Account) {
        $rootScope.loggedAccount = null;
        Account.getAccount();
    }])
    .run(redirects);
