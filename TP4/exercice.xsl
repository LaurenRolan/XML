<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
 
<xsl:template match="/">
<HTML>
<BODY bgcolor ="#FFFFCC">
	<H1> Citations </H1>
	<ul> <xsl:apply-templates /> </ul>
</BODY>
</HTML>
</xsl:template>
	
<xsl:template match="citation">
	<li>
	<xsl:value-of select="."/>
	</li>
</xsl:template>
</xsl:stylesheet>