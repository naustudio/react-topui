/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'ListHeader',

	render: function(){
		return (
			<h3 className='topcoat-list__header' {...this.props}>
				{this.props.children}
			</h3>
		);
	}

});
