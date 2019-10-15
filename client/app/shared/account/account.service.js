import angular from 'angular';
import baseURL from '../../api/baseURL';

export default angular.module('shared.account')
    .factory('Account', function ($rootScope, $location, $timeout, $http) {
        $rootScope.account = {
            isFetching: false,
        };

        function validateEmail(value) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }

        function validatePassword(value) {
            return /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/.test(value);
        }

        return {
            subscribeOnChangeAccount: function (callback) {
                $rootScope.$watch('account', callback);
            },

            subscribeFetchAccount: function (callback) {
                $rootScope.$watch('account.isFetching', callback);
            },

            pushAccount: function ({ email, password }) {
                $rootScope.account.isFetching = true;
                $http.post(baseURL + "createAccount", { email, password })
                    .then(function successCallback(response) {
                        localStorage.setItem('access', response.data.token);
                        $rootScope.loggedAccount = response.data;
                        $rootScope.account.isFetching = false;
                        $location.path("/");
                    }, function errorCallback() {
                        $rootScope.account.isFetching = false;
                    });
            },

            getAccount: function () {
                $rootScope.account.isFetching = true;
                $http.get(baseURL + "getAccount", {headers: {access_token: localStorage.getItem('access')}})
                    .then(function successCallback(response) {
                        localStorage.setItem('access', response.data.access_token);
                        $rootScope.loggedAccount = response.data;
                        $rootScope.account.isFetching = false;
                        $location.path('/');
                    }, function errorCallback() {
                        $rootScope.loggedAccount = null;
                        $rootScope.account.isFetching = false;
                        $location.path('/sign-up');
                    });
            },

            isFetchingAcc: function () {
                return $rootScope.account.isFetching;
            },

        };
    });
