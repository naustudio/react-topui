/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'NavBar',

	render: function(){
		var cls = 'topcoat-navigation-bar';
		return (
			<div className={cls} {...this.props}>
			{this.props.children}
			</div>
		);
	}

});
