angular.module("PruebaApp")
.service("MainService", function($http){
    this.getEmployees = function(){
        return $http.get("data/employees.json")
        .then(function(response){
            return response.data;
        });
    }

    this.findEmployee = function(id){
        return $http.get("data/employees.json")
        .then(function(response){
            return response.data.find(element => element.id == id);
        });
    }

    this.find = function(filterData){
        return $http.get("data/employees.json")
        .then(function(response){
            return response.data.filter(element => element.nombre.toLowerCase().includes(filterData.name.toLowerCase()) &&
                    element.documento.toLowerCase().includes(filterData.document.toLowerCase()))
        });
    }
})