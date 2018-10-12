var time = "toute";
var dir = "/home/public/2A_INFO/TECHNO_XML/TP3/"

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    readXML(this);
    }
  };
  xhttp.open("GET", "discographie.xml", true);
  xhttp.send();
}

function readXML(xml) {
  var i, j;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>GROUPE</th><th>MUSICIENS<br>Nom, Instrument, Biographie</th><th colspan='20'>DISQUES<br>Album, Titre, Annee</th></tr>";
  var groupes = xmlDoc.getElementsByTagName("groupe");
 	  
  for (i = 0; i <groupes.length; i++) {
	//General group info
    table += "<tr><td>" + "<img src='img_disco/"+
    groupes[i].getAttribute("img") + "'><br/> <a href=" +
    groupes[i].getAttribute("url") + ">" + groupes[i].childNodes[0].data + 
	"</a></td>";
	var musiciens = groupes[i].childNodes[1].childNodes;
	table += "<td><ul>";
	
	//Musicians info
	for(j = 0; j < musiciens.length; j++)
	{
		table += "<li>" +
		musiciens[j].childNodes[0].data + ", " + musiciens[j].childNodes[1].childNodes[0].data +
		", ";
		var mort = musiciens[j].childNodes[2].getAttribute('mort');
		var nasc = musiciens[j].childNodes[2].getAttribute('naissance');
		if(mort === "-")
			table += nasc + "</li>";
		else
			table += nasc + " - " + mort + "</li>";
	}
	table += "</ul></td>";
	console.log(groupes[i].childNodes);
	var disques =  groupes[i].childNodes[2].childNodes;
	for(j = 0; j < disques.length; j++)
	{
		if(time === "1970" && parseInt(disques[j].getAttribute('annee')) < 1970 ||
		   time === "1980" && parseInt(disques[j].getAttribute('annee')) < 1980 ||
		   time === "toute" )
		{
		table += "<td><img src='img_disco/" +
			disques[j].getAttribute('img') + "'><br/>" + 
			disques[j].childNodes[0].data + ", " +
			disques[j].getAttribute('annee')+ "</td>";
		}
	}
	  table += "</tr>";
  }
	  
  document.getElementById("tableau").innerHTML = table;
}

function backInTime(index)
{
	time = index;
	loadDoc();
}