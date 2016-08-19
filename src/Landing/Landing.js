import React from 'react';
import { Link } from 'react-router';
import jQuery from 'jquery';
import {JOURNAL_SLUG} from '../config';
import Loader from '../Loader/Loader';

import './style.scss';

export const Landing = React.createClass({
	getInitialState() {
		return {
			featured: [],
		};
	},

	componentDidMount() {
		jQuery.getJSON('https://api.pubpub.org/journal/' + JOURNAL_SLUG + '/featured', (data)=> {
			console.log(data);
			this.setState({ featured: data.atoms });
		});
	},

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

				<div>
					<h2>Recently Featured</h2>	
					{!this.state.featured.length && 
						<Loader />
					}

					{!!this.state.featured.length && 
						this.state.featured.sort((foo, bar)=>{
							// Sort so that most recent is first in array
							if (foo.createDate > bar.createDate) { return -1; }
							if (foo.createDate < bar.createDate) { return 1; }
							return 0;
						})
						.slice(0,10)
						.map((item, index)=> {
							return (
								<div key={'recent-' + index} className="article-container">
									<Link to={'/article/' + item.slug}><img className="article-image" src={item.previewImage} /></Link>
									<Link to={'/article/' + item.slug} className="article-title">{item.title}</Link>
									<div className="article-description">{item.description}</div>
								</div>
							);
						})
					}

					
				</div>
				

			</div>
		);
	}

});



export default Landing;
