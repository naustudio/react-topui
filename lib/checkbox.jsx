/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'Checkbox',

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
			<input {...this.props} type="checkbox" className='topcoat-checkbox__checkmark' />
		);

		return (
			<label className="topcoat-checkbox">
  			{checkbox}
  			<div className="topcoat-checkbox__checkmark"></div>
  				<span> {this.props.label}</span>
			</label>
		);
	}

});
