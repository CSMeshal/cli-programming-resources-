import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../..';

export async function searchBook() {
	const {text} = await prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Enter name to search 🔤 ',
		},
	]);
try { 
	const { data: books } = await axios.get(baseUrl + '/books', {
		params: {text},
		headers: {
			Authorization: 'Bearer ' + globalData.token,
		},
});

	
	const formattedbooks = books.map((c: any) => ({ title: c.title }));
	console.table(formattedbooks);
} catch (err: any) {
	console.log(err?.response?.data);
}
}