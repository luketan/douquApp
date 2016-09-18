'use strict';

/* Controllers */
var app = angular.module('ionicApp.userControllers', ['ionic-citydata','ionic-citypicker'])
		//用户模块
		.controller('LoginCtrl', function($rootScope, $scope, $state, $timeout, userLogin){
				$scope.user={account:"",password:""};
				// 登陆
				$scope.login = function () {
					// 登陆
					$scope.login = function () {
						
						var user = userLogin.login($scope.user);
						if(user){
							$state.go('tab.user');
						}
					}
				}
	 
				$scope.showPwd = false;
				$scope.pwdType = "password";
				$scope.clickPwd = function(){
					$scope.showPwd=!$scope.showPwd;
					if($scope.showPwd){
						$scope.pwdType = "text";
					}else{
						$scope.pwdType = "password";
					}
				}
		})
		.controller('Register1Ctrl', function($rootScope,$scope,_url,_config,_ajax,$stateParams,$state,$interval) {
			$scope.showPwd = false;
			$scope.noSend = false;
			$scope.sendTime = 60;
			
			$scope.item={phone:"",verCode:"",pwd:""};
			
			$scope.sendMessage = function(){
				$scope.noSend = true;
				$interval(function() {
					$scope.sendTime--;
					if($scope.sendTime<=0){
						$scope.noSend = false;
					}
					
			    }, 1000,60);
				
			}
			$scope.clickPwd = function(){
				$scope.showPwd=!$scope.showPwd;
				if($scope.showPwd){
					$scope.pwdType = "text";
				}else{
					$scope.pwdType = "password";
				}
			}
			$scope.register = function(){
				console.log('!!!!!!!!!!!$$$$$!!!!!!!!!!!!!!!'+JSON.stringify($scope.item));
				$rootScope.user={id:100343,userName:"luke",nickName:"黑暗使者"}
				$state.go('tab.user');
			}
			console.log('!!!!!!!!!!!Register1Ctrl!!!!!!!!!!!!!!!');
		})
		.controller('UserCtrl', function($rootScope,$scope,_url,_config,_ajax,$stateParams,$ionicHistory,$ionicLoading, $localstorage) {
			$scope.userInfo = $localstorage.getObject("userInfo");
			if(!$scope.userInfo){
				$state.go('tab.user_login');
			}
			console.log('!!!!!!!!!!!user!!!!!!!!!!!!!!!'+ $localstorage.getObject("userInfo"));
		})
		.controller('UserSetCtrl', function($rootScope,$scope,$ionicActionSheet,_url,_config,$stateParams,$ionicHistory,$ionicLoading,userLogin,$localstorage) {
			
			$scope.userInfo = $localstorage.getObject("userInfo");
			//$scope.citydata = "广东省-深圳市"
			$scope.chageHeadShow = function() {//头像
			   // 显示操作表
			     $ionicActionSheet.show({
				     buttons: [
					     { text: '从相册选择' },
					     { text: '打开摄像头' },
				     ],
				     cancelText: '取消',
				     buttonClicked: function(index) {
				     	return true;
				     }
			     });
			
			};
			$scope.sexy = function() {//性别
			   // 显示操作表
			     $ionicActionSheet.show({
				     buttons: [
					     { text: '男' },
					     { text: '女' },
				     ],
				     cancelText: '取消',
				     buttonClicked: function(index) {
			    	 	console.log(index);
				     	return true;
				     }
			     });
			};
			$scope.sexuality = function() {//性取向
				   // 显示操作表
				     $ionicActionSheet.show({
					     buttons: [
						     { text: '爱好男' },
						     { text: '爱好女' },
						     { text: '无性恋' },
						     { text: '双性恋' },
					     ],
					     cancelText: '取消',
					     buttonClicked: function(index) {
				    	 	console.log(index);
					     	return true;
					     }
				     });
				};
			$scope.marriage = function(){
				// 显示操作表
			     $ionicActionSheet.show({
				     buttons: [
					     { text: '单身' },
					     { text: '恋爱中' },
					     { text: '已婚' },
					     { text: '离异' },
				     ],
				     cancelText: '取消',
				     buttonClicked: function(index) {
			    	 	console.log(index);
				     	return true;
				     }
			     });
			}
			$scope.loginout = function(){
				// 显示操作表
			     $ionicActionSheet.show({
				     buttons: [
					     { text: '<div class="font-10 royal dq_actionSheetOption">确认退出当前账号？退出后，将无法进入用户中心，发帖，评论</div>' },
					     { text: '<span class="font-18 assertive">退出当前账号</span>' },
				     ],
				     cancelText: '取消',
				     buttonClicked: function(index) {
			    	 	console.log(index);
			    	 	if(index == 1){
			    	 		userLogin.loginout();
			    	 	}
				     	return true;
				     }
			     });
			}
			console.log('!!!!!!!!!!!userInfo!!!!!!!!!!!!!!!');
		})
		.controller('AccountCtrl', function($rootScope,$scope,_url,_config,_ajax,$stateParams,$ionicHistory,$ionicLoading,$ionicScrollDelegate) {
			var userId = $stateParams.id;
			$scope.type=1;
			$scope.moreData = true;
			$scope.changeType = function(type){
				$scope.type = type;
			}
			$scope.item={
					id:434455,
					userName:"寂寞的瓶子",
					signature:"寂寞空虚冷",
					head:"http://mallimg01.touchcdn.com/goods-gallery/73688eac2b67ef212af124bf52bcbbf4.jpg?imageView/2/w/416/interlace/1",
					vmoney:34543,
					level:13,
					sex:"女",
					sexu:"爱好男",
					age:22,
					sexuality:"爱好男",
					xingzuo:"白羊座",
					marriage:"单身",
					address:"上海 上海市",
					societys:[{id:10011,title:"英伦学生制服诱惑-遇见小青春",status:3,statusName:"荐",time:"13小时前",disNum:764,typeId:1,typeName:"情趣试衣间",images:["http://mallimg01.touchcdn.com/goods-gallery/22c56205dc707ef0c4d5505dddc07f79.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/49984b72781c0d0b1b18c89ee318d07b.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/02f98b01062aeab43ed3016039ca578c.jpg?imageView/2/w/416/interlace/1"]},
					          {id:10011,title:"维秘的诱惑",status:2,statusName:"精",time:"20小时前",disNum:564,typeId:2,typeName:"情趣试衣间",images:["http://mallimg01.touchcdn.com/goods-gallery/22c56205dc707ef0c4d5505dddc07f79.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/49984b72781c0d0b1b18c89ee318d07b.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/02f98b01062aeab43ed3016039ca578c.jpg?imageView/2/w/416/interlace/1"]},
					          {id:10011,title:"我是薄荷绿宝手机端开发，你们爱我吗",status:2,statusName:"精",time:"23小时前",disNum:8,typeId:2,typeName:"情趣试衣间",images:[]},
					          {id:10011,title:"英伦学生制服诱惑-遇见小青春",status:3,statusName:"荐",time:"13小时前",disNum:764,typeId:1,typeName:"情趣试衣间",images:["http://mallimg01.touchcdn.com/goods-gallery/22c56205dc707ef0c4d5505dddc07f79.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/49984b72781c0d0b1b18c89ee318d07b.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/02f98b01062aeab43ed3016039ca578c.jpg?imageView/2/w/416/interlace/1"]},
					          {id:10011,title:"维秘的诱惑",status:2,statusName:"精",time:"20小时前",disNum:564,typeId:2,typeName:"情趣试衣间",images:["http://mallimg01.touchcdn.com/goods-gallery/22c56205dc707ef0c4d5505dddc07f79.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/49984b72781c0d0b1b18c89ee318d07b.jpg?imageView/2/w/416/interlace/1","http://mallimg01.touchcdn.com/goods-gallery/02f98b01062aeab43ed3016039ca578c.jpg?imageView/2/w/416/interlace/1"]},
					          {id:10011,title:"我是薄荷绿宝手机端开发，你们爱我吗",status:2,statusName:"精",time:"23小时前",disNum:8,typeId:2,typeName:"情趣试衣间",images:[]}]
					
					
			}
			$scope.societySize = 7;
			$scope.loadMore = function(){
		    	console.log("+++++loadMore++++")
		    	$scope.$broadcast('scroll.infiniteScrollComplete');
		    }
			$scope.clickAccount = function(){
				console.log('--------clickAccount--------');
			}
			console.log('!!!!!!!!!!!AccountCtrl!!!!!!!!!!!!!!!'+userId);
			
			//固定栏切换
			$scope.slide_type = 2;
			var slideChangeObj = {};
			$scope.changeSlideType = function(type){
			  		var sco = slideChangeObj[type];
					if(sco){
						$ionicScrollDelegate.scrollTo(sco.left,sco.top)
					}else{
						if(document.getElementById("slideScroll")){
							$ionicScrollDelegate.scrollTo(0,document.getElementById("slideScroll").offsetTop-34);
						}else{
							//$ionicScrollDelegate.scrollTop();
						}
					}
					slideChangeObj[$scope.slide_type] = $ionicScrollDelegate.getScrollPosition();
				    $scope.slide_type = type;
			}
		})
		.controller('SignatureCtrl', function($rootScope,$scope,_url,_config,_ajax,$stateParams,$ionicHistory,$ionicLoading) {
			var userId = $stateParams.id;
			//个性签名
			console.log('!!!!!!!!!!!SignatureCtrl!!!!!!!!!!!!!!!'+userId);
		})
		.controller('UserGouCtrl', function($rootScope,$scope,_url,_config,_ajax,$stateParams,$ionicHistory,$ionicLoading) {
			console.log('!!!!!!!!!!!UserGouCtrl!!!!!!!!!!!!!!!');
		})
		.controller('OrderCtrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading) {
			  var goods={
					  id:1,
					  goodsId:10001,
					  goodsName:"霏慕 中国古典肚兜性感挂脖绑带情趣诱惑肚兜T裤 2件套",
					  imageUrl:"http://ionicframework.com/img/docs/mcfly.jpg",
					  formatName:"玫红色（肚兜+系带T裤）",
					  markPrice:44,
					  price:19.9,
					  num:1,
					  };
			  var goods2={
					  id:2,
					  goodsId:10010,
					  goodsName:"久慕雅黛 古典复古和服风深V开衩短裙日式情趣内衣",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/e2d09b3577f70bcbf769bca6666c3c43.jpg?imageView/2/w/416/interlace/1",
					  formatName:"大红色（肚兜+系带T裤）",
					  markPrice:47,
					  price:11,
					  num:1};
			  var goods3={
					  id:3,
					  goodsId:10011,
					  goodsName:"性感日式印花和服宽松深V蝴蝶结复古和服风东京美娘款",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/0e65fea48479e7da41432b9bb774bca0.jpg?imageView/2/w/416/interlace/1",
					  formatName:"2件特惠（黑色+紫色）",
					  markPrice:34,
					  price:16,
					  num:1};
			  var goods4={
					  id:4,
					  goodsId:10012,
					  goodsName:"古典高档绣花年年有鱼喜庆露乳性感肚兜 2件套",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/b75134196cccd1a6fc88c1bfe2627b43.jpg?imageView/2/w/416/interlace/1",
					  formatName:"四合一+珍珠内裤",
					  markPrice:37,
					  price:15,
					  num:1};
			  var order = {orderId:"34534534543543",orderStatus:"运送中",status:1,items:[goods4,goods2,goods],totalNum:10,totalPrice:134.00,shipPrice:15};
			  var order1 = {orderId:"45667838657845",orderStatus:"已送达",status:2,items:[goods3,goods,goods2],totalNum:8,totalPrice:254.00,shipPrice:0};
			  var orders=[order,order1]
			
			  
			  $scope.results =orders;
			  console.log('!!!!!!!!!!!OrderCtrl!!!!!!!!!!!!!!!');
		})
		.controller('OrderInfoCtrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading,$stateParams) {
			 var id = $stateParams.id;
			  $scope.address={id:1,name:"谭辉",phone:"18666668629",address:"广东省深圳市罗湖区",detail:"黄贝岭街道龙景花园芳庭苑B1003"}
			  var goods={
					  id:1,
					  goodsId:10001,
					  goodsName:"霏慕 中国古典肚兜性感挂脖绑带情趣诱惑肚兜T裤 2件套",
					  imageUrl:"http://ionicframework.com/img/docs/mcfly.jpg",
					  formatName:"玫红色（肚兜+系带T裤）",
					  markPrice:44,
					  price:19.9,
					  num:1,
					  };
			  var goods2={
					  id:2,
					  goodsId:10010,
					  goodsName:"久慕雅黛 古典复古和服风深V开衩短裙日式情趣内衣",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/e2d09b3577f70bcbf769bca6666c3c43.jpg?imageView/2/w/416/interlace/1",
					  formatName:"大红色（肚兜+系带T裤）",
					  markPrice:47,
					  price:11,
					  num:1};
			  var goods3={
					  id:3,
					  goodsId:10011,
					  goodsName:"性感日式印花和服宽松深V蝴蝶结复古和服风东京美娘款",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/0e65fea48479e7da41432b9bb774bca0.jpg?imageView/2/w/416/interlace/1",
					  formatName:"2件特惠（黑色+紫色）",
					  markPrice:34,
					  price:16,
					  num:1};
			  var goods4={
					  id:4,
					  goodsId:10012,
					  goodsName:"古典高档绣花年年有鱼喜庆露乳性感肚兜 2件套",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/b75134196cccd1a6fc88c1bfe2627b43.jpg?imageView/2/w/416/interlace/1",
					  formatName:"四合一+珍珠内裤",
					  markPrice:37,
					  price:15,
					  num:1};
			  var order = {orderId:"34534534543543",
					  	   orderStatus:"运送中",
					  	   payMent:"微信支付",
					  	   status:1,
					  	   items:[goods4,goods2,goods],
					  	   totalNum:10,
					  	   totalPrice:134.00,
					  	   shipPrice:15,
					  	   createTime:'2016-05-23 22:33'};
			
			  
			  $scope.result =order;
			  
			  $scope.deleteOrder = function(){
				  console.log('deleteOrder');
			  }
			  $scope.kefu = function(){
				  console.log('kefu');
			  }
			  console.log('!!!!!!!!!!!OrderCtrl!!!!!!!!!!!!!!!');
		})
		.controller('DisGoodssCtrl', function($rootScope,$scope,$state,_url,_config,_ajax,$ionicLoading,$stateParams) {
			 var orderId = $stateParams.id;
			  var goods={
					  id:1,
					  goodsId:10001,
					  goodsName:"霏慕 中国古典肚兜性感挂脖绑带情趣诱惑肚兜T裤 2件套",
					  imageUrl:"http://ionicframework.com/img/docs/mcfly.jpg",
					  formatName:"玫红色（肚兜+系带T裤）",
					  markPrice:44,
					  price:19.9,
					  num:1,
					  };
			  var goods2={
					  id:2,
					  goodsId:10010,
					  goodsName:"久慕雅黛 古典复古和服风深V开衩短裙日式情趣内衣",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/e2d09b3577f70bcbf769bca6666c3c43.jpg?imageView/2/w/416/interlace/1",
					  formatName:"大红色（肚兜+系带T裤）",
					  markPrice:47,
					  price:11,
					  num:1};
			  var goods3={
					  id:3,
					  goodsId:10011,
					  goodsName:"性感日式印花和服宽松深V蝴蝶结复古和服风东京美娘款",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/0e65fea48479e7da41432b9bb774bca0.jpg?imageView/2/w/416/interlace/1",
					  formatName:"2件特惠（黑色+紫色）",
					  markPrice:34,
					  price:16,
					  num:1};
			  var goods4={
					  id:4,
					  goodsId:10012,
					  goodsName:"古典高档绣花年年有鱼喜庆露乳性感肚兜 2件套",
					  imageUrl:"http://mallimg01.touchcdn.com/goods-gallery/b75134196cccd1a6fc88c1bfe2627b43.jpg?imageView/2/w/416/interlace/1",
					  formatName:"四合一+珍珠内裤",
					  markPrice:37,
					  price:15,
					  num:1};
			  $scope.results =[goods4,goods2,goods];
			  console.log('!!!!!!!!!!!disGoods!!!!!!!!!!!!!!!');
			  $scope.goodsItem = function(itemId){
				  console.log("itemId:"+itemId);
				  $state.go('tab.'+$rootScope.action_flag+'_goodsItem',{'id':10015});
			  }  
			  $scope.discuss = function(orderId,itemId,$event){
				  console.log('ordreId:'+orderId+"|itemId:"+itemId);
				  $state.go('tab.'+$rootScope.action_flag+'_disGoods',{'id':orderId,'itemId':itemId});
				  $event.stopPropagation();
			  }
		})
		.controller('DisGoodsCtrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading,$stateParams) {
			  var orderId = $stateParams.id;
			  var itemId = $stateParams.itemId;
			  $scope.noName = false;
			  $scope.disLevel = 5;
			  $scope.submit = function(){
				  console.log('submit,,,,,,')
			  }
			  console.log('!!!!!!!!!!!DisGoodssCtrl!!!!!!!!!!!!!!!');
		})
		.controller('LogisticsCtrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading,$stateParams) {
			$scope.express = {"companyName":"圆通","expressNo":"807067953031"}
			$scope.results=[
			                {content:"客户 签收人：邮件收发章 已签收感谢使用圆通速递，期待再次为你服务",time:"2016-05-26 12:54:38",status:'Y'},
			                {content:"广东省深圳市国贸公司石**派件中，派件员电话15920579059",time:"2016-05-26 08:54:38",status:'N'},
			                {content:"广东省深圳市国贸公司 已收入",time:"2016-05-26 06:52:28",status:'N'},
			                {content:"深圳转运中心 已发出，下一站 广东省深圳市国贸",time:"2016-05-25 23:01:36",status:'N'},
			                {content:"深圳转运中心已收入",time:"2016-05-25 22:48:57",status:'N'},
			                {content:"上海转运中心已发出，下一站深圳转运中心",time:"2016-05-24 21:17:38",status:'N'},
			                {content:"上海转运中心 已收入",time:"2016-05-24 21:13:38",status:'N'},
			                {content:"上海市场二部公司 已打包",time:"2016-05-24 19:17:38",status:'N'},
			                {content:"上海市场二部公司已揽收",time:"2016-05-24 19:02:38",status:'N'},
			                
			                ];
			//查看物流
			var orderId = $stateParams.orderId;
			console.log('!!!!!!!!!!!LogisticsCtrl!!!!!!!!!!!!!!!'+orderId);
		})
		.controller('ForgetPwdCtrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading) {
			$scope.item={pwd:"",nPwd:"",nPwds:""};
			console.log('!!!!!!!!!!!ForgetPwdCtrl!!!!!!!!!!!!!!!');
			$scope.setUpdate = function(){
				console.log('###########');
			}
		})
		.controller('SetAccountSafeCtrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading) {
			$scope.item={phone:'186****8629'};
			console.log('!!!!!!!!!!!SetAccountSafeCtrl!!!!!!!!!!!!!!!'+$rootScope.hideTabs);
		})
		.controller('SetPwdCtrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading) {
			$scope.item={pwd:"",nPwd:"",nPwds:""};
			console.log('!!!!!!!!!!!SetPwdCtrl!!!!!!!!!!!!!!!');
			$scope.setPwd = function(){
				console.log('###########');
			}
		})
		.controller('SetPhone1Ctrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading,$state) {
			$scope.item={phone:"",pwd:""};
			console.log('!!!!!!!!!!!SetPhone1Ctrl!!!!!!!!!!!!!!!');
			$scope.setPhone = function(){
				console.log('###########');
				$state.go('tab.'+$rootScope.action_flag+'_setPhone2'); 
			}
		})
		.controller('SetPhone2Ctrl', function($rootScope,$scope,_url,_config,_ajax,$ionicLoading) {
			$scope.item={};
			console.log('!!!!!!!!!!!SetPhone1Ctrl!!!!!!!!!!!!!!!');
			$scope.setPhone = function(){
				
				console.log('###########'+$scope.item.phone+"|pwd:"+$scope.item.pwd);
			}
		})
		.controller('ShoppingCartCtrl', function($scope,_url,_config,_ajax,$ionicLoading) {
			
			console.log('!!!!!!!!!!!ShoppingCartCtrl!!!!!!!!!!!!!!!');
		})
		.controller('CouponCtrl', function($scope,_url,_config,_ajax,$ionicLoading,$ionicScrollDelegate) {
			console.log('!!!!!!!!!!!CouponCtrl!!!!!!!!!!!!!!!');
		})
		.controller('CouponInfoCtrl', function($scope,_url,_config,_ajax,$ionicLoading,$timeout,$ionicListDelegate,$ionicScrollDelegate) {
			var c1 = {id:1,name:"佛陪我看人分配",image:"http://mallimg01.touchcdn.com/goods-gallery/cb5c8464c08fea2958a9a44fb6378585.jpg?imageView/2/w/416/interlace/1",detail:"速度快了飞机上看到了几分谁离开的副驾驶的"};
			var c2 = {id:2,name:"偶是奇偶if就",image:"http://mallimg01.touchcdn.com/goods-gallery/22c56205dc707ef0c4d5505dddc07f79.jpg?imageView/2/w/416/interlace/1",detail:"速度快了飞机上看到了几分谁离开的副驾驶的"};
			
			var p1 = {id:1,name:"叫我IE偶然金",image:"http://mallimg01.touchcdn.com/goods-gallery/fad231cc46a6370394305b348f90cb81.jpg?imageView/2/w/416/interlace/1",detail:"速度快了飞机上看到了几分谁离开的副驾驶的"};
			var p2 = {id:2,name:"那间房间看到",image:"http://mallimg01.touchcdn.com/goods-gallery/130b27b5d38de9d9c1017ed56d02dae7.jpg?imageView/2/w/416/interlace/1",detail:"速度快了飞机上看到了几分谁离开的副驾驶的"};
			
			$scope.coupons = {curr:[c1,c2,c1,c2,c1,c2,c1,c2,c1,c2,c1,c2]
							,past:[p1,p2,p1,p2,p1,p2,p1,p2,p1,p2,p1,p2]};
			
			$scope.data = {
				    showDelete: false,
				    showOption: false
				  };
			$scope.deleteCurr = function(index){
				$ionicListDelegate.closeOptionButtons();
			  	console.log('index:'+index);
			  	$scope.coupons.curr.splice(index,1);
			}
			$scope.deletePast = function(index){
				$ionicListDelegate.closeOptionButtons();
			  	console.log('index:'+index);
			  	$scope.coupons.past.splice(index,1);
			}
			$scope.currRefresh = function(){
				console.log('-------------currRefresh-------------');
				 $timeout(function() {
			         $scope.$broadcast('scroll.refreshComplete');
		        }, 600);
			}
			$scope.pastRefresh = function(){
				console.log('-------------pastRefresh-------------');
				 $timeout(function() {
			         $scope.$broadcast('scroll.refreshComplete');
		        }, 600);
			}
			 //固定栏切换
			$scope.slide_type = 1;
			var slideChangeObj = {};
			$scope.changeSlideType = function(type){
					  $scope.data = {
					    showDelete: false,
					    showOption: false
					  };
				  		var sco = slideChangeObj[type];
						if(sco){
							$ionicScrollDelegate.scrollTo(sco.left,sco.top)
						}else{
							if(document.getElementById("slideScroll")){
								$ionicScrollDelegate.scrollTo(0,document.getElementById("slideScroll").offsetTop-34);
							}else{
								$ionicScrollDelegate.scrollTop();
							}
						}
						slideChangeObj[$scope.slide_type] = $ionicScrollDelegate.getScrollPosition();
					$scope.slide_type = type;
			}
			console.log('!!!!!!!!!!!CouponInfoCtrl!!!!!!!!!!!!!!!');
		})
		//收藏
		.controller('KeepCtrl', function($scope,_url,_config,_ajax,$ionicLoading,$timeout,$ionicScrollDelegate,$ionicListDelegate,userKeep) {
			 $scope.data = {
					    showDelete: false,
					    showOption: false
					  };
			 $scope.goodsRefresh = function(){
				 	$scope.goodsMoreData = true;
				 	goods_req.index=1;
				    userKeep.userFindKeepPage(goods_req, $scope);
				    $timeout(function() {
				         $scope.$broadcast('scroll.refreshComplete');
			        }, 600);
			 }
			 $scope.societyRefresh = function(){
				 	$scope.societyMoreData = true;
				 	soi_req.index=1;
				    userKeep.userFindKeepPage(soi_req, $scope);
				    $timeout(function() {
				         $scope.$broadcast('scroll.refreshComplete');
			        }, 600);
			 }
			 $scope.deleteSocietyItem = function(index,item){
				  	$ionicListDelegate.closeOptionButtons();
				  	$scope.keepSoietys.splice(index,1);
				  	userKeep.userSaveOrUpdateKeep(item);
			 }
			 $scope.deleteGoodsItem = function(index,item){
				    $ionicListDelegate.closeOptionButtons();
				  	$scope.keepGoodss.splice(index,1);
				  	userKeep.userSaveOrUpdateKeep(item);
			 }
			 
			 var goods_req = {type:1,index:1,size:10};
			 var soi_req = {type:2,index:1,size:10};
			 userKeep.userFindKeepPage(goods_req, $scope);
			 $scope.societyMoreData = true;
			 $scope.societyLoadMore = function(){
				 soi_req.index+=1;
				 userKeep.userFindKeepPage(soi_req, $scope);
				 $scope.$broadcast('scroll.infiniteScrollComplete');
			 }
			 
			 $scope.goodsMoreData = true;
			 $scope.goodsLoadMore = function(){
				 goods_req.index+=1;
				 userKeep.userFindKeepPage(goods_req, $scope);
				 $scope.$broadcast('scroll.infiniteScrollComplete');
			 }
			 
			 //固定栏切换
			 $scope.slide_type = 1;
			 var slideChangeObj = {};
			 $scope.changeSlideType = function(type){
				  		var sco = slideChangeObj[type];
						if(sco){
							$ionicScrollDelegate.scrollTo(sco.left,sco.top)
						}else{
							if(document.getElementById("slideScroll")){
								$ionicScrollDelegate.scrollTo(0,document.getElementById("slideScroll").offsetTop-34);
							}else{
								$ionicScrollDelegate.scrollTop();
							}
						}
						slideChangeObj[$scope.slide_type] = $ionicScrollDelegate.getScrollPosition();
						$scope.slide_type = type;
						
						if(type == 1 && !$scope.keepGoodss){
							userKeep.userFindKeepPage(goods_req, $scope);
						}
						if(type == 2 && !$scope.keepSoietys){
							userKeep.userFindKeepPage(soi_req, $scope);
						}
						
			 }
			 console.log('!!!!!!!!!!!KeepCtrl!!!!!!!!!!!!!!!');
		})
		.controller('AddressCtrl', function($scope,$rootScope,_url,_config,_ajax,$ionicLoading,$state,userAddress) {
				var req = {index:1,size:10};
				$scope.result = [];
				userAddress.userFindAddressPage(req, $scope);
				$scope.moreData = true;
				$scope.loadMore = function(){
					req.index+=1;
					userAddress.userFindAddressPage(req, $scope);
				    $scope.$broadcast('scroll.infiniteScrollComplete');
				}
			 	$scope.newAddAddres = function(address){
			 		 $state.go('tab.'+$rootScope.action_flag+'_newAddress',{'id':''});
			 	}
			 	$scope.updateAddres = function(address){
			 		 $state.go('tab.'+$rootScope.action_flag+'_newAddress',{'id':1});
			 	}
			 	$scope.updateDefault = function(address){
			 		for(var i in $scope.result){
			 			$scope.result[i].defaultIs = 0;
			 		}
			 		address.defaultIs = 1;
			 		userAddress.updateDefault(address, $scope);
			 	} 
			 	console.log('!!!!!!!!!!!AddressCtrl!!!!!!!!!!!!!!!');
		})
		.controller('NewAddressCtrl', function($scope,_url,_config,_ajax,$ionicLoading,$state,$stateParams,userAddress) {
				  var id = $stateParams.id;
				  
			 	  if(id){
			 		 var req={"id":id}
			 		 userAddress.findAddressById(req, $scope);
			 	  }else{
			 		 $scope.address = {};
			 	  }
			 	  $scope.updateAddres = function(address){
			 		 $scope.address = address;
			 		 $scope.citydata = address.address;
			 	  }
				  $scope.saveUpdate = function(u) {
					 if(u.id){
						 console.log('update')
					 }else{
						 console.log('save')
					 }
				  };
				  
				  
			console.log('!!!!!!!!!!!AddressCtrl!!!!!!!!!!!!!!!');
		})
		.controller('AboutCtrl', function($scope,_url,_config,_ajax,$ionicLoading) {
			
			console.log('!!!!!!!!!!!AboutCtrl!!!!!!!!!!!!!!!');
		})
		.controller('FeedBackCtrl', function($scope,_url,_config,_ajax,$ionicLoading,$ionicScrollDelegate) {
			$scope.submit = function(){
				console.log('submint,,,,');
			}
			$scope.addPhoto = function(){
				console.log('addPhoto,,,,');
			}
			console.log('!!!!!!!!!!!FeedBackCtrl!!!!!!!!!!!!!!!');
			$scope.feedBackRefresh = function(){
				$scope.$broadcast('scroll.refreshComplete');
			}
			$scope.loadMore = function(){
			    $scope.$broadcast('scroll.infiniteScrollComplete');
			}
			//固定栏切换
			$scope.slide_type = 1;
			var slideChangeObj = {};
			$scope.changeSlideType = function(type){
			  		var sco = slideChangeObj[type];
					if(sco){
						$ionicScrollDelegate.scrollTo(sco.left,sco.top)
					}else{
						if(document.getElementById("slideScroll")){
							$ionicScrollDelegate.scrollTo(0,document.getElementById("slideScroll").offsetTop-34);
						}else{
							$ionicScrollDelegate.scrollTop();
						}
					}
					slideChangeObj[$scope.slide_type] = $ionicScrollDelegate.getScrollPosition();
				    $scope.slide_type = type;
			}
	    	console.log("FeedBackCtrl");
		})
		.controller('FeedBackInfoCtrl', function($scope,_url,_config,_ajax,$ionicLoading,$ionicScrollDelegate) {
			
	    	console.log("FeedBackInfoCtrl");
		})
		;