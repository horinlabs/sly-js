var helpers = {
	index(obj, is, value){
		if (typeof is == 'string'){
			return helpers.index(obj, is.split('.'), value);
		} else if (is.length == 1 && value !== undefined){
			return obj[is[0]] = value;
		} else if (is.length == 0){
			return obj;
		} else{
			obj[is[0]] = obj[is[0]] || {};
			return helpers.index(obj[is[0]], is.slice(1), value);
		}
	}
};

module.exports = helpers;
