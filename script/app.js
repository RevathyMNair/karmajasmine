var app=angular.module("myApp",['ui.bootstrap','pascalprecht.translate']);

app.config(function($translateProvider) {
  $translateProvider.translations('en', {
    heading: 'My ToDo Application',
    add: 'ADD',
    taskid:"TaskId",
    taskname:'TaskName',
    markcompleted:'Mark Completed',
    remove:'Remove',
    removetask:'Remove Task',
    cancel:'Cancel',
    english:'English',
    korean:'Korean'
  })
  .translations('ko', {
    heading: '내 할 일 응용 프로그램',
    add: '더하다',
    taskid:'업무 ID',
    taskname:'작업 이름',
    markcompleted:'마크 완료',
    remove:'없애다',
    removetask:'작업을 제거',
    cancel:'취소하다',
    english:'영어',
    korean:'한국어'
  });
  $translateProvider.preferredLanguage('en');

});






app.controller("myController",['$scope','$uibModal','fact','$translate',function($scope,$uibModal,fact,$translate){
	$scope.lang1=function(){
		$translate.use($scope.lang);
	};
	
	$scope.id="";
	$scope,name="";
	$scope.idpat=/^[0-9]+$/;
	$scope.namepat=/^[0-9A-z]+$/;
	$scope.taskarr=fact.take1();
	$scope.add1=function(){
		var modalInstance = $uibModal.open({
			templateUrl: '../partials/popup.html',
			controller:"popcontroller",
		});
	};
	$scope.remove=function(id){
		for (var i = 0; i < $scope.taskarr.length; i++) {
			if(id==$scope.taskarr[i].id)
				$scope.taskarr.splice(i,1);
		}
	};
	
}]);
app.controller("popcontroller",['$scope','fact','$uibModalInstance',function($scope,fact,$uibModalInstance){
	$scope.index=parseInt(0);
	$scope.hideTask = function () {
		$uibModalInstance.dismiss('cancel');
	}; 
	$scope.addme=function(){
		$scope.taskarr=fact.take1();
		var f=0;
		if($scope.id&&$scope.name){
			for (var i = 0; i < $scope.taskarr.length; i++) {
				if($scope.id==$scope.taskarr[i].id)
				f=1;
			}
			if(f==0){
				$scope.index=$scope.index+1;
				fact.insert1($scope.id,$scope.name);
			}
			else{
				alert("Already registered task");
			}
		}else{

			alert("Enter valid data");
		}
		$scope.hideTask();
	};

	$scope.cancel=function(){
		alert("cancelled");
		$scope.hideTask();
	};

}]);