const eleveUn = {
    notes: [4, 18, 17],
    age: 12,
    nom:"Martin",
    prenom: "Léa"
}

const eleveDeux = {
    notes: [9, 14, 5],
    age: 13,
    nom:"Rousseau",
    prenom: "Clara"
}

const eleveTrois = {
    notes: [7, 16, 20],
    age: 12,
    nom:"Durant",
    prenom: "Nathan"
}

const eleveQuatre = {
    notes: [18, 20, 18],
    age: 11,
    nom:"Girard",
    prenom: "Thomas"
}


const eleveCinq = {
    notes: [17, 2, 8],
    age: 14,
    nom:"Leroy",
    prenom: "Ethan"
}

const classe = [
    eleveUn, eleveDeux, eleveTrois, eleveQuatre, eleveCinq
]

for (let eleve of classe){
    console.log(eleve.nom, eleve.prenom, eleve.age)
}