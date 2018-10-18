<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
 
<xsl:template match="/">
<HTML>
<BODY bgcolor ="#FFFFCC">
	<H1> Citations </H1>
	<ul>
        <xsl:for-each select="//perso/citations">
            <xsl:apply-templates select="citation" />
        </xsl:for-each>
    </ul>
    <h1>Biographie</h1>
    <xsl:apply-templates select="//biographie" />
    <h1>Films</h1>
    <xsl:apply-templates select="filmographie" />
    <h1>Films sorties après 1982</h1>
    <xsl:apply-templates select="//roles"/>
    <h1>Films sans pays</h1>
    <xsl:apply-templates select="//aliases"/>
    <h1>Documentaires realisateurs</h1>
    <xsl:apply-templates select="//resumes"/>
    
    
</BODY>
</HTML>
</xsl:template>
	
<xsl:template match="citation">
	<li>
	<xsl:value-of select="."/>
	</li>
</xsl:template>

<xsl:template match="biographie">
    <xsl:value-of select="." />
</xsl:template>
    
<xsl:template match="filmographie">
    <xsl:variable name="filmref">
        <xsl:value-of select="//role[@personnage='Irene Wagner']/@filmref" />
    </xsl:variable>
    <xsl:text>Film: </xsl:text>
    <xsl:value-of select="//role[@personnage='Irene Wagner']"/>
    <xsl:text> --- Realisateur: </xsl:text>
    <xsl:value-of select="//resume[@filmref=$filmref]/@realisateur"/>
    <ul>
        <for-each select="//aliases/alias">
        <xsl:apply-templates select="//aliases/alias[@filmref=$filmref]"/>
        </for-each>
    </ul>
</xsl:template>
    
<xsl:template match="roles">
    <ul>
    <xsl:for-each select="role[@date>1982]">
        <li>
            <xsl:variable name="filmref"><xsl:value-of select="./@filmref" /></xsl:variable>
            <strong><xsl:value-of select="."/></strong>
            <xsl:text> -- </xsl:text>
            <xsl:value-of select="@personnage"/>
            <ul>
                <xsl:for-each select="//aliases/alias[@filmref=$filmref]">
                <xsl:apply-templates select="//aliases/alias[@filmref=$filmref]"/>
                </xsl:for-each>
            </ul>
        </li>
    </xsl:for-each>
    </ul>
</xsl:template>
    
<xsl:template match="alias">
     <li>
         <strong><xsl:value-of select="."/></strong>
         <xsl:if test="@pays">
             <xsl:text>: </xsl:text>
             <xsl:value-of select="@pays"/>
         </xsl:if>
    </li>
</xsl:template>
    
<xsl:template match="aliases">
    <ul>
        <xsl:for-each select=".">
        <xsl:apply-templates select="//alias[not(@pays)]"/>
        </xsl:for-each>
    </ul>
</xsl:template>
    
<xsl:template match="resumes">
    <ul>
        <xsl:for-each select=".">
        <xsl:apply-templates select="//resume[@realisateur!='?']"/>
        </xsl:for-each>
    </ul>
</xsl:template>
    
<xsl:template match="resume">
    <xsl:if test=".=''">
    <li>
        <xsl:value-of select="@realisateur"/>
    </li>
    </xsl:if>
</xsl:template>
    
</xsl:stylesheet>