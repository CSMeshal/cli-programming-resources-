











import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';

export async function deleteBook() {
	const { data: books } = await axios.get(baseUrl + '/books');
	const formattedBooks = books.map((c: any) => ({ title: c.title, author: c.author  }));
	console.table(formattedBooks);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ❌',
		filter: (val) => +val,
	});
	const book = books[index];
	await axios.delete(baseUrl + `/books/${book.book_id}`,);
	console.log(`Book for ${book.title} has been deleted ✅`);
}
