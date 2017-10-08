function confirmEnding(str, target){
	if(str.substr(-target.length) == target){
		return true;
	}
	return false;
}

confirmEnding("Open sesame", "same")// return true
confirmEnding("Open sesame", "pen")// return false