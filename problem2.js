function solve(limit) {
	var sum=2,i=1,j=fib=2, k=0;
	while(fib<limit) {	
		fib=i+j;
		i=j;
		j=fib;
		if(fib%2 === 0) sum+=fib;	
	}
	return sum;
}
