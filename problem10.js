//OBJECTIVE:
//Find the sum of all primes
//below n

function sum(n) {
	var i=p=2, list=[], cont=true;
	for(;i<n;i++) { list.push(i); }
	while(cont) {
		var i = 2*p;
		for(;i<=list.length+1;i+=p) {
			list[i-2] = -1;
		}
		var k = p+1;
		cont=false;
		for(;k<list.length+1;k++) {
			if(list[k-2] !== -1) {
				p=k;
				cont = true;
				break;
			}
		}
	}
	var j=s=0;
	for(;j<list.length;j++) {
		if(list[j] !== -1) s+= list[j];
	}
	return s;
}
