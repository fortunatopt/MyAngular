function NewsItemsCtrl($scope, $http) {
	$http.get('data/news.json').success(function(data) {
		$scope.items = data;
	});
}

function NewsItemCtrl($scope, $routeParams, $http) {
  $http.get('data/' + $routeParams.id + '.json').success(function(data) {
    $scope.item = data;
  });
}

function AboutMeCtrl($scope) {
	$scope.me = { "name": "Patrick T. Fortunato Jr.", "birthDay": "01/31/1974", "about": "<p>I am married to Rabecca Fortunato.  She is everything I would ask for in a wife.</p><p>I am a father of 3 children, Sarah, Junior, and Jasmine.  Sarah is almost 21, Junior is 17, and Jasmine is 12.</p><p>I am a programmer by trade, and my main hobby is Brazilian Jiu Jitsu.<p>" };
}