var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService){
	$scope.test = 'Testing!';

	var getParseData = function(){
		parseService.getQ().then(function(questions){
			$scope.questions = questions;
			// console.log(questions);
		})
	};
	
	getParseData();

	$scope.postData = function(){
		parseService.postQ($scope.question).then(function(questions){
			// console.log(questions);
			$scope.question = '';
			getParseData();
		});
	};


	$scope.changeStatus = function(question){
		question.status = 'yellow';
		parseService.updateData(question).then(function(){
			getParseData();
		});
	};

	$scope.deleteQ = function(question){
		parseService.deleteQ(question).then(function(question){
			getParseData();
		});
	};

});