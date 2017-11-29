import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import MenuItems from './menu-items';
import { pages } from 'config/pages';

class AppMenu extends Component {
	constructor() {
		super();
		this.state = { open: false, goHome: false };

		this.handleToggle = () => this.setState({ open: !this.state.open });
		this.handleMenuItem = route => {
			this.setState({ open: false });
		};
		this.handleHome = () => {
			//TODO redirect to home
		};
	}

	render() {
		const menuItems = pages().map(({ route, menu, title, type }) => {
			if (type === 'SubHeader')
				return (
					<div key={title}>
						<Divider />
						<Subheader>{title}</Subheader>
					</div>
				);
			else if (menu === true) {
				return (
					<MenuItems
						key={route}
						route={route}
						title={title}
						close={this.handleMenuItem}
					/>
				);
			} else return null;
		});

		return (
			<div>
				<AppBar
					title={
						<Link to="/" className="no-decoration">
							<span style={{ color: '#FFFFFF' }}>PoC Survey Generator</span>
						</Link>
					}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonTouchTap={this.handleToggle}
					onTitleTouchTap={this.handleHome}
					style={{ backgroundColor: '#ee3467' }}
				/>
				<Drawer
					ref="leftNav"
					docked={false}
					open={this.state.open}
					onRequestChange={this.handleToggle}
				>
					{menuItems}
				</Drawer>
			</div>
		);
	}
}

export default AppMenu;
