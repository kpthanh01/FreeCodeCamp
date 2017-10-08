/*
	This problem is asking to reapeat the given string "n" amount of times.
	Using positive numbers (num) for repetition, while negative numbers (-num) should 
	return "".
*/


function repeatStringNumTimes(str, num){
	if(num>0){
		var repeatingStr = str.repeat(num);
		return repeatingStr;
	}
	return "";
}

repeatStringNumTimes("*",3); //return ***
repeatStringNumTimes("abc",3); //return abcabcabc