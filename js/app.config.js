angular.module("PruebaApp")
.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "MainController",
        templateUrl: "templates/home.html"
    })
    .when("/employee/:id",{
        controller: "EmployeeController",
        templateUrl: "templates/employee.html"
    })
    .otherwise("/");
});