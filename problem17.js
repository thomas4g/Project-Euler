var nums = ["", "one", "two", "three", "four", "five",
		 "six", "seven", "eight", "nine"];

var teens = ["", "ten", "eleven", "twelve", "thirteen",
		  "fourteen", "fifteen", "sixteen",
		  "seventeen", "eighteen", "nineteen"];

var twos = ["twenty", "thirty", "forty", "fifty",
	  "sixty", "seventy", "eighty", "ninety"];

var bigs = ["thousand", "million", "billion",
				 "trillion", "quadrillion"];
function letterify(num) {
	function ones(n) {
		return nums[n];
	}
	function tens(n) {
		if(n < 10) return ones(n);
		else if(n<20) {
			return teens[n-9];
		}
		else {
			var result = "",
			str = n.toString();
			result = twos[str[0] - 2];
			if(ones(str[1]) !== "") {
				result += "-" + ones(str[1]);
			}
			return result;
		}
	}
	function hundreds(n, large) {
		if(n < 100) return tens(n);
		else {
			var result = "",
			str = n.toString();
			var val = ones(str[0]);
			if(val !== "") {
				result = val 
				+ " hundred";
			}
			var tenval = tens(parseInt(str.substring(1,str.length), 10));
 			if(tenval !== "") result += " and " + tenval;
			return result;
		}
	}
	function biggies(n) {
		if(n<1000) return hundreds(n);
		else {
			var result = "",
			str = n.toString(),
			result = hundreds(str.substring(str.length-3,str.length)) || "",
			i = str.length-4,
			counter = 0;
			for(;i>=0;i-=3) {
				var lim = i - 3;
				while(lim < 0) {
					lim++;
				}
				var big = hundreds(parseInt(str.substring(lim, i+1), 10)) + " " + bigs[counter];
				if(result.indexOf("and") === -1 && result !== "") big += " and";
				result = big + " " + result;
				counter++;
			}
			return result;
	
		 }	
	}	
	return biggies(num);
}
function solve(min, max) {
	var i=min,
	result=0;
	for(;i<=max;i++) {
		var word = letterify(i),
		stripped = word.replace(/\s/g, "").replace(/-/g,"");
		result += stripped.length;
	}
	return result;
}

