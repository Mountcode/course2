export function rnds(){
	setInterval(function tick() {
		let changableNum = Math.floor(Math.random() * 20);
		console.log('Compilator - ' + changableNum );
	}, 8000); 
};

rnds();
	


