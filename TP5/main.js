var time = "toute";

function loadDoc() {
	$.ajax({url: "discographie.txt", success: function(result){
		var myObj = JSON.parse(result);
    	readJSON(myObj);
    }});
}

function readJSON(myObj) {
  var table="<tr><th>GROUPE</th><th>MUSICIENS<br>Nom, Instrument, Biographie</th><th colspan='20'>DISQUES<br>Album, Titre, Annee</th></tr>";
  var index, mus;
  var groupes = myObj.groupes;
  for(index = 0; index < groupes.groupe.length; index++)
  {
  	table += "<tr> <td> <img src='img_disco/"+ groupes.groupe[index]._img + 
  	"' /> <br/>" + "<a href="+ groupes.groupe[index]._url + ">" + groupes.groupe[index].__text +
  	"</a> </td>";
  	table += "<td> <ul>";

  	musiciens = groupes.groupe[index].musiciens;
  	for(mus = 0; mus < musiciens.musicien.length; mus++)
  	{
  		musicien = musiciens.musicien[mus];
  		table += "<li>" + musicien.__text + ", " + 
  		musicien.instruments + ", " + musicien.bio._naissance;
  		if(musicien.bio._mort != "-")
  			table += " - " + musicien.bio._mort;
  		table += "</li>";
  	} 
  	table += "</ul> </td>";

  	disques = groupes.groupe[index].disques;
  	for(dis = 0; dis < disques.disque.length; dis++)
  	{
  		disque = disques.disque[dis];
  		if(time === "1970" && parseInt(disque._annee) < 1970 ||
		   time === "1980" && parseInt(disque._annee) < 1980 ||
		   time === "toute" )
	  		table += "<td> <img src='img_disco/" + disque._img + "'/> <br/>" + disque.__text + 
  		", " + disque._anne + "</td>";
  	} 

  	table += "</tr>";
  } 	  
  
	  
  $("#tableau").html(table);
}

function backInTime(index)
{
	time = index;
	loadDoc();
}

$(document).ready(function(){
	loadDoc();
	
	$("select").on('change', function(){
	    backInTime(this.value);
	});
});
