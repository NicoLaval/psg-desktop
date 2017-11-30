import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GeneratedSurvey } from 'generated-survey';
import { readFile, writeData, updateTodo } from 'js/utils/fs';
import { todos, surveys, codeList } from 'config/paths';

const surveyss = readFile(surveys);
const todoss = readFile(todos);
const code_List = readFile(codeList);

class SurveyEdition extends Component {
	constructor(props) {
		super();
		this.state = { redirect: '' };
		this.handleBack = () => {
			this.setState({
				redirect: `/survey/${this.props.idSurvey}`,
			});
		};
		this.handleSave = data => {
			this.setState({ data });
			writeData(data);
		};
		this.handleClose = () => {
			updateTodo(this.state.data);
			this.setState({
				redirect: '/',
			});
		};
	}

	render() {
		const { id, idSurvey } = this.props;
		const { redirect } = this.state;
		const survey = surveyss.find(s => s.id === idSurvey);
		const todo = todoss.find(
			t => `${t.id}${t.idSurvey}` === `${id}${idSurvey}`
		);
		const { number, street, postalCode, city } = todo.adress;
		const adressLabel = `Adresse du ménage : ${number} ${street} - ${
			postalCode
		} - ${city}`;

		if (redirect) return <Redirect to={redirect} />;

		return (
			<div>
				<div className="mui-row">
					<h1 className="mui-col-md-8 mui-col-md-offset-2 page-title">
						{survey.label}
					</h1>
				</div>
				<div className="mui-row">
					<h4 className="mui-col-md-12 centered">{adressLabel}</h4>
				</div>
				<GeneratedSurvey
					todo={todo}
					survey={survey}
					codeList={code_List}
					onClickBack={this.handleBack}
					onClicksave={this.handleSave}
					onClickCloseModal={this.handleClose}
				/>
			</div>
		);
	}
}

SurveyEdition.propTypes = {
	id: PropTypes.string.isRequired,
	idSurvey: PropTypes.string.isRequired,
};
export default SurveyEdition;
