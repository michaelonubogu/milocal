var rutas = angular.module("rutas", []);

rutas.config(function($routeProvider){
	$routeProvider.when("/Bienvenidos", {
		templateUrl: "views/publico/bienvenidos.html",
	});
	$routeProvider.when("/registrar", {
		templateUrl: "views/publico/registrar.html",
        //$controller: "transitionhome"
		});
	$routeProvider.when("/promociones", {
		templateUrl: "views/panel.html",
        //$controller: "transitionhome"
		});
	$routeProvider.when("/perfil", {
		templateUrl: "views/privado/perfil.html",
        //$controller: "transitionhome"
	});
    $routeProvider.when("/panelcontrol", {
		templateUrl: "views/privado/panel-control.html",
        //$controller: "transitionhome"
	});
    
    $routeProvider.otherwise({
        redirectTo: "/Bienvenidos"
      });
});