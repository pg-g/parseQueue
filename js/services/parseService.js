var app = angular.module('parseQ');

app.service('parseService', function($http, $q){
	this.postQ = function(question){
		return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/appQuestions',
			data: {questionText: question, status: 'red'}
		})
	};

	var defer = $q.defer();

	this.getQ = function(){
		$http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/appQuestions'
		}).then(function(res){
			defer.resolve(res.data.results);
		});
		return defer.promise;
	};

	this.updateData = function(object){
		$http({
			method: 'PUT',
			url: 'https://api.parse.com/1/classes/appQuestions/' + object.objectId,
			data: object
		}).then(function(res){
			defer.resolve(res.data.results);
		});
		return defer.promise;
	};

	this.deleteQ = function(object){
		$http({
			method: 'DELETE',
			url: 'https://api.parse.com/1/classes/appQuestions/' + object.objectId,
			data: object
		})
	};

});