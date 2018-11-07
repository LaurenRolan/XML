var realisateur = "tous";

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
    readXML(this);
       }
    };
  xhttp.open("GET", "bergman.xml", true);
  xhttp.send();
}

function readXML(xml) {
  	var i, j;
 	var xmlDoc = xml.responseXML;
  	var table="<tr><th>Titre</th><th>Date sortie</th></tr>";
	if(realisateur === "tous")
		path = "//resumes/resume[@realisateur='Alfred Hitchcock' or @realisateur='Roberto Rossellini' or @realisateur='Gustav Molander']/@filmref";
	else
		path = "//resumes/resume[@realisateur='" + realisateur + "']/@filmref";
  	var nodes = xmlDoc.evaluate(path, xmlDoc, null, XPathResult.ANY_TYPE, null);
	var result = nodes.iterateNext();
	while (result) {
	    filmref = result.value;
        path2 = "//role[@filmref = '" + filmref + "']";
        filmNodes = xmlDoc.evaluate(path2, xmlDoc, null, XPathResult.ANY_TYPE, null);
        film = filmNodes.iterateNext();
        console.log(film.textContent);
	    table += "<tr><td>" + film.textContent + "</td><td>" + film.getAttribute("date") + "</td></tr>";
	    result = nodes.iterateNext();
	} 
 
  document.getElementById("tableau").innerHTML = table;
}

function changeDirector(director)
{
	realisateur = director;
	loadDoc();
}
