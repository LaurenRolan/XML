var nombre;
var current;

function etat(n)
{
	current = n;
	var cur = document.getElementById("current");
	var total = document.getElementById("total");

	cur.value = current;
	total.value = nombre;

	//Affiche ou cache les buttons; affiche le n° courrant
	var prec = document.getElementById("prec");
	var suiv = document.getElementById("suiv");

	if (current == 1)
		prec.disabled = true;
	else
		prec.disabled = false;

	if (current == nombre)
		suiv.disabled = true;
	else
		suiv.disabled = false;


}

function premier()
{
	etat(1);
	var divImage = document.getElementById("card")
	divImage.src = "../IMAGES/jeuxDeCartes/1.png";
}

function dernier()
{
	etat(52);
	
	var divImage = document.getElementById("card");
	divImage.src = "../IMAGES/jeuxDeCartes/52.png";
}

function suivant()
{
	etat(current + 1);

	var divImage = document.getElementById("card")
	divImage.src = "../IMAGES/jeuxDeCartes/" + (current) + ".png";
}

function precedent()
{
	etat(current - 1);

	var divImage = document.getElementById("card")
	divImage.src = "../IMAGES/jeuxDeCartes/" + (current) + ".png";
}


function init()
{
	nombre = 52;
	current = 1;

	etat(1);
	
} 