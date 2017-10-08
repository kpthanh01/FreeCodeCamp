/*	This function "reverseString" will take
	the input string and reverse the order of the
	string.
*/
function reverseString(str){
	var arr = str.split('').reverse();
	str = arr.join('');
	return str;
	//A simple way to do this is:
	//	return str.split('').reverse().join('');
}



reverseString("hello");
// The out put will be "olleh"