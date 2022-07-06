import { prompt } from 'inquirer';



export async function q6() {
 
    
	const { q6Answer } = await prompt({
		type: 'list',
		name: 'q6Answer',
		message: 'Please select programming languages',
		
        choices: [
            '1- C',
            '2- C++',
            '3- C#',
            '4- java',
            '5- JAvaScpipt ',
            '6- php',
            '7- Python',
            '8- Swift ',
        ],
		filter: (val) => +val[0],
	})}

                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                    