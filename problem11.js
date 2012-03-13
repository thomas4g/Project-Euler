//OBJECTIVE:
//find the greatest product of four 
//adjacent numbers in any direction
//in a NxN grid given in the form
//"a b c d e..." where a-e are lines 
//of spaced numbers e.g "55 63 86"

function solve(grid) {
	var i=p=0, nums=grid.split(" "), n;
	n = Math.sqrt(nums.length);
	for(;i<nums.length;i++) {
		//find product of num and nums to right
		var east = nums[i] * nums[i+1] * nums[i+2] * nums[i+3],
		//find product of num and nums above
		north = nums[i] * nums[i-n] * nums[i-2*n] * nums[i-3*n],
		northeast = nums[i] * nums[i-(n-1)] * nums[i-2*(n-1)] * nums[i-3*(n-1)],
		southeast = nums[i] * nums[i+(n+1)] * nums[i+2*(n+1)] * nums[i+3*(n+1)];
		if(north > p) p = north;
		if(east > p) p = east;
		if(northeast > p) p = northeast;
		if(southeast > p) p = southeast;
	}
	return p;
}
