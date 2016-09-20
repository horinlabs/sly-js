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

		return styleNames.reduce((prev, name) => {
			Object.assign(prev, style[name]);

			return prev;
		}, {});
	};
};
