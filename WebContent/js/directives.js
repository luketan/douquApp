'use strict';

/* Directives */
angular.module('ionicApp.directives', []).
  directive('hideTabs', function($rootScope) {
	    return {
	        restrict: 'A',
	        link: function(scope, element, attributes) {
	            scope.$on('$ionicView.beforeEnter', function() {
	                scope.$watch(attributes.hideTabs, function(value){
	                    $rootScope.hideTabs = value;
	                });
	            });

	            scope.$on('$ionicView.beforeLeave', function() {
	                $rootScope.hideTabs = false;
	            });
	        }
	    };
  }).
  //加载完成处理
  directive('onFinishRenderFilters', function($timeout) {
	  	return {
	        restrict: 'A',
	        link: function(scope, element, attr) {
	            if (scope.$last === true) {//已经加载完成
	                $timeout(function() {
	                    //scope.$emit('ngRepeatFinished');
	                	 console.log("....on-finish-render-filters");
	                	
	                });
	            }
	        }
	    };
  })
  //商品详情隐藏标题头
  .directive('headerShrink', function ($document) {//标题隐藏
	  var hideHeadHandle = function(header,num) {
		  	num=1-num;
		  	//console.log('num='+num);
		    ionic.requestAnimationFrame(function () {
		    	header.style.opacity = num<0?0:(num>1)?1:num;
		    	//header.style.filter  = 'alpha(opacity='+(num*100)+')';
		    });
		 };
	
	  return {
	    restrict: 'A',
	    link: function ($scope, $element, $attr) {
	      var starty = $scope.$eval($attr.headerShrink) || 0;
	
	      var headerPos = $document[0].body.querySelector('.hide-goodItem-header-mark');
	      var headerPosHeight = 414;//headerPos.offsetHeight;
	      var header = $document[0].body.querySelector('.goodItem-header');
	      var headerHeight = header.offsetHeight;
	
	      $element.on('scroll', function (e) {
		    	var scrollTop = navigator.userAgent.indexOf('iPhone')>-1?e.detail.scrollTop:e.target.scrollTop;
		    	//console.log("e.detail.scrollTop ="+scrollTop )
		    	//console.log("starty ="+starty );
		    	//console.log("scrollTop="+scrollTop);
		    	//console.log("headerPosHeight-mark="+headerPosHeight);
		    	//console.log(((headerPosHeight-scrollTop)/headerPosHeight).toFixed(2));
		    	if(((headerPosHeight-scrollTop)/headerPosHeight).toFixed(2)>=0){
		    		hideHeadHandle(header,((headerPosHeight-scrollTop)/headerPosHeight).toFixed(2));
		    	}else{
		    		hideHeadHandle(header,0);
		    	}
	      });
	    }
	  };
	})
	//固定头部
	.directive('fixedBar', function ($rootScope,$document,$ionicScrollDelegate) {
		  $rootScope.fixedBarTop=false;
		  return {
		    restrict: 'A',
		    link: function ($scope, $element, $attr) {
		      //当元素形变的时候利用$scope.fixedBarHeight=0从新计算
		      var fixedBarStr=$attr.fixedBar?$attr.fixedBar:'{}';
		      var fixedBarJSON = JSON.parse(fixedBarStr);
		      var fixedBarHeight=fixedBarJSON.length?fixedBarJSON.length:0;
		      var fixedBarHeightAdd=fixedBarJSON.add?fixedBarJSON.add:0;
		      var fixedBarHeightMinus=fixedBarJSON.minus?fixedBarJSON.minus:0;
		      $element.on('scroll', function (e) {
		    	  
		    	    var self = this.querySelector('.fixedBar');
			        var selfFixed = this.parentNode.querySelector('.fixedBarFixed');
			    	var scrollTop = navigator.userAgent.indexOf('iPhone')>-1?e.detail.scrollTop:e.target.scrollTop;
			    	
			    	
			    	if(fixedBarHeight<=0){
			    		fixedBarHeight=self.offsetTop;
			    		fixedBarHeight+=fixedBarHeightAdd;
				    	fixedBarHeight-=fixedBarHeightMinus;
			    	}
			    	if(scrollTop>fixedBarHeight){
			    		$rootScope.fixedBarTop=true;
			    		ionic.requestAnimationFrame(function () {
			    			//var position = $ionicScrollDelegate.getScrollPosition();
			    			
			    			if(selfFixed)
			    				selfFixed.style.display='block';
			    			if(self)
			    				self.style.visibility = 'hidden';
			    			
					    })
			    	}else{
			    		$rootScope.fixedBarTop=false;
			    		ionic.requestAnimationFrame(function () {
			    			
			    			if(self)
			    				self.style.visibility = 'visible';
			    			if(selfFixed)
			    				selfFixed.style.display='none';
					    })
			    	}
		      });
		    }
		  };
	})
	//图片延迟加载
	.directive('lazyContainer', [
	  function(){
	    var uid = 0;
	    function getUid(el){
	        var __uid = el.data("__uid");
	        if (! __uid) {
	            el.data("__uid", (__uid = '' + ++uid));
	        }
	        return __uid;
	    }
	
	    return {
	      restrict: 'EA',
	      controller: ['$scope', '$element', function($scope, $element){
	        var elements = {};
	        function onLoad(){
	          var $el = angular.element(this);
	          var uid = getUid($el);
	
	          $el.css('opacity', 1);
	
	          if(elements.hasOwnProperty(uid)){
	            delete elements[uid];
	          }
	        }
	
	        function isVisible(elem){
	          var containerRect = $element[0].getBoundingClientRect();
	          var elemRect = elem[0].getBoundingClientRect();
	          var xVisible, yVisible;
	          var offset = 50;
	
	          if(elemRect.bottom + offset >= containerRect.top &&
	              elemRect.top - offset <= containerRect.bottom){
	            yVisible = true;
	          }
	
	          if(elemRect.right + offset >= containerRect.left &&
	            elemRect.left - offset <= containerRect.right){
	            xVisible = true;
	          }
	
	          return xVisible&&yVisible;
	        }
	
	        function checkImage(){
	          Object.keys(elements).forEach(function(uid){
	            var obj = elements[uid],
	                iElement = obj.iElement,
	                iScope = obj.iScope;
	            if(isVisible(iElement)){
	                iElement.attr('src', iScope.lazySrc);
	            }
	          });
	        }
	
	        this.addImg = function(iScope, iElement, iAttrs){
	          iElement.bind('load', onLoad);
	          iScope.$watch('lazySrc', function(){
	            var speed = "1s";
	            if (iScope.animateSpeed != null) {
	                speed = iScope.animateSpeed;
	            }
	            if(isVisible(iElement)){
	              if (iScope.animateVisible) {
	                iElement.css({
	                    'background-color': '#fff',
	                    'opacity': 0,
	                    '-webkit-transition': 'opacity ' + speed,
	                    'transition': 'opacity ' + speed
	                });
	              }
	              iElement.attr('src', iScope.lazySrc);
	            }else{
	              function getUid(el){
	          	        var __uid = el.data("__uid");
	          	        if (! __uid) {
	          	            el.data("__uid", (__uid = '' + ++uid));
	          	        }
	          	        return __uid;
	          	  }
	              var uid = getUid(iElement);
	              iElement.css({
	                  'background-color': '#fff',
	                  'opacity': 0,
	                  '-webkit-transition': 'opacity ' + speed,
	                  'transition': 'opacity ' + speed
	              });
	              elements[uid] = {
	                iElement: iElement,
	                iScope: iScope
	              };
	            }
	          });
	          iScope.$on('$destroy', function(){
	              iElement.unbind('load');
	              var uid = getUid(iElement);
	              if(elements.hasOwnProperty(uid)){
	                  delete elements[uid];
	              }
	          });
	        };
	
	        $element.bind('scroll', checkImage);
	        $element.bind('resize', checkImage);
	      }]
	    };
	  }
	])
	.directive('lazySrc', [
	  function(){
	    return {
	      restrict: 'A',
	      require: '^lazyContainer',
	      scope: {
	        lazySrc: '@',
	        animateVisible: '@',
	        animateSpeed: '@'
	      },
	      link: function(iScope, iElement, iAttrs, containerCtrl){
	        containerCtrl.addImg(iScope, iElement, iAttrs);
	      }
	    };
	  }
	])
	.directive("picPreview", [function(){
	    return {
			    restrict: 'A',			    
			    link: function(iScope, iElement, iAttrs, containerCtrl){
			    	 //containerCtrl.addImg(iScope, iElement, iAttrs);
			    }
		    };
		  }]);
	;
