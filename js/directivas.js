angular.module('directivas', [])

.directive('promocioncontrol', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/promocion-y-control.html',
        scope: {},
        link: function(scope, elem, attr) {}
    }
})

.directive('community', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/community-manager.html',
        scope:{},
        link: function(scope, elem, attr){}
    }
})

.directive('opciones', function(){
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/opciones.html',
        scope: {},
        link: function(scope, elem, attr){}
    }
})

.directive('infogeneral', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/infogeneral.html',
        scope:{},
        link: function(scope, elem, attr){}
    }
})

.directive('mapaperfil', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/mapaperfil.html',
        scope:{},
        link: function(scope, elem, attr){}
    }
})

.directive('galeriaperfil', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/galeriaperfil.html',
        scope:{},
        link: function(scope, elem, attr){}
    }
})

.directive('comentariosperfil', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/comentariosperfil.html',
        scope:{},
        link: function(scope, elem, attr){}
    }
})

.directive('anuncios', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/anuncios.html',
        scope:{},
        link: function(scope, elem, attr){}
    }
})

.directive('comentarios', function(){
    return{
        restrict: 'E',
        transclude: true,
        templateUrl: 'views/privado/comentarios.html',
        scope:{},
        link: function(scope, elem, attr){}
    }
})
