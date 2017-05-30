app.service('get', function($http, $q){

var _getRoleTypes = function(){
var deferred = $q.defer();
    $http.get('/getUserRoleTypes').success(function(results){
       deferred.resolve(results);
    }).error(function(error){
        console.log(error);
        deferred.resolve(error);
    });

    return deferred.promise;

}

this.getRoleTypes = _getRoleTypes;



});