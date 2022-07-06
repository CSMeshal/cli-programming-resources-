import { prompt } from 'inquirer';
import { getbooks } from '../controllers/book/get-contact';
import { searchBooks } from '../controllers/book/search-contact';
import { deleteBook } from '../controllers/book/delete-contact';
import {createBook} from '../controllers/book/create-contact'
import {updateContact} from '../controllers/book/update-contact'
import{getprojects} from '../controllers/projects/get-contact'
import { getarticals } from '../controllers/articles/get-contact';
import { q3 } from './q3';
import { q4 } from './q4';
import{ q5} from './q5'
import { q6 } from './q6';
import { q7 } from './q7';
import { q8 } from './q8';
import { q9 } from './q9';

export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: 'Please choose 👀!',
		choices: [
			'1 - View programming books',
			'2 - View programming articles',
			'3 - View programming languages',
			'4 - View programming projects ',
			'5 - View programming exercise',
			'6-  View programming codes editores',
			'7 - add programming content',
			'8 - Update contact ',
			'9 - Delete contact ❌',
			'10 - Search contact by name 🔍',
			'11 - Quit app ',
		],
		filter: (val) => +val[0],

		
	});

	switch (q2Answer) {
		case 1:
			await q3();
			await q4();
			await getbooks();
			break;

		case 2:
			await q3();
			await q5();
			await getarticals();
			break;

		case 3:
			await q6();
			break;

		case 4:
			await q7();
			break;

		case 5:
			await q8();
			break;

		case 6:
		await	q9();
			break;
			case 7:
		await	getbooks();
			case 8:
         await updateContact();
break;
			case 9:
			await deleteBook();
			break;


			case 10:
			await	 searchBooks();
			break;

			
			case 11:
		await	console.log('By');
			process.exit(0);

		default:
			break;
	}
}
