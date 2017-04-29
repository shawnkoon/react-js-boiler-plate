import React from 'react';

import { ErrorPage } from './components/ErrorPage';

export const Error404Page = () => (
	<ErrorPage errorTtitle="404 Page Not Found...">
		<p>Unfortunately the page you are looking for does not exists.</p>
		<div>
			Please try again later.
		</div>
	</ErrorPage>
);