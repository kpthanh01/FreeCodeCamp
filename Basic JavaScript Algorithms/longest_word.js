/*
	The task for this function is the find the length of 
	the longest word in the string.
	For example: findLongestWord("Google is big") should
	return 6 
*/

function findLongestWord(str){
	var arr = str.split(" ");
	var long = arr[0].length;
	for (var i = 1; i < arr.length; i++) {
		if(long < arr[i].length){
			long = arr[i].length;
		}
	}
	return long.length;
}


/*
Another way to approach this problem is to use reduce() which will
iterate through each index

	function findLongestWord(s) {
	  return s.split(' ')
	    .reduce(function(x, y) {
	      return Math.max(x, y.length)
	    }, 0);
	}
*/

findLongestWord("The quick brown fox jumped over the lazy dog")
//return the length of the longest word: 6 (jumped)