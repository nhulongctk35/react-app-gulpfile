var React = require('react');
var ShowAddButton = require('./ShowAddButton.js');
var FeedForm = require('./FeedForm.js');
var FeedList = require('./FeedList.js');

var Feed = React.createClass({

	getInitialState: function() {
		var listData = [
			{
				key: 1,
				title: 'Realtime data',
				description: 'Firebase is cool',
				voteCount: 49
			},
			{
				key: 2,
				title: 'JavaScript is fun',
				description: 'Lexical scoping FTW',
				voteCount: 34
			},
			{
				key: 3,
				title: 'Coffee makes you awake',
				description: 'Drink responsibly',
				voteCount: 15
			}
		];
		return {items: listData };
	},

	render: function() {
		return (
			<div>
				<div className="container">
					<ShowAddButton />
					<br/>
					<FeedForm />
				</div>
				
				<br />
				<br />
				<div className="container">
					<FeedList items={this.state.items} />
				</div>
			</div>
		);
	}

});

module.exports = Feed;