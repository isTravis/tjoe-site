import React, {PropTypes} from 'react';
import jQuery from 'jquery';

export const Collection = React.createClass({
	propTypes: {
		routeParams: PropTypes.object,
	},
	
	render: function() {
		return (
			<div className="collection-container">
				<h1>Collection</h1>
				<p>{this.props.routeParams.collectionID}</p>
			</div>
		);
	}

});

export default Collection;
