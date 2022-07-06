import { prompt } from 'inquirer';



export async function q9() {
 
    
	const { q9Answer } = await prompt({
		type: 'list',
		name: 'q9Answer',
		message: 'Please select exercise',
		
        choices: [
            '1- UltraEdit',
            '2- Atom ',
            '3- Sublime Text',
            '4- Notepad++',
            '5- Brackets ',
            '6- Visual Studio Code',
            '7- Vim',
            '8- Bluefish ',
            '9- TextMate',
            "10- Text Wrangler",
            '11-Erticles in C++',
            '12-Eclipse',
            '13-Netbeans'
        ],
		filter: (val) => +val[0],
	})}

                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                    


