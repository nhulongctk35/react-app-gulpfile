var React = require('react');
var FeedItem = require('./FeedItem.js');

var FeedList = React.createClass({

	render: function() {

		var feedItem = this.props.items.map(function(item, key) {
			return <FeedItem title={item.description} desc={item.description} voteCount={item.voteCount} key={key}/>
		});

		return (
			<ul className="list-group">
				{feedItem}
			</ul>
		);
	}

});

module.exports = FeedList;