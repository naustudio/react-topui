/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'ListItem',

	render: function(){
		return (
			<li className='topcoat-list__item' {...this.props}>
				{this.props.children}
			</li>
		);
	}

});
