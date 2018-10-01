function formtest(questionaire)
{
	var civilite = document.getElementsByName("civilite");
	var lenCivi = civilite.length;
	var oneCheck = false;
	for ( var i = 0; i < lenCivi; i++ )
		if( civilite[i].checked )
			oneCheck = true;
	if(!oneCheck)
	{
		alert("You must fill civilité");
		return false;
	}
	
	var fields = ["nom", "adresse", "code", "age", "ville", "email", "message"];
	var i, l = fields.length;
	var fieldname;
	for (i = 0; i < l; i++) {
		fieldname = fields[i];
		if (document.questionaire[fieldname].value === "") {
		  alert(fieldname + " can not be empty");
		  document.questionaire[fieldname].focus();
		  return false;
		}
	}
	
	var code = document.getElementById("code");
	if(code.lenght < 5 )
	{
		code.focus();
		alert("Code must be filled with 5 numbers");
		return false;
	}
	
	var age = parseInt(document.getElementById("age"));
	if(parseInt(age.value) < 5 || parseInt(age.value) > 77)
	{
		document.getElementById("age").focus();
		alert("Age must be between 6 and 77");
		return false;
	}
	
	var e = document.getElementById("pays");
	var strUser = e.options[e.selectedIndex].value;
	if (strUser === "")
	{
		e.focus();
		alert("Must choose a country");
		return false;
	}
	
	var inter = document.getElementsByName("inter");
	var lenInter = inter.length;
	var oneCheck = false;
	for ( var i = 0; i < lenCivi; i++ )
		if( inter[i].checked )
			oneCheck = true;
	if(!oneCheck)
	{
		alert("You must fill interest");
		return false;
	}		
}