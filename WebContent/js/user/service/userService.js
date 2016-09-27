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
									  $ionicLoading.hide();
									  if(result.result){
										  $localstorage.setObject("userInfo",result.result.tuser);
										  $localstorage.set("token",result.result.token);
										  $state.go('tab.user',{},{reload:true});
										  return result.result;
									  }else{
										  $ionicLoading.show({
										      template: result.msg,
										      duration:2000
										  });
									  }
									 
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
								  $ionicLoading.hide();
								  
								  $localstorage.setObject("userInfo",'');
								  $localstorage.set("token",'');
								  $state.go('tab.user');
								  
								  if(result.result){
									  $state.go('tab.user',{},{reload:true});  
								  }else{
									  $ionicLoading.show({
									      template: result.msg,
									      duration:2000
									  });
								  }
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
			.service('userKeep',function($http, $state, $ionicLoading, $localstorage, _ajax,_url){
					this.userFindKeepPage = function(req,$scope){
							$ionicLoading.show({
							      template: '请骚等...',
							});
							var data = req;
							$http.post(_url.getUrl("userFindKeepPage"), data )
							.success(function(data, status, headers, config) {
									$ionicLoading.hide();
									if(data.code == "000000" ){
										  if(req.type === 1){
											  if(data.result.length<req.size){
												  $scope.goodsMoreData = false;
											  }
											  if(req.index==1){
												  $scope.keepGoodss=[];
											  }
											  if($scope.keepGoodss){
												  for(var i in data.result){
													  $scope.keepGoodss.push(data.result[i]);
												  }
											  }else{
												  $scope.keepGoodss = data.result; 
											  }
										  }else{
											  if(data.result.length<req.size){
												  $scope.societyMoreData = false;
											  }
											  if(req.index==1){
												  $scope.keepSoietys=[];
											  }
											  if($scope.keepSoietys){
												  for(var i in data.result){
													  $scope.keepSoietys.push(data.result[i]);
												  }
											  }else{
												  $scope.keepSoietys = data.result;  
											  }
										  }
									}else{
										c
										$ionicLoading.show({
										      template: data.msg,
										      duration:1500
										});
									}
								   
							}).error(function(data, status, headers, config ) {
								  $ionicLoading.show({
								      template: data,
								      duration:1500
								  });
							});
					}
					this.userSaveOrUpdateKeep = function(req){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						var data = req;
						$http.post(_url.getUrl("userFindKeepPage"), data)
						.success(function(data, status, headers, config) {
								$ionicLoading.show({
								      template: data.msg,
								      duration:1500
								});
						}).error(function(data, status, headers, config ) {
							    $ionicLoading.show({
							    	template: data,
							    	duration:1500
							    });
						});
					}
			})
			.service('userAddress',function($http, $state, $ionicLoading, $localstorage, _ajax,_url){
					this.findAddressById = function(req,$scope){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						var data = req;
						_ajax.ajax({
							  url: _url.getUrl("userFindAddressById"),
							  reqDataType:'jsonstr',
							  data: data,
							  success: function(result) {
								  if(result.code == "000000"){
									  $scope.address = result.result;
									  $scope.$apply();
									  $ionicLoading.hide();
								  }else{
									  $ionicLoading.show({
									      template: result.msg,
									      duration:1000
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
					this.userFindAddressPage = function(req,$scope){
							$ionicLoading.show({
							      template: '请骚等...',
							});
							var data = req;
							_ajax.ajax({
								  url: _url.getUrl("userFindAddressPage"),
								  reqDataType:'jsonstr',
								  data: data,
								  success: function(result) {
									  if(result.code == "000000"){
										  if(result.result.length<req.size){
											  $scope.moreData = false;
										  }
										  if(req.index==1){
											  $scope.result=[];
										  }
										  for(var i in result.result){
											  $scope.result.push(result.result[i]); 
										  }
										  $scope.$apply();
										  $ionicLoading.hide();
									  }else{
										  $scope.moreData = false;
										  $ionicLoading.show({
										      template: msg,
										      duration:1000
										  });
									  }
							   	 },
								 error:function(msg){
									  $scope.moreData = false;
									  $ionicLoading.show({
										      template: msg,
										      duration:1500
									  });
							   	 }
							});
					}
					this.updateDefault = function(req){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						var data = req;
						$http.post(_url.getUrl("userUpdateAddressDefault"), data)
						.success(function(data, status, headers, config) {
								$ionicLoading.show({
								      template: data.msg,
								      duration:1500
								});
						}).error(function(data, status, headers, config ) {
							    $ionicLoading.show({
							    	template: data,
							    	duration:1500
							    });
						});
					}
			})
			.service('userOrder',function($http, $state, $ionicLoading, $localstorage,_url){
					this.findOrders = function(req,$scope){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						var data = req;
						$http.post(_url.getUrl("orderFindOrders"), data)
						.success(function(data, status, headers, config) {
								$ionicLoading.hide();
								if(data.code == "000000"){
									if(data.result.length<req.size){
										$scope.moreData = false;
									}
									if(req.index==1){
										$scope.results=[];
									}
									for(var i in data.result){
										$scope.results.push(data.result[i]); 
									}
									if(data.result){
										for(var i in data.result){
											var result = data.result[i];
											var totalNum = 0;
											for(var j in result.orderItemList){
												var item = result.orderItemList[j];
												totalNum += item.number;
											}
											data.result[i].totalNum = totalNum;
										}
									}
								}else{
									$scope.moreData = false;
									$ionicLoading.show({
								    	 template: data.msg,
								    	 duration:1500
								    });
								}
						}).error(function(data, status, headers, config ) {
								$scope.moreData = false;
							    $ionicLoading.show({
							    	template: data,
							    	duration:1500
							    });
						});
					}
					this.findOrderById = function(req,$scope){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						var data = req;
						$http.post(_url.getUrl("orderFindOrderBeanById"), data)
						.success(function(data, status, headers, config) {
								$ionicLoading.hide();
								if(data.code == "000000"){
									$scope.result = data.result;
									if(data.result){
										 var result = data.result;
										 var totalNum = 0;
										 for(var j in result.orderItemList){
											 var item = result.orderItemList[j];
											 totalNum += item.number;
										 }
										 data.result.totalNum = totalNum;
									}
								}else{
									$scope.moreData = false;
									$ionicLoading.show({
								    	 template: data.msg,
								    	 duration:1500
								    });
								}
						}).error(function(data, status, headers, config ) {
								$scope.moreData = false;
							    $ionicLoading.show({
							    	template: data,
							    	duration:1500
							    });
						});
					}
					this.postDetail = function(req,$scope){
						$ionicLoading.show({
						      template: '请骚等...',
						});
						var data = req;
						$http.post(_url.getUrl("orderFindPostDetail"), data)
						.success(function(data, status, headers, config) {
								$ionicLoading.hide();
								if(data.code == "000000"){
									$scope.results = data.result;
								}else{
									$scope.moreData = false;
									$ionicLoading.show({
								    	 template: data.msg,
								    	 duration:1500
								    });
								}
						}).error(function(data, status, headers, config ) {
								$scope.moreData = false;
							    $ionicLoading.show({
							    	template: data,
							    	duration:1500
							    });
						});
					}
					
			});