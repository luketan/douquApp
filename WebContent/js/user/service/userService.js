'use strict';

/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ionicApp.userServices', [])
			.service('_userStatus',function($rootScope){
				$rootScope.goodsStatus = [{name:'--请选择--',value:''},{name:'上线',value:1},{name:'已售完',value:2},{name:'已下架',value:3},{name:'删除',value:4},{name:'待审核',value:5}];
			}).service('userLogin',function($http, $state, $ionicLoading, $localstorage, _ajax,_url){
					this.login = function(req){
							$ionicLoading.show({
							      template: '登录中...',
//							      duration:2000
							});
							var data = {account:req.account,password:hex_md5(req.password)};
							_ajax.ajax({
								  url: _url.getUrl("userLogin"),
								  reqDataType:'jsonstr',
								  data: data,
								  success: function(result) {
									  if(result.result){
										  $localstorage.setObject("userInfo",result.result.tuser);
										  $localstorage.set("token",result.result.token);
										  $state.go('tab.user');
										  return result.result;
									  }else{
										  $ionicLoading.show({
										      template: result.msg,
										      duration:2000
										  });
									  }
									  $ionicLoading.hide();
							   	 },
								 error:function(msg){
									  $ionicLoading.show({
										      template: msg,
										      duration:2000
									  });
							   	 }
							});
					}
					this.loginout = function(){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						var userInfo = $localstorage.getObject("userInfo");
						var data = {id:userInfo.id};
						_ajax.ajax({
							  url: _url.getUrl("userLoginout"),
							  reqDataType:'jsonstr',
							  data: data,
							  success: function(result) {
								  if(result.result){
									  $localstorage.setObject("userInfo",result.result);
									  $state.go('tab.user');
									  return result.result;
								  }else{
									  $ionicLoading.show({
									      template: result.msg,
									      duration:2000
									  });
								  }
								  $ionicLoading.hide();
								  $localstorage.setObject("userInfo",'');
								  $localstorage.set("token",'');
								  $state.go('tab.user');
						   	 },
							 error:function(msg){
								  $localstorage.setObject("userInfo",'');
								  $localstorage.set("token",'');
								  $ionicLoading.show({
									      template: msg,
									      duration:2000
								  });
						   	 }
						});
					}
			})
			.service('userCollect',function($http, $state, $ionicLoading, $localstorage, _ajax,_url){
					this.userFindCollects = function(req,$scope){
							$ionicLoading.show({
							      template: '请骚等...',
							});
							var data = req;
							_ajax.ajax({
								  url: _url.getUrl("userFindCollects"),
								  reqDataType:'jsonstr',
								  data: data,
								  success: function(result) {
									  if(result.code == "000000" && result.result && result.result.length>0){
										  if(req.type === 1){
											  if(req.index==1){
												  $scope.keepGoodss=[];
											  }
											  if($scope.keepGoodss){
												  for(var i in result.result){
													  $scope.keepGoodss.push(result.result[i]);
												  }
											  }else{
												  $scope.keepGoodss = result.result; 
											  }
										  }else{
											  if(req.index==1){
												  $scope.keepSoietys=[];
											  }
											  if($scope.keepSoietys){
												  for(var i in result.result){
													  $scope.keepSoietys.push(result.result[i]);
												  }
											  }else{
												  $scope.keepSoietys = result.result;  
											  }
										  }
										  result.result;
										  $scope.$apply();
										  $ionicLoading.hide();
									  }else{
										  if(req.type === 1){
											  $scope.goodsMoreData = false;
										  }else{
											  $scope.societyMoreData = false;
										  }
										  $scope.$apply();
										  
										  $ionicLoading.show({
										      template: result.msg,
										      duration:1500
										  });
									  }
							   	 },
								 error:function(msg){
									  $ionicLoading.show({
										      template: msg,
										      duration:1500
									  });
							   	 }
							});
					}
					this.userSaveOrUpdateCollect = function(req){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						
						var data = req;
						_ajax.ajax({
							  url: _url.getUrl("userSaveOrUpdateCollect"),
							  reqDataType:'jsonstr',
							  data: data,
							  success: function(result) {
								  $ionicLoading.show({
								      template: result.msg,
								      duration:2000
								  });
								  $ionicLoading.hide();
						   	  },
							  error:function(msg){
								  $ionicLoading.show({
									      template: msg,
									      duration:1500
								  });
						   	  }
						});
					}
			});