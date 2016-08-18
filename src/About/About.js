import React from 'react';

export const About = React.createClass({
	
	render: function() {
		return (
			<div className="about-container">
				<h1>About</h1>
				<p>Here we describe what our journal is about!</p>
				<p>We could put admin lists, peer review policies, etc</p>
			</div>
		);
	}

});

export default About;
