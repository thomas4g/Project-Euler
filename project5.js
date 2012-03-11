//OBJECTIVE: 
//Find the smallest number divisible
//by the range of numbers [a,b]
function smallestDivisible(a,b) {
	var result = null, j=a, i=1;
	while(!result) {
		var div=true;
		for(;j<=b;j++) {
			if(i%j !== 0) {
				div = false;
				break;
			}
		}
		if(div) result = i;
		else {
			div=true;
			i++;
			j=a;
		}
	}
	return result;
}
