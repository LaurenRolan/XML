function loadXMLDoc(filename)
{
    if (window.ActiveXObject)
      {
      xhttp = new ActiveXObject("Msxml2.XMLHTTP");
      }
    else
      {
      xhttp = new XMLHttpRequest();
      }
    xhttp.open("GET", filename, false);
    try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
    xhttp.send("");
    return xhttp.responseXML;
}

function displayResult()
{
    xml = loadXMLDoc("bergman2.xml");
    xsl = loadXMLDoc("bergman2.xsl");
    if (document.implementation && document.implementation.createDocument)
      {
      xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xsl);
      resultDocument = xsltProcessor.transformToFragment(xml, document);
      document.getElementById("table").appendChild(resultDocument);
      }
}