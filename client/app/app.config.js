routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<page-home></page-home>'
        })
        .when('/sign-up', {
            template: '<page-sign-up></page-sign-up>'
        })
        .otherwise('/');
}
