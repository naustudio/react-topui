/** jsx */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({

	displayName: 'NavBarItem',

	propTypes:{
		quarter: React.PropTypes.bool,
		half: React.PropTypes.bool,
		left: React.PropTypes.bool,
		right: React.PropTypes.bool,
		center: React.PropTypes.bool
	},

	getDefaultProps: function(){
		return {
			quarter: false,
			half: false,
			left: false,
			right: false,
			center: false
		};
	},

	render: function(){

		var classSet = ClassSet({
			'topcoat-navigation-bar__item': true,
			'quarter': this.props.quarter,
			'half': this.props.half,
			'left': this.props.left,
			'right': this.props.right,
			'center': this.props.center
		});

		return (
			<div className={classSet} {...this.props}>
			{this.props.children}
			</div>
		);
	}
});
