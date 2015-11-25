define(function() {
	var helpers = {};

	helpers.capitalize = function(string) {
		return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	};

	return helpers;
});