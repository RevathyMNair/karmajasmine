describe('popcontroller', function() {
	beforeEach(module('myApp'));
	var $controller;
	beforeEach(inject(function(_$controller_){
    	$controller = _$controller_;
  	}));

		describe('$scope.add', function() {
	    	it('values added or not', function() {
	    		var modalInstance;
	    		 modalInstance = {                    // Create a mock object using spies
        		close: jasmine.createSpy('modalInstance.close'),
        		dismiss: jasmine.createSpy('modalInstance.dismiss'),
        		result: {
          		then: jasmine.createSpy('modalInstance.result.then')
        		}
      		};  
	      	var $scope = {};
	      	var controller = $controller('popcontroller', { $scope: $scope, $uibModalInstance:modalInstance});
	      	$scope.id = '234';
	      	$scope.name='abcds';
	      	$scope.addme();
	      	expect($scope.taskarr).toEqual(jasmine.objectContaining([Object({id: '234',name:'abcds'})]));
	    });
	});
});
describe('myController', function() {
	beforeEach(module('myApp'));
  	var $controller;

  	beforeEach(inject(function(_$controller_){
    	$controller = _$controller_;
 	}));
    	describe('$scope.add', function() {
    		it('values remove or not', function() {
      		var $scope = {};
      		var controller = $controller('myController', { $scope: $scope});
      		$scope.taskarr=[{id:'234',name:'abcds'}];
      		$scope.remove('234');
      		console.log($scope.taskarr);
      		expect($scope.taskarr).not.toEqual(jasmine.objectContaining([Object({id: '234',name:'abcds'})]));
    	});
	});
});