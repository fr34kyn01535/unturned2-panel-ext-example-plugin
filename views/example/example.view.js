//This is our angular view controller. Make sure the name is unique, feel free to referency any providers, factories etc.
["$rootScope","$scope", "$http", "eventing", "$mdToast",function ($rootScope,$scope, $http, eventing, $mdToast) {
    var vm = this;
    vm.test = "IT WORKS and your session profile username is "+$rootScope.profile.userName;

    vm.answer = "s";
    $http.get("/test/ping").then(function(response){
        vm.answer = response.data;
    });

    vm.ping = function(){
        eventing.emit("pingsocket");
    }
    vm.pongs = "";
    eventing.on("pongsocket",function(){
        vm.pongs+="+";
        $scope.$apply();
    });
}] 