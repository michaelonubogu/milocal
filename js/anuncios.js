var anuncios = angular.module("anuncios", []);

panelcontrol.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://milocal.firebaseio.com");
  return $firebaseAuth(ref);
});

anuncios.controller("AnunciosCtrl", function($scope, $firebaseArray){
    
        refanuncios = new Firebase("https://milocal.firebaseio.com/users/");
        $scope.anuncio = $firebaseArray(refanuncios);   
    
        $scope.showcomments = function(){
        console.log("Mostrando comentarios");
        var ShowComments = true;
        $scope.show = ShowComments;
        }
});

anuncios.controller("ComentariosCtrl", function($scope, $firebaseArray, Auth, $firebaseObject){ 
    
    refcomment = new Firebase("https://milocal.firebaseio.com/comentarios/");
    $scope.comment = $firebaseArray(refcomment);
    
    Auth.$onAuth(function(authData) {
    $scope.authData = authData;
    
    if(authData){    
        
    var refprofile = new Firebase("https://milocal.firebaseio.com/users/" + authData.uid);
    $scope.perfil = $firebaseObject(refprofile);
    
    $scope.addComentario = function(){ 
        
                        console.log("Agregando Comentario");
                        var review = $scope.review;
                        console.log(review);
                       
                        var refcomentario = new Firebase("https://milocal.firebaseio.com/comentarios/");
                        refcomentario.push({
                            Comentario: review,
                            FechaComentario: Firebase.ServerValue.TIMESTAMP,
                            NombreLocal: $scope.perfil.NombreLocal,
                        });      
            
        };
    
    $scope.deleteComentario = function (index) {
    $scope.comentarios.splice(index, 1);
    };
      
    }
        else{
        console.log("No se logro agregar comentario");
        }
        
    });
    
});