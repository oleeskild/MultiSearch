movieApp.directive('movieGrid', function(){
	return{
		restrict: 'E',
		scope: {
			channel: '=',
            query: '='
		},
		templateUrl: 'js/directives/MovieGrid.html'
	};
});