'use strict';

angular.module('ionicApp.societyApp', [])
	.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
		  $stateProvider
						//tab.society///////////////////////////////////////////////////////////
						.state('tab.society', {
						      url: '/society',
						      cache: false,
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/society.html',
						    	  controller : 'SocietyCtrl'
						        }
						      }
						})
						.state('tab.society_societyTypeList', {
						      url: '/society_societyTypeList',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/societyTypeList.html',
						    	  controller : 'SocietyTypeListCtrl'
						        }
						      }
						})
						.state('tab.society_societyType', {
						      url: '/society_societyType?:typeId',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/societyType.html',
						    	  controller : 'SocietyTypeCtrl'
						        }
						      }
						})
						.state('tab.society_societyItem', {
						      url: '/society_societyItem?:id',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/societyItem.html',
						    	  controller : 'SocietyItemCtrl'
						        }
						      }
						})
						.state('tab.society_discuss', {//评论
						      url: '/society_discuss?:id:title',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/discuss.html',
						    	  controller : 'DiscussCtrl'
						        }
						      }
						})
						.state('tab.society_posts', {//发帖
						      url: '/society_posts?:typeId:typeName',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/posts.html',
						    	  controller : 'PostsCtrl'
						        }
						      }
						})
						.state('tab.society_msg', {//消息
							url: '/society_msg',
							views: {
							'tab-society': {
									templateUrl : 'template/society/msg.html',
									controller : 'MsgCtrl'
								}
							}
						})
						.state('tab.society_sysMsg', {//系统消息
							url: '/society_sysMsg',
							views: {
							'tab-society': {
									templateUrl : 'template/society/sysMsg.html',
									controller : 'SysMsgCtrl'
								}
							}
						})
						.state('tab.society_reply', {//回复我的
							url: '/society_reply',
							views: {
							'tab-society': {
									templateUrl : 'template/society/reply.html',
									controller : 'ReplyCtrl'
								}
							}
						})
						.state('tab.society_replyInfo', {//回复我的详情
							url: '/society_replyInfo?:id:disId',
							views: {
							'tab-society': {
									templateUrl : 'template/society/replyInfo.html',
									controller : 'ReplyInfoCtrl'
								}
							}
						})
						.state('tab.society_stranger', {//回复我的详情
							url: '/society_stranger',
							views: {
							'tab-society': {
									templateUrl : 'template/society/stranger.html',
									controller : 'StrangerCtrl'
								}
							}
						})
						.state('tab.society_note', {//关注人
						      url: '/society_note',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/note.html',
						    	  controller : 'NoteCtrl'
						        }
						      }
						})
						.state('tab.society_fans', {//粉丝
						      url: '/society_fans',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/fans.html',
						    	  controller : 'FansCtrl'
						        }
						      }
						})
						.state('tab.society_newFriend', {//新好友
						      url: '/society_newFriend',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/newFriend.html',
						    	  controller : 'NewFriendCtrl'
						        }
						      }
						})
						.state('tab.society_friend', {//好友
						      url: '/society_friend',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/society/friend.html',
						    	  controller : 'FriendCtrl'
						        }
						      }
						})
						.state('tab.society_tyrant', {//土豪榜
							url: '/society_tyrant',
							views: {
							'tab-society': {
									templateUrl : 'template/society/tyrant.html',
									controller : 'TyrantCtrl'
								}
							}
						})
						.state('tab.society_charm', {//魅力榜
							url: '/society_charm',
							views: {
							'tab-society': {
									templateUrl : 'template/society/charm.html',
									controller : 'CharmCtrl'
								}
							}
						})
						.state('tab.society_regal', {//大富豪
							url: '/society_regal',
							views: {
							'tab-society': {
									templateUrl : 'template/society/regal.html',
									controller : 'RegalCtrl'
								}
							}
						})
						.state('tab.society_hotUser', {//热门人物
							url: '/society_hotUser',
							views: {
							'tab-society': {
									templateUrl : 'template/society/hotUser.html',
									controller : 'HotUsreCtrl'
								}
							}
						})
						.state('tab.society_chat', {//聊天
							url: '/society_chat?:userId:userName',
							views: {
							'tab-society': {
									templateUrl : 'template/society/chat.html',
									controller : 'ChatCtrl'
								}
							}
						})
						.state('tab.society_account', {//账号
							url : '/society_account?:id',
							views: {
								'tab-society': {
							        templateUrl: 'template/user/account.html',
							        controller: 'AccountCtrl'
								}
						    }
						})
						.state('tab.society_signature', {
							url : '/society_signature?:id',
							views: {
								'tab-society': {
							        templateUrl: 'template/user/signature.html',
							        controller: 'SignatureCtrl'
								}
						    }
						})
						.state('tab.society_goodsItem', {//商品详情
							url : '/society_goodsItem?:id',
							cache: false,
							views: {
								'tab-society': {
							        templateUrl: 'template/goods/goodsItem.html',
							        controller: 'GoodsItemCtrl'
								}
						    }
							
						})
						.state('tab.society_cart', {//购物车
						      url: '/society_cart',
						      views: {
						        'tab-society': {
						    	  templateUrl : 'template/cart/shoppingCart_Other.html',
						    	  controller : 'CartCtrl'
						        }
						      }
						})
						.state('tab.society_confirmOrder', {
						      url: '/society_confirmOrder?:id',
						      cache: false,
						      views: {
						    	  'tab-society': {
							    	  templateUrl : 'template/cart/confirmOrder.html',
							    	  controller : 'ConfirmOrderCtrl'
						    	  }
						      }
						})
						.state('tab.society_address', {//管理用户地址
							  url: '/society_address',
							  cache: false,
							  views: {
							      'tab-society': {
								      templateUrl : 'template/user/address.html',
									  controller : 'AddressCtrl'
							      }
							  }
						})
						.state('tab.society_newAddress', {//新加用户地址
						      url: '/society_newAddress:id',
						      //cache: false,
						      views: {
							      'tab-society': {
								      templateUrl : 'template/user/newAddress.html',
									  controller : 'NewAddressCtrl'
							      }
						      }
						})
						.state('tab.society_addressList', {//用户地址
						      url: '/society_addressList',
						      cache: false,
						      views: {
							      'tab-c': {
								      templateUrl : 'template/cart/addressList.html',
									  controller : 'AddressListCtrl'
							      }
						      }
						})
						.state('tab.society_picView', {//测试
						      url: '/society_picView',
						      cache: false,
						      views: {
							      'tab-society': {
								      templateUrl : 'template/society/picView.html',
									  controller : 'PicViewCtrl'
							      }
						      }
						})
						;
				});  
		
