import React, {PropTypes} from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';
import {JOURNAL_SLUG} from '../config';
import Loader from '../Loader/Loader';

export const Collections = React.createClass({
	
	getInitialState() {
		return {
			collections: [],
		};
	},

	componentDidMount() {
		jQuery.getJSON('https://api.pubpub.org/journal/' + JOURNAL_SLUG + '/collections', (data)=> {
			console.log(data);
			this.setState({ collections: data });
		});
	},

	render: function() {

		return (
			<div className="collections-container">
				<h1>Collections</h1>

				{!this.state.collections.length && 
						<Loader />
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
							<Link to={'/collections/' + item._id} className="collection-title" key={'collection-' + index}>
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
