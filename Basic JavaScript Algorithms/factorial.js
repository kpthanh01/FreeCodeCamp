/*
	The function factorialize will take a variable called 
	num and output its factorial number.
	For example: factorialize(5) => 120
					5! = 5 * 4 * 3 * 2 * 1 = 120
*/

function factorialize(num){
	var factorial = 1;
	for (var i = 2; i <= num; i++) {
		factorial *= i;
	}
	return factorial;
}

//A more advance way to approach this problem is by calling the 
//function within the function.
/*
	function factorialize(num) {
  		if (num === 0) { return 1; }
 	 	return num * factorialize(num-1);
	}
*/

factorialize(5);