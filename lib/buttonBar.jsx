/** jsx */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({

	displayName: 'ButtonBar',

	propTypes:{
		full: React.PropTypes.bool
	},

	getDefaultProps: function(){
		return {
			full: false
		};
	},

	render: function(){

		var classSet = ClassSet({
			'topcoat-button-bar': true,
			'full': this.props.full
		});

		return (
			<div className={classSet} {...this.props}>
			{this.props.children}
			</div>
		);
	}
});
