'use strict';

angular.module('ionicApp.goodsApp', [])
	.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
		  
		  $stateProvider
						//tab.goods//////////////////////////////////////////////////////////////
						.state('tab.goods', {
						      url: '/goods',
						      cache: false,
						      views: {
						        'tab-goods': {
						    	  templateUrl : 'template/goods/goodsList.html',
						    	  controller : 'GoodsListCtrl'
						        }
						      }
						})
						.state('tab.goods_goodsItem', {
							url : '/goods_goodsItem?:id',
							cache: false,
							views: {
								'tab-goods': {
							        templateUrl: 'template/goods/goodsItem.html',
							        controller: 'GoodsItemCtrl'
								}
						    }
						})
						.state('tab.goods_cart', {
						      url: '/goods_cart',
//						      cache: false,
						      views: {
						        'tab-goods': {
						    	  templateUrl : 'template/cart/shoppingCart_Other.html',
						    	  controller : 'CartCtrl'
						        }
						      }
						})
						.state('tab.goods_confirmOrder', {
						      url: '/goods_confirmOrder?:id',
						      cache: false,
						      views: {
						    	  'tab-goods': {
							    	  templateUrl : 'template/cart/confirmOrder.html',
							    	  controller : 'ConfirmOrderCtrl'
						    	  }
						      }
						})
						.state('tab.goods_address', {//管理用户地址
							  url: '/goods_address',
							  cache: false,
							  views: {
							      'tab-goods': {
								      templateUrl : 'template/user/address.html',
									  controller : 'AddressCtrl'
							      }
							  }
						})
						.state('tab.goods_newAddress', {//新增用户地址
						      url: '/goods_newAddress:id',
//						      cache: false,
						      views: {
							      'tab-goods': {
								      templateUrl : 'template/user/newAddress.html',
									  controller : 'NewAddressCtrl'
							      }
						      }
						})
						.state('tab.goods_addressList', {//用户地址
						      url: '/goods_addressList',
						      cache: false,
						      views: {
							      'tab-goods': {
								      templateUrl : 'template/cart/addressList.html',
									  controller : 'AddressListCtrl'
							      }
						      }
						})
						;						

			});  
		
