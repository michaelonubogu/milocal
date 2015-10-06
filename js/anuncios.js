var anuncios = angular.module("anuncios", []);

panelcontrol.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://milocal.firebaseio.com");
  return $firebaseAuth(ref);
});

anuncios.controller("AnunciosCtrl", function($scope, $firebaseArray){
    
        refanuncios = new Firebase("https://milocal.firebaseio.com/users/");
        //$scope.anuncio = $firebaseArray(refanuncios); 
        $scope.anuncio = [];
        
        //(1) Here, I pull the data directly - without using $firebaseArray - u don't need $firebaseArray to use Angular with Firebase
        $scope.anuncio = refanuncios.on('child_added', function(snapshot){
          var post = snapshot.val();
          $scope.anuncio.push(post);
          //Get the userid and then use that to query comments
          var userid = snapshot.key();
          
          //Now make a call to get comments
          //... Have your code to get comments here... I don't think you should have comments in a separate controller
          //..You pass the id of the user into the firebase orderBy method
          var commentsRef = new Firebase("https://milocal.firebaseio.com/comments");
          commentsRef
            .orderByChild('userid')
            .equalTo(userid)
            .on('child_added', function(commentSnapshot){
              //...process the comments
              //var comment = commentSnapshot.val();
            })
        });
    
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
