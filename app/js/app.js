'use strict';

/* App Module */

var news = angular.module('news', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/items', {templateUrl: 'partial-views/list.html',   controller: NewsItemsCtrl}).
      when('/items/:id', {templateUrl: 'partial-views/detail.html', controller: NewsItemCtrl}).
	  when('/table', {templateUrl: 'partial-views/table.html', controller: NewsItemsCtrl}).
	  when('/about', {templateUrl: 'partial-views/about.html', controller: AboutMeCtrl}).
      otherwise({redirectTo: '/items'});
}]);

news.filter('age', function () {
	/* Pass a birth date to this filter, and it will return age based on current date */
	return function (text) {
		var today = new Date(); var birthDate = new Date(text);var age = today.getFullYear() - birthDate.getFullYear();var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}
});