var time = "toute";
var dir = "/home/public/2A_INFO/TECHNO_XML/TP3/"

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
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

  	var nodes = xml.evaluate("//resumes/resume[@]", xml, null, XPathResult.ANY_TYPE, null);
	var result = nodes.iterateNext();
	while (result) {
	    txt += result.childNodes[0].nodeValue + "<br>";
	    result = nodes.iterateNext();
	} 
 
  document.getElementById("tableau").innerHTML = table;
}

function backInTime(index)
{
	time = index;
	loadDoc();
}