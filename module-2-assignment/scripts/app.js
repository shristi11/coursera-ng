// Code goes here
(function() {

	var app = angular.module('ShoppingListCheckOff', []);
	app.controller('ToBuyController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {

		this.items = ShoppingListCheckOffService.toBuy;
		// When bought button is clicked.
		this.bought = function(index) {
			ShoppingListCheckOffService.boughtFunction(index);
			//this.buyListStatus = (this.items.length === 0)? true: false;
		};
	
	}]);

	app.controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function(ShoppingListCheckOffService) {
		this.items = ShoppingListCheckOffService.bought;
		// Watching the length of bought items array.
		/* this.$watch('items.length',function(){
			this.boughtListStatus = (this.items.length === 0)? true : false;
		}) */
		
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