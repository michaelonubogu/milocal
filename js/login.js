var login = angular.module("login", ["firebase"]);

login.controller("loginCtrl", ["$scope", "$firebaseAuth",
  function($scope, $firebaseAuth) {
    var ref = new Firebase("https://milocal.firebaseio.com");
    $scope.authObj = $firebaseAuth(ref);
      
    $scope.authObj.$onAuth(function(authData) {
    if (authData) {
    console.log("Logged in as:", authData.uid);
        
    //here redirect code
    window.location.href = '#/panelcontrol'; 
        
    } else {
    console.log("Logged out");
    window.location.href = '#/Bienvenidos'
    }
    });
      
    $scope.login = function(){
    
        console.log("Click en Iniciar");
        
        $scope.authObj.$authWithPassword({
        email: $scope.emailSesion,
        password: $scope.passSesion
        }).then(function(authData) {
        console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
        console.error("Authentication failed:", error);
        alert("Datos incorrectos, intente nuevamente");
        });
    
    }//END LOGIN FUNCTION
      
  }
]);