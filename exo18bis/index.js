function concat(tableauA, tableauB){
    const tableauC = []

    for (let elt of tableauA){
        tableauC.push(elt)
    }
    for (let elt of tableauB){
        tableauC.push(elt)
    }

    return (
        tableauC
    )
}

const tableauUn = [
    1,2,3,4
]

const tableauDeux = [
    5,6,7,8
]

const tableauTrois = concat(tableauUn, tableauDeux)
console.log(tableauTrois)