import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';


export async function updateContact() {
	const { data: books } = await axios.get(baseUrl + '/books');
	const formattedBooks = books.map((c: any) => ({ title: c.title, author: c.author }));
	console.table(formattedBooks);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update 🐬',
		filter: (val) => +val,
	});
	const book = books[index];

	const newBook = await prompt([
		{
			type: 'input',
			name: 'title',
			message: `Enter new title or press enter to keep it as (${book.title})`,
			filter: (val) => {
				if (val.trim() === '') return book.title;
				return val;
			},
		},
		{
			type: 'input',
			name: 'author',
			message: `Enter new author or press enter to keep it as (${book.author})`,
			filter: (val) => {
				if (val.trim() === '') return book.author;
				return val;
			},
			
		},
		// {
		// 	type: 'input',
		// 	name: 'isbn',
		// 	message: `Enter new isbn or press enter to keep it as (${book.isbn})`,
		// 	filter: (val) => {
		// 		if (val.trim() === '') return book.isbn;
		// 		return val;
		// 	},
		// }
		// {
		// 	type: 'input',
		// 	name: 'pages',
		// 	message: `Enter new pages or press enter to keep it as (${book.pages})`,
		// 	filter: (val) => {
		// 		if (val.trim() === '') return book.pages;
		// 		return val;
		// 	},
		// }
		// {
		// 	type: 'input',
		// 	name: 'language',
		// 	message: `Enter new language or press enter to keep it as (${book.language})`,
		// 	filter: (val) => {
		// 		if (val.trim() === '') return book.language;
		// 		return val;
		// 	},
		// }
		// {
		// 	type: 'input',
		// 	name: 'pages',
		// 	message: `Enter new pages or press enter to keep it as (${book.pages})`,
		// 	filter: (val) => {
		// 		if (val.trim() === '') return book.pages;
		// 		return val;
		// 	},
		
		
		
	]);

	await axios.patch(baseUrl + `/books/${book.book_id}`, newBook);

	console.log(`Book for ${newBook.title}, has been updated ✅`);

}