function concat(objUn, objDeux, objTrois, objQuatre, objCinq){
    const tableau = []

    let index = 0

    for(let property in objUn){
        index++
        tableau.push(`${property} : ${objUn[property]}`)
    }

    for(let property in objDeux){
        index++
        tableau.push(`${property} : ${objDeux[property]}`)
    }
    
    for(let property in objTrois){
        index++
        tableau.push(`${property} : ${objTrois[property]}`)
    }

    for(let property in objQuatre){
        index++
        tableau.push(`${property} : ${objQuatre[property]}`)
    }

    for(let property in objCinq){
        index++
        tableau.push(`${property} : ${objCinq[property]}`)
    }

    return tableau
}


const eleveUn = {
    notes : [15,6,19],
    age: 12,
    nom: "Dupont",
    prenom: "Mélanie"
};


const eleveDeux = {
    notes: [12, 5, 7],
    age: 13,
    nom:"Dufour",
    prenom: "Antoine"
};

const eleveTrois = {
    notes : [7, 20, 4],
    age: 12,
    nom:"Bourges",
    prenom: "Augustine"
};

const eleveQuatre = {
    notes : [9, 18, 15],
    age: 13,
    nom:"Fauster",
    prenom:"Julie"
};

const eleveCinq = {
    notes : [14, 18, 20],
    age: 14,
    nom: "Langevin",
    prenom:"Kevin"
};


const tableauVide = concat(eleveUn, eleveDeux, eleveTrois, eleveQuatre, eleveCinq)
console.log(tableauVide)







