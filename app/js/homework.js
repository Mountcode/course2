export {wordsCount, getWords};

function normalizeText(badtext){
	return badtext.trim().replace(/\s{2,}/g, ' ');
}

function wordsCount(str){
	let wordCnt = normalizeText(str).split(" ").length;
	return wordCnt;
}

function getWords(str){
	return{
		words: normalizeText(str).split(" "),
		[Symbol.iterator](){
			let i = 0;
			return{
				next:() =>{
					if(i < this.words.length){
						return{
							done:false,
							value: this.words[i++]
						};
					}
					else{
						return{
							done:true
						};
					}
				}
			}
		}
	}


	// let txt = normalizeText(str);
	// let wordsObj = {
	// 	to: normalizeText(str).split(" ").length,
	// 	[Symbol.iterator]: function(){
	// 			let current = 0;
	// 			let stop = this.to;
	// 			return {
	// 					next(){
	// 							if(current <= stop){
	// 									return {
	// 											done: false,
	// 											value: current++
	// 									}
	// 							}
	// 							else{
	// 									return {
	// 											done: true
	// 									}
	// 							}
	// 					}
	// 			}
	// 	}
	// }
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