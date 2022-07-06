import { prompt } from 'inquirer';



export async function q7() {
 
    
	const { q6Answer } = await prompt({
		type: 'list',
		name: 'q6Answer',
		message: 'Please select projects',
		
        choices: [
            '1- projects in Fronend',
            					'2- projects in backend',
            					'3- projects in C#',
            					'4- projects in java',
            					'5- projects in JAvaScpipt ',
            					'6- projects in php',
            					'7- projects in Python',
            					'8- projects in Swift ',
            					'9- projects in Matlab',
            					"10- projects in database",
            					'11-projects in C++'
        ],
		filter: (val) => +val[0],
	})}

                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                    