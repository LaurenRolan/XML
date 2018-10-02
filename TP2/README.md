## Part 1 -- Écriture de la DTD

* Création de la DTD avec les types livre et article
* Validation de la ligne "xmllint --noout --valid biblio.xml"

----

## Part 2 -- Perfectionnement de la DTD

* Attribut soustitre ajouté
* Élément tome est devenu vide
* nomJournal est devenu un attribut

----

## Part 3 -- Écriture et perfectionnement du schéma

* Écriture d'un Schema que marche avec le .xml précédent
* Attributs nombrePages et numeroJournal sont entiers positifs
* L'élément qnneePublicqtion est un année

----

## Part 4 -- Déclarations des types

* Type simple typeISBN : string qvec 10 chiffres
* typePage réstringé à "%d à %d"
 