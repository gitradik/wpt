routes.$inject = ['$urlRouterProvider'];

export default function routes($urlRouterProvider) {
    $urlRouterProvider.when('/', {
        template: "<div>HELLO WORLD~!!!</div>"
    });
    $urlRouterProvider.otherwise('/');
}
