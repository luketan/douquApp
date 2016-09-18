'use strict';

/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ionicApp.services', [])
			.factory('$localstorage', ['$window', function($window) {
					return {
						    set: function(key, value) {
						      	$window.localStorage[key] = value;
						    },
						    get: function(key, defaultValue) {
						    	return $window.localStorage[key] || defaultValue;
						    },
						    setObject: function(key, value) {
						    	$window.localStorage[key] = JSON.stringify(value);
						    },
						    getObject: function(key) {
						    	return JSON.parse($window.localStorage[key] || '{}');
						    }
					}
			}]).
			service('_config',['$rootScope',function($rootScope){//_config.js
						var config = {
										interFace:"/dev",
									    size:5,//每页数据
									    logLever:2,//
									    requestEncrypt:true,
									    timeout:10000,
									 };
						return config;
			}]).service('_url',['$rootScope','_config',function($rootScope,_config){//_url.js
						var url = {
			           		getUrl:function(name){
									var perfix = {
//										"/dev":"http://127.0.0.1:8080/douqu/",//开发 
										"/dev":"http://192.168.12.74:8080/qq-mall-api/",//开发 
										"/stg":"https://www.honglinktech.com/zbgjapi",//测试
										"/prd":"http://121.42.176.191:8080/douqu/"//生产
									};
									var location={
										home:"home/api/findHome",
										
										userLogin:"user/api/login",
										userLoginout:"user/api/loginout",
										
										userFindKeepPage:"user/api/findKeepPage",//用户收藏列表
										userSaveOrUpdateKeep:"user/api/saveOrUpdateKeep",//用户收藏，取消收藏
										
										findAddressById:"user/api/findAddressById",//用户地址
										findAddressPage:"user/api/findAddressPage",//用户地址，取消收藏
										updateAddressDefault:"user/api/updateAddressDefault",//用户地址,修改默认
										
										goodsListByPage:"tGoods/api/findByPage",
										goodsItem:"goods/api/findGoodsBeanById",

										goodsActivityList:"tGActivity/api/findAll",
										goodsActivityListByPage:"tGActivity/api/findByPage",
										goodsActivityById:"tGActivity/api/findById",
										goodsActivitySave:"tGActivity/api/save",
										goodsActivityUpdate:"tGActivity/api/update",
										
										goodsBrandList:"tGBrand/api/findAll",
										goodsBrandListByPage:"tGBrand/api/findByPage",
										goodsBrandById:"tGBrand/api/findById",
										goodsBrandSave:"tGBrand/api/save",
										goodsBrandUpdate:"tGBrand/api/update",
										
										goodsTypeList:"tGType/api/findAll",
										goodsTypeListByPage:"tGType/api/findByPage",
										goodsTypeById:"tGType/api/findById",
										goodsTypeSave:"tGType/api/save",
										goodsTypeUpdate:"tGType/api/update",
										
										goodsStyleList:"tGStyle/api/findAll",
										goodsStyleByPageNoCountList:"tGStyle/api/findByPageNoCount",
										goodsStyleListByPage:"tGStyle/api/findByPage",
										goodsStyleById:"tGStyle/api/findById",
										goodsStyleSave:"tGStyle/api/save",
										goodsStyleUpdate:"tGStyle/api/update",
										
										goodsFormatList:"tGFormat/api/findAll",
										goodsFormatListByPage:"tGFormat/api/findByPage",
										goodsFormatById:"tGFormat/api/findById",
										goodsFormatSave:"tGFormat/api/save",
										goodsFormatUpdate:"tGFormat/api/update",
										
									}
									return perfix[_config.interFace]+location[name]; 
							  }
						 }
				return url;
			}]).service('_tool',['$rootScope',function($rootScope){//_tool.js
						this.getScreenWidth = function(){
							var w=window.innerWidth
							|| document.documentElement.clientWidth
							|| document.body.clientWidth;
							return w;
						};
						this.getScreenHeight = function(){
							var h=window.innerHeight
							|| document.documentElement.clientHeight
							|| document.body.clientHeight;
							return h;
						},
						this.ellText = function(text,perc){
							var w = this.getScreenWidth();
							var len = w*perc/100/13;
							var retText;
							if(len<text.length){
							  retText = text.substr(0,len)+"...";
							}else{
							  retText = text;
							}
							return retText;
						};
						
						var browser = {
				            versions: function() {
				            	
				                var u = navigator.userAgent,
				                    app = navigator.appVersion;
				                return { //移动终端浏览器版本信息   
				                    trident: u.indexOf('Trident') > -1, //<a href="https://www.baidu.com/s?wd=IE%E5%86%85%E6%A0%B8&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBuHNBnvcsrHR1nvFBu0KYUHYzPW6vrjb3njR0mv4YUWYYPj01rHD3n7qWTZc0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1mkP1n3n1fYnjRYPWcLnHfkn6" target="_blank" class="baidu-highlight">IE内核</a>  
				                    presto: u.indexOf('Presto') > -1, //opera内核  
				                    webKit: u.indexOf('iPhone') > -1, //苹果、<a href="https://www.baidu.com/s?wd=%E8%B0%B7%E6%AD%8C&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBuHNBnvcsrHR1nvFBu0KYUHYzPW6vrjb3njR0mv4YUWYYPj01rHD3n7qWTZc0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1mkP1n3n1fYnjRYPWcLnHfkn6" target="_blank" class="baidu-highlight">谷歌</a>内核  
				                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
				                    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端  
				                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
				                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者<a href="https://www.baidu.com/s?wd=uc%E6%B5%8F%E8%A7%88%E5%99%A8&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1dBuHNBnvcsrHR1nvFBu0KYUHYzPW6vrjb3njR0mv4YUWYYPj01rHD3n7qWTZc0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1mkP1n3n1fYnjRYPWcLnHfkn6" target="_blank" class="baidu-highlight">uc浏览器</a>  
				                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器  
				                    iPad: u.indexOf('iPad') > -1, //是否iPad  
				                    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
				                };
				            }(),
				            language: (navigator.browserLanguage || navigator.language).toLowerCase()
				        }
						this.is_android = browser.versions.android;
						this.is_ios = browser.versions.ios;
			}])
			.service('_ajax',function(_config, $ionicLoading, $ionicPopup, $localstorage){//_ajax.js
						
						var ajax ={
						           ajax:function(obj){
										console.log("ajax-req-["+obj.url+"]->"+JSON.stringify(obj.data));
										$.ajax({
										    type: (obj.type||"POST"),
										    url: obj.url,
										    async: (obj.async||true),
										    data:JSON.stringify(obj.data),
										    contentType: "application/json; charset=utf-8",
//										    headers: (obj.headers||{'Accept':'application/json','Content-Type':'application/json' }),
										    timeout: _config.timeout,
										    dataType: obj.dataType?obj.dataType:"json",
										    success: function(result) {
										    	  console.log("ajax-suc-["+obj.url+"]->");//+JSON.stringify(result)
										          if(result.code == 0){
										        	  	if(result.result==null){
										        	  		result.result=JSON.parse("{}");
										        	  	}
										        	  	obj.success(result);
										          }else {
										        	  	this.error(result,result.msg)
										          }
										    },
										    error: function(xhr, errmsg){
										    	 console.log("ajax-err-["+obj.url+"]->"+JSON.stringify(errmsg)+"|"+xhr);
										       	 if(obj.error){
										       		 obj.error(errmsg);
										       	 }
										         if(errmsg == "timeout"){
										        	  var alertPopup = $ionicPopup.alert({
										        		  title: '错误信息', // String. 弹窗的标题。
										        		  //subTitle: '', // String (可选)。弹窗的子标题。
										        		  template: '连接超时', // String (可选)。放在弹窗body内的html模板。
										        		 // templateUrl: '', // String (可选)。 放在弹窗body内的html模板的URL。
										        		  okText: '确认', // String (默认: 'OK')。OK按钮的文字。
										        		  okType: 'button-calm', // String (默认: 'button-positive')。OK按钮的类型。
										        	  });
										         }else if(xhr.code == "000007"){
										        	 var alertPopup = $ionicPopup.alert({
										        		  title: '错误信息',
										        		  template: '用户登录状态已经失效',
										        		  okText: '确认',
										        		  okType: 'button-calm',
										        	  });
										        	  alertPopup.then(function(res) {
										        		  window.location.href="login.html";
										        	  });
										         }else{
										        	 var alertPopup = $ionicPopup.alert({
										        		  title: '错误信息',
										        		  template: errmsg,
										        		  okText: '确认',
										        		  okType: 'button-calm',
										        	  });
										       }
										    },
										    beforeSend:function(xhr,request) {
										    	var userInfo = $localstorage.getObject("userInfo");
												userInfo = userInfo?userInfo:{};
												var token = $localstorage.get("token");
												token = token?token:"";
												xhr.setRequestHeader("userId", userInfo.id);
												xhr.setRequestHeader("token", token);
								             
											    /*
												$ionicLoading.show({
												    content: 'Loading',
												    animation: 'fade-in',
												    showBackdrop: true,
												    maxWidth: 200,
												    showDelay: 0
												});
												*/
										  	},
										  	complete:function(xhr) {
										  	}
										});
	
							}
						}
						return ajax;
			})			
			.value('version', '1.0');
