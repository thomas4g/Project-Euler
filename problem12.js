//OBJECTIVE:
//Find the first triangle number
//to have over n factors
function triangle(factors) {
	//i is the number of the current triangle number
	//t is the current triangle number
	var i=t=1,j,f,result;
	while(!result) {
		j=1;
		f=0;
		//since a triangle number is
		//an integer, the largest factor
		//other than itself that it
		//will have is t/2
		var k = t/2;
		for(;j<k;j++) {
			//if j is a factor of t
			if(t%j === 0) {
				//increment the amount
				//of factors found sofar
				//by two - once for j
				//and once for t/j
				f+=2;
				//since we've already found
				//the factor t/j, we can
				//optimize the loop by
				//lowering the limit to t/j
				//so we don't find t/j
				//again and count it twice
				k=t/j;
			}
		}
		if(f>factors) result = t;
		//get the next triangle number
		else t += ++i; 
	}
	return result;
}
