











import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function deleteProject() {
	const { data: projects } = await axios.get(baseUrl + '/projects');
	const formattedProjects = projects.map((c: any) => ({ title: c.title, author: c.author  }));
	console.table(formattedProjects);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const project = projects[index];
	await axios.delete(baseUrl + `/projects/${project.project_id}`,);
	console.log(`project for ${project.title} has been deleted ✅`);
}
