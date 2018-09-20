var panier;
var total;

function init() {
	total = 0;
	panier = {};
}

function choisir(produit) {
	var combien = parseInt(prompt("Quantité (en Kg) ?"));
	if(produit in panier)
		panier[produit] += combien;
	else
		panier[produit] = combien;
	total += combien * prix(produit);
}

function prix (produit) {
	switch (produit)
	{
		case 'asperges':
			return 10;
		case 'carottes':
			return 5;
		case 'oignons':
			return 3;
		case 'cerises':
			return 20;
		default:
			return 0;
	}
}

function voir_panier() {
	var actuel;
	var texte = "Votre panier:\n";
	for ( var key in panier ) 
	{
		actuel = panier[key] * prix(key);
		texte += key + "(" + panier[key] + " Kg) : " + actuel + " euros.\n";
	}
	texte += "Total = " + total + " euros.";
	alert(texte);
}

function payer() {
	if( produits.length == 0 )
		alert("Votre panier est vide !");
	else if ( confirm("Vous devez " + total + " euros ! Ce sera tout ?") )
	{
		panier = {};
		total = 0;
	}
}

window.onload = function() {
	init();
}