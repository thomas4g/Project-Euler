//OBJECTIVE:
//Find largest palindrome of the product of 2 n digit numbers
function isPalindrome(x) {
	x=x.toString();
	var i=0, result=true, l=Math.ceil(x.length/2), k=x.length-1;
	for(;i<l;i++) {
		if(x[i] !== x[k-i]) {
			result = false; 
			break;
		}
	}
	return result;
}
function largestPalindrome(digits) {
	var lim = i = Math.pow(10, digits) - 1,
	base = Math.pow(10, digits-1),
	result = 0;
	for(;i>=base;i--) {
		var j = lim;
		for(;j>=base;j--) {
			var r = i*j;
			if(r>result && isPalindrome(r)) {
				result = r;
			}
		}
	}
	return result;
}
