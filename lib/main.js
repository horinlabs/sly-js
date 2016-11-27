var get = require('get-value');

/**
* A very simple javascript library to work with inline styles in ReactJs.
*
* @author Danilo Oliveira
* @param {Object} style - the Object containing all the inline styles.
* @returns {Object}
*/
module.exports = function(style){
	return function(){
		var styleNames = Array.prototype.slice.call(arguments);

		return styleNames.reduce(function(prev, name){
			if(name){
				var styles = null;

				if(typeof name === 'string' || name instanceof String){
					styles = get(style, name);
				} else { //assuming name as an object
					styles = Object.keys(name).reduce((prev, curr) => {
						if(name[curr]){
							Object.assign(prev, get(style, curr));
						}

						return prev;
					}, {});
				}

				Object.assign(prev, styles);
			}

			return prev;
		}, {});
	};
};
