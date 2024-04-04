const tableau = [
    1,12,25,30
]


const result = tableau.filter((elt) =>elt<10);

console.log(result)

if(result.length > 0){
    console.log("Il y a une erreur")
}

