import { prompt } from 'inquirer';



export async function q5() {
 
    
	const { q5Answer } = await prompt({
		type: 'list',
		name: 'q5Answer',
		message: 'Please select articles',
		
        choices: [
            '1- articles in Fronend]',
            	'2- articles in backend',
					'3- articles in C#',
            	'4- articles in java',
            					'5- articles in JAvaScpipt ',
            					'6- articles in php',
            					'7- articles in Python',
            					'8- articles in Swift ',
            					'9- articles in Matlab',
            					"10- articles in database",
            					'11-articles in C++'
        ],
		filter: (val) => +val[0],
	})}
