//OBJECTIVE
//Find the greatest product of 
//five consecutive digits in the
//1000-digit number n
function solve(n) {
	var s = n.toString(), i=0, result=0;
	for(;i<s.length;i++) {
		var p = s[i]*s[i+1]*s[i+2]*s[i+3]*s[i+4];
		if(p>result) result = p;
	}
	return result;
}
