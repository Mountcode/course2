export {wordsCount, getWords};

function normalizeText(badtext){
	return badtext.trim().replace(/\s{2,}/g, ' ');
}

function wordsCount(str){
	let wordCnt = normalizeText(str).split(" ").length;
	return wordCnt;
}

function* getWords(str){
	let text = normalizeText(str) + " ";
	let start = 0;
	let current = text.indexOf(' ', start);

	while(current !== -1){
		yield text.substr(start, current - start);
		start = current + 1;
		current = text.indexOf(' ',start);
	}
}





// Реализовать модуль  по следующим правилам.
	
// - из модуля экспортируются 2 функции: 
// 	- wordsCount(str) - возвращает количество слов в строке
// 	- getWords(str) - возвращает итерируемый объёкт, перебирающий слова.
// 		Внимание! Не массив! Слова не доступны по индексам - только перебор for-of.
// - внутри модуля могут быть вспомогательные перемнные и функции
// - функции wordsCount и getWords производят предобработку строки, удаляя лишнии 
// 		пробелы слева и справа, а также приводя множественные пробелы к одному
// - функция getWords реализуется с помощью генератора, либо вручную, решать вам
// 	в любом случае она должна подставить в for of
	
// Пример вызова функций:

// import {wordsCount, getWords} from './your-file.js';

// let str = '  Всем  привет! Ура ура! '; 

// this.console.log(wordsCount(str)); // 4

// for(let some of getWords(str)){
// this.console.log(some);			// выводит 4 слова
// }