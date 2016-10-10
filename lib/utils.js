var utils = {
	getValue: function(obj, index){
		var indices = index.split(/[.]+/);

		return indices.reduce(function(prev, index){
			return prev[index] || {};
		}, obj);
	}
};

module.exports = utils;
