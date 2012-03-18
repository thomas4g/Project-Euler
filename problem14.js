//OBJECTIVE:
//Find the number under the limit with
//the longest Collatz chain
function collatzNum(limit) {
	var lengths = [], longest_length=result=j=0, i=1;
	for(;j<limit;j++) {
		lengths.push(-1);
	}
	function even (n2) { return n2%2===0; }
	function findNumLength(n) {
		if(!lengths[n]) lengths[n] = -1;
		var len = lengths[n];
		if(len !== -1) return len;
		if(n===1) {
			return 1;
		}
		if(even(n)) {
			l = findNumLength(n/2) + 1;
			lengths[n] = l;
			return l;
		}
		else {
			l = findNumLength(3*n + 1) + 1;
			lengths[n] = l;
			return l;
		}
	}
	var length = 0;
	for(;i<limit;i++){
		var skip = false;
		// m = n/2 --> 2m
		// m = 3n+1 --> (m-1)/3
		// 2m = 3n + 1 --> (2m - 1)/3
		if(2*i < limit) skip = true;
		if(!even && ((i-3)/3 < limit || (2*i -1)/3 < limit)) skip = true;
		if(!skip) length = findNumLength(i);
		if(length > longest_length){
			longest_length = length;
			result = i;
		}
	}
	return result;

}
