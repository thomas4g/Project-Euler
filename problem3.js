// factor with recursion
// time to solve < .5s
function factor(num, index) {
	if(!index) index = 2;
	var lim = Math.ceil(num/2)+1, result=num;
	if(index < lim) {
		if(num%index === 0) {
			return factor(num/index);
		}
		result = factor(num, index+1);
	}
	return result;
}



