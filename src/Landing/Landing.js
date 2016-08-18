import React from 'react';
import jQuery from 'jquery';
import './style.scss';

export const Landing = React.createClass({
	
	render: function() {
		return (
			<div className="landing-container">
				<div className="landing-header">
					<h1 className="landing-title">My Journal</h1>	
					<p className="landing-description">This journal is all about doing these sorts of things.</p>	
				</div>
				
				<div>
					<h2>Here is more content</h2>	
					<p>In this space, we can put whatever we like!</p>
					
				</div>
				

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
