const tableauA = [
    1,2,3
]

const tableauB = [
    4,5,6
]


function concat(tableauUn, tableauDeux){
    const tableauTrois = []
    for (let elt of tableauUn){
        tableauTrois.push(elt)
    }
    for(let elmt of tableauDeux){
        tableauTrois.push(elmt)
    }
    return tableauTrois
}

const tableauC = concat(tableauA, tableauB)
console.log(tableauC)