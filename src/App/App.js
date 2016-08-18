import React from 'react';
import './style.scss';
import AppNav from '../AppNav/AppNav';

export const App = React.createClass({

	render: function() {
		return (
			<div className="container">
				<AppNav />
				{this.props.children}
			</div>
		);
	}
});

export default App;
