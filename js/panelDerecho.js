var panelDerecho = angular.module("panelDerecho", []);

panelDerecho.controller('panelDerechoCtrl', function($scope, Auth){
    
    // Listens for changes in authentication state
    //Auth.$onAuth(function(authData) {
    //$scope.authData = authData;
    //});
    
    if(authData){
        var ref = new Firebase("https://milocal.firebaseio.com");
        var authData = ref.getAuth();
        var ref = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);
    
        ref.on("value", function(snapshot) {
  	    var user = snapshot.val();
        
        $scope.local = user.NombreLocal;
        $scope.$apply();
        })
        }

});