import React from 'react';
import PropTypes from 'prop-types';
import { readFile } from 'js/utils/fs';
import { pollster } from 'config/paths';

function Page({ body }) {
	const { name, firstName } = readFile(pollster);
	return (
		<div className="mui-container">
			<div className="mui-row">
				<div className="mui-col-md-12 pollster">
					Enquêteur : {firstName} {name}
				</div>
			</div>
			{body && <div className="mui-row">{body}</div>}
		</div>
	);
}

Page.propTypes = {
	body: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Page;
