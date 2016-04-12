var React = require('react');

var FeedForm = React.createClass({

	render: function() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input type="text"  className="form-control" id="title" placeholder="Title"/>
				</div>
				<div className="form-group">
					<label htmlFor="des">Description</label>
					<input type="text" className="form-control" id="des" placeholder="Description" />
				</div>
				<button className="btn btn-primary" type="submit">Add</button>
			</form>
		);
	}

});

module.exports = FeedForm;