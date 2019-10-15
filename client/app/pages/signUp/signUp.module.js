import angular from 'angular';
import signUpComponent from './signUp.component';
import sharedAccount from '../../shared/account/account.module';

export default angular.module('pageSignUp', [sharedAccount])
    .component('pageSignUp', signUpComponent).name;
