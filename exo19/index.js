function trueOrFalse (tableau, elmt) {
    let isInTable = false

    for (let elmnt of tableau) {
        if (elmnt === tableau){
            isInTable = true
        } else {

        }

    }

    return (
        isInTable
    )
}


const TabA = [1,2,3,4, 5];
const a = 5

const estCeBon = trueOrFalse(TabA, a)
if (estCeBon === true){
    console.log("vrai")
} else {
    console.log("faux")
}