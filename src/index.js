import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App/App';
import About from './About/About';
import BeginDraft from './BeginDraft/BeginDraft';
import EditorialBoard from './EditorialBoard/EditorialBoard';
import HowTo from './HowTo/HowTo';
import Article from './Article/Article';
import Collection from './Collection/Collection';
import Collections from './Collections/Collections';
import Landing from './Landing/Landing';
import PageNotFound from './PageNotFound/PageNotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/about" component={About}/>
      <Route path="/article/:pubSlug" component={Article}/>
      <Route path="/collections" component={Collections}/>
      <Route path="/collections/:collectionID" component={Collection}/>
      <Route path="/editorialboard" component={EditorialBoard}/>
      <Route path="/howto" component={HowTo}/>
      <Route path="/begindraft" component={BeginDraft}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
