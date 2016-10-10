# SlyJS

A  very simple library to work with inline styles in ReactJS.

### Example

Use SlyJS is a very simple task. Let's say you have the given directory:

```
.
+-- index.jsx
+-- component
|   +-- component.style.js
|   +-- index.jsx
```

So your component.style.js file would have something like that:
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

and we're ready to use our styles! In your component file you can call the styles and pass as many keys as you want!

In the example above, we'd call the styles like that:
```
var s = require('./component.style');
var React = require('react');

React.createClass({
	render: function(){
		return <div>
			<button style={s('button', 'red')}>The Button</button>
		</div>;
	}
});
```

Now the button inside your component will have a grey border and a red background color :)

### Working with children styles

Let's say you want to namespace your styles. With SlyJS you can! A style like that:
```
var Sly = require('sly-js');

module.exports = Sly({
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
```

Could be easily used like that:
```
var s = require('./component.style');
var React = require('react');

React.createClass({
	render: function(){
		return <div>
			<button style={s('button.root', 'button.whiteText', 'red')}>The Button</button>
		</div>;
	};
})
```

Awesome! But what if I need to add an external object style? It's very possible too!
```
var s = require('./component.style');
var React = require('react');

React.createClass({
	render: function(){
		return <div style={s('root', this.props.style)}>
			<button style={s('button.root', 'button.whiteText', 'red')}>The Button</button>
		</div>;
	};
})
```
