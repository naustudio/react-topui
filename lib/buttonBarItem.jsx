/** jsx */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({

	displayName: 'ButtonBarItem',

	propTypes:{
		large: React.PropTypes.bool,
		full: React.PropTypes.bool
	},

	getDefaultProps: function(){
		return {
			large: false,
			full: false
		}
	},

	render: function(){

		var classSet = ClassSet({
			'topcoat-button-bar__button': !this.props.large,
			'topcoat-button-bar__button--large': this.props.large,
			'full': this.props.full
		});

		var btn = (
			<button className={classSet} {...this.props}>{this.props.children}</button>
		);

		return (
			<div className="topcoat-button-bar__item">
			{btn}
			</div>
		);
	}
});
