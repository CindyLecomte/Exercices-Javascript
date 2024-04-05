function trueOrFalse (tableau, elmt) {
    const isInTable = false

    for (let elmnt of tableau) {
        if (elmnt === tableau){
            isInTable = true
        } else {

        }
    if (isInTable === true){
        console.log("vrai")
    } else {
        console.log("faux")
    }

    }

    return (
        isInTable
    )
}


const TabA = [1,2,3,4]
const a = 5

const estCeBon = trueOrFalse(TabA, a)