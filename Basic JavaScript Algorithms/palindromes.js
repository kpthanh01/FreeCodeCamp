/*
	Palindrom is when a word that spelled backword is the same word.
	Example:
		eye = eye (true)
		race = racecar (true)
		nope = epon (false)

	The function palindromes() will check to see if the string
	is a palindrome or not.
*/


function palindromes(str){
	str.toLowerCase().replace(/[W_]g/,'');
	var revStr = str.split('').reverse().join('');
	if(str == revStr){
		return true;
	}
	return false;
}

palindromes("A man, a plan, a canal. Panama"); //return true
palindromes("not a palindrome"); //return false