'use strict';

angular.module('ionicApp.userApp', [])
	.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	  
	  $stateProvider
					//tab.user/////////////////////////////////////////////////////////////
					.state('tab.user_login', {
							url : '/user_login',
							cache: false,
							views: {
								'tab-user': {
							        templateUrl: 'template/user/login.html',
							        controller: 'LoginCtrl'
								}
						    }
					})
					.state('tab.user_register1', {
							url : '/user_register1?:phone',
							cache: false,
							views: {
								'tab-user': {
							        templateUrl: 'template/user/register1.html',
							        controller: 'Register1Ctrl'
								}
						    }
					})
					.state('tab.user', {
					    url: '/user',
//					    cache: false,
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/user.html',
						    controller : 'UserCtrl'
					      }
					    }
					})
					.state('tab.user_userSet', {
					    url: '/user_userSet',
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/userSet.html',
						    controller : 'UserSetCtrl'
					      }
					    }
					})
					.state('tab.user_account', {
							url : '/user_account?:id',
							views: {
								'tab-user': {
							        templateUrl: 'template/user/account.html',
							        controller: 'AccountCtrl'
								}
						    }
					})
					.state('tab.user_signature', {
							url : '/user_signature?:id',
							views: {
								'tab-user': {
							        templateUrl: 'template/user/signature.html',
							        controller: 'SignatureCtrl'
								}
						    }
					})
					.state('tab.user_userGou', {//一元购
					    url: '/user_userGou',
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/userGou.html',
						    controller : 'UserGouCtrl'
					      }
					    }
					})
					.state('tab.user_order', {//订单列表
					    url: '/user_order',
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/order.html',
						    controller : 'OrderCtrl'
					      }
					    }
					})
					.state('tab.user_orderInfo', {//订单详情
					    url: '/user_orderInfo?:id',
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/orderInfo.html',
						    controller : 'OrderInfoCtrl'
					      }
					    }
					})
					.state('tab.user_disGoodss', {//评论商品列表
					    url: '/user_disGoodss?:id',
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/disGoodss.html',
						    controller : 'DisGoodssCtrl'
					      }
					    }
					})
					.state('tab.user_disGoods', {//评论商品
					    url: '/user_disGoods?:id:itemId',
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/disGoods.html',
						    controller : 'DisGoodsCtrl'
					      }
					    }
					})
					.state('tab.user_logistics', {//物流
					    url: '/user_logistics?:postCode:postName',
					    views: {
					      'tab-user': {
					    	templateUrl : 'template/user/logistics.html',
						    controller : 'LogisticsCtrl'
					      }
					    }
					})
					.state('tab.user_goodsItem', {//商品详情
							url : '/user_goodsItem?:id',
							cache: false,
							views: {
								'tab-user': {
							        templateUrl: 'template/goods/goodsItem.html',
							        controller: 'GoodsItemCtrl'
								}
						    }
					})
					.state('tab.user_cart', {//购物车
						      url: '/user_cart',
						      views: {
						        'tab-user': {
						        	templateUrl : 'template/cart/shoppingCart_Other.html',
						        	controller : 'CartCtrl'
						        }
						      }
					})
					.state('tab.user_confirmOrder', {
						      url: '/user_confirmOrder?:id',
						      cache: false,
						      views: {
						    	  'tab-user': {
							    	 templateUrl : 'template/cart/confirmOrder.html',
							    	 controller : 'ConfirmOrderCtrl'
						    	  }
						      }
					})
					.state('tab.user_societyItem', {//帖子详情
						      url: '/user_societyItem?:id',
						      views: {
						        'tab-user': {
						        	templateUrl : 'template/society/societyItem.html',
						        	controller : 'SocietyItemCtrl'
						        }
						      }
					})
					.state('tab.user_societyType', {//帖子类型
						      url: '/user_societyType?:typeId',
						      views: {
						        'tab-user': {
						        	templateUrl : 'template/society/societyType.html',
						        	controller : 'SocietyTypeCtrl'
						        }
						      }
					})
					.state('tab.user_forgetPwd', {//忘记密码
						    url: '/user_forgetPwd',
						    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/forgetPwd.html',
						    	  controller : 'ForgetPwdCtrl'
						      }
						    }
					})
					.state('tab.user_setAccountSafe', {//账户安全
						    url: '/user_setAccountSafe',
						    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/setAccountSafe.html',
						    	  controller : 'SetAccountSafeCtrl'
						      }
						    }
					})
					.state('tab.user_setPwd', {//设置登录密码
					    url: '/user_setPwd',
					    cache: false,
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/setPwd.html',
						    	  controller : 'SetPwdCtrl'
						      }
					    }
					})
					.state('tab.user_setPhone1', {//绑定手机号码1
					    url: '/user_setPhone1',
					    cache: false,
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/setPhone1.html',
						    	  controller : 'SetPhone1Ctrl'
						      }
					    }
					})
					.state('tab.user_setPhone2', {//绑定手机号码2
					    url: '/user_setPhone2',
					    cache: false,
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/setPhone2.html',
						    	  controller : 'SetPhone2Ctrl'
						      }
					    }
					})
					.state('tab.user_coupon', {//券，红包
					    url: '/user_coupon',
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/coupon.html',
						    	  controller : 'CouponCtrl'
						      }
					    }
					})
					.state('tab.user_coupon_info', {//券详细
					    url: '/user_coupon_info',
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/couponInfo.html',
						    	  controller : 'CouponInfoCtrl'
						      }
					    }
					})
					.state('tab.user_keep', {//用户收藏
					    url: '/user_keep',
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/keep.html',
						    	  controller : 'KeepCtrl'
						      }
					    }
					})
					.state('tab.user_address', {//用户地址
					    url: '/user_address',
//					    cache: false,
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/address.html',
						    	  controller : 'AddressCtrl'
						      }
					    }
					})
					.state('tab.user_newAddress', {//用户地址
					    url: '/user_newAddress?:id',
					    cache: false,
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/newAddress.html',
						    	  controller : 'NewAddressCtrl'
						      }
					    }
					})
					.state('tab.user_about', {//关于
					    url: '/user_about',
					    views: {
						      'tab-user': {
						    	  templateUrl : 'template/user/about.html',
						    	  controller : 'AboutCtrl'
						      }
					    }
					})
					.state('tab.user_feedBack', {//意见反馈
					    url: '/user_feedBack',
					    views: {
						     'tab-user': {
						    	  templateUrl : 'template/user/feedBack.html',
							      controller : 'FeedBackCtrl'
						     }
					    }
					})
					.state('tab.user_feedBackInfo', {//意见反馈详情
					    url: '/user_feedBackInfo:id',
					    views: {
					        'tab-user': {
								 templateUrl : 'template/user/feedBackInfo.html',
								 controller : 'FeedBackInfoCtrl'
					         }
					    }
					})
					.state('tab.user_chat', {//聊天
						url: '/user_chat?:userId:userName',
						views: {
							 'tab-user': {
								 templateUrl : 'template/society/chat.html',
							  	 controller : 'ChatCtrl'
							 }
						}
					})

		});  
		
