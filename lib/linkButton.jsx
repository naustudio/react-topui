/** jsx */
var React = require('react');
var Button = require('./button');

module.exports = React.createClass({

	displayName: 'LinkButton',

	nav: function(){
		window.location.href = this.props.href;
		return false;
	},

	render: function(){
		return (
			<Button onClick={this.nav} {...this.props}>
				{this.props.children}
			</Button>
		);
	}

});
