import figlet from 'figlet';
import { q1 } from './questions/q1';

export const baseUrl = 'http://0.0.0.0:8000';
export const globalData: any = {
	token: '',
};
let gg = '';
import { q2 } from './questions/q2';

export let token = '12394';




async function start() {
	console.log();
	console.log();
	console.log(figlet.textSync('Welcome  to the  '))
	console.log();
	console.log();
	console.log(figlet.textSync(' resource programming'))
	console.log();
	console.log();
	console.log(figlet.textSync(' to learn programming'))



	await q1();

	while (true) {
		await q2();
		console.log();
		console.log();
	}
}

start();
