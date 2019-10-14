routes.$inject = ['$routeProvider'];

export default function routes($routeProvider) {
    $routeProvider.when('/', {
        template: '<div>HELLO WORLD~!!!</div>'
    })
        .otherwise('/');
}
