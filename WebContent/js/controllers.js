'use strict';

/* Controllers123 */
angular.module('ionicApp.controllers', []).
	controller('GuideCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
		$scope.slideIndex=0;
		$scope.startApp = function() {
			$state.go('main');
		};
		$scope.next = function() {
			$ionicSlideBoxDelegate.next();
		};
		$scope.previous = function() {
			$ionicSlideBoxDelegate.previous();
		};
		// Called each time the slide changes
		$scope.slideChanged = function(index) {
			$scope.slideIndex = index;
		};
	}).controller('MainCtrl', function($rootScope, $scope, $state, $ionicSlideBoxDelegate, $timeout, $ionicPopover, _config, _ajax, _url) {
		  
		   var req = {};
		   _ajax.ajax({
				  url: _url.getUrl("home"),
				  reqDataType:'jsonstr',
				  data: req,
				  success: function(result) {
					  if(result.result){
							$scope.mainList = result.result;
							$scope.$apply();
					  }else{
						  //TODO 错误处理
					  }
			   	 },
				 error:function(msg){
			   		 
			   	 }
		  });
		  
		  /*
		  //轮播$ionicSlideBoxDelegate
		  for(var i=0; i<$scope.mainList; i++){
			  if($scope.mainList[i].imgsList && $scope.mainList[i].imgsList.length>=3){
				  $scope.mainList[i].slideName = $ionicSlideBoxDelegate;
			  }
		  }*/
		  
		  $scope.doRefresh = function(){
				  _ajax.ajax({
					  url: _url.getUrl("home"),
					  reqDataType:'jsonstr',
					  data: req,
					  success: function(result) {
						  if(result.result){
								$scope.mainList = result.result;
								$scope.$apply();
						  }else{
							  //TODO 错误处理
						  }
				   	 },
					 error:function(msg){
				   		 
				   	 }
				});
		        $timeout(function() {
		        	 req.index=0;
		        	 $scope.mainItems=[];
			         $scope.$broadcast('scroll.refreshComplete');
		        }, 600);
		  }
		  var mainItems=[];
		  var index = 0;
		  var size = _config.size
		  var req = {index:index,size:size};
		  $scope.mainMoreData = true;
		  $scope.mainLoadMore = function(){
		      goodSeachFun(req);
		      req.index = req.index+1;
		      $scope.$broadcast('scroll.infiniteScrollComplete');
		  }
		  var goodSeachFun = function(req){
			    
				_ajax.ajax({
					  url: _url.getUrl("goodsListByPage"),
					  reqDataType:'jsonstr',
					  data: req,
					  success: function(result) {
						  if(!req.index || req.index==1){
							 // mainItems=[];
						  }
						  if(result.result && result.result.results && result.result.results.length>0){
								for(var i=0; i< result.result.results.length; i++){
									mainItems.push(result.result.results[i]);
								}
								$scope.mainItems = mainItems;
								$scope.$apply();
						  }else{
							  $scope.mainMoreData = false;
						  }
				   	 },
					 error:function(msg){
				   		 $scope.mainMoreData = false;
				   	 }
				});
			}
		  
		  console.log('MainCtrl');

		  $scope.goForwarding=function(url){
			  if(url){
				  window.location.href=url; 
			  }
		  }
		  
		 //.fromTemplateUrl() 方法
          $ionicPopover.fromTemplateUrl('template/common/popover.html', {
            scope: $scope
          }).then(function(popover) {
            $scope.popover = popover;
          });
		  
	})
	;
