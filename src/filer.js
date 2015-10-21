define(['./person'], function(pers) {


	var api = {};

	api.reversal = function(input){
		return input.split('').reverse().join('');
	};

	api.uppercase = function(input){
		return -1;
	};

	api.isBoy = function(name){
		return pers.isMale(name);
	}

	api.isBoySpy = function(name){
		return pers.isMaleSpy(name);
	}
	
	return api;
});