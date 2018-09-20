var total;

function init() {
	total = 0;
}

function choisir(produit) {
	total += prix(produit);
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

function payer() {
	if(total == 0)
		alert("Votre panier est vide !");
	else if ( confirm("Vous devez " + total + " euros ! Ce sera tout ?") )
		total = 0;
}

window.onload = function() {
	init();
}