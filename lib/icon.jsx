/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'Icon',

	propTypes:{
		name: React.PropTypes.string.isRequired
	},

	render: function(){
		return (
			<span className='icomatic icon' {...this.props}>
				{this.props.name}
			</span>
		);
	}
});
