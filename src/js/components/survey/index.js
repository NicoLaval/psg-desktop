import React from 'react';
import Table from 'js/components/shared/table';
import Button from 'js/components/shared/button';
import PropTypes from 'prop-types';
import { readFile } from 'js/utils/fs';
import { todos, surveys } from 'config/paths';

function Survey({ id, label }) {
	const survey = readFile(surveys).filter(s => s.id === id);
	const todoSurvey = readFile(todos).filter(t => t.idSurvey === id);

	return (
		<div>
			<Button route="/" />
			<Table todos={todoSurvey} surveys={survey} />
		</div>
	);
}

Survey.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};
export default Survey;
