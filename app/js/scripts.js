// import '../less/style.css';
import 'babel-polyfill';
// import {rnds} from './codeChacker.js';
import {wordsCount,getWords} from './homework.js';


window.addEventListener('load', function(){
	let txt = "  Всем gnbv привет! Ура ура! ";
	// this.console.log(wordsCount(txt));

	// for(let some of getWords(txt)){
	// 	this.console.log(some);
	// }

	function* some(){
		console.log('yeld a');
		yield 'a';
		console.log('yeld b');
		yield 'b';
		console.log('yeld c');
		yield 'c';
		
	};
	
	for(let a of some() ){
		this.console.log(a);
	};
	
});




// for(let some of getWords(str)){
// this.console.log(some);			// выводит 4 слова
// }



// import {gen} from './gen.js';
// let someGen = gen(1, 5);

// for(let some of someGen){
// 	this.console.log(some);
// }





