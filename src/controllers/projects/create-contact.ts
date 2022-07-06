import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl, token } from '../..';

export async function  createProject() {
	const projectData = await prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Enter project title  ',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter project description  ',
		},
        {
			type: 'input',
			name: 'content',
			message: 'Enter project isbn  ',
		},
		
        {
			type: 'input',
			name: 'url',
			message: 'Enter project pages   ',
		},
        {
			type: 'input',
			name: 'author',
			message: 'Enter project  author  ',
		},
	]);

	await axios.post(
		baseUrl + '/projects',
		{
			id: v4(),
			...projectData,
		},
		{
			headers: {
				authorization: 'Bearer ' + token,
			},
		}
	);

	console.log(`Project for ${projectData.title}, has been added ✅`);
}