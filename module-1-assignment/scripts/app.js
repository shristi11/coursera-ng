(function(){
	var app = angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController)
	.$inject = ['$scope'];
	function LunchCheckController($scope){

		$scope.foods = '';
		$scope.msg = '';
		$scope.class = '';
		$scope.check = function(){

			// Converting the string ($scope.foods) to an array ($scope.foodArray);
			$scope.foodArray = $scope.foods.split(/\s*,\s*/);

			// I do NOT consider an empty item, i.e.  ,,  or , , as an item towards to the count.

			// Creating remove method on Array object..   Got it from here : http://stackoverflow.com/a/9815010/5856237
			Array.prototype.remove = function(from, to) {
			  var rest = this.slice((to || from) + 1 || this.length);
			  this.length = from < 0 ? this.length + from : from;
			  return this.push.apply(this, rest);
			};
			// Removing empty items.
			for(var i=0; i < $scope.foodArray.length; i++ ){
				var item = $scope.foodArray[i];
				if (item === '' || item === ',,'){
					$scope.foodArray.remove(i);
				}
			}
			//console.log($scope.foodArray);

			// adjusting the messages and styling them.
			if ($scope.foods == ''){
			 	$scope.msg = 'Please enter data first'
			 	$scope.class = 'red';

			 } else if ($scope.foodArray.length <= 3){
				$scope.msg = "Enjoy";
				$scope.class = 'green';

			} else {
				$scope.msg = "Too much";
				$scope.class = 'green';
			}
		};
	};
})();