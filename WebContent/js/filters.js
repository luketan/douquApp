'use strict';

/* Filters */

angular.module('ionicApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
    	console.log("come in filter...."+text);
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).filter('trustHtml', function ($sce) {
	 return function (input) {
				return $sce.trustAsHtml(input);
		   }
  });
