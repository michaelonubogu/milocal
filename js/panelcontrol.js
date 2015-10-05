var panelcontrol = angular.module("panelcontrol", []);

panelcontrol.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://milocal.firebaseio.com");
  return $firebaseAuth(ref);
});

panelcontrol.controller("panelControl", function($scope, Auth){
    
    // Listens for changes in authentication state
    Auth.$onAuth(function(authData) {
    $scope.authData = authData;
    
        if(authData){    
        console.log("Hola bienvenido");
        console.log("Logged in as:", authData.uid);
        }else{
            console.log("no funciona reconocimiento de usuario");
            window.location.href = '#/Bienvenidos';
            }
    });
    
});

panelcontrol.controller("ProfileCtrl", function($firebaseObject, Auth, $scope) {
    Auth.$onAuth(function(authData) {
    $scope.authData = authData;
        if(authData){
            var refprofile = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);
            $scope.perfil = $firebaseObject(refprofile);
        }
        else{
            window.location.href = '#/Bienvenidos';
        }
    });
    //FUNCION AGREGAR ANUNCIO
    $scope.addAnuncio = function(){
        Auth.$onAuth(function(authData) {
        $scope.authData = authData;
        if(authData){
        console.log("Agregando anuncio");
        console.log($scope.perfil.Anuncio);
        var anun = $scope.perfil.Anuncio;
        var refAnunAdd = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);
            refAnunAdd.update({
            Anuncio: anun,
            FechaAnuncio: Firebase.ServerValue.TIMESTAMP
            });
        }
            else{
            console.log("Cerro Sesion");
            }
        });
         };
    
    // Logs out the logged-in user
    $scope.logout = function() {
    Auth.$unauth();
    location.reload();
  };
    
});

panelcontrol.controller("RubroCtrl", function($firebaseObject, Auth, $scope, $timeout){

    Auth.$onAuth(function(authData) {
    $scope.authData = authData;
        
        if(authData){
            var refprofile = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);
            refprofile.on("value", function(snapshot) {
                var user = snapshot.val();
                $scope.rubrolocal = user.RubroLocal;
                var rubroLocal = $scope.rubrolocal;
                    
                    var rub = new Firebase("https://milocal.firebaseio.com/rubros/" + rubroLocal);
                    $timeout(function(){
                    rub.on("value", function(snapshot){
                    var rubro = snapshot.val();
                    $scope.rubro = rubro;
                    console.log(rubro);
                    $scope.$apply();
  	                 }) 
                    })
                })
        }
        
    })
    
    
});