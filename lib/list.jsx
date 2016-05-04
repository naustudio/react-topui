/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'List',

	render: function(){
		return (
			<div className='topcoat-list' {...this.props}>
				{this.props.children}
			</div>
		);
	}

});
