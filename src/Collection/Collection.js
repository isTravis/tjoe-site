import React, {PropTypes} from 'react';
import jQuery from 'jquery';

import { Link } from 'react-router';
import {JOURNAL_SLUG} from '../config';
import Loader from '../Loader/Loader';

export const Collection = React.createClass({
	propTypes: {
		routeParams: PropTypes.object,
	},

	getInitialState() {
		return {
			collectionItems: [],
			requestError: false,
		};
	},
	
	componentDidMount() {
		jQuery.getJSON('https://api.pubpub.org/journal/' + JOURNAL_SLUG + '/collection/' + this.props.routeParams.collectionID)
		.done((data)=> {
			console.log(data);
			this.setState({ collectionItems: data });
		})
		.fail((a, b, c)=> {
			this.setState({requestError: true});
		});
	},

	render: function() {
		return (
			<div className="collection-container">
				{!!this.state.requestError && 
					<h1>Collection Not Found</h1>
				}

				{!this.state.requestError && !this.state.collectionItems.length && 
					<div>
						<h1>Loading Collection</h1>
						<Loader />
					</div>
				}
				
				{!!this.state.collectionItems.length && 
					<div>
						<h1>Collection Title Here</h1>

						{this.state.collectionItems.sort((foo, bar)=>{
							// Sort so that most recent is first in array
							if (foo.featureDate > bar.featureDate) { return -1; }
							if (foo.featureDate < bar.featureDate) { return 1; }
							return 0;
						})
						.map((item, index)=> {
							return (
								<div key={'recent-' + index} className="article-container">
									<Link to={'/article/' + item.slug}><img className="article-image" src={item.previewImage} /></Link>
									<Link to={'/article/' + item.slug} className="article-title">{item.title}</Link>
									<div className="article-description">{item.description}</div>
								</div>
							);
						})}
					</div>
				}

			</div>
		);
	}

});

export default Collection;
