var expect = require('chai').expect;

var Sly = require('./main');

describe('Sly', function(){
	it('should return the styles described by the names in params', function(){
		var s = Sly({
			root: {
				margin: 0
			},
			button: {
				border: '1px solid grey'
			},
			red: {
				backgroundColor: 'red'
			}
		});

		expect(s('button', 'red')).to.deep.equal({
			border: '1px solid grey',
			backgroundColor: 'red'
		});
	});
});
