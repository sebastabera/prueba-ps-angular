angular.module("PruebaApp")
.directive('onlynumber',function(){
    return {
        require: 'ngModel',
        restrict: 'A',
        link: link
    }

    function link(scope, element, attrs, model){
        model.$parsers.push(function(val){
            if(!val){
                return null;
            }
            var replaced = val.replace(/[^0-9]/g, '');
            if(replaced !== val){
                model.$setViewValue(replaced);
                model.$render();
            }
            return replaced;
        });
    }
})