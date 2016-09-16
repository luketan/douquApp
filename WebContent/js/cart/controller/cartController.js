'use strict';

/* Controllers */
var app = angular.module('ionicApp.cartControllers', [])
		  .controller('CartCtrl', function($rootScope, $scope, $state, $timeout, $ionicLoading, _ajax, _config, _url) {
			  
			  var goods={
					  id:1,
					  goodsId:10001,
					  goodsName:"霏慕 中国古典肚兜性感挂脖绑带情趣诱惑肚兜T裤 2件套",
					  imageUrl:"http://ionicframework.com/img/docs/mcfly.jpg",
					  formatName:"玫红色（肚兜+系带T裤）",
					  markPrice:44,
					  price:19.9,
					  num:1,
					  checkbox:true
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
			  
			  $scope.results =[goods];
			  
			  $scope.doRefresh = function(){
				    $timeout(function() {
				         $scope.$broadcast('scroll.refreshComplete');
			        }, 600);
			  }
			  $scope.goPay = function(){
				  var id = 1;
				  $state.go('tab.'+$rootScope.action_flag+'_confirmOrder',{'id':id});
				  console.log('go pay........');
			  }
			  $scope.deleteItem = function($index){
				  console.log('deleteItem........');
			  }
			  $scope.keepItem = function($index){
				  console.log('keepItem........');
			  }
			  
			  
			  $scope.totalPrice = 0;
			  function totalPrice(){//计算总价
				  var price = 0.00;
				  for(var i in $scope.results){
					  if($scope.results[i] && $scope.results[i].checkbox){
						  price+=$scope.results[i].price*$scope.results[i].num;
					  }
				  }
				  $scope.totalPrice = price;
			  }
			  $scope.checkboxCart = function($event,$index){//复选框点击
				  var item = $scope.results[$index];
				  item.checkbox = ($event.target.classList.toString().indexOf('ion-ios-circle-outline')>0);
				  totalPrice();
				  checkcheckboxALL();
			  }
			  function checkcheckboxALL(){//检查是否全部选中
				  for(var i in $scope.results){
					  if(!$scope.results[i].checkbox){
						  $scope.checkboxAll = false;
						  return;
					  }
				  }
				  $scope.checkboxAll = true;
			  }
			  $scope.checkboxALL = function($event){
				  $scope.checkboxAll =  ($event.target.classList.toString().indexOf('ion-ios-circle-outline')>0);
				  for(var i in $scope.results){
					  $scope.results[i].checkbox = $scope.checkboxAll;
				  }
				  totalPrice();
			  }
			  $scope.subNum = function($index){//减数量
				  var item = $scope.results[$index];
				  item.num = item.num-1;
				  totalPrice();
			  }
			  $scope.addNum = function($index){//添加数量
				  var item = $scope.results[$index];
				  item.num = item.num+1;
				  totalPrice();
			  }
			  totalPrice();
		  })
		  .controller('ConfirmOrderCtrl', function($rootScope, $scope, $state, $stateParams, $timeout, $ionicLoading, _ajax, _config, _url) {
			  var id = $stateParams.id;
			  $scope.address={id:1,name:"谭辉",phone:"18666668629",address:"广东省深圳市罗湖区",detail:"黄贝岭街道龙景花园芳庭苑B1003"}
			  console.log("ConfirmOrderCtrl,,,,,,,,?,"+$stateParams.addressId);
			  var goods={
					  id:1,
					  goodsId:10001,
					  goodsName:"霏慕 中国古典肚兜性感挂脖绑带情趣诱惑肚兜T裤 2件套",
					  imageUrl:"http://ionicframework.com/img/docs/mcfly.jpg",
					  formatName:"玫红色（肚兜+系带T裤）",
					  markPrice:44,
					  price:19.9,
					  num:1,
					  checkbox:true
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
			  
			  $scope.results =[goods];
			  
			  $scope.payType=[{id:1,name:"支付宝",img:"",url:"",checkIs:true}
			  				 ,{id:2,name:"支付宝",img:"",url:"",checkIs:false}
			  				 ,{id:2,name:"支付宝",img:"",url:"",checkIs:false}];
			  
			 
		  })
		  .controller('AddressListCtrl', function($rootScope, $scope, $state, _url, _config, _ajax, $ionicLoading) {
				  $scope.addressList=[{id:1,userName:"谭辉",phone:"18666668629",address:"广东省深圳市罗湖区 ",detail:"黄贝岭街道罗芳路龙景花园芳庭苑B栋1003",defaulIs:1,check:true},
			                      {id:2,userName:"李秀煌",phone:"13418578982",address:"广东省深圳市罗湖区  ",detail:"黄贝岭街道罗芳路龙景花园芳庭苑B栋1003",defaulIs:0,check:false}];
		 	  
			 	  $scope.newAddAddres = function(address){
			 		 $state.go('tab.'+$rootScope.action_flag+'_newAddress',{'id':''});
			 	  }
			 	  $scope.updateAddres = function(address){
			 		 $state.go('tab.'+$rootScope.action_flag+'_newAddress',{'id':1});
			 	  }
			 	  $scope.checkAddress = function(item){
			 		 for(var i=0; i < $scope.addressList.length; i++){
			 			 $scope.addressList[i].check = false;
			 		 }
			 		 item.check = true;
			 		 $state.go('tab.'+$rootScope.action_flag+'_confirmOrder',{addressId:item.id});
			 	  }
			 	  console.log('!!!!!!!!!!!AddressCtrl!!!!!!!!!!!!!!!'+'tab.'+$rootScope.action_flag+'_confirmOrder');
		})
		;