routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
    $routeProvider.when('/', {
        template: '<page-home></page-home>'
    })
        .otherwise('/');
}
