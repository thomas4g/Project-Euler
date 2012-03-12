//OBJECTIVE:
//Find the nth prime
function prime(n) {
	var i=2, p=1;
	function isPrime(k) {
		var j=2, result=true;
		for(;j<=Math.ceil(k/2);j++) {
			if(k%j ===0) {
				result=false;
				break;
			}
		}
		return result;
	}
	//
	while(p<n) {
		i++;
		if(isPrime(i)) p++;
	}
	return i;
}
