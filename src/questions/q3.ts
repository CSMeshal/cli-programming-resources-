import { prompt } from 'inquirer';



export async function q3() {
 
    
	const { q3Answer } = await prompt({
		type: 'list',
		name: 'q3Answer',
		message: 'Please select your level 👀!',
		
		choices: [
            '1- Beginner',
            '2- Intermediate',
            '3- Advanced',
           
		],
		filter: (val) => +val[0],
	})}

