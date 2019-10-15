module.exports = {
    templateUrl: 'app/pages/signUp/signUp.template.html',
    controller: [ '$scope', '$timeout', 'Account', PageSignUpController ]
};

function PageSignUpController($scope, $timeout, Account) {
    const ctrl = this;
    ctrl.title = "SIGN UP PAGE";

    ctrl.email = "";
    ctrl.password = "";

    ctrl.onClick = function () {
        Account.pushAccount(ctrl);
    };

    function onChangeAccount() {
    }

    function fetchAccount() {
        ctrl.isFetching = Account.isFetchingAcc();
    }

    Account.subscribeFetchAccount(fetchAccount);
    Account.subscribeOnChangeAccount(onChangeAccount);
}
