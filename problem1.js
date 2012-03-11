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
