<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
    
<xsl:template match="/">
    <xsl:apply-templates select="filmographie/film"/>
</xsl:template>
    
<xsl:template match="film">
    <tr>
        <td> <xsl:apply-template select="/[@img]"/> </td>
        <td> 
            <strong><xsl:value-of select="/titre"/></strong>
            <xsl:text> ( </xsl:text>
            <xsl:value-of select="/@date"/>
            <xsl:text> ) </xsl:text>
            <br/>
            <xsl:text>Realisé par: </xsl:text>
            <xsl:value-of select="/@realisateur"/>
        </td>
    </tr>
</xsl:template>
    
<xsl:template match="[@img]">
    <img src="../img/{.}"/>
</xsl:template>
</xsl:stylesheet>