import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './components/app';
import Articles from './components/articles';
import NewArticle from './components/newarticle';

export default(
	<Route path="/" component={App}>
		<IndexRoute component={Articles} />
		<Route path="NewArticle" component={NewArticle}/>
	</Route>
);