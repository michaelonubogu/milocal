var mapas = angular.module("mapas", []);

mapas.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})

mapas.controller("ubicacion", function($scope, $log, uiGmapGoogleMapApi) {
    
    $scope.map = { 
    center: { 
    latitude: -30.592172, 
    longitude: -71.2056782 
    }, 
    zoom: 8,
    };
    	
    $scope.marker = {
      id: 0,
      coords: {
        latitude: "",
        longitude: ""
      },
      
      options: { draggable: true },
      
    };
    
    $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };

        $scope.title = "";
    
    uiGmapGoogleMapApi.then(function(maps) {

    });
  });
    
    

    