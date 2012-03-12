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
		var r = nums[i]*nums[i+1]*nums[i+2]*nums[i+3],
		l = nums[i]*nums[i+1]*nums[i-2]*nums[i-3],
		up = nums[i]*nums[i-n]*nums[i-2*n]*nums[i-3*n],
		dwn = nums[i]*nums[i+n]*nums[i+2*n]*nums[i+3*n],
		ur = nums[i]*nums[i-(n-1)]*nums[i-2*(n-1)]*nums[i-3*(n-1)],
		ul = nums[i]*nums[i-(n+1)]*nums[i-2*(n+1)]*nums[i-3*(n+1)],
		dr = nums[i]*nums[i+(n+1)]*nums[i+2*(n+1)]*nums[i+3*(n+1)],
		dl = nums[i]*nums[i+(n-1)]*nums[i+2*(n-1)]*nums[i+3*(n-1)];
		if(up > p) p = up;
		if(dwn > p) p = dwn;
		if(l > p) p = l;
		if(r > p) p = r;
		if(ur > p) p = ur;
		if(ul > p) p = ul;
		if(dr > p) p = dr;
		if(dl > p) p = dl;
	}
	return p;
}
