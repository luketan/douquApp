'use strict';

/* Controllers */
var app = angular.module('ionicApp.goodsControllers', []).
		  controller('GoodsListCtrl', function($rootScope,$scope, $state, $timeout, $ionicLoading,$stateParams,$ionicScrollDelegate,$ionicPopover, _ajax, _config, _url, _goodsStyle) {
			  	console.log('GoodsListCtrl');
			  	var typeId = $stateParams.typeId;
			  	var title = $stateParams.title;
			  	
				console.log('typeId:'+typeId);
			  	
				var index = 0;
				var size = _config.size
				if(typeId){
					var req = {"goodsType":typeId,"index":0,"size":1000};
					_goodsStyle.list($scope,req);
				}
				
				$scope.title = title?title:"商品列表";
				$scope.moreData = true;
			    $scope.doRefresh = function() {
			        
			        console.log('Refreshing!');
			        $timeout(function() {
			        	 req.index=0;
			        	 $scope.mainItems=[];
				         $scope.$broadcast('scroll.refreshComplete');
			        
			        }, 600);
			        $scope.moreData = true;
			        
			    };
			    $scope.loadMore = function(){
			    	req.index = req.index+1;
			    	goodSeachFun(req);
			    	$scope.$broadcast('scroll.infiniteScrollComplete');
			    }
			
				var resItems=[];
				var req = {index:index,size:size,typeId:typeId};
				var goodSeachFun = function(req){
					_ajax.ajax({
						  url: _url.getUrl("goodsListByPage"),
						  reqDataType:'jsonstr',
						  data: req,
						  success: function(result) {
							  if(!req.index || req.index==1){
								 // resItems=[];
							  }
							  if(result.result && result.result.results && result.result.results.length>0){
									for(var i=0; i< result.result.results.length; i++){
										resItems.push(result.result.results[i]);
									}
									$scope.results = resItems;
									$scope.$apply();
							  }else{
								  $scope.moreData = false;
							  }
					   	 },
						 error:function(msg){
					   		 $scope.moreData = false;
					   	 }
					});
				}
				goodSeachFun(req);
				
				$scope.goGoodsItem = function(id) {
					$state.go('tab.'+$rootScope.action_flag+'_goodsItem',{'id':id});
				};
				//筛选
				$ionicPopover.fromTemplateUrl('template/common/goodsFilterPopover.html', {
					scope: $scope
				}).then(function(popover) {
					$scope.popover = popover;
				});
					//筛选类型$scope.searchSubType
				$scope.searchTypes=[{id:1,name:"款式",subTypes:[{id:1,name:"睡裙睡袍"},
				                                            {id:2,name:"制服扮演"},
				                                            {id:3,name:"网衣/连身袜"},
				                                            {id:4,name:"三点/连体衣"},
				                                            {id:5,name:"丝袜吊带袜"},
				                                            {id:6,name:"女士内裤"},
				                                            {id:7,name:"男士内裤"},
				                                            {id:8,name:"马甲束腰"},
				                                            {id:9,name:"情趣配件"},]},
				                   {id:2,name:"价格",subTypes:[{id:1,name:"1-30"},
				                                            {id:2,name:"30-60"},
				                                            {id:3,name:"60-100"},
				                                            {id:4,name:"100+"},]}];
					
				$scope.searchTypeIndex = $scope.searchTypes[0].id;//类别选中ID
				$scope.searchSubTypes=$scope.searchTypes[0].subTypes;//选中子类集
				$scope.searchSubTypeIndexs = {};//子类选中IDs
				$scope.searchSubTypeBadge = false;//小红点
				var searchSubTypeNames = {};
				$scope.searchTypeClick=function(id){
					$scope.searchTypeIndex = id;
					for(var i=0;i<$scope.searchTypes.length;i++){
						if($scope.searchTypes[i].id == id){
							$scope.searchSubTypes = $scope.searchTypes[i].subTypes;
						}
					}
				}
				$scope.searchSubTypeClick=function(id,name){
					$scope.searchSubTypeBadge = true;
					if($scope.searchSubTypeIndexs[$scope.searchTypeIndex] == id){
						delete $scope.searchSubTypeIndexs[$scope.searchTypeIndex];
						delete searchSubTypeNames[$scope.searchTypeIndex];
						$scope.searchSubTypeBadge = false;//小红点
						for(var i=0;i<$scope.searchTypes.length;i++){
							if($scope.searchSubTypeIndexs[$scope.searchTypes[i].id]){
								$scope.searchSubTypeBadge = true;//小红点
							}
						}
					}else{
						$scope.searchSubTypeIndexs[$scope.searchTypeIndex] = id;
						searchSubTypeNames[$scope.searchTypeIndex] = name;
						$scope.popover.hide(); 
					}
					
					$scope.title = title;
					for(var i in searchSubTypeNames){
						$scope.title += ("["+searchSubTypeNames[i]+"]");
					}
				}
				$scope.searchTypeClear = function(){
					$scope.searchSubTypeBadge = false;
					$scope.title = title;
					$scope.searchTypeIndex = "";
					$scope.searchSubTypeIndexs = {};
					$scope.popover.hide(); 
				}
				$scope.$on('popover.hidden', function() {
					console.log('search goods.......');
				});
				//筛选结束
				//固定栏切换
				$scope.slide_type = 1;
				$scope.priceUpSelect={color:"#E2E2E2"};
				$scope.priceDownSelect={color:"#E2E2E2"};
				$scope.changeSlideType = function(type){
					$scope.slide_type = type;
					//价格排序处理
					if(type==3){
						if($scope.priceUpSelect.color==="#E2E2E2"){
							$scope.priceUpSelect={color:"#333"};
							$scope.priceDownSelect={color:"#E2E2E2"}
						}else{
							$scope.priceUpSelect={color:"#E2E2E2"};
							$scope.priceDownSelect={color:"#333"}
						}
					}else{
						$scope.priceUpSelect={color:"#E2E2E2"};
						$scope.priceDownSelect={color:"#E2E2E2"};
					}
				}
			
		}).
		controller('GoodsItemCtrl', function($rootScope,$scope,_url,_config,_ajax,$stateParams,$ionicHistory,$state,$window,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicModal,$timeout,$ionicLoading,$ionicScrollDelegate) {
			var id = $stateParams.id;
			console.log('id:'+id);
			$scope.goodItemdelegateHandler = $ionicSlideBoxDelegate;
			var req = {"id": id,};
			_ajax.ajax({
				  url: _url.getUrl("goodsItem"),
				  data: req,
				  success: function(result) {
					  if(result.result){
							console.log(result.result);
							$scope.result = result.result;
							$scope.formatPrice = result.result.price;
							$scope.result.num=1;
							$scope.$apply();
							$ionicSlideBoxDelegate.update();
							$ionicSlideBoxDelegate.loop(true);
							
					  }
			   	  }
			});
			//分享
			$ionicModal.fromTemplateUrl('template/goods/shareModal.html', {
				    scope: $scope
			}).then(function(modal) {
				 	$scope.shareModal = modal;
			});
			//加入购物车
			$ionicModal.fromTemplateUrl('template/goods/addShoppingCartModal.html', {
				 	scope: $scope
			}).then(function(modal) {
			   		$scope.modal = modal;
			});
			//规格改变
			$scope.changeFormat = function($event,name,price){
				 if(price && price>0){
					 $scope.formatPrice = price;
				 }
				 $scope.formatName=$event.target.textContent;
				 $($event.target.parentNode).find('span').removeAttr("style"); 
				 $event.target.style.color="red";
				 $event.target.style.borderColor="red";
			}
			$scope.addNum = function(){
				 $scope.result.num = $scope.result.num+1;
			}
			$scope.subNum = function(){
				 if($scope.result.num>1){
					 $scope.result.num = $scope.result.num-1;
				 }
			}
			$scope.payType = 1;//1加入购物车 ，2直接购买
			$scope.showFormat = function(type){
				$scope.payType = type;
				if(type==1){
					$scope.btnText="确定";
				}else{
					$scope.btnText="直接购买"
				}
				$scope.modal.show();
			}
			$scope.addCart = function(goodsId){
				 $scope.modal.hide();
				
				 if($scope.payType == 1){//加入购物车
					 $ionicLoading.show({
					      template: '添加成功！',
					      duration:2000
					 });
				 }else{//直接购买
					 $state.go('tab.'+$rootScope.action_flag+'_confirmOrder',{'id':id}); 
				 }
				
				
			   /*var shoppingCart = document.getElementById("shoppingCartModal");
					 var goodsImg = document.getElementById("goodsImgId");
					 var addShoppingCarWraper = document.getElementById("addShoppingCarWraper");
					 var addShoppingCarItem = document.getElementById("addShoppingCarItem");
					 
					 var top = shoppingCart.offsetTop+goodsImg.offsetTop;
					 var left = shoppingCart.offsetLeft+goodsImg.offsetLeft;
					 
					 ionic.requestAnimationFrame(function () {
						 addShoppingCarWraper.style.top = "0px";
						 addShoppingCarWraper.style.left = "5px";
						 addShoppingCarWraper.style.position = "relative";
//						 addShoppingCarItem.style.top = top+"px";
//						 addShoppingCarItem.style.left = left+"px";
						 addShoppingCarItem.style.position = "relative";
//						 addShoppingCarWraper.class="addShoppingCarWraper";
//						 addShoppingCarItem.class="addShoppingCarItem";
						 addShoppingCarWraper.setAttribute("class", "addShoppingCarWraper");
						 addShoppingCarItem.setAttribute("class", "addShoppingCarItem"); 
						 console.log("@@@@@@@@@@@@@@@@@@@@");
					 })*/
				
			}
			
			//固定栏切换
			$scope.slide_type = 1;//切换下标
			var slideChangePosObj = [];//保存每一次到顶部后的高度
			$scope.changeSlideType = function(type){//type当前下标
			  		var sco = undefined;
			  		if($rootScope.fixedBarTop){//如果是到了顶部
			  			sco = slideChangePosObj[type];
			  		}
					if(sco){
						$ionicScrollDelegate.scrollTo(sco.left,sco.top)
					}else{
						if($rootScope.fixedBarTop){//是否到顶部
							if(document.getElementById("slideScroll")){
								$ionicScrollDelegate.scrollTo(0,document.getElementById("slideScroll").offsetTop-34);
							}else{
								$ionicScrollDelegate.scrollTop();
							}
						}else{//没有到顶部，也需要刷新下页面
							$ionicScrollDelegate.scrollTo($ionicScrollDelegate.getScrollPosition().left,$ionicScrollDelegate.getScrollPosition().top);//将当前位置赋给当前对象，刷新内容作用
						}
					}
					if($rootScope.fixedBarTop){//是否到顶部。//$scope.slide_type之前下标
						slideChangePosObj[$scope.slide_type] = $ionicScrollDelegate.getScrollPosition();
					}else{
//						slideChangePosObj[$scope.slide_type] = undefined;//如果没有到顶部就删除
						slideChangePosObj = [];
					}
				    $scope.slide_type = type;//切换下标
			}
			//固定栏切换end
		}).
		controller('GoodsTypeCtrl', function($scope,_url,_config,_ajax,$stateParams,$ionicHistory,$ionicLoading,$state,$window,$ionicActionSheet,$ionicSlideBoxDelegate) {
			$scope.goodsTypes=[{id:1004,name:"避孕套",subName:"杜蕾斯/冈本/超薄/持久/颗粒",img:"&#xe61d;"},
			                   {id:1001,name:"情趣服饰",subName:"睡裙/制服/网衣/T裤/黑丝/三点式",img:"&#xe624;"},
			                   {id:1002,name:"男用玩具",subName:"杜蕾斯/冈本/超薄/持久/颗粒",img:"&#xe623;"},
			                   {id:1003,name:"女用玩具",subName:"杜蕾斯/冈本/超薄/持久/颗粒",img:"&#xe605;"},
			                   {id:1005,name:"延时助力",subName:"杜蕾斯/冈本/超薄/持久/颗粒",img:"&#xe609;"},
			                   {id:1006,name:"调情助情",subName:"杜蕾斯/冈本/超薄/持久/颗粒",img:"&#xe621;"},
			                   {id:1007,name:"调教道具",subName:"杜蕾斯/冈本/超薄/持久/颗粒",img:"&#xe622;"}
			                   ];
			$scope.doRefresh = function() {		        
				$scope.$broadcast('scroll.refreshComplete');
		    };
			console.log('!!!!!!GoodsTypeCtrl!!!!!!!!!!');
		});