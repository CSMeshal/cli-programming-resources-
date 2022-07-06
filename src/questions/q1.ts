import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function q1() {


const { username, password } = await prompt([

    
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password 🔑 ',
    },
    {
        
        type: 'input',
        name: 'username',
        message: 'Welcome, please login',
        filter: (val) => val.toLowerCase(),
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your password 🔑 ',
    },
]);
if (username !== "gg" || password !== "gg"  ) {
		console.log('Wrong username & password, bye!');
		process.exit(0);}
        else if(username == "gg" || password == "gg"  ){
        console.log('Hi');
	}
}

