movieApp.controller('StartCtrl', function($scope, $http){
            $http.get('Featured.json').
            success(function(data){
                $scope.Featured = data;
            }).
            error(function(data){
                console.log("Failed to load Featured");
            });
            
            $http.get('ViaPlayShows.json').
            success(function(data){
                $scope.ViaPlayShows = data;
            }).
            error(function(data){
                console.log("Failed to load ViaPlayShow");
            });
            
            $http.get('HBOShows.json').
            success(function(data){
                $scope.HBOShows = data;
            }).
            error(function(data){
                console.log("Failed to load HBOSeries");
            });
            
            $http.get('ViaPlayMovies.json').
            success(function(data){
                $scope.ViaPlayMovies = data;
            }).
            error(function(data){
                console.log("Failed to load ViaPlayMovies");
            });
            
            $http.get('HBOMovies.json').
            success(function(data){
                $scope.HBOMovies = data;
            }).
            error(function(data){
                console.log("Failed to load HBOMovies");
            });
            
            $http.get('Netflix.json').
            success(function(data){
                $scope.Netflix = data;
            }).
            error(function(data){
                console.log("Failed to load Netflix");
            });
            
           
});