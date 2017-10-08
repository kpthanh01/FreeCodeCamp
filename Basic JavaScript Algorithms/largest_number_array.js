/*
	The objective of this problem is to find the biggest number in each array
	in this multi-dimensional array.
*/


function largestofFour(arr){
	var largestFour = [];
	for (var i = 0; i < arr.length; i++) {
		var largest = arr[i][0];
		for (var j = 1; i < arr[i].length; i++) {
			if(largest < arr[i][j]){
				largest = arr[i][j];
			}
		}
		largestofFour.push(largest);
	}
	return largestofFour;
}

largestofFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// return [5,27,39,1001]