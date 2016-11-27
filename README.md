# SlyJS [![NPM version](https://img.shields.io/npm/v/sly-js.svg?style=flat)](https://www.npmjs.com/package/sly-js) [![NPM downloads](https://img.shields.io/npm/dm/sly-js.svg?style=flat)](https://npmjs.org/package/sly-js) [![Build Status](https://img.shields.io/travis/horinlabs/sly-js.svg?style=flat)](https://travis-ci.org/horinlabs/sly-js)

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
		return <div style={s('root')}>
			<button style={s('button.root', 'button.whiteText', 'red')}>The Button</button>
		</div>;
	};
})
```

##Conditional styles

Let's say you want styles to be added only if some condition is true. SlyJS allow you to do it like that:
```
var s = require('./component.style');
var React = require('react');

React.createClass({
	getInitialState: function(){
		return { hovered: false };
	},
	render: function(){
		return <div style={s('root')}>
			<button
				style={s('button.root', {'button.whiteText': this.state.hovered})}
				onMouseOver={() => this.setState({ hovered: true })}
				onMouseOut={() => this.setState({ hovered: false })}>
				The Button
			</button>
		</div>;
	};
})
```
In the example above, the style called `button.whiteText` will be only rendered when the button is hovered.

Awesome, right?
