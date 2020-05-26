export function rnds(){
	return Math.floor(Math.random() * 20)	
};

setInterval(function tick() {
  console.log('Compilator is work - ' + rnds() );
}, 8000);