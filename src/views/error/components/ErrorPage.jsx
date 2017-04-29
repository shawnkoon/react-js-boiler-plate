import React from 'react';

import {
	Row,
	Col,
} from 'react-bootstrap';

export const ErrorPage = props => (
	<Row className="mb-3 text-center">
		<Col lg="8">
			<h3 className="mb-0">{props.errorTtitle}</h3>
			<hr className="w-100"/>
			{props.children}
		</Col>
	</Row>
);