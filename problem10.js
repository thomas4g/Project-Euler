//Alternative (and hopefully faster)
//using Eratosthenes's Sieve
//This is not working yet!!
function sum(n) {
	var composites = [], primes=[2];
	function filter(p) {
		console.log(primes);
		var i = 2*p;
		for(;i<n;i+=p) {
			composites.push(i);
			var k = primes.indexOf(i);
			console.log(i + " removed from primes");
			primes.splice(k,1);
		}
		var t = p+1, cont = false;
		for(;t<n;t++) {
			console.log(composites,t);
			if(composites.indexOf(t) === -1) {
				p = t;
				primes.push(p);
				cont = true;
				break;
			}
		}
		if(cont) filter(p);
		else return;	
	};
	filter(2);
	var i=2,
	s=0;
	/*for(;i<n;i++) {
		if(composites.indexOf(i) === -1) {
			//push to primes array if
			//you're finding the primes
			//since we're just finding 
			//the sum here, i'll skip that
			s+=i;
		}		
	}*/
	var j = 0;
	for(;j<primes.length;j++) { 
		s+= primes[j]; 
		console.log(primes[j] + " added to sum (which is now " + s + ")");
	}
	return s;
}	
