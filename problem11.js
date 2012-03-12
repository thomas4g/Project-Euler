//OBJECTIVE:
//find the greatest product of four 
//adjacent numbers in any direction
//in a 20x20 grid given in the form
//a b c d e.. where a-e are lines of
//spaced numbers 

//TODO: abstract this further to 
//solve for NxN grid
function solve(n) {
	var i=p=0, nums=n.split(" ");
	//up:    -20 -40 -60
	//down:  +20 +40 +60
	//left:  -1 -2 -3 -4
	//right: +1 +2 +3 +4
	//up-r:  -19 -38 -57
	//up-l:  -21 -42 -63
	//dwn-r: +21 +42 +63
	//dwn-l: +19 +38 +57
	for(;i<nums.length;i++) {
		var r = nums[i]*nums[i+1]*nums[i+2]*nums[i+3],
		l = nums[i]*nums[i+1]*nums[i-2]*nums[i-3],
		up = nums[i]*nums[i-20]*nums[i-40]*nums[i-60],
		dwn = nums[i]*nums[i+20]*nums[i+40]*nums[i+60],
		ur = nums[i]*nums[i-19]*nums[i-38]*nums[i-57],
		ul = nums[i]*nums[i-21]*nums[i-42]*nums[i-63],
		dr = nums[i]*nums[i+21]*nums[i+42]*nums[i+63],
		dl = nums[i]*nums[i+19]*nums[i+38]*nums[i+57];
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
