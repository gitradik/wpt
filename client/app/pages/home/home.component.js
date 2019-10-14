module.exports = {
    templateUrl: 'app/pages/home/home.template.html',
    controller: [ '$scope', PageHomeController ]
};

function PageHomeController($scope) {
    const ctrl = this;
    ctrl.title = "HOME PAGE";
}
