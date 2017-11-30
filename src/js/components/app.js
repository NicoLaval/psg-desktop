import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from 'js/components/shared/tabs';
import Table from 'js/components/shared/table';
import { readFile } from 'js/utils/fs';
import { todos, surveys } from 'config/paths';
import './app.css';

function App() {
	const todoss = readFile(todos);
	const surveyss = readFile(surveys);
	const surveyToInvestigate = todoss.reduce((_, e) => {
		_.push(e.idSurvey);
		return _;
	}, []);
	const surveyList = surveyss
		.filter(s => surveyToInvestigate.includes(s.id))
		.map(({ id, label }) => (
			<h2 key={id}>
				<Link to={`/survey/${id}`}>{label}</Link>
			</h2>
		));
	const todoSurvey =
		todoss.length === 0 ? (
			<h1 className="centered">Well done !</h1>
		) : (
			<div className="surveys">{surveyList}</div>
		);
	const todoAdress =
		todoss.length === 0 ? (
			<h1 className="centered">Well done !</h1>
		) : (
			<Table todos={todoss} surveys={surveyss} />
		);
	const tabs = [
		{ label: 'Enquêtes', content: todoSurvey },
		{ label: 'Fiches adresses', content: todoAdress },
	];
	return <Tabs tabs={tabs} />;
}

export default App;
