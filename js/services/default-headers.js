var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function(){
	return {
		request: function(config){
			config.headers = {'X-Parse-Application-Id': 'opgBXA88ugn5I8o1taDGJQSB6uKez1NZCzySYxRL', 'X-Parse-REST-API-Key': 'I8m51NhpGDnNfustB5zkK0LXPSP6qhfxpoZAzRQF'};
            return config;
		}
	}
});