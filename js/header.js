// Create a new app with the AngularFire module
var login = angular.module("login", ["firebase"]);

// Re-usable factory that generates the $firebaseAuth instance
login.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://milocal.firebaseio.com");
  return $firebaseAuth(ref);
});

// Creating controller for logging in users
login.controller("loginCtrl", function($scope, Auth, $firebaseArray, $firebaseObject){
    
    // Listens for changes in authentication state
    Auth.$onAuth(function(authData) {
    $scope.authData = authData;
        
        if(authData){
        var ref = new Firebase("https://milocal.firebaseio.com");
        var authData = ref.getAuth();
        var ref = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);
            
    
        ref.on("value", function(snapshot) {
  	     var user = snapshot.val();
  	     console.log(user);
        
        $scope.local = user.NombreLocal;
        $scope.rubrolocal = user.RubroLocal;
            
        var reftres = new Firebase("https://milocal.firebaseio.com/users/");
        reftres.on("child_added", function(snapshot){
        var anun = snapshot.val()
        $scope.a = anun.Anuncio;
        var an = $scope.a;
        console.log(an);
        $scope.$apply();
        })
            
        var rubroLocal = $scope.rubrolocal;
            
            
        var refdos = new Firebase("https://milocal.firebaseio.com/rubros/" + rubroLocal);
  	refdos.on("value", function(snapshot){
  	var rub = snapshot.val();
  	console.log(rub);
  	$scope.rub = rub;
  	$scope.$apply();
  	})    
        })
        }
    });
  
    $scope.login = function() {
  	console.log("click en iniciar");
  	
  	function authHandler(error, authData) {
  	if (error) {
    	alert("Error, el Email o Contrasena no existen, por favor registrese antes de continuar o intente nuevamente!", error);
  	} else {
    	console.log("Inicio de sesión exitoso, bienvenido!:", authData); 
        location.reload();
  		}
	}
	
	var ref= new Firebase("http://milocal.firebaseio.com");
	
	ref.authWithPassword({
  	email    : $scope.emailSesion,
  	password : $scope.passSesion
	}, authHandler);
  	
  };
    

    // Logs out the logged-in user
    $scope.logout = function() {
    Auth.$unauth();
    location.reload();
  };
    
});