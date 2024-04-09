//5 objets élève

const eleveUn = {
    notes : [2,5,8],
    age : 12,
    nom: "Dubois",
    prenom : "Léa"
}

const eleveDeux = {
    notes : [18,9,15],
    age: 14,
    nom: "Martinez",
    prenom: "Emma"
}

const eleveTrois = {
    notes : [7, 19, 20],
    age: 13,
    nom: "Nguyen",
    prenom: "Alice"
}

const eleveQuatre = {
    notes: [8,14,5],
    age: 12,
    nom: "Moreau",
    prenom: "Lucas"
}

const eleveCinq = {
    notes: [17, 20, 2],
    age:14,
    nom:"Bernard",
    prenom:"Gabriel"
}


//Tableau d'objets classe de 5 élèves

const classe = [
   eleveUn, eleveDeux, eleveTrois, eleveQuatre, eleveCinq
]


for (let eleve of classe){
 for (let elt in eleve){
    console.log(eleve.nom, eleve.prenom, eleve.age)
 }
}