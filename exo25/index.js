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
    age: 18,
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


//J'ai créé un nouveau tableau qui reprend l'âge de chaque éléve et j'ai utilisé la fonction Math.max pour récupérer le plus âgé

const age = [
    eleveUn.age, eleveDeux.age, eleveTrois.age, eleveQuatre.age, eleveCinq.age
]

console.log(age)

console.log(Math.max(...age))

