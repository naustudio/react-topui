/** jsx */
var React = require('react');
var ClassSet = require('./classSet');

module.exports = React.createClass({

	displayName: 'Range',

	render: function(){

		var classSet = ClassSet({
			'topcoat-range': true
		});

		return (
			<input type="range" className={classSet} {...this.props} />
		);
	}

});
