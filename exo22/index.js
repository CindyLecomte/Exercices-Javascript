//Modéliser des objets du quotidien et lier une propriéte d'un objet

const voiture = {
    couleur : "bleue",
    marque: "peugeot",
    prix: 200000,
    kilometres:  150000
};



const maison = {
    couleur : "blanche",
    ville : "Saint-Etienne",
    prix : 540000,
    surface : 200,
    pieces : 7
};

const consoleJeu = {
    marque : 'playstation',
    prix: '200',
    neuf : false
};

const livre = {
    titre: 'Harry Potter',
    date: '2008',
    neuf: true,
    pages: 540,
    auteur: 'J.K Rowlings'
};


console.log(voiture.couleur, voiture.marque, voiture.prix, voiture.kilometres)
console.log(maison.couleur, maison.ville, maison.prix, maison.surface, maison.pieces)
console.log(consoleJeu.marque, consoleJeu.prix, consoleJeu.neuf)
console.log(livre.titre, livre.date, livre.neuf, livre.pages, livre.auteur)