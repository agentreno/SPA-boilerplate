angular.module("spaboilerplate")
.config(["$routeProvider", function($routeProvider){
   $routeProvider.when("/test", {
      templateUrl: "partials/test.html"
   });
}]);
