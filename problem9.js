//OBJECTIVE:
//Find the product abc for which
//abc is a pythagorean triplet
//and a+b+c = 1000
//a^2 + b^2 = (1000-a-b)^2
//
function triplet() {
	var a=b=c=result=0;
	while(c===0) {
		a=0;
		for(;a<b;a++)
		{
			var d = 1000 - a - b;
			if(d === Math.sqrt(a*a + b*b)) {
				c = d;
				break;
			}
		}
		if(c===0) b++;
	}
	return a*b*c;
}
