var React = require('react');
var ReactDom = require('react-dom');
var Feed = require('./components/Feed.js');

var App = React.createClass({

	render: function() {
		return (
			<Feed />
		);
	}

});

ReactDom.render(<App />, document.getElementById('app'));

