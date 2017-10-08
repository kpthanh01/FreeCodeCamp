/*
	This problem is that you must return a new string with the length of "num"; however,
	the last characters should be replaced "..."
	Exceptions:
		*If num is greater than or equal to the length of the string, then return str
		*If num is less than or equal to 3 than return str with an add "..."
*/


function truncateString(str, num){
	if(str.length > num && num > 3){
		return str.slice(0, num-3) + "...";
	} else if(str.length > num && num <= 3){
		return str.slice(0, num) + "...";
	}
	return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); //return "A-tisket..."