import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../..';

export async function searchProject() {
	const {text} = await prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Enter name to search 🔤 ',
		},
	]);
try { 
	const { data: projects } = await axios.get(baseUrl + '/projects', {
		params: {text},
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
});

	
	const formattedprojects = projects.map((c: any) => ({ title: c.title }));
	console.table(formattedprojects);
} catch (err: any) {
	console.log(err?.response?.data);
}
}