const toto = "to%o"

let isSpecial = false

for (let lettre of toto){
    if(lettre === "%" || lettre === "$" || lettre === "*"){
        isSpecial = true
    }
}

if (isSpecial === true){
    console.log("Il y a un caractère spécial")
} else {
    console.log("il n'y a pas de caractère spécial")
}

