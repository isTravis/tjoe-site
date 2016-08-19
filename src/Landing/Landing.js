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
			this.setState({ featured: data.atoms });
		});
	},

	render: function() {
		return (
			<div className="landing-container">
				<div className="landing-title-wrapper">
					<h1 className="landing-title">The Journal of Open Engineering</h1>						
				</div>

				<div className="landing-subtitle-wrapper">
					<div className="landing-logo-wrapper">
						<img className="landing-logo" src={require('./logo.png')} alt="Logo" />
					</div>
					<div className="landing-description-wrapper">
						<p className="landing-description">A no-fee, open-access, peer-reviewed journal for research, design, and developments in engineering.</p>	
					</div>
				</div>

				<div className="landing-recently-featured">
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
