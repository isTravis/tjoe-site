import React, {PropTypes} from 'react';
import jQuery from 'jquery';

export const Collections = React.createClass({
	propTypes: {
		routeParams: PropTypes.object,
	},
	
	render: function() {
		return (
			<div className="collections-container">
				<h1>Collections</h1>
				<p>Show all collections</p>
			</div>
		);
	}

});

export default Collections;
