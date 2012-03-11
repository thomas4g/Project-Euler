//OBJECTIVE:
//Find the sum of all the multiples
//of the given values below the limit

//TODO: rewrite using recursion awesomeness

function solve(multiples, limit) {
	var i=0, sum=0, j;
	for(;i<limit;i++) {
		j=0;
		for(;j<multiples.length;j++) {
			if(i%multiples[j] === 0) {
				sum+=i;
				break;
			}
		}
	}
	return sum;
}
