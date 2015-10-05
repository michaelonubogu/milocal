var registrar = angular.module("registrar", []);

registrar.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://milocal.firebaseio.com");
  return $firebaseAuth(ref);
});

registrar.controller("RegistrarCtrl", function($scope, Auth, $controller, $window){
console.log("Esta a punto de registrarse");
    
    // Listens for changes in authentication state
    Auth.$onAuth(function(authData) {
    $scope.authData = authData;
        
        if(authData){
        window.location.href = '#/panelcontrol';
        }
        else{
            console.log("Por favor llene los campos completamente");
            $controller("ubicacion", {$scope : $scope});
	
	$scope.marker.coords.latitude = -30.592172;
	$scope.marker.coords.longitude = -71.2056782;
	
	$scope.registrarUsuario = function(){
	
		var ref = new Firebase("https://milocal.firebaseio.com/users");
		ref.createUser({
  		email    : $scope.email,
  		password : $scope.contrasena
		}, function(error, userData) {
  		if (error) {
  			switch (error.code){
  			  case "EMAIL_TAKEN":
  			  	alert("El Email proporcionado ya esta en uso, por favor indique uno nuevo");
  			  	break;
  			  default:
   			  alert("Error al registrar, por favor intente mas tarde o póngase en contacto con nosotros:", error);
   			  }
  		} else {
    		console.log("Successfully created user account with uid:", userData.uid);
    		
    		//To check everything went well
  		var ide = userData.uid;
  		console.log(ide);
    		
    		//save user data
  		var usersRef = new Firebase("http://milocal.firebaseio.com" + "/users/" + ide);
		usersRef.set({
  		
        NombreLocal : $scope.nombrelocal,
		RubroLocal : $scope.rubrolocal,
		Latitud : $scope.marker.coords.latitude,
		Longitud : $scope.marker.coords.longitude,
		Usuario : $scope.usuario,
		Email : $scope.email,
		Contrasena : $scope.contrasena,
		Descripcion: "",
		Direccion: "",
		Horario: "",
		Telefono: "",
        Anuncio: ""
  		});
            
        var usercommentsref = new Firebase("https://milocal.firebaseio.com/comentarios/" + ide + "/comentario/");
        usercommentsref.set({
        Comentario: "",
        FechaComentario: ""
        });
  		
  		alert("Gracias por registrarse, ahora puede iniciar sesion!!!");
		$window.location.href = "/";
    		
  		}  		
  		
	});
	
	}
        }
    });
});