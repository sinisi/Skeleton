app.controller('AppController', ['globalInfo', function(globalInfo) {
    var vm = this;
    vm.nav = [
       {
        url:"#/",
        title:"Home"
       },{
        url:"#/students",
        title:"Presenze"
       }
    ];
    vm.ver = globalInfo.version;
    vm.today = new Date();
}]);
