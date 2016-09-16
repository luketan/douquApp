'use strict';

angular.module('ionicApp.cartApp', [])
	.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
		  
		  $stateProvider
						//tab.cart//////////////////////////////////////////////////////////////
						.state('tab.cart', {
						      url: '/cart',
						      cache: false,
						      views: {
							       'tab-cart': {
							        	templateUrl : 'template/cart/shoppingCart.html',
							        	controller : 'CartCtrl'
							       }
						      }
						})
						.state('tab.cart_cart', {
						      url: '/cart_cart',
						      cache: false,
						      views: {
						    	  'tab-cart': {
							    	  templateUrl : 'template/cart/shoppingCart.html',
							    	  controller : 'CartCtrl'
						    	  }
						      }
						})
						.state('tab.cart_goodsItem', {
							  url : '/cart_goodsItem?:id',
							  cache: false,
							  views: {
								  'tab-cart': {
								        templateUrl: 'template/goods/goodsItem.html',
								        controller: 'GoodsItemCtrl'
								   }
							  }
						})
						.state('tab.cart_confirmOrder', {
						      url: '/cart_confirmOrder?:id',
						      cache: false,
						      views: {
						    	  'tab-cart': {
							    	  templateUrl : 'template/cart/confirmOrder.html',
							    	  controller : 'ConfirmOrderCtrl'
						    	  }
						      }
						})
						.state('tab.cart_address', {//管理用户地址
							  url: '/cart_address',
							  cache: false,
							  views: {
							      'tab-cart': {
								      templateUrl : 'template/user/address.html',
									  controller : 'AddressCtrl'
							      }
							  }
						})
						.state('tab.cart_newAddress', {//新增用户地址
						      url: '/cart_newAddress:id',
//						      cache: false,
						      views: {
							      'tab-cart': {
								      templateUrl : 'template/user/newAddress.html',
									  controller : 'NewAddressCtrl'
							      }
						      }
						})
						.state('tab.cart_addressList', {//用户地址
						      url: '/cart_addressList',
						      cache: false,
						      views: {
							      'tab-cart': {
								      templateUrl : 'template/cart/addressList.html',
									  controller : 'AddressListCtrl'
							      }
						      }
						});

			});  
		
