const toto = "t*to"

 for (let elt of toto){
    console.log(elt)
    if (elt === "%" || elt === "$" || elt === "*"){
        console.log("caractère spécial")
    } else {
        console.log("pas de caractère spécial")
    }
} 


