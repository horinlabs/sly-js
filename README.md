# SlyJS

A  very simple library to work with inline styles in ReactJs.

### Example

In your .style.js file:
```
var Sly = require('sly-js');

module.exports = Sly({
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
```

and in your component file:
```
var s = require('./component.style');
var React = require('react');

React.createClass({
	render: function(){
		return <div>
			<button style={s('button', 'red')}>The Button</button>
		</div>
	}
})
```

Now the button inside your component will have a grey border and a red background color :)
