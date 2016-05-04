/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'Notification',

	propTypes:{
		value: React.PropTypes.string.isRequired
	},

	getDefaultProps: function(){
		return {
			value: null
		};
	},


	render: function(){
		return (
			<span className="topcoat-notification">
			{this.props.value}
			</span>
		);
	}
});
