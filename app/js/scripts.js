import '../less/style.css';
import 'babel-polyfill';
import * as chkd from './codeChacker.js';



import {gen} from './gen.js';
let someGen = gen(1, 5);

for(let some of someGen){
	this.console.log(some);
}





