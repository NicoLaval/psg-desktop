import { todos, investigated } from 'config/paths';

const electron = window.require('electron');
const fs = electron.remote.require('fs');

const writeFile = (fileName, content) =>
	fs.writeFile(fileName, content, err => {
		if (err) {
			console.log('An error ocurred creating the file ' + err.message);
		}
	});

export const writeData = data => {
	var outputContent = [];
	if (fs.existsSync(investigated)) {
		outputContent = readFile(investigated);
	}
	outputContent.push(data);
	const newOutputcontent = JSON.stringify(outputContent, null, 2);
	writeFile(investigated, newOutputcontent);
};

export const updateTodo = data => {
	const { id, idSurvey } = data;
	const inputContent = readFile(todos);
	const newInputContent = inputContent.reduce((_, e) => {
		if (e.id !== id || e.idSurvey !== idSurvey) _.push(e);
		return _;
	}, []);
	const content = JSON.stringify(newInputContent, null, 2);
	writeFile(todos, content);
};

export const readFile = fileName =>
	JSON.parse(fs.readFileSync(fileName, 'utf8'));
