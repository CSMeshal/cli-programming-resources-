

import axios from 'axios';
import { baseUrl } from '../..';

export async function getbooks() {
	const { data: books } = await axios.get(baseUrl + '/books');
	const formattedbooks = books.map((c: any) => 
	({ title: c.title, description: c.description 
	 ,isbn: c.isbn, language: c.language , pages:c.language, 
	 author: c.author }));
	console.table(formattedbooks);
}



