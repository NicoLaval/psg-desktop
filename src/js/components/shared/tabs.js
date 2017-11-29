import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';

function TabsPSG({ tabs }) {
	const style = {
		backgroundColor: '#ee3467',
		fontWeight: 'bold',
		color: '#FFFFFF',
		selectedBackgroundColor: '#FFFFFF',
	};
	const tabElements = tabs.map(({ label, content }) => (
		<Tab key={label} label={label} style={style}>
			{content}
		</Tab>
	));
	return (
		<Tabs inkBarStyle={{ background: 'blue', marginBottom: '40px' }}>
			{tabElements}
		</Tabs>
	);
}

TabsPSG.propTypes = {
	tabs: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array]).isRequired,
		})
	).isRequired,
};

export default TabsPSG;
