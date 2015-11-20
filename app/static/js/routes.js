angular.module("spaboilerplate")
.config(["$routeProvider", function($routeProvider){
   $routeProvider.when("/test", {
      template: "<b>test message</b>"
   });
}]);
