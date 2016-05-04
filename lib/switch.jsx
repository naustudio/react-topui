/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'Switch',

	propTypes:{
		label: React.PropTypes.string
	},

	getDefaultProps: function(){
		return {
			label: null
		};
	},

	render: function(){

		var checkbox = (
			<input type="checkbox" className="topcoat-switch__input" {...this.props} />
		);

		return (
			<label className="topcoat-switch">
				{checkbox}
				<div className="topcoat-switch__toggle"></div>
			</label>
			);
	}
});
