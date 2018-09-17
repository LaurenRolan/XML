function fillCards() {
	var i;
	var j;
	var rep;
	var tbody = document.createElement("tbody");
	var table = document.getElementById("cards");

	for ( i = 1; i <= 13; i++ ) { //Rows
		for ( rep = 0; rep < 2; rep++) {
			var tr = document.createElement("tr");
			for ( j = 1; j <= 4; j++ ) { //Collumns
				
				var fileName = (j*i) + ".png";
				var td = document.createElement("td");
				
				if(rep == 0) //images
				{
					var divImage = document.createElement("IMG");
					divImage.src = "../IMAGES/jeuxDeCartes/" + fileName;
					td.appendChild(divImage);
				}
				else //Names
				{
					var txt = document.createTextNode(fileName);
					td.appendChild(txt);
				}
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
	}
	table.appendChild(tbody);
}

window.onload = function() {
	fillCards();
}