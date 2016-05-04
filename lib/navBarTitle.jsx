/** jsx */
var React = require('react');

module.exports = React.createClass({

	displayName: 'NavBarTitle',

	propTypes:{
		title: React.PropTypes.string
	},

	getDefaultProps: function(){
		return {
			title: null
		};
	},

	render: function(){
		var title = this.props.title || this.props.children;
		return (
      <h1 className="topcoat-navigation-bar__title" style={{textAlign: 'center'}} {...this.props}>
        {title}
      </h1>
		);
	}
});
