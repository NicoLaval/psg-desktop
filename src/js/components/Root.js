import React, { Component } from 'react';
import 'babel-polyfill';
import { HashRouter as Router, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Menu from 'js/components/menu';
import PagesRoutes from 'js/components/pages/pages-routes';
import './app.css';

export default class Root extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<Router>
					<div>
						<Menu />
						<Switch>
							<PagesRoutes />
						</Switch>
					</div>
				</Router>
			</MuiThemeProvider>
		);
	}
}
