

import axios from 'axios';
import { baseUrl } from '../..';

export async function getarticals() {
	const { data: articals } = await axios.get(baseUrl + '/articals');
	const formattedarticals = articals.map((c: any) => 
	({ title: c.title, description: c.description 
	 ,isbn: c.isbn, language: c.language , pages:c.language, 
	 author: c.author }));
	console.table(formattedarticals);
}



