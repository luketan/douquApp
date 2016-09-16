angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $timeout) {
    $scope.myTitle = 'Template';
    
    $scope.items = ['Item 1', 'Item 2', 'Item 3'];
    
    
    $scope.doRefresh = function() {
        
        console.log('Refreshing!');
        $timeout( function() {
        for(var i=0;i<100;i++){
        	$scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
        }

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
        $scope.$broadcast('scroll.infiniteScrollComplete');
        
        }, 1000);
        
    };
    
});