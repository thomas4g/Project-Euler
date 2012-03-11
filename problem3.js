//OBJECTIVE:
//Find the largest prime factor of the number "num"
function factor(num, index) {
	//if the index is null
	//(because it's our first run on this number)
	//set it to 2
	if(!index) index = 2;
	//the important one here is result=num
	//i.e, the function returns num by default
	//if no prime factors are found
	var lim = Math.ceil(num/2)+1, result=num;
	//if we're still iterating, basically...
	if(index < lim) {
		//if index is a factor at all
		if(num%index === 0) {
			//then find its greatest prime factor
			//recursion!
			//since the factor function returns the
			//num passed by default if no prime
			//factors are found, we'll eventually
			//reach a point where x === factor(x)
			//at that point, we've found the 
			//greatest prime factor, so return it
			return factor(num/index);
		}
		//if we're still here, keep going
		//i.e, set the result to either
		//the value found in the preceding return 
		//statement, or to the default value (num)
		//oh, and increment index so we actually keep
		//going. :)
		result = factor(num, ++index);
	}
	//yay, we're done! :)
	return result;
}



