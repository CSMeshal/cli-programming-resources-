import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function searchBooks() {
	const query = await prompt([
		{
			type: 'input',
			name: 'author',
			message: 'Enter author to search 🔤 ',
		},
		{
			type: 'input',
			name: 'title',
			message: 'Enter title to search 🔤 ',
		},
		// {
		// 	type: 'input',
		// 	name: 'name',
		// 	message: 'Enter name to search 🔤 ',
		// },
		// {
		// 	type: 'input',
		// 	name: 'name',
		// 	message: 'Enter name to search 🔤 ',
		// },
	]);

	const { data: books } = await axios.get(baseUrl + '/books/book_id', {
		params: query,
	});
	const formattedBooks = books.map((c: any) => ({ title: c.title, author: c.author }));
	console.table(formattedBooks);
}
















// import axios from 'axios';
// import { prompt } from 'inquirer';
// import { baseUrl, globalData } from '../..';

// export async function searchBook() {
// 	const {text} = await prompt([
// 		{
// 			type: 'input',
// 			name: 'title',
// 			message: 'Enter name to search 🔤 ',
// 		},
// 	]);
// try { 
// 	const { data: books } = await axios.get(baseUrl + '/books', {
// 		params: {text},
// 		headers: {
// 			Authorization: 'Bearer ' + globalData.token,
// 		},
// });

	
// 	const formattedbooks = books.map((c: any) => ({ title: c.title , author: c.author }));
// 	console.table(formattedbooks);
// } catch (err: any) {
// 	console.log(err?.response?.data);
// }
// }