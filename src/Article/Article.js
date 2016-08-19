import React, {PropTypes} from 'react';
import jQuery from 'jquery';

import { Link } from 'react-router';
import {JOURNAL_SLUG} from '../config';
import Loader from '../Loader/Loader';

import './style.scss';

export const Article = React.createClass({
	propTypes: {
		routeParams: PropTypes.object,
	},

	render: function() {
		return (
			<div className="article-iframe-container">

				<iframe className="article-iframe" src={'https://www.pubpub.org/pub/' + this.props.routeParams.pubSlug + '?embed=true'}/>

			</div>
		);
	}

});

export default Article;
