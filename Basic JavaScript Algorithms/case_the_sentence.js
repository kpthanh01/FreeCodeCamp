/*
	the function titleCase(str) will take any string return 
	the desired cases for this problem.
	The answer should be that each word in the string is capitalize
	but only on the first letter of each word.
*/

function titleCase(str){
	var arr = str.toLowerCase().split(' ');
	var answer = arr.map(function(val){
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
	});

	return answer.join(' ');
}

titleCase("sHoRt AnD sToUt"); //return "Short And Stout"