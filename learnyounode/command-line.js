var sum = 0;
var nums = process.argv

for (var i = 2; i < nums.length; i++) {
	sum += Number(nums[i]);
}

console.log(sum)