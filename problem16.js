//OBJECTIVE: 
//Find the sum of the digits
//of the number base^power

//To run, call 
//sumDigits(stringPow(2,1000));
function stringPow(base, pow) {
	var result = [base],
	    i=1;
	for(;i<pow;i++) {
		var j = 0,
		overflow = 0,
		temp = [];
		for(j=result.length-1;j>=0;j--) {
			var k = result[j]*base + overflow;
			if(k>9) {
				k -=10;
				overflow = 1;
			}
			else {
				overflow = 0;
			}	
			temp.splice(0, 0, k);
		}
		if(overflow > 0) temp.splice(0,0,overflow);
		result = temp;
	}
	return result;
}
function sumDigits(numArray) {
	var i=0,
	    sum=0;
	for(;i<numArray.length;i++) {
		sum+=numArray[i];
	}
	return sum;
}

