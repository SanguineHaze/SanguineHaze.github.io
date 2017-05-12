var sangApp = angular.module('sangApp', ['ngRoute']);

//this is the router, you set up what happens when, what controller is used, and what partial to load.
sangApp.config(function ($routeProvider){
    $routeProvider
		.when('/',
			{
			    controller: '',
			    templateUrl: 'partials/home.html'
			})
		.when('/View1',
			{
			    controller: 'SimpleController',
			    templateUrl: 'partials/View1.html'
			})
		.when('/NPCGenerator',
			{
			    controller: 'NPCGeneratorController',
			    templateUrl: 'partials/NPCGenerator.html'
			})
		.otherwise({redirectTo:'/'});
})

//simple example code,
.factory('SimpleFactory', function () {
    var factory = {};
    var customers = [
		{ name: 'Maggie', city: 'Bismarck' },
		{ name: 'Jacob', city: 'Mandan' },
		{ name: 'Bo', city: 'Lincoln' }
    ];

    factory.getCustomers = function(){
        return customers;
    };

    return factory;
})
.controller('SimpleController', function ($scope, SimpleFactory) {
    $scope.customers = SimpleFactory.getCustomers();
	$scope.addCustomer = function() {
		$scope.customers.push(
			{name: $scope.newCustomer.name, city: $scope.newCustomer.city}
		);
	};
})
;