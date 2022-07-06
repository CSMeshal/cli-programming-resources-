import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl, token } from '../..';

export async function  createBook() {
	const bookData = await prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Enter book title 🔤 ',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter book description 📱 ',
		},
        {
			type: 'input',
			name: 'isbn',
			message: 'Enter book isbn 🔤 ',
		},
		{
			type: 'input',
			name: 'language',
			message: 'Enter book language 📱 ',
		},
        {
			type: 'input',
			name: 'pages',
			message: 'Enter book pages  📱 ',
		},
        {
			type: 'input',
			name: 'author',
			message: 'Enter book  author 📱 ',
		},
	]);

	await axios.post(
		baseUrl + '/books',
		{
			id: v4(),
			...bookData,
		},
		{
			headers: {
				authorization: 'Bearer ' + token,
			},
		}
	);

	console.log(`Book for ${bookData.title}, has been added ✅`);
}