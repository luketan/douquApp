'use strict';

// Declare app level module which depends on filters, and services
angular.module('ionicApp', [ 'ionic','ionicApp.userApp','ionicApp.directives','ionicApp.filters'
                             ,'ionicApp.controllers','ionicApp.services'
                             ,'ionicApp.goodsApp','ionicApp.goodsControllers','ionicApp.goodsServices'
                             ,'ionicApp.userApp','ionicApp.userControllers','ionicApp.userServices'
                             ,'ionicApp.societyApp','ionicApp.societyControllers','ionicApp.societyServices'
                             ,'ionicApp.cartApp','ionicApp.cartControllers','ionicApp.cartServices'
                             ,'ionicApp.gouApp','ionicApp.gouControllers','ionicApp.gouServices'
                             ])
	.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
	  //服务注册到$httpProvider.interceptors中,http token
	  $httpProvider.interceptors.push('authInterceptor');
	  $ionicConfigProvider.tabs.style("standard"); // 参数可以是： standard | striped
	  $ionicConfigProvider.backButton.text("");
	  $ionicConfigProvider.backButton.previousTitleText(false).icon('ion-ios-arrow-left');
      
	  $ionicConfigProvider.platform.ios.tabs.style('standard');
	  $ionicConfigProvider.platform.ios.tabs.position('bottom');
	  $ionicConfigProvider.platform.android.tabs.style('standard');
	  $ionicConfigProvider.platform.android.tabs.position('bottom');
	  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
	  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-left');//ion-ios-arrow-thin-left
	  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
	  $ionicConfigProvider.platform.ios.views.transition('ios');
	  $ionicConfigProvider.platform.android.views.transition('android');
	  
	  $ionicConfigProvider.views.maxCache(10);
	  $ionicConfigProvider.platform.android.views.maxCache(5);
	  
	  $stateProvider
	  				//tab
					.state('tab', {
					    url: '/tab',
					    abstract: true,
					    templateUrl: 'template/common/tabs.html'
					})
					
					//tab.main////////////////////////////////////////////////////////////////
					.state('tab.main', {
					    url: '/main',
					    cache: false,
					    views: {
					      'tab-main': {
					        templateUrl: 'template/index/main.html',
					        controller: 'MainCtrl'
					      }
					    }
					})
					.state('tab.main_goodsItem', {//商品详情
						cache: false,
						url : '/main_goodsItem?:id',
						views: {
							'tab-main': {
						        templateUrl: 'template/goods/goodsItem.html',
						        controller: 'GoodsItemCtrl'
							}
					    }
						
					})
					.state('tab.main_goods', {//商品列表
					      url: '/main_goodsList?:typeId:title',
//					      cache: false,
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/goods/goodsList.html',
					    	  controller : 'GoodsListCtrl'
					        }
					      }
					})
					.state('tab.main_goodsType', {//商品类别列表
					      url: '/main_goodsType?:title',
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/goods/goodsType.html',
					    	  controller : 'GoodsTypeCtrl'
					        }
					      }
					})
					.state('tab.main_cart', {//购物车
					      url: '/main_cart',
//					      cache: false,
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/cart/shoppingCart_Other.html',
					    	  controller : 'CartCtrl'
					        }
					      }
					})
					.state('tab.main_confirmOrder', {
						      url: '/main_confirmOrder?:id',
						      cache: false,
						      views: {
						    	  'tab-main': {
							    	  templateUrl : 'template/cart/confirmOrder.html',
							    	  controller : 'ConfirmOrderCtrl'
						    	  }
						      }
					})
					.state('tab.main_address', {//管理用户地址
						  url: '/main_address',
						  cache: false,
						  views: {
						      'tab-main': {
							      templateUrl : 'template/user/address.html',
								  controller : 'AddressCtrl'
						      }
						  }
					})
					.state('tab.main_newAddress', {//新加用户地址
					      url: '/main_newAddress:id',
					      //cache: false,
					      views: {
						      'tab-main': {
							      templateUrl : 'template/user/newAddress.html',
								  controller : 'NewAddressCtrl'
						      }
					      }
					})
					.state('tab.main_addressList', {//用户地址
					      url: '/main_addressList',
					      cache: false,
					      views: {
						      'tab-main': {
							      templateUrl : 'template/cart/addressList.html',
								  controller : 'AddressListCtrl'
						      }
					      }
					})
					.state('tab.main_societyType', {//帖子类别
						      url: '/main_societyType?:typeId',
						      views: {
						        'tab-main': {
						    	  templateUrl : 'template/society/societyType.html',
						    	  controller : 'SocietyTypeCtrl'
						        }
						      }
					})
					.state('tab.main_societyItem', {//帖子详情
					      url: '/main_societyItem?:id',
//					      cache: false,
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/society/societyItem.html',
					    	  controller : 'SocietyItemCtrl'
					        }
					      }
					})
					.state('tab.main_discuss', {//评论
					      url: '/main_discuss?:id:title',
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/society/discuss.html',
					    	  controller : 'DiscussCtrl'
					        }
					      }
					})
					.state('tab.main_posts', {//发帖
					      url: '/main_posts?:typeId:typeName',
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/society/posts.html',
					    	  controller : 'PostsCtrl'
					        }
					      }
					})
					.state('tab.main_msg', {//消息
						url: '/main_msg',
						views: {
						'tab-main': {
								templateUrl : 'template/society/msg.html',
								controller : 'MsgCtrl'
							}
						}
					})
					.state('tab.main_note', {//关注人
					      url: '/main_note',
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/society/note.html',
					    	  controller : 'NoteCtrl'
					        }
					      }
					})
					.state('tab.main_fans', {//粉丝
					      url: '/main_fans',
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/society/fans.html',
					    	  controller : 'FansCtrl'
					        }
					      }
					})
					.state('tab.main_newFriend', {//新好友
					      url: '/main_newFriend',
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/society/newFriend.html',
					    	  controller : 'NewFriendCtrl'
					        }
					      }
					})
					.state('tab.main_friend', {//好友
					      url: '/main_friend',
					      views: {
					        'tab-main': {
					    	  templateUrl : 'template/society/friend.html',
					    	  controller : 'FriendCtrl'
					        }
					      }
					})
					.state('tab.main_chat', {//聊天
						url: '/main_chat?:userId:userName',
						views: {
						'tab-main': {
								templateUrl : 'template/society/chat.html',
								controller : 'ChatCtrl'
							}
						}
					})
					.state('tab.main_account', {//账号
						url : '/main_account?:id',
						views: {
							'tab-main': {
						        templateUrl: 'template/user/account.html',
						        controller: 'AccountCtrl'
							}
					    }
					})
					//guide
					.state('guide', {
						url : '/index/guide',
						templateUrl : 'template/index/guide.html',
						controller : 'GuideCtrl'
					})
					.state('login', {//登录
						url : '/index/login',
						templateUrl : 'template/index/login.html',
						controller : 'LoginCtrl'
					})
					;
					$urlRouterProvider.otherwise("/tab/main");
					//
					
		}).run(function ($rootScope, $window, $location, $log, $ionicPlatform, $localstorage) {  
		  var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);  
		  var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);  
		  var routeChangeStartOff = $rootScope.$on('$routeChangeStart', routeChangeStart);  
		  var routeChangeSuccessOff = $rootScope.$on('$routeChangeSuccess', routeChangeSuccess); 
		  
		  console.log("run.......");
		  
		  
		  $rootScope.goback = function() {
				 $ionicHistory.goBack();
		  };
		    
		  $ionicPlatform.ready(function() {
			    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			    // for form inputs)
			    if(window.cordova && window.cordova.plugins.Keyboard) {
			      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			    }
			    if(window.StatusBar) {
			      StatusBar.styleDefault();
			    }
		  });
		  
		  function locationChangeStart(event) {
		      $log.log('locationChangeStart');  
		  }
		  function locationChangeSuccess(event) {
			  if($window.location.hash.indexOf('tab/main')>-1){
				  $rootScope.action_flag = 'main';
			  }else if($window.location.hash.indexOf('tab/gou')>-1){
				  $rootScope.action_flag = 'gou';
			  }else if($window.location.hash.indexOf('tab/society')>-1){
				  $rootScope.action_flag = 'society';
			  }else if($window.location.hash.indexOf('tab/user')>-1){
				  $rootScope.action_flag = 'user';
			  }else if($window.location.hash.indexOf('tab/goods')>-1){
				  $rootScope.action_flag = 'goods';
			  }else if($window.location.hash.indexOf('tab/cart')>-1){
				  $rootScope.action_flag = 'cart';
			  }
		      $log.log('locationChangeSuccess');  
		  }
		  function routeChangeStart(event) { 
		      $log.log('routeChangeStart');  
		  }
		  function routeChangeSuccess(event) {  
		      $log.log('routeChangeSuccess');  
		      console.log("routeChangeSuccess.......");
		  }
		});  
		
