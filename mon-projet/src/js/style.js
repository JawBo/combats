// var longueur_nom_guerrier = guerrier.nom.length;
// var longueur_nom_mage = mage.nom.length;
// var longueur_nom_paysan = paysan.nom.length;

// var lettre_guerrier = guerrier.nom.charAt(0);
// var lettre_mage = mage.nom.charAt(0);
// var lettre_paysan = paysan.nom.charAt(0);

// var etat_guerrier = guerrier.nom.concat(guerrier.arme);
// var etat_mage = mage.nom.concat(mage.arme);
// var etat_paysan = mage.nom.concat(mage.arme);

// var entre_guerrier = guerrier.nom.substring(1, 4);
// var entre_mage = mage.nom.substring(1, 4);
// var entre_paysan = paysan.nom.substring(1, 4);


var guerrier = {
    nom: "Kratos",
    age: 127,
    taille: 1.88,
    arme: "lames enchainées",
    attaque: 35,
    vie: 300,

    profil(){        
        newNom = prompt("Quelle sera votre nom ?") 
        alert(".+")   
        newAge = prompt("Quelle est votre âge ?")
        newAttack = prompt("Quel sera votre niveau d'attaque ?")     
    },  

    parler_mage() {
        console.log("Bonjour " + mage.nom + "... En Garde !");
        alert(guerrier.nom + " lève son arme")
    },
    attack_m() {
        var resultat_vie = mage.vie - this.attaque;
        console.log("Vie restante : " + resultat_vie);
    },
    attack_p() {
        var resultat_vie = paysan.vie - this.attaque;
        console.log("Vie restante : " + resultat_vie);
    }

};
var mage = {
    nom: "Geralt",
    age: 110,
    taille: 1.80,
    arme: "Épée D'argent",
    attaque: 28,
    vie: 250,
    
    profil(){
        
        newNom = prompt("Quelle sera votre nom ?")    
        newAge = prompt("Quelle est votre âge ?")
        newAttack = prompt("Quel sera votre niveau d'attaque ?")

    },
    attack_g() {
        var resultat_vie = guerrier.vie - this.attaque;
        console.log("Vie restante : " + resultat_vie);
    },
    attack_p() {
        var resultat_vie = paysan.vie - this.attaque;
        console.log("Vie restante : " + resultat_vie);
    }
};

var paysan = {
    nom: "Arthur",
    age: 30,
    taille: 1.70,
    arme: "Faucille",
    attaque: 10,
    vie: 40,

    profil(){
        
        newNom= prompt("Quelle sera votre nom ?")    
        newAge = prompt("Quelle est votre âge ?")
        newAttack = prompt("Quel sera votre niveau d'attaque ?")     
    },
    attack_g() {
        var resultat_vie = guerrier.vie - this.attaque;
        console.log("Vie restante : " + resultat_vie);
    },
    attack_m() {
        var resultat_vie = mage.vie - this.attaque;
        console.log("Vie restante : " + resultat_vie);
    }
};

var reset = prompt("Voulez-vous continuer ? Oui/Non")
    switch (reset) {
        case "Non":
        case "non":
        close()
            
            
            break;
    
        default:"Oui";
                "oui";
                alert("cool !!!");
            break;
    }


    