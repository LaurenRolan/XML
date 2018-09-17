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
		
		td.appendChild(toString(j));
		th.appendChild(toString(i));
		tr.appendChild(th);
		tr.appendChild(td);
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
}

function fillMult() {

}

window.onload = function() {
	fillSquare();
	fillMult();
}