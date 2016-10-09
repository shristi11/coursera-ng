// Code goes here
(function() {

	var app = angular.module('ShoppingListCheckOff', []);
	app.controller('ToBuyController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {

		$scope.items = ShoppingListCheckOffService.toBuy;
		
		$scope.bought = function(index) {
			ShoppingListCheckOffService.boughtFunction(index);
			$scope.buyListStatus = ($scope.items.length === 0)? true: false;
		};
	
	}]);

	app.controller('AlreadyBoughtController', ['$scope', 'ShoppingListCheckOffService', function($scope, ShoppingListCheckOffService) {
		$scope.items = ShoppingListCheckOffService.bought;
		
		$scope.$watch('items.length',function(){
			$scope.boughtListStatus = ($scope.items.length === 0)? true : false;
		})
		
	}]);

	app.service('ShoppingListCheckOffService', function() {
    
		this.toBuy = [{
		  itemName: 'apple',
		  quantity: '02'
		}, {
		  itemName: 'orange',
		  quantity: '01'
		}, {
		  itemName: 'cherry',
		  quantity: '10'
		}, {
		  itemName: 'figs',
		  quantity: '05'
		}, {
		  itemName: 'dates',
		  quantity: '07'
		}];
		
		this.bought = [];
		
		this.boughtFunction = function(index) {
		var boughtArray = this.toBuy.splice(index, 1);
		this.bought.push(boughtArray[0]);
	  };
	  
	});

})();