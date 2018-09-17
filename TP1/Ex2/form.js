function validateForm() {
    var x = document.forms["saisir"]["nom"].value;
	var y = document.forms["saisir"]["ecole"].value;
    if (x == "" || y == "") {
        alert("Saisie incomplète !");
        return false;
    }
	document.getElementById("content").innerHTML ="Bonjour " + x + " !<br>Bienvenue à l'école " + y + "<br><img src=../IMAGES/Artie.gif></img>";
} 