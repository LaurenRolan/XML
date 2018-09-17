function fillSquare() {
	var i;
	var j;
	var tbody = document.createElement("tbody");
	var table = document.getElementById("square");

	for ( i = 0; i <= 10; i++ ) {
		j = i * i;
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var td = document.createElement("td");
		var num = document.createTextNode(i);
		var sqr = document.createTextNode(j);
		
		td.appendChild(sqr);
		th.appendChild(num);
		tr.appendChild(th);
		tr.appendChild(td);
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

function fillMult() {
	var i;
	var j;
	var tbody = document.createElement("tbody");
	var table = document.getElementById("mult");

	for ( i = -1; i <= 10; i++ ) { //Rows
		var tr = document.createElement("tr");
		for ( j = -1; j <= 10; j++ ) { //Collumns
			var iText = document.createTextNode(i);
			var jText = document.createTextNode(j);
			var multText = document.createTextNode(j * i);
			if(i == -1)
			{
				var th = document.createElement("th");
				if(j > -1)
				{
					th.appendChild(jText);
				}
				tr.appendChild(th);
			}
			else
			{
				if(j == -1)
				{
					var th = document.createElement("th");
					th.appendChild(iText);
					tr.appendChild(th);
				}
				else
				{
					var td = document.createElement("td");
					td.appendChild(multText);
					tr.appendChild(td);
				}
			}
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

window.onload = function() {
	fillSquare();
	fillMult();
}