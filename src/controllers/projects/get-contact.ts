

import axios from 'axios';
import { baseUrl } from '../..';

export async function getprojects() {
	const { data: projects } = await axios.get(baseUrl + '/projects');
	const formattedprojects = projects.map((c: any) => 
	({ title: c.title, description: c.description 
	 ,content: c.content, author: c.author , url:c.url, 
	  }));
	console.table(formattedprojects);
}



