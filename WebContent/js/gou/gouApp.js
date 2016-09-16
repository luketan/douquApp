'use strict';

angular.module('ionicApp.gouApp', [])
	.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
		  
		  $stateProvider
						//tab.gou//////////////////////////////////////////////////////////////
						.state('tab.gou', {
						      url: '/gou',
						      cache: false,
						      views: {
						        'tab-gou': {
						    	  templateUrl : 'template/gou/goodsList.html',
						    	  controller : 'GouListCtrl'
						        }
						      }
						});						

			});  
		
