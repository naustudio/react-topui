/** jsx */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({

	displayName: 'TabBarItem',

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
			'topcoat-tab-bar__button': true,
			'full': this.props.full
		});

		var button = (<button className={classSet} {...this.props}>{this.props.children}</button>);
		return (
			<label className="topcoat-tab-bar__item">
    			<input type="radio" name={this.props.name} />
    			{button}
  			</label>
		);
	}

});
