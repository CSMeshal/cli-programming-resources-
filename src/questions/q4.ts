import { prompt } from 'inquirer';



export async function q4() {
 
    
	const { q4Answer } = await prompt({
		type: 'list',
		name: 'q4Answer',
		message: 'Please select Book',
		
		  choices: [
    					  '1- C',
    					  '2- C++',
    					  '3- C#',
    					  '4- java',
    					  '5- JAvaScpipt ',
    					  '6- php',
    					  '7- Python',
    					  '8- Swift ',
    					  '9- Matlab',
    					  "10- Website Development"
    				  ],
		filter: (val) => +val[0],
	})}

                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                    