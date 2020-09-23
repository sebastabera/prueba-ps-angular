angular.module("PruebaApp")
.controller("MainController", function($scope, $location, MainService){
    $scope.employees = [];
    $scope.employeeSelect = {
        "id": null,
        "tipo_de_documento": null,
        "documento": null,
        "nombre": null,
        "cargo": null,
        "lugar_nacimiento": null,
        "fecha_nacimiento": null,
        "salario": null,
        "tipo_de_Sangre": null
    };

    $scope.filter = {
        "name": "",
        "document": ""
    };

    $scope.findEmployee = findEmployee;
    $scope.find = find;
    this.init = init;
    this.resetFilter = resetFilter;
    init();
    
    function init(){
        MainService.getEmployees().then(function(data){
            $scope.employees = data;
        });
    }

    function findEmployee(idEmployee){
        $location.url(`/employee/${idEmployee}`);
    }

    function find(){
        MainService.find($scope.filter).then(function(data){
            $scope.employees = data;
            resetFilter();
        });
    }

    function resetFilter(){
        $scope.filter = {
            "name": "",
            "document": ""
        };
    }
})
.controller("EmployeeController", function($scope, $routeParams, MainService){

    $scope.employeeId = $routeParams.id;

    $scope.employeeSelect = {
        "id": null,
        "tipo_de_documento": null,
        "documento": null,
        "nombre": null,
        "cargo": null,
        "lugar_nacimiento": null,
        "fecha_nacimiento": null,
        "salario": null,
        "tipo_de_Sangre": null
    };

    $scope.findEmployee = findEmployee;
    findEmployee();

    function findEmployee(){
        console.log($scope.employeeId);
        MainService.findEmployee($scope.employeeId).then(function(data){
            $scope.employeeSelect = data;
        });
    }
});