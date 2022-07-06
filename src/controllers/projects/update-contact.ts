import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


export async function updateProject() {
	const { data: projects } = await axios.get(baseUrl + '/ projects');
	const formattedProjects =  projects.map((c: any) => ({ title: c.title, author: c.author }));
	console.table(formattedProjects);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const  project =  projects[index];

	const newProject = await prompt([
		{
			type: 'input',
			name: 'title',
			message: `Enter new title or press enter to keep it as (${ project.title})`,
			filter: (val) => {
				if (val.trim() === '') return  project.title;
				return val;
			},
		},
		{
			type: 'input',
			name: 'author',
			message: `Enter new author or press enter to keep it as (${ project.author})`,
			filter: (val) => {
				if (val.trim() === '') return  project.author;
				return val;
			},
			
		},
		
		
		
	]);

	await axios.patch(baseUrl + `/ projects/${ project. Project_id}`, new project);

	console.log(` Project for ${new project.title}, has been updated ✅`);

}