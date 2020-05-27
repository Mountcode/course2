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