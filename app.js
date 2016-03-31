angular.module('myApp', [])
// Creating a filter for titlecase
.filter('titlecase', function() {
    return function(name) {
        name = ( name === undefined || name === null ) ? '' : name;
            return name.toString().toLowerCase().replace( /\b([a-z])/g, function(change) {
                return change.toUpperCase();
            });
    };
})//Create a Filter
  .filter('reverseText', function(){
    return function (input){
        var result = "";
        input = "" || input;
        for (var i =0;i < input.length; i++)
            {
                result = input.charAt(i) + result;
            }
        return result;
    };
})
.controller('myController', ['$scope',function myController($scope) {
	$scope.messages = [
        
        {Employee: 'garry leopard',
		hours: 25.11,
		totalPay:850.12,
		paydate: '2014-12-03'},
        
		{Employee: 'magnus cheezle',
		hours: 4.2,
		totalPay:150,
		paydate: '2014-12-10'},
				
		{Employee: 'jane doe',
		hours: 14.31,
		totalPay:350.01,
		paydate: '2014-12-25'}
        
	];
}]);