/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'ListContainer',

	render: function(){
		return (
			<ul className='topcoat-list__container' {...this.props}>
				{this.props.children}
			</ul>
		);
	}

});
