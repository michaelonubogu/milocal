var mapaPerfil = angular.module("mapaPerfil", []);

mapaPerfil.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})

mapaPerfil.controller("mperfil", function($scope, $log, uiGmapGoogleMapApi, $timeout) {
    
    //$scope.$on('$viewContentLoaded', function () {
      //      var mapHeight = 500; // or any other calculated value
        //    $("#MapaPerfil .angular-google-map-container").height(mapHeight);
          //  });
    
    $scope.map = {
        events: {
            tilesloaded: function (map) {
                $scope.$apply(function () {
                    $scope.mapInstance = map;
                });
            }
        },
    center: { 
    latitude: -30.592172, 
    longitude: -71.2056782 
    }, 
    zoom: 8,
    };
    	
    $scope.marker = {
      id: 0,
      coords: {
        latitude: -30.592172,
        longitude: -71.2056782
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
    
    

    