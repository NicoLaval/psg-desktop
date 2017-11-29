import React from 'react';
import { Route } from 'react-router-dom';
import Page from './page';
import { pages } from 'config/pages';

function PagesRoutes() {
	const p = pages().map(
		({ route, body, type }) =>
			type === 'SubHeader' ? null : (
				<Route
					key={route}
					exact
					path={route}
					component={() => <Page body={body} />}
				/>
			)
	);

	return <div>{p}</div>;
}

export default PagesRoutes;
