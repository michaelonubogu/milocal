var anunDash = angular.module("anunDash", ["firebase"]);

anunDash.controller("anuncioDashCtrl", function($scope){
    
    var ref = new Firebase("http://milocal.firebaseio.com")
	var authData = ref.getAuth();

	// Get a database reference to our users
	var ref = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);

	// Attach an asynchronous callback to read the data at our posts reference
	ref.on("value", function(snapshot) {
  	var user = snapshot.val();
  
  	$scope.anunciodash = user.Anuncio;
  	$scope.$apply();
  
	}, function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
  
	});

});