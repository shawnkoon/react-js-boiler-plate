import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

export const HomeJumbotron = (props) => (
	<Jumbotron>
		<h1 className="display-3">{props.pageHeader}</h1>
		<p className="lead">
			She travelling acceptance men unpleasant her especially entreaties law. Law forth but end any arise chief arose. Old her say learn these large. Joy fond many ham high seen this. Few preferred continual sir led incommode neglected. Discovered too old insensible collecting unpleasant but invitation. 
		</p>
		<hr className="my-2" />
		<p>
			Had strictly mrs handsome mistaken cheerful. We it so if resolution invitation remarkably unpleasant conviction.
		</p>
		<p className="lead">
			<Button color="primary">Learn More</Button>
		</p>
	</Jumbotron>
);