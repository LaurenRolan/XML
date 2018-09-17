var resultat;

function init() {
	resultat = Array(0,0,0,0,0,0);
	var nombre = prompt("Nombre de lancés", "10");
	
	if(isNaN(nombre))
		alert("Erreur: ce n'est pas un nombre");
	else
	{
		document.getElementById("number").innerHTML = nombre;
		lancer(nombre);
		afficher(nombre);
	}
}

function de() {
	return Math.floor(Math.random() * 6) + 1;
}

function lancer(nbfois) {
	var tbody = document.createElement("tbody");
	var table = document.getElementById("dice");
	var lines = nbfois / 10;
	var extra = nbfois % 10;
	var i;
	var j;
	
	for ( i = 0; i < lines; i++ )
	{
		var tr = document.createElement("tr");
		for( j = 0; j < 10; j++ )
		{
			if(nbfois > 0)
			{
				var res = de();
				var resTxt = document.createTextNode(res);
				if(res == 1)
					resultat[0] += 1;
				if(res == 2)
					resultat[1] += 1;
				if(res == 3)
					resultat[2] += 1;
				if(res == 4)
					resultat[3] += 1;
				if(res == 5)
					resultat[4] += 1;
				if(res == 6)
					resultat[5] += 1;
				nbfois--;
				var td = document.createElement("td");
				td.appendChild(resTxt);
				tr.appendChild(td);
			}
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

function afficher(nbfois) {
	var divStats = document.getElementById("stats");
	var number;
	for(number = 0; number < 6; number++)
	{
		var par = document.createElement("p");
		var node = document.createTextNode("Nombre de " + (number + 1) + " : " + resultat[number] + " soit " + (resultat[number] * 100 / nbfois) + "%");
		par.appendChild(node);
		divStats.appendChild(par);
	}
}

window.onload = function() {
	init();
}