redirects.$inject = ['$rootScope', '$location'];

export default function redirects($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if ($rootScope.loggedAccount === null) {
            if (next.originalPath !== "/sign-up") {
                $location.path("/sign-up");
            }
        } else {
            if (next.originalPath === "/sign-up") {
                $location.path("/");
            }
        }
    });
}
