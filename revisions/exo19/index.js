let isInTable = false

function trueOrFalse(elt, filtre){
        if (elt === filtre){
            isInTable = true
        } else {

        }
        return isInTable
}

if(isInTable === true){

}

const tabA = [
    1,2,3,4
]

const a = 4


const estCeBon = trueOrFalse(tabA, a)

if (estCeBon === true){
    console.log("vrai")
} else {
    console.log("faux")
}