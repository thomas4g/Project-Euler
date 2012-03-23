//OBJECTIVE:
//Find the number of routes from 
//top left to bottom right through
//a square grid of size N

//store previously traversed chunks
var grids = [];
//handy little thing to make an
//array key
function stringy(x, y) {
	return x + "x" + y;
}
function gridPaths(size, x, y) {
	if(!x) x = 0;
	if(!y) y = 0;
	var s1 = stringy(size - x, size - y),
	    s2 = stringy(size - y, size - x);
	//if we've previously traversed
	//an x-by-y grid, grab the cached
	//value. Optimization ftw.
	if(grids[s1] !== undefined) {
		return grids[s1];
	}
	//or, if we've traversed 
	//a y-by-x grid, grab it
	else if(grids[s2] !== undefined) {
		return grids[s2];
	}
	var paths=0;
	//if there's more horizontal grid
	//keep it moving, bro
	if(x<size) paths += gridPaths(size, x + 1, y);
	//ditto, for vertical
	if(y<size) paths += gridPaths(size, x, y + 1);
	//if we're somewhere in between
	//then we can cache this chunk
	//for future reference
	if(x>0 && x<size) {
		grids[stringy(size - x, size - y)] = paths;
	}
	if(x===size && y===size) return 1;
	return paths;
		
}
