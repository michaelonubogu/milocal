'use strict'

var milocal = angular.module("milocal", ["ngRoute", "registrar", "uiGmapgoogle-maps", "ngAnimate", "rutas", "login", "panelcontrol", "directivas", "anuncios", "mapaPerfil", "mapas"]);

milocal.controller("mainCtrl", function($scope) {
    $scope.pageClass = "fadeT";
});