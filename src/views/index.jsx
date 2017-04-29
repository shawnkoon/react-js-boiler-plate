import React from 'react';

import { connect } from 'react-redux';
import { 
	BrowserRouter,
	Link,
	Route,
	Switch,
} from 'react-router-dom';

import { Error404Page } from './error';
import { HomeJumbotron } from './home/components/Home';

export class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			something: 'I can be anything.',
		}
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<ul className="List-items">
						<li style={{ fontSize: `30px` }}><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/topics">Topics</Link></li>
					</ul>

					<hr/>
					<Switch>
						<Route exact path="/" component={() => <HomeJumbotron pageHeader="This is Home"/>}/>
						<Route path="/" component={Error404Page}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => (
	{
		...state,
	}
);

export const App = connect(mapStateToProps)(AppContainer);