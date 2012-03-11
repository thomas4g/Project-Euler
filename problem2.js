//OBJECTIVE:
//Find the sum of the even-valued
//Fibbonacci terms below the given limit
//This is pretty straighforward, so I'm 
//not commenting it. :)
function solve(limit) {
	var sum=2,i=1,j=fib=2;
	while(fib<limit) {	
		fib=i+j;
		i=j;
		j=fib;
		if(fib%2 === 0) sum+=fib;	
	}
	return sum;
}
