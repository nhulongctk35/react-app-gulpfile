var React = require('react');

var FeedItem = React.createClass({

	render: function() {
		return (
			<li className="list-group-item">
				<span className="badge">{this.props.voteCount}</span>
				<h2>{this.props.title}</h2>
				<span>{this.props.desc}</span>
				<span className="pull-right">
					<button id="up" className="btn btn-primary">&uarr;</button>
					<button id="down" className="btn btn-primary">&darr;</button>
				</span>
			</li>
		);
	}

});

module.exports = FeedItem;