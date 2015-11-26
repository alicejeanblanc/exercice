function comparchaine (str) {
	var maj=str.toUpperCase(); 
	var tag="<br>"; 
	if (str==maj) {
		document.writeln(str+tag+"ils sont égaux")
	}
}

comparchaine("ALICE");
