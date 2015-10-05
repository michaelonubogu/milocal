var perfilUsuario = angular.module('perfil', ["firebase"]);

perfilUsuario.controller('perfilCtrl', function($scope){

	console.log("Aqui se cargara los datos de usuarios");
	
	var ref = new Firebase("http://milocal.firebaseio.com")
	var authData = ref.getAuth();

	// Get a database reference to our users
	var ref = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);

	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
  	var user = snapshot.val();
  
  	$scope.email = user.Email;
  	$scope.local = user.NombreLocal;
  	$scope.direccion = user.Direccion;
    $scope.telefono = user.Telefono;
  	$scope.horario = user.Horario;
  	$scope.descperfil = user.Descripcion;
  	$scope.rubrolocal = user.RubroLocal;
  	
  	console.log("Cargando ID de Rubro");
  	var rubroLocal = $scope.rubrolocal;
  	console.log(rubroLocal);
  	
  	console.log("Cargando nombre de rubro");
  	var refdos = new Firebase("https://milocal.firebaseio.com/rubros/" + rubroLocal);
  	refdos.on("value", function(snapshot){
  	var rub = snapshot.val();
  	console.log(rub);
  	$scope.rub = rub;
  	$scope.$apply();
  	})
  
	}, function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
  
	});

});


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++