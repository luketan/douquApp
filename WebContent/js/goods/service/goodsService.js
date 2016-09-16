'use strict';

/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ionicApp.goodsServices', [])
			.service('_goodsStatus',function($rootScope){
				$rootScope.goodsStatus = [{name:'--请选择--',value:''},{name:'上线',value:1},{name:'已售完',value:2},{name:'已下架',value:3},{name:'删除',value:4},{name:'待审核',value:5}];
			})
			.service('_goodsBrand',function($rootScope,_url,_ajax){
				this.list = function($scope){
					_ajax.ajax({
						  url: _url.getUrl("goodsBrandList"),
						  data: {},
						  success: function(result) {
							if(result.result){
								var arrayRet = result.result;
								arrayRet.unshift({id:'',name:'--请选择--'});
								$scope.brandList = arrayRet;
								$scope.$apply();
							}else{
								alert('no data');
							}
					   	  }
					});
				}
				
			})
			.service('_goodsActivity',function($rootScope,_url,_ajax){
				this.list = function($scope){
					_ajax.ajax({
						  url: _url.getUrl("goodsActivityList"),
						  data: {},
						  success: function(result) {
							if(result.result){
//								console.log(result.result);
//								return result.result;
								$scope.activityList = result.result;
								$scope.$apply();
							}else{
								alert('no data');
							}
					   	  }
					});
				}
				
			})
			.service('_goodsType',function($rootScope,_url,_ajax){
				this.list = function($scope){
					_ajax.ajax({
						  url: _url.getUrl("goodsTypeList"),
						  data: {},
						  success: function(result) {
							if(result.result){
								var arrayRet = result.result;
								arrayRet.unshift({id:'',name:'--请选择--'});
								$scope.typeList = arrayRet;
								$scope.$apply();
							}else{
								alert('没有数据')
							}
					   	  }
					});
				}
				
			})
			.service('_goodsStyle',function($rootScope,_url,_ajax){
				this.list = function($scope,req){
					_ajax.ajax({
						  url: _url.getUrl("goodsStyleByPageNoCountList"),
						  data: req,
						  success: function(result) {
							if(result.result){
								var arrayRet = result.result;
								arrayRet.unshift({id:'',name:'--请选择--'});
								$scope.styleList = arrayRet;
								$scope.$apply();
							}else{
								alert('no data');
							}
					   	  }
					});
				}
				
			})
			.service('_goodsFormat',function($rootScope,_url,_ajax){
				this.list = function($scope,req){
					_ajax.ajax({
						  url: _url.getUrl("goodsFormatList"),
						  data: req,
						  success: function(result) {
							if(result.result){
								var arrayRet = result.result;
								arrayRet.unshift({id:'',name:'--请选择--'});
								$scope.formatList = arrayRet;
								$scope.$apply();
							}else{
								alert('no data');
							}
					   	  }
					});
				}
				
			});