app.controller('homeController', ['$scope','$http','get', function(scope, http, get){

    scope.user = {
        firstName: "csk",
        lastName: "sd"
    }

   get.getRoleTypes().then(function(roles){
        scope.userRoles = roles;
        console.log(scope.userRoles);
   });

scope.registerUser = function(){
    console.log(scope.user);
    http.post('/register',scope.user).success(function(success){
        console.log("working");
    }).error(function(error){
        console.log("error");
    })

}
}]);