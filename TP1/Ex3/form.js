function validateForm() {
    var x = document.forms["saisir"]["nom"].value;
	var y = document.forms["saisir"]["ecole"].value;
	
	document.getElementById("nomVar").innerHTML = x;
	document.getElementById("ecoleVar").innerHTML = y;
	
    if (x == "" || y == "") {
        alert("Saisie incomplète !");
        return false;
    }
	display();
}

function display(){
	document.getElementById("formulaire").style.display = "none"; 
	document.getElementById("content").style.display = "inline";
}

function picture(){
	var number = document.forms["carte"]["numero"].value;
    var pic = "../IMAGES/jeuxDeCartes/" + number + ".png";
	if( parseInt(number) <= 0 || parseInt(number) > 52 || isNaN(number) ) {
		alert("Désolé ! Numéro incorrect !");
	}
	else {
		document.getElementById('pict').src = pic;
		document.getElementById('pict').style.display = "inline";
	}
}