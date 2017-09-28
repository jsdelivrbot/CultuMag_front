import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './components/app';

import Articles from './components/articles';

export default(
	<Route path="/" component={App}>
		<IndexRoute component={Articles} />
	</Route>
);