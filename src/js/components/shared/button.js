import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

function Button({ route }) {
	const style = {
		marginBottom: '20px',
		fontWeight: 'bold',
		labelColor: '#FFFFFF',
		width: '100%',
		padding: 0,
	};
	const returnButton = (
		<Link to={route} className="mui-col-md-2">
			<RaisedButton label="Retour" style={style} className="mui-col-md-12" />
		</Link>
	);

	return <div className="mui-row">{returnButton}</div>;
}

Button.propTypes = {
	route: PropTypes.string.isRequired,
};

export default Button;
