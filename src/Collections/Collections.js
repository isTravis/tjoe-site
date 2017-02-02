import React, {PropTypes} from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import {JOURNAL_SLUG} from '../config';
import Loader from '../Loader/Loader';

export const Collections = React.createClass({
	
	getInitialState() {
		return {
			collections: [],
			requestComplete: false
		};
	},

	componentDidMount() {
		jQuery.getJSON('http://v1.api.pubpub.org/journal/' + JOURNAL_SLUG + '/collections', (data)=> {
			this.setState({ 
				collections: data.collections,
				requestComplete: true 
			});
		});
	},

	render: function() {

		return (
			<div className="collections-container">
				<h1>Collections</h1>

				{!this.state.requestComplete &&
					<Loader />
				}

				{this.state.requestComplete && !this.state.collections.length && 
					<h2>No Collections Found</h2>
				}

				{!!this.state.collections.length && 
					this.state.collections.sort((foo, bar)=>{
						// Sort so that collection titles are alphabetical
						if (foo.title > bar.title) { return 1; }
						if (foo.title < bar.title) { return -1; }
						return 0;
					})
					.slice(0,10)
					.map((item, index)=> {
						return (
							<Link to={'/collections/' + item.collectionID} className="collection-title" key={'collection-' + index}>
								<h2>{item.title}</h2>
							</Link>
						);
					})
				}
			</div>
		);
	}

});

export default Collections;
