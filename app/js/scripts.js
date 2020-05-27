// import '../less/style.css';
import 'babel-polyfill';
// import {rnds} from './codeChacker.js';
import {wordsCount,getWords} from './homework.js';


window.addEventListener('load', function(){
	let txt = "  Всем gnbv привет! 333 Ура ура! ";

	for(let some of getWords(txt)){
		this.console.log(some);
	}
	
});





