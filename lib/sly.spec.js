var expect = require('chai').expect;

var Sly = require('./main');

describe('Sly', function(){
	it('should return the styles described by the names as params', function(){
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

	it('should return the styles described by dot notations strings as params', function(){
		var s = Sly({
			root: {
				margin: 0
			},
			button: {
				root: {
					border: '1px solid grey'
				},
				whiteText: {
					color: 'white'
				}
			},
			red: {
				backgroundColor: 'red'
			}
		});

		expect(s('button.root', 'button.whiteText', 'red')).to.deep.equal({
			border: '1px solid grey',
			color: 'white',
			backgroundColor: 'red'
		});
	});

	it('should accept objects and merge it with default style', function() {
		var s = Sly({
			button: {
				root: {
					border: '1px solid grey'
				},
				whiteText: {
					color: 'white'
				}
			},
			red: {
				backgroundColor: 'red'
			}
		});

		var other = {
			margin: 0
		};

		expect(s('button.root', 'red', other)).to.deep.equal({
			border: '1px solid grey',
			backgroundColor: 'red',
			margin: 0
		});
	});
});
