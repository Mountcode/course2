import '../less/style.css';
import 'babel-polyfill';


let some ={
	i: 2, 
}

function double(n){
	return this.i * this.i * n;
}

console.log(double.call(some, 3, 2));

// console.log(double.apply(some, [3,2]));







