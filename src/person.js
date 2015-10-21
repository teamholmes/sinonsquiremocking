define([], function() {


	var api = {};

	api.isMale = function(name){
		var maleNames = ['alex','mark','kyle','harris','ewan'];
		if (maleNames.indexOf(name.toLowerCase()) > -1) return true;
		return false;
	};

	api.isMaleSpy = function(name){
		var maleNames = ['alex','mark','kyle','harris','ewan'];
		if (maleNames.indexOf(name.toLowerCase()) > -1) return true;
		return false;
	};

	
	return api;
});