import React from 'react';
import jQuery from 'jquery';

export const Landing = React.createClass({
	
	render: function() {
		return (
			<div className="landing-container">
				<h1>My Journal</h1>
			</div>
		);
	}

});

// jQuery.getJSON("https://afternoon-atoll-31464.herokuapp.com/projects", function(data) {
//   console.log(data);

//   component.setState({
//     projects: data.projects
//   });
// });

export default Landing;
