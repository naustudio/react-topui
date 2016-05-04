/** jsx */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({

	displayName: 'IconButton',

	propTypes:{
		quiet: React.PropTypes.bool,
		large: React.PropTypes.bool,
		full: React.PropTypes.bool
	},

	getDefaultProps: function(){
		return {
			quiet: false,
			large: false,
			full: false
		};
	},

	render: function(){

		var classSet = ClassSet({
			'topcoat-button': !this.props.large && !this.props.cta && !this.props.quiet,
			'topcoat-button--quiet': this.props.quiet && !this.props.large,
			'topcoat-button--large': this.props.large && !this.props.cta && !this.props.quiet,
			'topcoat-button--large--quiet': this.props.quiet && this.props.large,
			'full': this.props.full
		});


		return (
			<button className={classSet} {...this.props}>
				{this.props.children}
			</button>
		);
	}
});
