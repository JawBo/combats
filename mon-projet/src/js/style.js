var guerrier ={
    nom : "Kratos",
    age : 127, 
    taille : 1.88,
    arme : "lames enchainées",
    attaque : 20,
    vie : 50
}
var mage ={
    nom: "Geralt",
    age : 110,
    taille : 1.80,
    arme : "Épée D'argent",
    attaque : 15,
    vie : 30
}
var paysan ={
    nom : "Arthur",
    age : 30 ,
    taille : 1.70,
    arme : "Faucille",
    attaque : 7,
    vie : 5
}

var longueur_nom_guerrier = guerrier.nom.length;
var longueur_nom_mage = mage.nom.length;
var longueur_nom_paysan = paysan.nom.length;

var lettre_guerrier = guerrier.nom.charAt(0);
var lettre_mage = mage.nom.charAt(0);
var lettre_paysan = paysan.nom.charAt(0);

var etat_guerrier = guerrier.nom.concat(guerrier.arme);
var etat_mage = mage.nom.concat(mage.arme);
var etat_paysan = mage.nom.concat(mage.arme);

var entre_guerrier = guerrier.nom.substring(1, 4);
var entre_mage = mage.nom.substring(1, 4);
var entre_paysan = paysan.nom.substring(1, 4);


