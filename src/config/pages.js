import React from 'react';
import App from 'js/components/app';
import Survey from 'js/components/survey';
import SurveyEdition from 'js/components/survey/edition';
import { readFile } from 'js/utils/fs';
import { todos, surveys } from 'config/paths';

export const pages = () => {
	const todo = readFile(todos);

	const home = { route: '/', menu: true, title: 'Home', body: <App /> };
	const subHeaderSurvey = { type: 'SubHeader', title: 'Enquêtes' };

	const surveyToInvestigate = todo.reduce((_, e) => {
		_.push(e.idSurvey);
		return _;
	}, []);
	const surveyPages = readFile(surveys)
		.filter(s => surveyToInvestigate.includes(s.id))
		.map(({ id, label }) => {
			return {
				route: `/survey/${id}`,
				menu: true,
				title: label,
				body: <Survey id={id} label={label} />,
			};
		});
	const surveyEditionPages = todo.map(({ id, idSurvey }) => {
		return {
			route: `/survey/${idSurvey}/${id}`,
			body: <SurveyEdition id={id} idSurvey={idSurvey} />,
		};
	});

	return [home]
		.concat(subHeaderSurvey)
		.concat(surveyPages)
		.concat(surveyEditionPages);
};
