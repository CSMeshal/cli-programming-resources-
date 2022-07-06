import { prompt } from 'inquirer';



export async function q8() {
 
    
	const { q6Answer } = await prompt({
		type: 'list',
		name: 'q6Answer',
		message: 'Please select exercise',
		
        choices: [
          '1- exercise in Fronend',
							'2- exercise in backend',
							'3- exercise in C#',
							'4- exercise in java',
							'5- exercise in JAvaScpipt ',
							'6- exercise in php',
							'7- exercise in Python',
							'8- exercise in Swift ',
							'9- exercise in Matlab',
							"10- exercise in database",
							'11- exercise in C++'
        ],
		filter: (val) => +val[0],
	})}

                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                    