export function * gen(from, to){
	for(let i = from; i <= to; i++){
		yield i;  
	} 
}