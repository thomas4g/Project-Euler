//OBJECTIVE:
//Find the difference between
//the sums of the first N natural
//numbers and the square of the sum
function diff(n) {
	var sum1=sum2=i=0;
	for(;i<=n;i++) {
		sum1+=i*i;
		sum2+=i;
	}
	sum2*=sum2;
	return sum2-sum1;
}
